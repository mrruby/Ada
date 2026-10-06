/**
 * Sign-up forms: MailerLite exports in "fetch" mode (their scripts stripped,
 * native validation, POST via fetch, redirect to /thank/) and the Netlify
 * contact form. MailerLite is stubbed with `{ "success": true }`.
 */
import type { Locator } from "@playwright/test"
import { expect, test } from "./fixtures"

const FETCH_FORM_PAGES = ["/advantage/", "/jesien/", "/meta-2026/", "/jesien-masterclass/"]

const fillMailerLite = async (form: Locator) => {
  const name = form.locator('input[name="fields[name]"]')
  if (await name.count()) await name.fill("Ada")
  await form.locator('input[name="fields[email]"]').fill("ada@example.com")
  for (const checkbox of await form.locator("input[type=checkbox]").all()) {
    // MailerLite hides the native checkbox behind its own styled box.
    await checkbox.check({ force: true })
  }
}

for (const route of FETCH_FORM_PAGES) {
  test.describe(`MailerLite fetch form on ${route}`, () => {
    test("blocks an empty submit", async ({ page, thirdParty }) => {
      await page.goto(route)
      const form = page.locator("[data-mailerlite-fetch] form").first()
      await form.scrollIntoViewIfNeeded()

      await form.locator("button[type=submit]").click()
      await page.waitForTimeout(300)

      expect(await form.evaluate((el: HTMLFormElement) => el.checkValidity())).toBe(false)
      await expect(form.locator('input[name="fields[email]"]')).toHaveJSProperty("required", true)
      await expect(page).toHaveURL(new RegExp(`${route}$`))
      expect(thirdParty.filter((request) => request.method === "POST")).toEqual([])
    })

    test("requires the consent checkbox", async ({ page, thirdParty }) => {
      await page.goto(route)
      const form = page.locator("[data-mailerlite-fetch] form").first()
      await fillMailerLite(form)
      await form.locator("input[type=checkbox]").first().uncheck({ force: true })

      await form.locator("button[type=submit]").click()
      await page.waitForTimeout(300)

      await expect(page).toHaveURL(new RegExp(`${route}$`))
      expect(thirdParty.filter((request) => request.method === "POST")).toEqual([])
    })

    test("posts a filled form to MailerLite and opens /thank/", async ({ page, thirdParty }) => {
      await page.goto(route)
      const form = page.locator("[data-mailerlite-fetch] form").first()
      const action = await form.getAttribute("action")
      expect(action).toMatch(
        /^https:\/\/assets\.mailerlite\.com\/jsonp\/\d+\/forms\/\d+\/subscribe$/
      )
      await expect(form).not.toHaveAttribute("target")

      await fillMailerLite(form)
      const request = page.waitForRequest((req) => req.url() === action && req.method() === "POST")
      await form.locator("button[type=submit]").click()

      const body = (await request).postData() ?? ""
      expect(body).toContain("ada@example.com")
      expect(body).toContain("fields[email]")
      await expect(page).toHaveURL(/\/thank\/$/)
      expect(thirdParty.filter((r) => r.method === "POST").map((r) => r.url)).toEqual([action])
    })
  })
}

test("fetch-mode forms load no MailerLite scripts", async ({ page, thirdParty }) => {
  await page.goto("/jesien/")
  await page.waitForLoadState("networkidle")
  expect(thirdParty.filter((request) => /mailerlite/.test(request.url))).toEqual([])
})

test("a MailerLite failure keeps the visitor on the page", async ({ page }) => {
  await page.route("https://assets.mailerlite.com/**", (route) =>
    route.fulfill({
      status: 200,
      headers: { "access-control-allow-origin": "*" },
      json: { success: false, errors: { fields: { email: ["invalid"] } } },
    })
  )
  await page.goto("/advantage/")
  const form = page.locator("[data-mailerlite-fetch] form").first()
  await fillMailerLite(form)
  const response = page.waitForResponse(/assets\.mailerlite\.com/)
  await form.locator("button[type=submit]").click()
  await response
  await page.waitForTimeout(300)
  await expect(page).toHaveURL(/\/advantage\/$/)
})

test.describe("Netlify contact form", () => {
  test("is detectable by Netlify and enforces required fields", async ({ page }) => {
    await page.goto("/contact/")
    const form = page.locator('form[name="contact-page"]')

    await expect(form).toHaveAttribute("data-netlify", "true")
    await expect(form).toHaveAttribute("method", /post/i)
    await expect(form).toHaveAttribute("data-netlify-honeypot", "bot-field")
    await expect(form.locator('input[type=hidden][name="form-name"]')).toHaveValue("contact-page")
    await expect(form.locator('input[name="bot-field"]')).toBeHidden()

    for (const name of ["name", "surname", "email", "message", "consent"]) {
      await expect(form.locator(`[name="${name}"]`), name).toHaveJSProperty("required", true)
    }
    await expect(form.locator('[name="email"]')).toHaveAttribute("type", "email")

    // Labels are wired to their fields.
    await expect(page.getByLabel("Imię:")).toHaveAttribute("name", "name")
    await expect(page.getByLabel("Twoja wiadomość:")).toHaveAttribute("name", "message")

    await form.getByRole("button", { name: /wyślij/i }).click()
    expect(await form.evaluate((el: HTMLFormElement) => el.checkValidity())).toBe(false)
    await expect(page).toHaveURL(/\/contact\/$/)
  })

  test("records the ?source= campaign", async ({ page }) => {
    await page.goto("/contact/?source=jesien")
    await expect(page.locator('input[name="form-source"]')).toHaveValue("jesien")
  })
})
