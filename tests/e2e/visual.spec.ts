/**
 * Full-page screenshots of every built route at 390 and 1440 px, compared
 * with baselines in baselines/visual/ (gitignored). Opt-in, not part of CI:
 *
 *   git switch master && yarn build && yarn test:visual --update-snapshots
 *   git switch <branch> && yarn build && yarn test:visual
 *
 * The clock is paused, lazy images are loaded up front, remote media
 * (stubbed third-party images, iframes) and countdowns are masked, and the
 * cookie button is hidden, so only real rendering changes show up.
 */
import { fileURLToPath } from "node:url"
import { expect, test } from "./fixtures"
import { routes } from "./routes"

const FROZEN_NOW = new Date("2026-10-12T12:00:00+02:00")

test.use({ reducedMotion: "reduce" })
test.describe.configure({ timeout: 120_000 })

for (const route of routes) {
  test(`visual ${route}`, async ({ page }) => {
    // Paused, not just fixed: rotating words, carousels and countdowns run on timers.
    await page.clock.install({ time: FROZEN_NOW })
    await page.clock.pauseAt(FROZEN_NOW)
    await page.goto(route, { waitUntil: "load" })
    await page.evaluate(async () => {
      for (const img of document.images) img.loading = "eager"
      await document.fonts.ready
      await Promise.all([...document.images].map((img) => img.decode().catch(() => {})))
    })
    await page.waitForLoadState("networkidle")

    const slug = route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "_")
    const width = page.viewportSize()?.width
    await expect(page).toHaveScreenshot(`${slug}@${width}.png`, {
      fullPage: true,
      animations: "disabled",
      caret: "hide",
      maxDiffPixelRatio: 0.001,
      timeout: 30_000,
      stylePath: fileURLToPath(new URL("visual.css", import.meta.url)),
      mask: [
        page.locator("[data-countdown]"),
        page.locator("iframe"),
        page.locator("img[src^='http']"),
      ],
    })
  })
}
