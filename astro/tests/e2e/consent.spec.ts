/**
 * Cookie consent (src/lib/consent.ts, components/site/CookieConsent.astro):
 * nothing optional loads before consent, choices persist in the legacy
 * cookies, Consent Mode v2 follows them, withdrawal reloads, and media embeds
 * ask before loading the player.
 */
import { CONSENT_DECLINED, expect, test, type ThirdPartyRequest } from "./fixtures"

const loaded = (requests: ThirdPartyRequest[], pattern: RegExp) =>
  requests.some((request) => pattern.test(request.url))

const GA = /googletagmanager\.com\/gtag\/js/
const GTM = /googletagmanager\.com\/gtm\.js/
const PIXEL = /connect\.facebook\.net\/.*fbevents\.js/
const HOTJAR = /static\.hotjar\.com\/c\/hotjar-5046108/
const VIMEO = /player\.vimeo\.com/
const TRACKERS = /googletagmanager|facebook|hotjar|vimeo|youtube/

test.describe("first visit", () => {
  test.use({ consent: null })

  test("shows the banner and loads no third party", async ({ page, thirdParty }) => {
    await page.goto("/about/")
    await expect(page.locator("[data-consent-banner]")).toBeVisible()
    await page.waitForLoadState("networkidle")
    expect(thirdParty.filter((request) => TRACKERS.test(request.url))).toEqual([])
  })

  test("'Nie zezwalaj' stores four denials and keeps trackers off", async ({
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

  test("'Zaakceptuj wszystko' loads GA, GTM and the Pixel", async ({ page, thirdParty }) => {
    await page.goto("/about/")
    await page.locator('[data-consent-banner] [data-consent="all"]').click()
    await expect.poll(() => loaded(thirdParty, GA) && loaded(thirdParty, GTM)).toBe(true)
    await expect.poll(() => loaded(thirdParty, PIXEL)).toBe(true)
  })
})

test.describe("settings", () => {
  test("opens with the stored choices; granting one category loads only its tracker", async ({
    page,
    thirdParty,
  }) => {
    await page.goto("/about/")
    await page.locator("[data-consent-reopen]").click()
    const dialog = page.locator("[data-consent-dialog]")
    await expect(dialog).toBeVisible()
    for (const toggle of await dialog.locator("[data-consent-toggle]").all()) {
      await expect(toggle).not.toBeChecked()
    }
    await dialog.locator('[data-consent-toggle][name="statistics"]').check({ force: true })
    await dialog.locator('button[value="selected"]').click()
    await expect.poll(() => loaded(thirdParty, GA)).toBe(true)
    expect(loaded(thirdParty, GTM) || loaded(thirdParty, PIXEL)).toBe(false)

    const consentCalls = await page.evaluate(() =>
      ((window as Window & { dataLayer?: unknown[][] }).dataLayer ?? [])
        .filter((entry) => entry?.[0] === "consent")
        .map((entry) => [entry[1], (entry[2] as Record<string, string>).analytics_storage])
    )
    expect(consentCalls[0]).toEqual(["default", "denied"])
    expect(consentCalls.at(-1)).toEqual(["update", "granted"])
  })

  test("the footer link opens the settings too", async ({ page }) => {
    await page.goto("/about/")
    await page.locator("footer [data-consent-open]").click()
    await expect(page.locator("[data-consent-dialog]")).toBeVisible()
  })
})

test.describe("withdrawal", () => {
  test.use({ consent: { ...CONSENT_DECLINED, "gatsby-gdpr-google-analytics": "true" } })

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

test.describe("returning Gatsby visitor", () => {
  test.use({
    consent: {
      "gatsby-gdpr-google-analytics": "true",
      "gatsby-gdpr-google-tagmanager": "true",
      "gatsby-gdpr-facebook-pixel": "true",
    },
  })

  test("keeps the earlier decision: no banner, trackers load", async ({ page, thirdParty }) => {
    await page.goto("/")
    await expect(page.locator("[data-consent-banner]")).toBeHidden()
    await expect.poll(() => loaded(thirdParty, GA) && loaded(thirdParty, GTM)).toBe(true)
    await expect.poll(() => loaded(thirdParty, PIXEL)).toBe(true)
  })
})

test.describe("media embeds", () => {
  test("ask before loading Vimeo; accepting stores consent and plays (dnt=1)", async ({
    page,
    context,
    thirdParty,
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
  })
})

test.describe("Hotjar", () => {
  test.use({ consent: { ...CONSENT_DECLINED, "gatsby-gdpr-google-analytics": "true" } })

  test("loads on /adsy-chill with statistics consent and nowhere else", async ({
    page,
    thirdParty,
  }) => {
    await page.goto("/magic/")
    await page.waitForLoadState("networkidle")
    expect(loaded(thirdParty, HOTJAR)).toBe(false)
    await page.goto("/adsy-chill/")
    await expect.poll(() => loaded(thirdParty, HOTJAR)).toBe(true)
  })
})

test.describe("Hotjar without consent", () => {
  test("does not load on /adsy-chill", async ({ page, thirdParty }) => {
    await page.goto("/adsy-chill/")
    await page.waitForLoadState("networkidle")
    expect(loaded(thirdParty, HOTJAR)).toBe(false)
  })
})
