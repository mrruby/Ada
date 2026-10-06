/**
 * Cookie consent + analytics (src/lib/consent.ts, src/lib/analytics.ts,
 * components/site/CookieConsent.astro): nothing loads before the visitor
 * answers, statistics consent switches PostHog between full and cookieless
 * tracking, the Meta Pixel needs marketing, withdrawal reloads, and media
 * embeds ask before loading the player.
 */
import type { BrowserContext, Page } from "@playwright/test"
import {
  builtWithPostHog,
  CONSENT_DECLINED,
  expect,
  POSTHOG_TEST_KEY,
  type PostHogEvent,
  test,
  type ThirdPartyRequest,
} from "./fixtures"

const loaded = (requests: ThirdPartyRequest[], pattern: RegExp) =>
  requests.some((request) => pattern.test(request.url))

const PIXEL = /connect\.facebook\.net\/.*fbevents\.js/
const VIMEO = /player\.vimeo\.com/
const GOOGLE_OR_HOTJAR = /googletagmanager|google-analytics|hotjar/
const TRACKERS = /googletagmanager|facebook|hotjar|vimeo|youtube/

const GRANTED = {
  "ada-consent-statistics": "true",
  "ada-consent-marketing": "true",
  "ada-consent-media": "true",
}

const events = (posthog: PostHogEvent[], name: string) =>
  posthog.filter((event) => event.event === name)

/** PostHog's cookies and storage keys (`__ph_opt_in_out_*` records the choice). */
const posthogStorage = async (page: Page, context: BrowserContext) => ({
  cookies: (await context.cookies()).filter((c) => c.name.includes("ph_")).map((c) => c.name),
  ...(await page.evaluate(() => ({
    localStorage: Object.keys(window.localStorage).filter((key) => key.includes("ph_")),
    sessionStorage: Object.keys(window.sessionStorage).filter((key) => key.includes("ph_")),
  }))),
})

const ONLY_THE_CHOICE = {
  cookies: [],
  localStorage: [`__ph_opt_in_out_${POSTHOG_TEST_KEY}`],
  sessionStorage: [],
}

const withdrawStatistics = async (page: Page) => {
  await page.locator("[data-consent-reopen]").click()
  await page.locator('[data-consent-toggle][name="statistics"]').uncheck({ force: true })
  const reloaded = page.waitForEvent("load")
  await page.locator('[data-consent-dialog] button[value="selected"]').click()
  await reloaded
}

const enableGlobalPrivacyControl = (page: Page) =>
  page.addInitScript(() =>
    Object.defineProperty(Navigator.prototype, "globalPrivacyControl", { get: () => true })
  )

const relayRequests = (page: Page) => {
  const urls: string[] = []
  page.on("request", (request) => {
    if (new URL(request.url()).pathname.startsWith("/relay/")) urls.push(request.url())
  })
  return urls
}

test.describe("first visit", () => {
  test.use({ consent: null })

  test("shows the banner and loads nothing: no trackers, no PostHog", async ({
    page,
    thirdParty,
  }) => {
    const relay = relayRequests(page)
    await page.goto("/about/")
    await expect(page.locator("[data-consent-banner]")).toBeVisible()
    await page.waitForLoadState("networkidle")
    expect(thirdParty.filter((request) => TRACKERS.test(request.url))).toEqual([])
    expect(relay).toEqual([])
  })

  test("'Nie zezwalaj' stores three denials and keeps the Pixel off", async ({
    page,
    context,
    thirdParty,
  }) => {
    await page.goto("/about/")
    await page.locator('[data-consent-banner] [data-consent="none"]').click()
    await expect(page.locator("[data-consent-banner]")).toBeHidden()
    await expect(page.locator("[data-consent-reopen]")).toBeVisible()
    const cookies = Object.fromEntries((await context.cookies()).map((c) => [c.name, c.value]))
    expect(cookies).toMatchObject(CONSENT_DECLINED)
    expect(loaded(thirdParty, TRACKERS)).toBe(false)
  })

  test("'Zaakceptuj wszystko' loads the Pixel and nothing from Google or Hotjar", async ({
    page,
    thirdParty,
  }) => {
    await page.goto("/adsy-chill/")
    await page.locator('[data-consent-banner] [data-consent="all"]').click()
    await expect.poll(() => loaded(thirdParty, PIXEL)).toBe(true)
    await page.waitForLoadState("networkidle")
    expect(thirdParty.filter((request) => GOOGLE_OR_HOTJAR.test(request.url))).toEqual([])
  })
})

