/**
 * Cookie consent + consent-gated analytics (browser only).
 *
 * Each tracker has its own consent cookie holding "true" or "false". Trackers
 * are injected only when their cookie is "true". The cookie names match the
 * previous Gatsby site, so visitors keep the choice they already made.
 */
import { analytics } from "@/config/site"

export type ConsentCategory = "statistics" | "preferences" | "marketing"

export const consentCategories: Record<ConsentCategory, string> = {
  statistics: analytics.googleAnalytics.consentCookie,
  preferences: analytics.googleTagManager.consentCookie,
  marketing: analytics.facebookPixel.consentCookie,
}

const CONSENT_MAX_AGE_DAYS = 365

export const readCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

const writeCookie = (name: string, value: string, days: number) => {
  const maxAge = days * 24 * 60 * 60
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`
}

/** True once the visitor answered the banner (any category stored). */
export const hasConsentDecision = (): boolean =>
  Object.values(consentCategories).some((cookie) => readCookie(cookie) !== null)

const isGranted = (cookie: string) => readCookie(cookie) === "true"

export const saveConsent = (choices: Record<ConsentCategory, boolean>) => {
  for (const [category, cookie] of Object.entries(consentCategories)) {
    writeCookie(
      cookie,
      choices[category as ConsentCategory] ? "true" : "false",
      CONSENT_MAX_AGE_DAYS
    )
  }
}

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: ((...args: unknown[]) => void) & Record<string, unknown>
  _fbq?: unknown
}

const w = window as AnalyticsWindow
const loaded = new Set<string>()

const injectScript = (src: string) => {
  const script = document.createElement("script")
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

const loadGoogleAnalytics = () => {
  const { id } = analytics.googleAnalytics
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${id}`)
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // gtag.js expects the `arguments` object, not an array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments)
  }
  w.gtag("js", new Date())
  w.gtag("config", id, { anonymize_ip: true })
}

const loadTagManager = () => {
  const { id, dataLayerName } = analytics.googleTagManager
  const layer = ((w as unknown as Record<string, unknown[]>)[dataLayerName] ||= [])
  layer.push({ "gtm.start": Date.now(), event: "gtm.js" })
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${id}`)
  // The previous site pushed this event on every page view; GTM triggers may
  // still depend on it.
  layer.push({ event: "gatsby-route-change" })
}

const loadFacebookPixel = () => {
  const { id } = analytics.facebookPixel
  if (!w.fbq) {
    // Mirrors Meta's official stub: calls are queued as `arguments` objects
    // until fbevents.js loads and installs `callMethod`.
    type Stub = ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue: unknown[]
    } & Record<string, unknown>
    const fbq = function (this: unknown) {
      // eslint-disable-next-line prefer-rest-params
      const args = arguments
      if (fbq.callMethod) fbq.callMethod.apply(fbq, args as never)
      else fbq.queue.push(args)
    } as unknown as Stub
    Object.assign(fbq, { push: fbq, loaded: true, version: "2.0", queue: [] })
    w.fbq = fbq
    w._fbq = fbq
    injectScript("https://connect.facebook.net/en_US/fbevents.js")
  }
  w.fbq!("init", id)
  w.fbq!("track", "PageView")
}

/** Load every tracker the visitor consented to (safe to call repeatedly). */
export const initConsentedTracking = () => {
  const trackers: [string, () => void][] = [
    [analytics.googleAnalytics.consentCookie, loadGoogleAnalytics],
    [analytics.googleTagManager.consentCookie, loadTagManager],
    [analytics.facebookPixel.consentCookie, loadFacebookPixel],
  ]
  for (const [cookie, load] of trackers) {
    if (isGranted(cookie) && !loaded.has(cookie)) {
      loaded.add(cookie)
      load()
    }
  }
}
