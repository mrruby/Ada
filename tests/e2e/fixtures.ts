/**
 * Shared Playwright fixtures for the e2e suite.
 *
 *  - `consent` (option): cookies set before every page loads. By default every
 *    consent cookie is "false", so the banner stays closed, PostHog runs
 *    cookieless and the Pixel stays off. `test.use({ consent: null })` starts without a decision (banner
 *    shown); override single values with `{ ...CONSENT_DECLINED, key: "true" }`.
 *  - Every request to another origin is answered locally (see
 *    `fulfillThirdParty`) and recorded in `thirdParty`, so tests never reach
 *    MailerLite, Vimeo, YouTube, Google, Meta…
 *  - `/relay/*` (the PostHog proxy) is answered locally; captured events are
 *    decoded into `posthog`.
 *  - `/api/*` (on-demand Netlify Functions, not part of dist/) is mocked:
 *    `/api/oto/*` answers an inactive OTO, anything else 204. Override it
 *    with `page.route` in a test (page routes win over context routes).
 *  - `errors` collects console errors, uncaught exceptions and failed
 *    same-origin requests of the test's page.
 */
import { readdirSync, readFileSync } from "node:fs"
import { gunzipSync } from "node:zlib"
import { test as base, expect, type Page, type Request, type Route } from "@playwright/test"

export { expect }

export const CONSENT_DECLINED = {
  "ada-consent-statistics": "false",
  "ada-consent-marketing": "false",
  "ada-consent-media": "false",
} as const

/** The key `test:e2e` / CI build with; PostHog tests skip without it. */
export const POSTHOG_TEST_KEY = "phc_e2e"
export const builtWithPostHog = () => {
  const dir = new URL("../../dist/_astro/", import.meta.url)
  try {
    return readdirSync(dir)
      .filter((file) => file.endsWith(".js"))
      .some((file) => readFileSync(new URL(file, dir), "utf8").includes(POSTHOG_TEST_KEY))
  } catch {
    return false
  }
}

/** An event PostHog sent to the /relay proxy (decoded from its batch). */
export type PostHogEvent = { event: string; properties: Record<string, unknown> }

/** Decodes a PostHog capture request body (gzip, base64 or plain JSON). */
const decodePostHogBody = (request: Request): PostHogEvent[] => {
  const body = request.postDataBuffer()
  if (!body?.length) return []
  const compression = new URL(request.url()).searchParams.get("compression")
  let text =
    compression === "gzip-js" || compression === "gzip"
      ? gunzipSync(body).toString("utf8")
      : body.toString("utf8")
  if (text.startsWith("data=")) {
    const data = decodeURIComponent(text.slice(5))
    text = compression === "base64" ? Buffer.from(data, "base64").toString("utf8") : data
  }
  try {
    const payload = JSON.parse(text)
    const events = Array.isArray(payload) ? payload : (payload.batch ?? [payload])
    return events.filter((event: PostHogEvent) => typeof event?.event === "string")
  } catch {
    return []
  }
}

export type ConsentCookies = Record<string, string>

export type ThirdPartyRequest = {
  url: string
  method: string
  resourceType: string
  postData: string | null
}

export const OTO_INACTIVE = { active: false, endsAt: null, secondsLeft: 0 }

const GIF_1PX = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64")
const CORS = { "access-control-allow-origin": "*" }

/** Local stand-ins for third-party responses, by resource type. */
export const fulfillThirdParty = (route: Route, request: Request) => {
  const url = new URL(request.url())
  if (url.hostname.endsWith("mailerlite.com") && url.pathname.endsWith("/subscribe")) {
    return route.fulfill({ status: 200, headers: CORS, json: { success: true } })
  }
  switch (request.resourceType()) {
    case "document":
      return route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<!doctype html><html lang='pl'><title>stub</title><body></body></html>",
      })
    case "script":
      return route.fulfill({ status: 200, contentType: "text/javascript", body: "" })
    case "stylesheet":
      return route.fulfill({ status: 200, contentType: "text/css", body: "" })
    case "image":
      return route.fulfill({ status: 200, contentType: "image/gif", body: GIF_1PX })
    case "fetch":
    case "xhr":
      return route.fulfill({ status: 200, headers: CORS, json: {} })
    default:
      return route.fulfill({ status: 204, headers: CORS, body: "" })
  }
}

type Fixtures = {
  consent: ConsentCookies | null
  thirdParty: ThirdPartyRequest[]
  posthog: PostHogEvent[]
  errors: string[]
}

