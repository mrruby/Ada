/**
 * Cookie consent runtime (browser only): stores the visitor's choices, keeps
 * PostHog in line with them (full tracking or cookieless, see analytics.ts)
 * and loads the Meta Pixel only after `marketing` is granted. The consent
 * model itself lives in consent-state.ts (pure, unit-tested).
 *
 * Embeds (YouTube, Vimeo, Google Calendar) ask for the `media` category via
 * `hasConsent("media")` / `grantConsent("media")` / `onConsentChange`.
 */
import { analytics } from "@/config/site"
import { startAnalytics } from "./analytics"
import {
  allGranted,
  type ConsentCategory,
  type ConsentChoices,
  consentCookieStrings,
  deniedChoices,
  isWithdrawal,
  readConsentState,
} from "./consent-state"

export { allGranted, consentCategories, deniedChoices } from "./consent-state"
export type { ConsentCategory, ConsentChoices } from "./consent-state"

const CHANGE_EVENT = "consent:change"

type Queue = ((...args: unknown[]) => void) & Record<string, unknown>
type MetaWindow = Window & { fbq?: Queue; _fbq?: unknown }

const w = window as MetaWindow
let pixelLoaded = false

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

/**
 * Apply the choices of a visitor who has decided (idempotent): PostHog with
 * or without cookies, the Meta Pixel once marketing is granted.
 */
export const applyConsent = (choices: ConsentChoices) => {
  void startAnalytics(choices.statistics)
  if (!choices.marketing && w.fbq) w.fbq("consent", "revoke")
  if (choices.marketing && !pixelLoaded) {
    pixelLoaded = true
    loadFacebookPixel()
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
