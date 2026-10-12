/**
 * Analytics runtime (browser only): PostHog for product analytics, session
 * replay and heatmaps; Meta Pixel standard events mirrored for ad conversions.
 *
 * posthog-js is imported (a separate chunk) only once the visitor has granted
 * `statistics`, now or on an earlier visit. Without that consent no PostHog
 * code runs and nothing is sent; what an earlier consent left in cookies or
 * storage is removed. Never call identify(): visitors stay anonymous.
 *
 * Events are typed in analytics-events.ts; call `track(event, properties)`.
 * Events tracked before PostHog is ready are queued; events of visitors
 * without statistics consent are dropped with the page.
 */
import type { PostHog } from "posthog-js"
import { analytics as config } from "@/config/site"
import {
  type AnalyticsEvent,
  type AnalyticsEvents,
  classifyLink,
  metaEventFor,
} from "./analytics-events"
import { readConsentState } from "./consent-state"

const key: string | undefined = import.meta.env.PUBLIC_POSTHOG_KEY

type MetaWindow = Window & { fbq?: (...args: unknown[]) => void }

/** Queued events older than this are dropped instead of sent late. */
const QUEUE_MAX_AGE_MS = 30_000
const QUEUE_MAX_LENGTH = 20

let posthog: PostHog | undefined
let loading: Promise<PostHog> | undefined
let pageviewSent = false
let queue: Array<{ at: number; send: (ph: PostHog) => void }> = []

const hasStatisticsConsent = () => readConsentState(document.cookie).choices.statistics

const isPostHogKey = (key: string) => key.startsWith("ph_") || key.startsWith("__ph_")
const removeKeys = (storage: Storage) =>
  Object.keys(storage)
    .filter(isPostHogKey)
    .forEach((key) => storage.removeItem(key))

/**
 * Remove what PostHog stored under an earlier consent: without statistics
 * consent PostHog never starts, so it can't clean up after itself.
 */
const clearPostHogStorage = () => {
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0].trim()
    if (name.startsWith("ph_")) document.cookie = `${name}=; Path=/; Max-Age=0`
  }
  removeKeys(window.localStorage)
  removeKeys(window.sessionStorage)
}

const load = () =>
  (loading ||= import("posthog-js").then(({ default: ph }) => {
    ph.init(key!, {
      api_host: config.posthog.apiHost,
      ui_host: config.posthog.uiHost,
      defaults: "2026-08-30",
      // Sent once by startAnalytics, after the consent sync (avoids doubles).
      capture_pageview: false,
      capture_pageleave: true,
      // Uncaught errors for Error tracking; before_send drops them without consent.
      capture_exceptions: true,
      person_profiles: "identified_only",
      // The cookie stays on adrianna.com.pl (not shared with sklep.*).
      cross_subdomain_cookie: false,
      // Masks gclid/fbclid… and the OTO token (?oto=) in captured URLs.
      mask_personal_data_properties: true,
      custom_personal_data_properties: ["oto"],
      session_recording: {
        maskAllInputs: true,
        recordBody: false,
        recordHeaders: false,
        captureJsonLd: false,
        maskCapturedNetworkRequestFn: (request) => ({
          ...request,
          name: request.name.replace(/([?&]oto=)[^&#]*/, "$1[masked]"),
        }),
      },
      // Withdrawing consent reloads the page; until then nothing more leaves.
      before_send: (event) => (event && hasStatisticsConsent() ? event : null),
    })
    return ph
  }))

/**
 * Apply the visitor's statistics choice (idempotent; call again after every
 * change): import and start PostHog once it is granted, otherwise make sure
 * nothing of PostHog's is left on the device.
 */
export const startAnalytics = async (statistics: boolean) => {
  if (!key) return
  if (!statistics) {
    if (loading) (await loading).opt_out_capturing()
    clearPostHogStorage()
    return
  }
  const ph = await load()
  if (ph.get_explicit_consent_status() !== "granted") {
    ph.opt_in_capturing({ captureEventName: false })
  }
  if (!pageviewSent) {
    pageviewSent = true
    ph.capture("$pageview", { title: document.title })
  }
  posthog = ph
  const fresh = queue.filter((item) => Date.now() - item.at < QUEUE_MAX_AGE_MS)
  queue = []
  fresh.forEach((item) => item.send(ph))
}

/**
 * Record a business event in PostHog (and its Meta Pixel counterpart when
 * marketing is allowed). `beforeNavigation` sends it right away with
 * sendBeacon, for events followed by a page change.
 */
export const track = <E extends AnalyticsEvent>(
  event: E,
  properties: AnalyticsEvents[E],
  { beforeNavigation = false } = {}
) => {
  const send = (ph: PostHog) =>
    ph.capture(
      event,
      properties,
      beforeNavigation ? { send_instantly: true, transport: "sendBeacon" } : undefined
    )
  if (posthog) send(posthog)
  else if (queue.length < QUEUE_MAX_LENGTH) queue.push({ at: Date.now(), send })

  const meta = metaEventFor(event, properties)
  const { fbq } = window as MetaWindow
  if (meta && fbq && readConsentState(document.cookie).choices.marketing) fbq("track", ...meta)
}

/** Track checkout and booking link clicks site-wide (one delegated listener). */
export const trackConversionLinks = () => {
  document.addEventListener(
    "click",
    (event) => {
      const link = (event.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]")
      if (!link) return
      const match = classifyLink(new URL(link.href, window.location.href), window.location.origin)
      if (match) track(match.event, match.properties, { beforeNavigation: true })
    },
    { capture: true }
  )
}
