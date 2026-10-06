/**
 * The analytics event catalog — pure functions only (no DOM), unit-tested.
 *
 * PostHog autocaptures page views, page leaves (with scroll depth), clicks,
 * rage clicks and UTM/referrer data. The events below are the business
 * moments autocapture can't name; keep the list short and the names stable
 * (snake_case, object_action), because dashboards and funnels depend on them.
 */

export type AnalyticsEvents = {
  /** A MailerLite sign-up form was accepted by MailerLite. */
  lead_form_submitted: { form_id: string }
  /** A MailerLite sign-up was rejected or the request failed. */
  lead_form_failed: { form_id: string; reason: "rejected" | "network" }
  /** The Netlify contact form was sent (`source` = ?source= campaign). */
  contact_form_submitted: { source: string }
  /** A click on a link to a checkout (easy.tools, easycart, mailingr, OTO). */
  checkout_started: { product: string; destination: string }
  /** A click on a link to book a call. */
  booking_opened: { provider: string }
  /** The quiz reached its result screen. */
  quiz_completed: { result: string }
  /** The visitor started a YouTube/Vimeo player. */
  video_played: { provider: string; video_id: string }
  /** The one-time offer countdown was shown (once per page view). */
  oto_offer_shown: { campaign: string; seconds_left: number }
}

export type AnalyticsEvent = keyof AnalyticsEvents

const catalog: Record<AnalyticsEvent, true> = {
  lead_form_submitted: true,
  lead_form_failed: true,
  contact_form_submitted: true,
  checkout_started: true,
  booking_opened: true,
  quiz_completed: true,
  video_played: true,
  oto_offer_shown: true,
}

/**
 * Events sent for visitors without statistics consent (cookieless mode):
 * page views/leaves and the catalog above. Autocaptured clicks, heatmaps,
 * rage clicks, web vitals and errors need consent.
 */
export const isCookielessEvent = (name: string) =>
  name === "$pageview" || name === "$pageleave" || Object.hasOwn(catalog, name)

type LinkEvent =
  | { event: "checkout_started"; properties: AnalyticsEvents["checkout_started"] }
  | { event: "booking_opened"; properties: AnalyticsEvents["booking_opened"] }

const segments = (url: URL) => url.pathname.split("/").filter(Boolean)

/** Checkout or booking event for a link target, or null for any other link. */
export const classifyLink = (url: URL, siteOrigin: string): LinkEvent | null => {
  const host = url.hostname.replace(/^www\./, "")
  const path = segments(url)
  const checkout = (product: string) =>
    ({ event: "checkout_started", properties: { product, destination: host } }) as const

  if (url.origin === siteOrigin) {
    return url.pathname === "/api/oto/checkout"
      ? checkout(`${url.searchParams.get("campaign") ?? "oto"}-oto`)
      : null
  }
  // https://cart.easy.tools/checkout/<shop>/<product>, same for easycart
  if (host === "cart.easy.tools" || host === "app.easycart.pl") {
    return checkout(path[0] === "checkout" && path[2] ? path[2] : path.join("/"))
  }
  if (host === "easl.ink") return checkout(`easl.ink/${path[0] ?? ""}`)
  // https://<brand>.mailingr.co/c/<product>
  if (host.endsWith(".mailingr.co")) return checkout(path[0] === "c" ? (path[1] ?? "") : host)

  if (
    host === "calendar.app.google" ||
    (host === "calendar.google.com" && path.includes("appointments"))
  ) {
    return { event: "booking_opened", properties: { provider: "google_calendar" } }
  }
  if (host === "koalendar.com")
    return { event: "booking_opened", properties: { provider: "koalendar" } }
  return null
}

/** Meta Pixel standard event mirrored from an analytics event, if any. */
export const metaEventFor = <E extends AnalyticsEvent>(
  event: E,
  properties: AnalyticsEvents[E]
): [name: string, parameters: Record<string, string>] | null => {
  if (event === "lead_form_submitted") {
    return [
      "Lead",
      { content_name: (properties as AnalyticsEvents["lead_form_submitted"]).form_id },
    ]
  }
  if (event === "checkout_started") {
    return [
      "InitiateCheckout",
      { content_name: (properties as AnalyticsEvents["checkout_started"]).product },
    ]
  }
  return null
}

/** Provider and id of a YouTube/Vimeo player URL (null for other embeds). */
export const videoFromPlayerUrl = (src: string): AnalyticsEvents["video_played"] | null => {
  const url = new URL(src)
  const [kind, id] = segments(url)
  if (url.hostname === "player.vimeo.com" && kind === "video" && id) {
    return { provider: "vimeo", video_id: id }
  }
  if (url.hostname.endsWith("youtube-nocookie.com") && kind === "embed" && id) {
    return { provider: "youtube", video_id: id }
  }
  return null
}

/** MailerLite form id from a form action (…/jsonp/<account>/forms/<id>/subscribe). */
export const mailerLiteFormId = (action: string) =>
  action.match(/\/forms\/(\d+)\//)?.[1] ?? "unknown"
