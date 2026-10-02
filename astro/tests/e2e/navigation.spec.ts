/** Site header: popover menu on mobile, <details> dropdowns on desktop. */
import { expect, isMobile, test } from "./fixtures"

test.describe("mobile menu", () => {
  test.beforeEach(({ page }) => {
    test.skip(!isMobile(page), "the burger is hidden from md: up")
  })

  test("burger opens the popover, Esc closes it", async ({ page }) => {
    await page.goto("/about/")
    const menu = page.locator("#mobile-nav")
    const burger = page.getByRole("button", { name: "Otwórz menu" })

    await expect(menu).toBeHidden()
    await burger.click()
    await expect(menu).toBeVisible()
    expect(await menu.evaluate((el) => el.matches(":popover-open"))).toBe(true)
    await expect(menu.getByRole("link", { name: "kontakt" })).toBeVisible()

    await page.keyboard.press("Escape")
    await expect(menu).toBeHidden()
    expect(await menu.evaluate((el) => el.matches(":popover-open"))).toBe(false)
  })

  test("close button and nested group work", async ({ page }) => {
    await page.goto("/about/")
    const menu = page.locator("#mobile-nav")

    await page.getByRole("button", { name: "Otwórz menu" }).click()
    await menu.locator("summary", { hasText: "mentoring" }).click()
    await expect(menu.getByRole("link", { name: "dla specjalistek" })).toBeVisible()

    await menu.getByRole("button", { name: "Zamknij menu" }).click()
    await expect(menu).toBeHidden()
  })

  test("menu links navigate", async ({ page }) => {
    await page.goto("/about/")
    await page.getByRole("button", { name: "Otwórz menu" }).click()
    await page.locator("#mobile-nav").getByRole("link", { name: "kontakt" }).click()
    await expect(page).toHaveURL(/\/contact\/?$/)
  })
})

test.describe("desktop navigation", () => {
  test.beforeEach(({ page }) => {
    test.skip(isMobile(page), "the desktop bar is hidden below md:")
  })

  test("mentoring dropdown opens", async ({ page }) => {
    await page.goto("/about/")
    const nav = page.getByRole("navigation", { name: "Główna nawigacja" })
    const group = nav.locator("details", { has: page.locator("summary", { hasText: "mentoring" }) })
    const link = group.getByRole("link", { name: "dla specjalistek" })

    await expect(page.getByRole("button", { name: "Otwórz menu" })).toBeHidden()
    await expect(link).toBeHidden()
    await group.locator("summary").click()
    await expect(group).toHaveAttribute("open", "")
    await expect(link).toBeVisible()
    await expect(group.getByRole("link", { name: "dla biznesu" })).toHaveAttribute(
      "href",
      "/ogarnij-swoje-adsy/"
    )

    await group.locator("summary").click()
    await expect(link).toBeHidden()
  })
})
