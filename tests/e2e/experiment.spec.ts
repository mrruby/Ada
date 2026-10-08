/**
 * /magic-jesien A/B test (src/lib/experiments.ts, components/site/
 * ExperimentTracking.astro). The 80/20 split itself is a Netlify Edge
 * Function (unit-tested); here both static variants are checked directly:
 * PostHog events carry the experiment, CTA clicks and sections are tracked
 * with statistics consent only, and the sticky cookie follows the consent.
 */
import { builtWithPostHog, CONSENT_DECLINED, expect, type PostHogEvent, test } from "./fixtures"

const STATISTICS = { ...CONSENT_DECLINED, "ada-consent-statistics": "true" }
const COOKIE = "ada-ab-magic-jesien"

const events = (posthog: PostHogEvent[], name: string) =>
  posthog.filter((event) => event.event === name)

test.describe("magic-jesien A/B", () => {
  test.skip(!builtWithPostHog(), "needs a build with PUBLIC_POSTHOG_KEY (yarn test:e2e)")

  test.describe("without statistics consent", () => {
    test("counts the exposure cookieless and stores nothing", async ({
      page,
      context,
      posthog,
    }) => {
      await page.goto("/magic-jesien/")
      await expect.poll(() => events(posthog, "experiment_viewed").length).toBe(1)
      expect(events(posthog, "experiment_viewed")[0].properties).toMatchObject({
        experiment: "magic-jesien-ab",
        variant: "a",
        experiment_variant: "a",
        distinct_id: "$posthog_cookieless",
      })
      expect(events(posthog, "$pageview")[0].properties).toMatchObject({
        experiment: "magic-jesien-ab",
        experiment_variant: "a",
        "$feature/magic-jesien-ab": "control",
      })

      await page.locator("#top a[href='#pakiety']").click()
      await page.waitForTimeout(500)
      expect(events(posthog, "cta_clicked")).toEqual([])
      expect(events(posthog, "section_viewed")).toEqual([])
      expect((await context.cookies()).map((cookie) => cookie.name)).not.toContain(COOKIE)
    })
  })

  test.describe("with statistics consent", () => {
    test.use({ consent: STATISTICS })

    test("variant A: sticky cookie, CTA clicks and sections", async ({
      page,
      context,
      posthog,
    }) => {
      await page.goto("/magic-jesien/")
      await expect.poll(() => events(posthog, "experiment_viewed").length).toBe(1)
      expect((await context.cookies()).find((cookie) => cookie.name === COOKIE)?.value).toBe("a")

      await page.locator("#top a[href='#pakiety']").click()
      await expect.poll(() => events(posthog, "cta_clicked").length).toBe(1)
      expect(events(posthog, "cta_clicked")[0].properties).toMatchObject({
        cta: "Dołączam",
        section: "top",
        target: "#pakiety",
        experiment_variant: "a",
      })
      await expect
        .poll(() => events(posthog, "section_viewed").map((event) => event.properties.section))
        .toContain("pakiety")
    })

    test("withdrawing statistics consent removes the sticky cookie", async ({ page, context }) => {
      const stored = async () => (await context.cookies()).some((cookie) => cookie.name === COOKIE)
      await page.goto("/magic-jesien/")
      await expect.poll(stored).toBe(true)
      await page.locator("[data-consent-reopen]").click()
      await page.locator('[data-consent-toggle][name="statistics"]').uncheck({ force: true })
      await Promise.all([
        page.waitForEvent("load"),
        page.locator('[data-consent-dialog] button[value="selected"]').click(),
      ])
      await expect.poll(stored).toBe(false)
    })

    test("variant B: bold page tagged as B", async ({ page, context, posthog }) => {
      await page.goto("/magic-jesien-b/")
      await expect(page.locator("h1")).toContainText("Twój zespół od reklam.")
      await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
        "href",
        "https://adrianna.com.pl/magic-jesien/"
      )
      await expect.poll(() => events(posthog, "experiment_viewed").length).toBe(1)
      expect(events(posthog, "$pageview")[0].properties).toMatchObject({
        experiment_variant: "b",
        "$feature/magic-jesien-ab": "test",
      })
      // Only the experiment URL (where the edge function serves B) keeps a cookie.
      expect((await context.cookies()).map((cookie) => cookie.name)).not.toContain(COOKIE)

      await page.locator("#top a[href='#wideo']").click()
      await expect.poll(() => events(posthog, "cta_clicked").length).toBe(1)
      expect(events(posthog, "cta_clicked")[0].properties).toMatchObject({
        section: "top",
        target: "#wideo",
        experiment_variant: "b",
      })
    })

    test("variant B: the mobile CTA bar shows between the hero and the plans", async ({
      page,
      posthog,
    }, testInfo) => {
      test.skip(testInfo.project.name !== "mobile", "the bar is mobile-only")
      await page.goto("/magic-jesien-b/")
      const bar = page.locator("[data-sticky-cta]")
      await expect(bar).toBeHidden()
      await page.locator("#wyniki").scrollIntoViewIfNeeded()
      await page.mouse.wheel(0, 1200)
      await expect(bar).toBeVisible()
      await bar.getByRole("link").click()
      await expect.poll(() => events(posthog, "cta_clicked").length).toBe(1)
      expect(events(posthog, "cta_clicked")[0].properties).toMatchObject({
        section: "sticky-cta",
        target: "#pakiety",
      })
      await expect(bar).toBeHidden()
    })
  })

  test("other MAGIC jesień pages are not part of the experiment", async ({ page, posthog }) => {
    await page.goto("/jesien-nagranie2/")
    await expect.poll(() => events(posthog, "$pageview").length).toBe(1)
    expect(events(posthog, "$pageview")[0].properties).not.toHaveProperty("experiment")
    expect(events(posthog, "experiment_viewed")).toEqual([])
  })
})
