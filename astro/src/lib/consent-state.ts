/**
 * Consent model — pure functions only (no DOM), so it is unit-testable.
 *
 * Each optional category is stored in its own cookie holding "true"/"false".
 * The first three cookie names come from the Gatsby site, so returning
 * visitors keep the decision they already made; `media` is new.
 */

export const consentCategories = ["statistics", "preferences", "marketing", "media"] as const
export type ConsentCategory = (typeof consentCategories)[number]
export type ConsentChoices = Record<ConsentCategory, boolean>

export const consentCookieNames: Record<ConsentCategory, string> = {
  statistics: "gatsby-gdpr-google-analytics",
  preferences: "gatsby-gdpr-google-tagmanager",
  marketing: "gatsby-gdpr-facebook-pixel",
  media: "ada-consent-media",
}

export const CONSENT_MAX_AGE_SECONDS = 365 * 24 * 60 * 60

/** Nothing optional is allowed until the visitor says so. */
export const deniedChoices: ConsentChoices = {
  statistics: false,
  preferences: false,
  marketing: false,
  media: false,
}

export const allGranted: ConsentChoices = {
  statistics: true,
  preferences: true,
  marketing: true,
  media: true,
}

export const parseCookieHeader = (header: string): Record<string, string> => {
  const cookies: Record<string, string> = {}
  for (const part of header.split(";")) {
    const index = part.indexOf("=")
    if (index < 0) continue
    const name = part.slice(0, index).trim()
    if (!name) continue
    try {
      cookies[name] = decodeURIComponent(part.slice(index + 1).trim())
    } catch {
      cookies[name] = part.slice(index + 1).trim()
    }
  }
  return cookies
}

export type ConsentState = {
  choices: ConsentChoices
  /** The visitor answered the banner (any category cookie is present). */
  decided: boolean
}

/** Current choices from a `document.cookie` string; missing = denied. */
export const readConsentState = (cookieHeader: string): ConsentState => {
  const cookies = parseCookieHeader(cookieHeader)
  const choices = { ...deniedChoices }
  let decided = false
  for (const category of consentCategories) {
    const value = cookies[consentCookieNames[category]]
    if (value === undefined) continue
    decided = true
    choices[category] = value === "true"
  }
  return { choices, decided }
}

/** True when a category that was granted is now denied (trackers must stop). */
export const isWithdrawal = (previous: ConsentChoices, next: ConsentChoices): boolean =>
  consentCategories.some((category) => previous[category] && !next[category])

/** `Set-Cookie`-style strings for `document.cookie`, one per category. */
export const consentCookieStrings = (choices: ConsentChoices, secure: boolean): string[] =>
  consentCategories.map((category) =>
    [
      `${consentCookieNames[category]}=${choices[category] ? "true" : "false"}`,
      "Path=/",
      `Max-Age=${CONSENT_MAX_AGE_SECONDS}`,
      "SameSite=Lax",
      ...(secure ? ["Secure"] : []),
    ].join("; ")
  )

type GoogleConsent = "granted" | "denied"
const flag = (value: boolean): GoogleConsent => (value ? "granted" : "denied")

/** Google Consent Mode v2 signals for the given choices. */
export const googleConsentMode = (choices: ConsentChoices) => ({
  analytics_storage: flag(choices.statistics),
  ad_storage: flag(choices.marketing),
  ad_user_data: flag(choices.marketing),
  ad_personalization: flag(choices.marketing),
  functionality_storage: flag(choices.preferences),
  personalization_storage: flag(choices.preferences),
  security_storage: "granted" as const,
})