test.describe("PostHog", () => {
  // Locally the suite may run against a build without the key; CI must not skip.
  test.skip(
    !process.env.CI && !builtWithPostHog(),
    "build with PUBLIC_POSTHOG_KEY=phc_e2e (yarn test:e2e)"
  )

  test.describe("before a decision", () => {
    test.use({ consent: null })

    test("accepting statistics sends one page view with cookies", async ({
      page,
      context,
      posthog,
    }) => {
      await page.goto("/about/")
      await page.locator('[data-consent-banner] [data-consent="all"]').click()
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      expect(events(posthog, "$pageview")[0].properties.$pathname).toBe("/about/")
      await expect
        .poll(async () => (await posthogStorage(page, context)).cookies.length)
        .toBeGreaterThan(0)
    })

    test("rejecting sends one cookieless page view and stores nothing", async ({
      page,
      context,
      posthog,
    }) => {
      await page.goto("/about/")
      await page.locator('[data-consent-banner] [data-consent="none"]').click()
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      expect(events(posthog, "$pageview")[0].properties.distinct_id).toBe("$posthog_cookieless")
      expect(await posthogStorage(page, context)).toEqual(ONLY_THE_CHOICE)
    })
  })

  test.describe("returning visitor who rejected", () => {
    test("is counted cookieless, without click autocapture", async ({ page, context, posthog }) => {
      await page.goto("/magic/")
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      expect(events(posthog, "$pageview")[0].properties.distinct_id).toBe("$posthog_cookieless")
      await page.locator("main button, main a[href^='#']").first().click()
      await page.waitForTimeout(500)
      expect(events(posthog, "$autocapture")).toEqual([])
      expect(await posthogStorage(page, context)).toEqual(ONLY_THE_CHOICE)
    })

    test("with Global Privacy Control, PostHog doesn't start at all", async ({ page }) => {
      await enableGlobalPrivacyControl(page)
      const relay = relayRequests(page)
      await page.goto("/magic/")
      await page.waitForLoadState("networkidle")
      expect(relay).toEqual([])
    })
  })

  test.describe("returning visitor who rejected, then accepts statistics", () => {
    test("switches the running page to full tracking", async ({ page, context, posthog }) => {
      await page.goto("/magic/")
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      await page.locator("[data-consent-reopen]").click()
      await page.locator('[data-consent-toggle][name="statistics"]').check({ force: true })
      await page.locator('[data-consent-dialog] button[value="selected"]').click()
      await expect
        .poll(async () => (await posthogStorage(page, context)).cookies.length)
        .toBeGreaterThan(0)

      await page.locator("main button, main a[href^='#']").first().click()
      await expect
        .poll(
          () =>
            events(posthog, "$autocapture").filter(
              (event) => event.properties.distinct_id !== "$posthog_cookieless"
            ).length
        )
        .toBeGreaterThan(0)
    })
  })

  test.describe("returning visitor who accepted", () => {
    test.use({ consent: GRANTED })

    test("the OTO token leaves the URL before PostHog sees it", async ({ page, posthog }) => {
      const start = page.waitForRequest((request) => request.url().includes("/api/oto/start"))
      await page.goto("/wyzwanie/?oto=secret-token&utm_source=newsletter")
      expect((await start).url()).toContain("oto=secret-token")
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      expect(await page.evaluate(() => window.location.search)).toBe("?utm_source=newsletter")
      expect(JSON.stringify(events(posthog, "$pageview"))).not.toContain("secret-token")
    })

    test("withdrawing statistics removes PostHog's cookies and storage", async ({
      page,
      context,
      posthog,
    }) => {
      await page.goto("/about/")
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      await expect
        .poll(async () => (await posthogStorage(page, context)).cookies.length)
        .toBeGreaterThan(0)
      await withdrawStatistics(page)
      await expect.poll(() => posthogStorage(page, context)).toEqual(ONLY_THE_CHOICE)
    })

    test("…also when the browser sends Global Privacy Control", async ({
      page,
      context,
      posthog,
    }) => {
      await enableGlobalPrivacyControl(page)
      await page.goto("/about/")
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      await withdrawStatistics(page)
      await expect
        .poll(() => posthogStorage(page, context))
        .toEqual({ cookies: [], localStorage: [], sessionStorage: [] })
    })

    test("checkout links send checkout_started and a Meta InitiateCheckout", async ({
      page,
      posthog,
    }) => {
      await page.goto("/magic/")
      await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
      // Stay on the page so the Pixel queue can be inspected.
      await page.evaluate(() =>
        document.addEventListener("click", (event) => event.preventDefault())
      )
      const link = page.locator('a[href^="https://cart.easy.tools/checkout/"]').first()
      const product = new URL((await link.getAttribute("href"))!).pathname.split("/")[3]
      await link.click()

      await expect.poll(() => events(posthog, "checkout_started").length).toBe(1)
      // With consent, autocapture records the click too.
      await expect.poll(() => events(posthog, "$autocapture").length).toBeGreaterThan(0)
      expect(events(posthog, "checkout_started")[0].properties).toMatchObject({
        product,
        destination: "cart.easy.tools",
      })
      const pixelCalls = await page.evaluate(() =>
        (((window as Window & { fbq?: { queue?: unknown[][] } }).fbq?.queue ?? []) as unknown[][])
          .map((args) => Array.from(args))
          .filter((args) => args[0] === "track")
          .map((args) => args[1])
      )
      expect(pixelCalls).toEqual(["PageView", "InitiateCheckout"])
    })

    test("a successful MailerLite sign-up sends lead_form_submitted", async ({ page, posthog }) => {
      await page.goto("/jesien/")
      const form = page.locator("[data-mailerlite-fetch] form").first()
      await form.locator('input[name="fields[email]"]').fill("ada@example.com")
      const name = form.locator('input[name="fields[name]"]')
      if (await name.count()) await name.fill("Ada")
      for (const checkbox of await form.locator("input[type=checkbox]").all()) {
        await checkbox.check({ force: true })
      }
      await form.locator("button[type=submit]").click()
      await expect(page).toHaveURL(/\/thank\/$/)
      expect(events(posthog, "lead_form_submitted")).toHaveLength(1)
      expect(events(posthog, "lead_form_submitted")[0].properties.form_id).toMatch(/^\d+$/)
    })
  })
})

