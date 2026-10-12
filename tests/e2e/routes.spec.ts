/** Smoke test of every built page: status, landmarks, errors, layout width. */
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { expect, horizontalOverflow, overflowingElements, test } from "./fixtures"
import { distDir, getSourceRoutes, routes } from "./routes"

test("every page in src/pages is built", () => {
  expect(routes).toEqual(expect.arrayContaining(getSourceRoutes()))
  expect(routes.length).toBeGreaterThan(20)
})

for (const route of routes) {
  test(`${route} renders without errors`, async ({ page, errors }) => {
    const response = await page.goto(route, { waitUntil: "load" })
    expect(response?.status(), "HTTP status").toBe(200)

    await expect(page).toHaveTitle(/\S/)
    await expect(page.locator("h1"), "exactly one <h1>").toHaveCount(1)
    await expect(page.locator("main"), "exactly one <main>").toHaveCount(1)
    await expect(page.locator("html")).toHaveAttribute("lang", "pl-PL")

    // Let deferred scripts, timers and lazy images settle before judging.
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(300)

    const overflow = await horizontalOverflow(page)
    expect(
      overflow,
      `horizontal overflow of ${overflow}px: ${(await overflowingElements(page)).join(", ")}`
    ).toBeLessThanOrEqual(0)

    expect(errors, "console errors, page errors or failed requests").toEqual([])
  })
}

test.describe("built files", () => {
  test.beforeEach(({}, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "reads dist/, same for every project")
  })

  test("raster images ship as WebP (PNG only for favicons and manifest icons)", () => {
    const icons = ["apple-touch-icon.png", "favicon-32.png", "icon-192.png", "icon-512.png"]
    const files = readdirSync(distDir, { recursive: true, encoding: "utf8" })
    const rasters = files.filter((file) => /\.(png|jpe?g|gif|avif|bmp|tiff?)$/i.test(file))
    expect(rasters.filter((file) => !icons.includes(file))).toEqual([])
    const svgsWithBitmaps = files.filter(
      (file) =>
        file.endsWith(".svg") &&
        /data:image\/(png|jpe?g|gif)/.test(readFileSync(join(distDir, file), "utf8"))
    )
    expect(svgsWithBitmaps, "SVGs embedding non-WebP bitmaps").toEqual([])
  })

  for (const route of ["/", "/magic/"]) {
    test(`${route} social meta: no hardcoded og:image size, twitter:domain by name`, async ({
      page,
    }) => {
      await page.goto(route)
      await expect(page.locator('meta[property^="og:image:width"]')).toHaveCount(0)
      await expect(page.locator('meta[property^="og:image:height"]')).toHaveCount(0)
      await expect(page.locator('meta[name="twitter:domain"]')).toHaveCount(1)
      await expect(page.locator('meta[property="twitter:domain"]')).toHaveCount(0)
    })
  }
})

test("unknown URLs get the 404 page with status 404", async ({ page }) => {
  const response = await page.goto("/to-nie-istnieje/")
  expect(response?.status()).toBe(404)
  await expect(page.locator("h1")).toHaveCount(1)
  await expect(page.locator("main")).toHaveCount(1)
})
