/**
 * Analytics runtime (browser only): PostHog for product analytics, session
 * replay and heatmaps; Meta Pixel standard events mirrored for ad conversions.
 *
 * PostHog loads only after the visitor answers the cookie banner:
 *  - statistics granted → full tracking (cookies, replay, heatmaps);
 *  - statistics denied  → cookieless mode: anonymous page views and catalog
 *    events, nothing stored but PostHog's record of the choice — and nothing
 *    at all when the browser sends Global Privacy Control / Do Not Track.
 * Never call identify(): visitors stay anonymous.
 *
 * Events are typed in analytics-events.ts; call `track(event, properties)`.
 * Events tracked before PostHog is ready are queued; events of undecided
 * visitors are dropped with the page.
 */
import type { PostHog } from "posthog-js"
import { analytics as config } from "@/config/site"
import {
  type AnalyticsEvent,
  type AnalyticsEvents,
  classifyLink,
  isCookielessEvent,
  metaEventFor,
} from "./analytics-events"
import { readConsentState } from "./consent-state"
import { experimentProperties, isVariant } from "./experiments"

const key: string | undefined = import.meta.env.PUBLIC_POSTHOG_KEY

type MetaWindow = Window & { fbq?: (...args: unknown[]) => void }
type PrivacyNavigator = Navigator & { globalPrivacyControl?: boolean }

/** Queued events older than this are dropped instead of sent late. */
const QUEUE_MAX_AGE_MS = 30_000
const QUEUE_MAX_LENGTH = 20

let posthog: PostHog | undefined
let loading: Promise<PostHog> | undefined
let pageviewSent = false
let queue: Array<{ at: number; send: (ph: PostHog) => void }> = []

const hasStatisticsConsent = () => readConsentState(document.cookie).choices.statistics

let experimentProps: Record<string, string> | undefined
/**
 * Experiment and variant of an A/B page (`[data-experiment]` root), stamped
 * on every event of the page. Read once: before_send also sees every replay
 * snapshot.
 */
const pageExperiment = () => {
  if (experimentProps) return experimentProps
  const root = document.querySelector<HTMLElement>("[data-experiment]")
  const variant = root?.dataset.experimentVariant
  experimentProps =
    root?.dataset.experiment && isVariant(variant)
      ? experimentProperties(root.dataset.experiment, variant)
      : {}
  return experimentProps
}

/** Global Privacy Control / Do Not Track: an objection to anonymous counting. */
const objectsToCounting = () =>
  (navigator as PrivacyNavigator).globalPrivacyControl === true || navigator.doNotTrack === "1"

const isPostHogKey = (key: string) => key.startsWith("ph_") || key.startsWith("__ph_")
const removeKeys = (storage: Storage, keep: (key: string) => boolean = () => false) =>
  Object.keys(storage)
    .filter((key) => isPostHogKey(key) && !keep(key))
    .forEach((key) => storage.removeItem(key))

/**
 * Remove what PostHog stored under an earlier consent, for visitors who now
 * object and for whom PostHog therefore never starts (and can't clean up).
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
      cookieless_mode: "on_reject",
      // Sent once by startAnalytics, after the consent sync (avoids doubles).
      capture_pageview: false,
      capture_pageleave: true,
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
      // Without statistics consent only page views and catalog events leave.
      before_send: (event) => {
        if (!event || !(hasStatisticsConsent() || isCookielessEvent(event.event))) return null
        Object.assign((event.properties ??= {}), pageExperiment())
        return event
      },
    })
    return ph
  }))

/**
 * Start PostHog for a visitor who has decided, and keep its consent state in
 * line with the cookie banner (idempotent; call again after every change).
 */
export const startAnalytics = async (statistics: boolean) => {
  if (!key) return
  if (!statistics && !loading && objectsToCounting()) {
    clearPostHogStorage()
    return
  }
  const ph = await load()
  const status = ph.get_explicit_consent_status()
  if (statistics && status !== "granted") ph.opt_in_capturing({ captureEventName: false })
  if (!statistics && status !== "denied") ph.opt_out_capturing()
  // Opting out keeps PostHog's tab-session ids; without consent only the
  // record of the choice (localStorage `__ph_opt_in_out_*`) may stay.
  if (!statistics) removeKeys(window.sessionStorage)
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
