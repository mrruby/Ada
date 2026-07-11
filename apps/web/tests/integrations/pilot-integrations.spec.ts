import { expect, test, type Page } from "@playwright/test"

const providerHosts = {
  google: ["www.googletagmanager.com", "www.google-analytics.com"],
  mailerlite: ["groot.mailerlite.com", "assets.mailerlite.com"],
  meta: ["connect.facebook.net", "www.facebook.com"],
  vimeo: ["player.vimeo.com", "vimeo.com", "i.vimeocdn.com", "vumbnail.com"],
} as const

type Provider = keyof typeof providerHosts

function isProviderRequest(url: string): boolean {
  const host = new URL(url).hostname
  return Object.values(providerHosts).some((hosts) => hosts.includes(host as never))
}

function requestsFor(requests: string[], provider: Provider): string[] {
  return requests.filter((url) => providerHosts[provider].includes(new URL(url).hostname as never))
}

async function recordThirdPartyRequests(page: Page): Promise<string[]> {
  const requests: string[] = []

  page.on("request", (request) => {
    if (isProviderRequest(request.url())) {
      requests.push(request.url())
    }
  })

  await page.route(/https:\/\/(www\.googletagmanager\.com|www\.google-analytics\.com|connect\.facebook\.net|www\.facebook\.com|groot\.mailerlite\.com|assets\.mailerlite\.com|player\.vimeo\.com|vimeo\.com|i\.vimeocdn\.com|vumbnail\.com)\//, (route) => route.abort())

  return requests
}

async function saveCategory(page: Page, category: "functional" | "analytics" | "marketing"): Promise<void> {
  const banner = page.locator("[data-consent-banner]")
  const settingsTrigger = (await banner.isVisible())
    ? banner.locator("[data-open-consent]")
    : page.locator("[data-consent-floating-trigger]")

  await settingsTrigger.click()
  await page.locator(`[data-consent-control="${category}"]`).check()
  await page.locator('[data-consent-action="save-selection"]').last().click()
}

function expectNoProviderRequests(requests: string[], excluded: Provider): void {
  for (const provider of Object.keys(providerHosts) as Provider[]) {
    if (provider !== excluded) {
      expect(requestsFor(requests, provider), `${provider} must stay blocked`).toHaveLength(0)
    }
  }
}

test("both pilot pages make no provider request before consent", async ({ page }) => {
  const requests = await recordThirdPartyRequests(page)

  await page.goto("/magic/", { waitUntil: "domcontentloaded" })
  await page.locator("[data-vimeo-play]").waitFor()
  await page.waitForTimeout(100)
  expect(requests).toHaveLength(0)

  await page.goto("/magic-kolektyw/", { waitUntil: "domcontentloaded" })
  await page.locator("[data-legacy-form-id]").waitFor()
  await page.waitForTimeout(100)
  expect(requests).toHaveLength(0)
})

test("analytics consent loads Google only", async ({ page }) => {
  const requests = await recordThirdPartyRequests(page)

  await page.goto("/magic/", { waitUntil: "domcontentloaded" })
  await saveCategory(page, "analytics")

  await expect.poll(() => requestsFor(requests, "google").length).toBeGreaterThan(0)
  expectNoProviderRequests(requests, "google")
})

test("marketing consent loads Meta only", async ({ page }) => {
  const requests = await recordThirdPartyRequests(page)

  await page.goto("/magic/", { waitUntil: "domcontentloaded" })
  await saveCategory(page, "marketing")

  await expect.poll(() => requestsFor(requests, "meta").length).toBeGreaterThan(0)
  expectNoProviderRequests(requests, "meta")
})

test("functional consent loads the MailerLite snapshot only on the collective route", async ({ page }) => {
  const requests = await recordThirdPartyRequests(page)

  await page.goto("/magic-kolektyw/", { waitUntil: "domcontentloaded" })
  await saveCategory(page, "functional")

  await expect.poll(() => requestsFor(requests, "mailerlite").length).toBeGreaterThan(0)
  expectNoProviderRequests(requests, "mailerlite")
  await expect(page.locator("iframe[data-pilot-integration='mailerliteForm']")).toHaveCount(1)
})

test("functional consent permits Vimeo only after the visitor activates playback", async ({ page }) => {
  const requests = await recordThirdPartyRequests(page)

  await page.goto("/magic/", { waitUntil: "domcontentloaded" })
  await saveCategory(page, "functional")
  expect(requestsFor(requests, "vimeo")).toHaveLength(0)

  await page.locator("[data-vimeo-play]").click()
  await expect.poll(() => requestsFor(requests, "vimeo").length).toBeGreaterThan(0)
  expectNoProviderRequests(requests, "vimeo")
  await expect(page.locator("iframe[data-pilot-integration='vimeo']")).toHaveCount(1)
})
