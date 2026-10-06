/** Scroll-snap carousel (src/components/ui/Carousel.astro), as rendered on /styleguide. */
import type { Locator } from "@playwright/test"
import { expect, test } from "./fixtures"

const scrollLeft = (track: Locator) => track.evaluate((el) => Math.round(el.scrollLeft))

test.beforeEach(async ({ page }) => {
  await page.goto("/styleguide/")
})

test("arrows scroll the track by one slide and wrap around", async ({ page }) => {
  // The plain demo carousel (no autoplay).
  const carousel = page.locator("[data-carousel]:not([data-autoplay])").first()
  const track = carousel.locator("[data-carousel-track]")
  await carousel.scrollIntoViewIfNeeded()
  expect(await scrollLeft(track)).toBe(0)

  const slideWidth = await track.evaluate((el) =>
    Math.round((el.firstElementChild as HTMLElement).getBoundingClientRect().width)
  )

  await carousel.getByRole("button", { name: "Następny slajd" }).click()
  await expect.poll(() => scrollLeft(track)).toBeGreaterThanOrEqual(slideWidth - 2)

  await carousel.getByRole("button", { name: "Poprzedni slajd" }).click()
  await expect.poll(() => scrollLeft(track)).toBe(0)

  // Prev at the start wraps to the end (loop).
  await carousel.getByRole("button", { name: "Poprzedni slajd" }).click()
  const max = await track.evaluate((el) => el.scrollWidth - el.clientWidth)
  await expect.poll(() => scrollLeft(track)).toBeGreaterThanOrEqual(max - 2)
})

test("arrow keys scroll the focused track", async ({ page }) => {
  const track = page.locator("[data-carousel]:not([data-autoplay]) [data-carousel-track]").first()
  await track.focus()
  await page.keyboard.press("ArrowRight")
  await expect.poll(() => scrollLeft(track)).toBeGreaterThan(0)
  await page.keyboard.press("ArrowLeft")
  await expect.poll(() => scrollLeft(track)).toBe(0)
})

test("autoplay can be paused and resumed", async ({ page }) => {
  const carousel = page.locator("[data-carousel][data-autoplay]").first()
  const toggle = carousel.locator("[data-carousel-toggle]")
  await carousel.scrollIntoViewIfNeeded()

  await expect(toggle).toHaveAttribute("aria-pressed", "false")
  await expect(toggle).toHaveAccessibleName("Zatrzymaj przewijanie")

  await toggle.click()
  await expect(toggle).toHaveAttribute("aria-pressed", "true")
  await expect(toggle).toHaveAccessibleName("Wznów przewijanie")

  await toggle.click()
  await expect(toggle).toHaveAttribute("aria-pressed", "false")
  await expect(toggle).toHaveAccessibleName("Zatrzymaj przewijanie")
})

test("autoplay advances on its own and stops when paused", async ({ page }) => {
  const carousel = page.locator("[data-carousel][data-autoplay]").first()
  const track = carousel.locator("[data-carousel-track]")
  const interval = Number(await carousel.getAttribute("data-autoplay"))
  await carousel.scrollIntoViewIfNeeded()
  await page.mouse.move(0, 0) // hovering pauses autoplay

  await expect.poll(() => scrollLeft(track), { timeout: interval * 3 }).toBeGreaterThan(0)

  // Pause (the click also focuses the toggle, so move focus away again).
  await carousel.locator("[data-carousel-toggle]").click()
  await page.mouse.move(0, 0)
  await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur())
  await page.waitForTimeout(interval / 2) // let a running smooth scroll finish
  const paused = await scrollLeft(track)
  await page.waitForTimeout(interval * 1.5)
  expect(await scrollLeft(track)).toBe(paused)
})

test.describe("with reduced motion", () => {
  test.use({ reducedMotion: "reduce" })

  test("autoplay is off and its toggle hidden", async ({ page }) => {
    const carousel = page.locator("[data-carousel][data-autoplay]").first()
    await carousel.scrollIntoViewIfNeeded()
    await page.mouse.move(0, 0)

    await expect(carousel.locator("[data-carousel-toggle]")).toBeHidden()
    const interval = Number(await carousel.getAttribute("data-autoplay"))
    await page.waitForTimeout(interval * 1.5)
    expect(await scrollLeft(carousel.locator("[data-carousel-track]"))).toBe(0)
  })
})
