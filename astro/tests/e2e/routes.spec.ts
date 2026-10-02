/** Smoke test of every built page: status, landmarks, errors, layout width. */
import { expect, horizontalOverflow, overflowingElements, test } from "./fixtures"
import { getSourceRoutes, routes } from "./routes"

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

test("unknown URLs get the 404 page with status 404", async ({ page }) => {
  const response = await page.goto("/to-nie-istnieje/")
  expect(response?.status()).toBe(404)
  await expect(page.locator("h1")).toHaveCount(1)
  await expect(page.locator("main")).toHaveCount(1)
})