test.describe("settings", () => {
  test("opens with the stored choices; granting statistics alone keeps the Pixel off", async ({
    page,
    context,
    thirdParty,
  }) => {
    await page.goto("/about/")
    await page.locator("[data-consent-reopen]").click()
    const dialog = page.locator("[data-consent-dialog]")
    await expect(dialog).toBeVisible()
    const toggles = await dialog.locator("[data-consent-toggle]").all()
    expect(toggles).toHaveLength(3)
    for (const toggle of toggles) await expect(toggle).not.toBeChecked()

    await dialog.locator('[data-consent-toggle][name="statistics"]').check({ force: true })
    await dialog.locator('button[value="selected"]').click()
    await expect
      .poll(
        async () =>
          (await context.cookies()).find((c) => c.name === "ada-consent-statistics")?.value
      )
      .toBe("true")
    await page.waitForLoadState("networkidle")
    expect(loaded(thirdParty, PIXEL)).toBe(false)
  })

  test("the footer link opens the settings too", async ({ page }) => {
    await page.goto("/about/")
    await page.locator("footer [data-consent-open]").click()
    await expect(page.locator("[data-consent-dialog]")).toBeVisible()
  })
})

test.describe("withdrawal", () => {
  test.use({ consent: { ...CONSENT_DECLINED, "ada-consent-statistics": "true" } })

  test("turning a granted category off reloads the page", async ({ page }) => {
    await page.goto("/about/")
    await page.locator("[data-consent-reopen]").click()
    await page.locator('[data-consent-toggle][name="statistics"]').uncheck({ force: true })
    const reloaded = page.waitForEvent("load")
    await page.locator('[data-consent-dialog] button[value="selected"]').click()
    await reloaded
    await expect(page.locator("[data-consent-reopen]")).toBeVisible()
  })
})

test.describe("Gatsby-era visitor", () => {
  test.use({
    consent: {
      "gatsby-gdpr-google-analytics": "true",
      "gatsby-gdpr-google-tagmanager": "true",
      "gatsby-gdpr-facebook-pixel": "true",
    },
  })

  test("is asked again, and answering removes the old cookies", async ({
    page,
    context,
    thirdParty,
  }) => {
    await page.goto("/")
    await expect(page.locator("[data-consent-banner]")).toBeVisible()
    expect(loaded(thirdParty, PIXEL)).toBe(false)
    await page.locator('[data-consent-banner] [data-consent="all"]').click()
    const names = (await context.cookies()).map((cookie) => cookie.name)
    expect(names.filter((name) => name.startsWith("gatsby-gdpr-"))).toEqual([])
    expect(names).toEqual(expect.arrayContaining(Object.keys(GRANTED)))
  })
})

test.describe("media embeds", () => {
  test("ask before loading Vimeo; accepting stores consent and plays (dnt=1)", async ({
    page,
    context,
    thirdParty,
    posthog,
  }) => {
    await page.goto("/magic-special/")
    const embed = page.locator("[data-consent-embed]").first()
    await embed.locator("[data-embed-play]").click()
    await expect(embed.locator("[data-embed-prompt]")).toBeVisible()
    expect(loaded(thirdParty, VIMEO)).toBe(false)

    await embed.locator("[data-embed-accept]").click()
    await expect(embed.locator("iframe")).toHaveAttribute("src", /player\.vimeo\.com.*dnt=1/)
    const media = (await context.cookies()).find((c) => c.name === "ada-consent-media")
    expect(media?.value).toBe("true")
    if (builtWithPostHog()) {
      await expect.poll(() => events(posthog, "video_played").length).toBe(1)
      expect(events(posthog, "video_played")[0].properties.provider).toBe("vimeo")
    }
  })
})