export const test = base.extend<Fixtures>({
  consent: [CONSENT_DECLINED, { option: true }],

  thirdParty: async ({}, use) => {
    await use([])
  },

  posthog: async ({}, use) => {
    await use([])
  },

  context: async ({ context, baseURL, consent, thirdParty, posthog }, use) => {
    const origin = new URL(baseURL!).origin

    if (consent) {
      await context.addCookies(
        Object.entries(consent).map(([name, value]) => ({ name, value, url: origin }))
      )
    }

    await context.route(
      (url) => url.origin !== origin,
      (route, request) => {
        thirdParty.push({
          url: request.url(),
          method: request.method(),
          resourceType: request.resourceType(),
          postData: request.postData(),
        })
        return fulfillThirdParty(route, request)
      }
    )

    // On-demand endpoints are Netlify Functions, not part of dist/.
    await context.route(`${origin}/api/**`, (route, request) =>
      new URL(request.url()).pathname.startsWith("/api/oto/")
        ? route.fulfill({ status: 200, json: OTO_INACTIVE })
        : route.fulfill({ status: 204, body: "" })
    )

    // PostHog drops events from browsers that look automated; present the
    // test browser as a regular one so analytics can be asserted.
    await context.addInitScript(() => {
      Object.defineProperty(Navigator.prototype, "webdriver", { get: () => false })
      Object.defineProperty(Navigator.prototype, "userAgentData", { get: () => undefined })
    })

    // PostHog's /relay proxy lives in netlify.toml, not in dist/: answer it
    // locally and record the captured events.
    await context.route(`${origin}/relay/**`, (route, request) => {
      const { pathname } = new URL(request.url())
      if (request.resourceType() === "script") {
        return route.fulfill({ status: 200, contentType: "text/javascript", body: "" })
      }
      if (pathname.startsWith("/relay/e") || pathname.startsWith("/relay/i/v0/e")) {
        posthog.push(...decodePostHogBody(request))
        return route.fulfill({ status: 200, json: { status: 1 } })
      }
      // Remote config / flags of a project with autocapture on, nothing else.
      return route.fulfill({ status: 200, json: { autocapture_opt_out: false } })
    })

    await use(context)
  },

  errors: async ({ page, baseURL }, use) => {
    const errors = trackErrors(page, new URL(baseURL!).origin)
    await use(errors)
  },
})

/** Console errors, page errors and failed same-origin requests of `page`. */
export const trackErrors = (page: Page, origin: string) => {
  const errors: string[] = []
  const isFirstParty = (url: string) => url.startsWith(origin)

  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`))
  page.on("console", (message) => {
    if (message.type() !== "error") return
    const { url } = message.location()
    // Network noise from (stubbed) third parties is not the page's fault.
    if (url && !isFirstParty(url) && message.text().startsWith("Failed to load resource")) return
    errors.push(`console: ${message.text()}${url ? ` (${url})` : ""}`)
  })
  page.on("requestfailed", (request) => {
    if (isFirstParty(request.url())) {
      errors.push(`requestfailed: ${request.url()} ${request.failure()?.errorText ?? ""}`)
    }
  })
  page.on("response", (response) => {
    if (isFirstParty(response.url()) && response.status() >= 400) {
      errors.push(`HTTP ${response.status()}: ${response.url()}`)
    }
  })
  return errors
}

/**
 * How far the page can be scrolled horizontally, in px (0 = no sideways
 * scroll). html/body use `overflow-x: clip`, so content wider than the
 * viewport is cut off rather than scrollable; this measures what a visitor
 * can actually scroll.
 */
export const horizontalOverflow = (page: Page) =>
  page.evaluate(() => {
    const root = document.documentElement
    const { scrollX, scrollY } = window
    window.scrollTo({ left: root.scrollWidth, top: scrollY, behavior: "instant" })
    const scrolled = window.scrollX
    window.scrollTo({ left: scrollX, top: scrollY, behavior: "instant" })
    return Math.max(root.scrollWidth - root.clientWidth, scrolled)
  })

/** Outermost elements sticking out of the viewport (diagnostics for overflow failures). */
export const overflowingElements = (page: Page) =>
  page.evaluate(() => {
    const width = document.documentElement.clientWidth
    const sticksOut = (el: Element) => el.getBoundingClientRect().right > width + 1
    const clipped = (el: Element) => {
      for (let node = el.parentElement; node && node !== document.body; node = node.parentElement) {
        if (getComputedStyle(node).overflowX !== "visible") return true
      }
      return false
    }
    const describe = (el: Element) => {
      const id = el.id ? `#${el.id}` : ""
      const cls =
        typeof el.className === "string" && el.className.trim()
          ? `.${el.className.trim().split(/\s+/).slice(0, 4).join(".")}`
          : ""
      return `${el.tagName.toLowerCase()}${id}${cls}`
    }
    return [...document.body.querySelectorAll("*")]
      .filter((el) => sticksOut(el) && !clipped(el) && getComputedStyle(el).position !== "fixed")
      .filter((el) => !el.parentElement || !sticksOut(el.parentElement))
      .slice(0, 5)
      .map((el) => `${describe(el)} (right edge ${Math.round(el.getBoundingClientRect().right)}px)`)
  })

/** True on the narrow (mobile) project. */
export const isMobile = (page: Page) => (page.viewportSize()?.width ?? 1440) < 768
