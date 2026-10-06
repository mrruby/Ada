/**
 * Cookie consent runtime (browser only): stores the visitor's choices,
 * forwards them to Google Consent Mode v2 / Meta, and loads each third party
 * only after its category is granted. The consent model itself lives in
 * consent-state.ts (pure, unit-tested).
 *
 * Embeds (YouTube, Vimeo, Google Calendar) ask for the `media` category via
 * `hasConsent("media")` / `grantConsent("media")` / `onConsentChange`.
 */
import { analytics } from "@/config/site"
import {
  allGranted,
  type ConsentCategory,
  type ConsentChoices,
  consentCookieStrings,
  deniedChoices,
  googleConsentMode,
  isWithdrawal,
  readConsentState,
} from "./consent-state"

export { allGranted, consentCategories, deniedChoices } from "./consent-state"
export type { ConsentCategory, ConsentChoices } from "./consent-state"

const CHANGE_EVENT = "consent:change"

type Queue = ((...args: unknown[]) => void) & Record<string, unknown>
type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: Queue
  _fbq?: unknown
  hj?: Queue
  _hjSettings?: { hjid: number; hjsv: number }
}

const w = window as AnalyticsWindow
const loaded = new Set<string>()

export const getConsent = () => readConsentState(document.cookie)
export const hasConsent = (category: ConsentCategory) => getConsent().choices[category]

export const onConsentChange = (callback: (choices: ConsentChoices) => void) =>
  document.addEventListener(CHANGE_EVENT, (event) =>
    callback((event as CustomEvent<ConsentChoices>).detail)
  )

const injectScript = (src: string) => {
  const script = document.createElement("script")
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

/** gtag() must push the `arguments` object itself, not an array. */
const gtag = (...args: unknown[]) => {
  w.dataLayer = w.dataLayer || []
  if (!w.gtag) {
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments)
    }
  }
  w.gtag(...args)
}

let consentModeReady = false
const applyGoogleConsentMode = (choices: ConsentChoices) => {
  if (!consentModeReady) {
    gtag("consent", "default", googleConsentMode(deniedChoices))
    consentModeReady = true
  }
  gtag("consent", "update", googleConsentMode(choices))
}

const loadGoogleAnalytics = () => {
  const { id } = analytics.googleAnalytics
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${id}`)
  gtag("js", new Date())
  gtag("config", id, { anonymize_ip: true })
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

/** Meta's official stub: calls queue as `arguments` until fbevents.js loads. */
const metaPixel = (): Queue => {
  if (!w.fbq) {
    const fbq = function () {
      // eslint-disable-next-line prefer-rest-params
      const args = arguments
      if (typeof fbq.callMethod === "function") {
        ;(fbq.callMethod as (...a: unknown[]) => void).apply(fbq, args as never)
      } else {
        ;(fbq.queue as unknown[]).push(args)
      }
    } as unknown as Queue
    Object.assign(fbq, { push: fbq, loaded: true, version: "2.0", queue: [] })
    w.fbq = fbq
    w._fbq = fbq
  }
  return w.fbq
}

const loadFacebookPixel = () => {
  const fbq = metaPixel()
  injectScript("https://connect.facebook.net/en_US/fbevents.js")
  fbq("consent", "grant")
  fbq("init", analytics.facebookPixel.id)
  fbq("track", "PageView")
}

/** Pages opt into Hotjar with BaseLayout's `hotjarId` prop. */
const loadHotjar = () => {
  const id = Number(document.querySelector<HTMLMetaElement>('meta[name="ada:hotjar"]')?.content)
  if (!id) return
  const { snippetVersion } = analytics.hotjar
  w.hj =
    w.hj ||
    (function () {
      // eslint-disable-next-line prefer-rest-params
      ;((w.hj!.q as unknown[]) ||= []).push(arguments)
    } as unknown as Queue)
  w._hjSettings = { hjid: id, hjsv: snippetVersion }
  injectScript(`https://static.hotjar.com/c/hotjar-${id}.js?sv=${snippetVersion}`)
}

const trackers: { key: string; category: ConsentCategory; load: () => void }[] = [
  { key: "ga", category: "statistics", load: loadGoogleAnalytics },
  { key: "hotjar", category: "statistics", load: loadHotjar },
  { key: "gtm", category: "preferences", load: loadTagManager },
  { key: "pixel", category: "marketing", load: loadFacebookPixel },
]

/** Sync Consent Mode and load every tracker the choices allow (idempotent). */
export const applyConsent = (choices: ConsentChoices) => {
  applyGoogleConsentMode(choices)
  if (!choices.marketing && w.fbq) w.fbq("consent", "revoke")
  for (const tracker of trackers) {
    if (choices[tracker.category] && !loaded.has(tracker.key)) {
      loaded.add(tracker.key)
      tracker.load()
    }
  }
}

/**
 * Store new choices. Withdrawing a granted category reloads the page, because
 * scripts that already ran can't be unloaded.
 */
export const saveConsent = (choices: ConsentChoices) => {
  const previous = getConsent().choices
  const secure = window.location.protocol === "https:"
  for (const cookie of consentCookieStrings(choices, secure)) document.cookie = cookie
  document.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: choices }))
  if (isWithdrawal(previous, choices)) {
    window.location.reload()
    return
  }
  applyConsent(choices)
}

export const grantConsent = (category: ConsentCategory) =>
  saveConsent({ ...getConsent().choices, [category]: true })

export const acceptAll = () => saveConsent(allGranted)
export const rejectOptional = () => saveConsent(deniedChoices)
