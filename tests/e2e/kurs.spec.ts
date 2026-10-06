/**
 * Evergreen course pages (src/components/magic/KursPage.astro): 24 h of access
 * from the first visit, stored in localStorage under the page's `storageKey`.
 */
import type { Page } from "@playwright/test"
import { CONSENT_DECLINED, expect, test } from "./fixtures"

const PAGES = [
  { route: "/kurs-meta-2026/", storageKey: "kursMeta2026EndTime", videoId: null },
  { route: "/kurs-andromeda-2026/", storageKey: "kursAndromeda2026EndTime", videoId: "1150047798" },
] as const

const DAY_MS = 24 * 60 * 60 * 1000

// Media consent granted, so a consent-gated player may render its iframe.
test.use({ consent: { ...CONSENT_DECLINED, "ada-consent-media": "true" } })

const setDeadline = (page: Page, storageKey: string, iso: string) =>
  page.addInitScript(([key, value]) => window.localStorage.setItem(key, value), [
    storageKey,
    iso,
  ] as const)

const countdownText = (page: Page) => page.locator("[data-countdown] [data-unit]").allTextContents()

for (const { route, storageKey, videoId } of PAGES) {
  test.describe(route, () => {
    test("a first visit starts a 24 h countdown", async ({ page }) => {
      const before = Date.now()
      await page.goto(route)
      const scope = page.locator("[data-countdown-scope]")

      await expect(scope).toHaveAttribute("data-ready", "")
      await expect(scope).not.toHaveAttribute("data-expired")
      await expect(page.getByText("Dostęp do kursu znika za:")).toBeVisible()
      await expect(page.getByText("Dostęp do kursu zniknął!")).toBeHidden()

      const stored = await page.evaluate((key) => localStorage.getItem(key), storageKey)
      expect(Date.parse(stored!) - before).toBeGreaterThan(DAY_MS - 60_000)
      expect(Date.parse(stored!) - before).toBeLessThanOrEqual(DAY_MS + 60_000)

      const first = await countdownText(page)
      expect(first).toHaveLength(4)
      expect(first.every((value) => /^\d{2}$/.test(value))).toBe(true)
      const [days, hours, minutes, seconds] = first.map(Number)
      const secondsLeft = ((days * 24 + hours) * 60 + minutes) * 60 + seconds
      expect(secondsLeft).toBeGreaterThan(24 * 60 * 60 - 60)
      expect(secondsLeft).toBeLessThanOrEqual(24 * 60 * 60)
      await expect.poll(() => countdownText(page), { timeout: 3_000 }).not.toEqual(first)
    })

    test("a returning visitor keeps the original deadline", async ({ page }) => {
      const deadline = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
      await setDeadline(page, storageKey, deadline)
      await page.goto(route)

      await expect(page.locator("[data-countdown] [data-unit=hours]")).toHaveText(/^0[12]$/)
      expect(await page.evaluate((key) => localStorage.getItem(key), storageKey)).toBe(deadline)
    })

    if (videoId) {
      test("an active visitor gets the training video", async ({ page }) => {
        await page.goto(route)
        const iframe = page.locator("[data-kurs-video] iframe")
        await expect(iframe).toHaveCount(1)
        await expect(iframe).toHaveAttribute(
          "src",
          new RegExp(`player\\.vimeo\\.com/video/${videoId}`)
        )
      })
    } else {
      test("shows the video placeholder (no video id configured)", async ({ page }) => {
        await page.goto(route)
        await expect(page.getByText("Video Placeholder")).toBeVisible()
      })
    }

    test("an expired visitor sees the notice and the sign-up form, no player", async ({
      page,
      thirdParty,
    }) => {
      await setDeadline(page, storageKey, new Date(Date.now() - 60_000).toISOString())
      await page.goto(route)
      const scope = page.locator("[data-countdown-scope]")

      await expect(scope).toHaveAttribute("data-expired", "")
      await expect(page.getByText("Dostęp do kursu zniknął!")).toBeVisible()
      await expect(page.getByText("Dostęp do kursu znika za:")).toBeHidden()

      const signup = page.locator("#magic-package")
      await expect(signup).toBeVisible()
      await expect(signup.locator("form")).toBeVisible()
      await expect(signup.locator('input[type="email"]')).toBeVisible()

      // The notice and the form move above the page content.
      const noticeTop = (await page.getByText("Dostęp do kursu zniknął!").boundingBox())!.y
      const signupTop = (await signup.boundingBox())!.y
      const firstSection = page.locator("[data-countdown-scope] > section:not([data-when])").first()
      expect(noticeTop).toBeLessThan(signupTop)
      expect(signupTop).toBeLessThan((await firstSection.boundingBox())!.y)

      await expect(page.locator("[data-kurs-video] iframe")).toHaveCount(0)
      await expect(page.locator('iframe[src*="player.vimeo.com"]')).toHaveCount(0)
      expect(
        thirdParty.filter((request) => request.url.startsWith("https://player.vimeo.com/video/"))
      ).toEqual([])
    })
  })
}
