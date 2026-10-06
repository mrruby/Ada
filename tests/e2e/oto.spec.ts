/**
 * /wyzwanie one-time offer: the page asks /api/oto/start (a Netlify Function,
 * mocked here) and shows the sticky countdown bar + OTO price while active.
 */
import type { Page } from "@playwright/test"
import { expect, test } from "./fixtures"

/** Mocks /api/oto/start and returns the URLs it was called with. */
const mockStart = async (page: Page, response: { status: number; json: unknown }) => {
  const calls: string[] = []
  await page.route("**/api/oto/start?*", (route) => {
    calls.push(route.request().url())
    return route.fulfill(response)
  })
  return calls
}

const activeFor = (ms: number) => {
  const endsAt = new Date(Date.now() + ms).toISOString()
  return { status: 200, json: { active: true, endsAt, secondsLeft: Math.ceil(ms / 1000) } }
}

const bar = (page: Page) => page.locator('[data-oto-scope] > [data-oto-when="active"]')

test("active OTO: sticky bar counts down and stays on top while scrolling", async ({ page }) => {
  const calls = await mockStart(page, activeFor(10 * 60 * 1000))
  await page.goto("/wyzwanie/?oto=signed.token")
  const scope = page.locator("[data-oto-scope]")

  await expect(scope).toHaveAttribute("data-oto-state", "active")
  await expect(bar(page)).toBeVisible()
  expect(calls).toHaveLength(1)
  expect(new URL(calls[0]).searchParams.get("campaign")).toBe("wyzwanie")
  expect(new URL(calls[0]).searchParams.get("oto")).toBe("signed.token")

  const clock = async () => {
    const minutes = await bar(page).locator("[data-oto-minutes]").textContent()
    const seconds = await bar(page).locator("[data-oto-seconds]").textContent()
    return `${minutes?.trim()}:${seconds?.trim()}`
  }
  const first = await clock()
  expect(first).toMatch(/^(09:[0-5]\d|10:00)$/)
  await expect.poll(clock, { timeout: 3_000 }).not.toBe(first)

  await expect(bar(page)).toContainText("67 zł")
  await expect(page.getByText("KUPUJĘ ZA 67 ZŁ")).toBeVisible()
  await expect(page.getByText("KUPUJĘ DOSTĘP")).toBeHidden()

  for (const fraction of [0.3, 0.6, 1]) {
    await page.evaluate((f) => {
      window.scrollTo({ top: document.body.scrollHeight * f, behavior: "instant" })
    }, fraction)
    await expect.poll(async () => (await bar(page).boundingBox())?.y).toBe(0)
  }
})

test("the bar CTA jumps to the offer", async ({ page }) => {
  await mockStart(page, activeFor(10 * 60 * 1000))
  await page.goto("/wyzwanie/")
  await expect(bar(page)).toBeVisible()

  const cta = bar(page).getByRole("link")
  const href = await cta.getAttribute("href")
  expect(href).toMatch(/^#/)
  await cta.click()
  await expect(page).toHaveURL(new RegExp(`${href}$`))
  await expect(page.locator(href!)).toBeInViewport()
})

test("server error → regular price, no bar", async ({ page }) => {
  await mockStart(page, { status: 500, json: { error: "Internal Server Error" } })
  await page.goto("/wyzwanie/")
  const scope = page.locator("[data-oto-scope]")

  await expect(scope).toHaveAttribute("data-oto-state", "inactive")
  await expect(bar(page)).toBeHidden()
  await expect(page.getByText("119 zł", { exact: true }).first()).toBeVisible()
  await expect(page.getByText("KUPUJĘ DOSTĘP")).toBeVisible()
  await expect(page.getByText("KUPUJĘ ZA 67 ZŁ")).toBeHidden()
  await expect(page.getByText("KUPUJĘ DOSTĘP")).toHaveAttribute(
    "href",
    "/api/oto/checkout?campaign=wyzwanie"
  )
})

test("inactive OTO → regular price", async ({ page }) => {
  await mockStart(page, { status: 200, json: { active: false, endsAt: null, secondsLeft: 0 } })
  await page.goto("/wyzwanie/")

  await expect(page.locator("[data-oto-scope]")).toHaveAttribute("data-oto-state", "inactive")
  await expect(bar(page)).toBeHidden()
  await expect(page.getByText("KUPUJĘ DOSTĘP")).toBeVisible()
})

test("the offer ends when the timer runs out", async ({ page }) => {
  await mockStart(page, activeFor(2_500))
  await page.goto("/wyzwanie/")
  const scope = page.locator("[data-oto-scope]")

  await expect(scope).toHaveAttribute("data-oto-state", "active")
  await expect(scope).toHaveAttribute("data-oto-state", "inactive", { timeout: 5_000 })
  await expect(bar(page)).toBeHidden()
  await expect(page.getByText("KUPUJĘ DOSTĘP")).toBeVisible()
})
