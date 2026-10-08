/**
 * A/B experiments — pure functions only (no DOM), shared by the Netlify Edge
 * Function that splits traffic (netlify/edge-functions) and the browser, and
 * unit-tested. The edge bundle runs on Deno: relative `.ts` imports only.
 *
 * Assignment is sticky (a first-party cookie holding just "a" or "b") only
 * for visitors who granted the `statistics` consent; everyone else is drawn
 * again on each page load and nothing is stored on their device, as the
 * privacy policy promises. Known bots always get variant A.
 */
import { parseCookieHeader, readConsentState } from "./consent-state.ts"

export const experimentVariants = ["a", "b"] as const
export type ExperimentVariant = (typeof experimentVariants)[number]

export type Experiment = {
  /** Stable key: PostHog dashboards and the `$feature/<name>` property use it. */
  name: string
  cookie: string
  /** Share of visitors who get variant B (0–1). */
  shareB: number
  /** Static page served (rewritten) for each variant. */
  pages: Record<ExperimentVariant, string>
}

export const MAGIC_JESIEN_EXPERIMENT: Experiment = {
  name: "magic-jesien-ab",
  cookie: "ada-ab-magic-jesien",
  shareB: 0.2,
  pages: { a: "/magic-jesien/", b: "/magic-jesien-b/" },
}

/** Running experiments, looked up by the `data-experiment` of a page. */
export const experiments: Experiment[] = [MAGIC_JESIEN_EXPERIMENT]

/** `?wariant=a|b` forces a variant (QA, previews, shared links). */
export const EXPERIMENT_OVERRIDE_PARAM = "wariant"
export const EXPERIMENT_COOKIE_MAX_AGE_SECONDS = 60 * 24 * 60 * 60

const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|meta-externalagent|embedly|preview|lighthouse|pagespeed|headlesschrome|prerender/i

export const isBot = (userAgent: string) => !userAgent || BOT_PATTERN.test(userAgent)

export const isVariant = (value: unknown): value is ExperimentVariant =>
  experimentVariants.includes(value as ExperimentVariant)

/** Draw a variant from a random number in [0, 1). */
export const drawVariant = (experiment: Experiment, random: number): ExperimentVariant =>
  random < experiment.shareB ? "b" : "a"

export type Assignment = {
  variant: ExperimentVariant
  /** What to do with the assignment cookie on this response. */
  cookie: "set" | "delete" | "keep"
}

/** The variant for one request, and whether to store or drop the cookie. */
export const assignVariant = (
  experiment: Experiment,
  request: { cookieHeader: string; search: string; userAgent: string; random: number }
): Assignment => {
  const stored = parseCookieHeader(request.cookieHeader)[experiment.cookie]
  if (isBot(request.userAgent)) return { variant: "a", cookie: "keep" }

  const sticky = readConsentState(request.cookieHeader).choices.statistics
  const forced = new URLSearchParams(request.search).get(EXPERIMENT_OVERRIDE_PARAM)
  const variant = isVariant(forced)
    ? forced
    : sticky && isVariant(stored)
      ? stored
      : drawVariant(experiment, request.random)

  if (sticky) return { variant, cookie: stored === variant ? "keep" : "set" }
  return { variant, cookie: stored === undefined ? "keep" : "delete" }
}

/** `document.cookie` string that stores (or, with `null`, removes) a variant. */
export const experimentCookieString = (
  experiment: Experiment,
  variant: ExperimentVariant | null,
  secure: boolean
) =>
  [
    `${experiment.cookie}=${variant ?? ""}`,
    "Path=/",
    `Max-Age=${variant ? EXPERIMENT_COOKIE_MAX_AGE_SECONDS : 0}`,
    "SameSite=Lax",
    ...(secure ? ["Secure"] : []),
  ].join("; ")

/**
 * Properties stamped on every PostHog event of an experiment page. The
 * `$feature/<name>` pair (control/test) lets PostHog Experiments analyse it
 * as a custom-assigned flag.
 */
export const experimentProperties = (name: string, variant: ExperimentVariant) => ({
  experiment: name,
  experiment_variant: variant,
  [`$feature/${name}`]: variant === "a" ? "control" : "test",
})
