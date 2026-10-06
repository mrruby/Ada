/**
 * Consent model — pure functions only (no DOM), so it is unit-testable.
 *
 * Each optional category is stored in its own cookie holding "true"/"false".
 * The visitor has decided once every category cookie exists; anything less
 * (first visit, or choices made for an older set of tools) shows the banner.
 */

export const consentCategories = ["statistics", "marketing", "media"] as const
export type ConsentCategory = (typeof consentCategories)[number]
export type ConsentChoices = Record<ConsentCategory, boolean>

export const consentCookieNames: Record<ConsentCategory, string> = {
  statistics: "ada-consent-statistics",
  marketing: "ada-consent-marketing",
  media: "ada-consent-media",
}

/**
 * Cookies of earlier consent versions (Gatsby-era GA / GTM / Pixel choices).
 * They no longer count as a decision and are removed on the next save.
 */
export const legacyConsentCookies = [
  "gatsby-gdpr-google-analytics",
  "gatsby-gdpr-google-tagmanager",
  "gatsby-gdpr-facebook-pixel",
] as const

export const CONSENT_MAX_AGE_SECONDS = 365 * 24 * 60 * 60

/** Nothing optional is allowed until the visitor says so. */
export const deniedChoices: ConsentChoices = {
  statistics: false,
  marketing: false,
  media: false,
}

export const allGranted: ConsentChoices = {
  statistics: true,
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
  /** The visitor answered the current banner (every category cookie is set). */
  decided: boolean
}

/** Current choices from a `document.cookie` string; missing = denied. */
export const readConsentState = (cookieHeader: string): ConsentState => {
  const cookies = parseCookieHeader(cookieHeader)
  const choices = { ...deniedChoices }
  let decided = true
  for (const category of consentCategories) {
    const value = cookies[consentCookieNames[category]]
    if (value === undefined) decided = false
    choices[category] = value === "true"
  }
  return { choices, decided }
}

/** True when a category that was granted is now denied (trackers must stop). */
export const isWithdrawal = (previous: ConsentChoices, next: ConsentChoices): boolean =>
  consentCategories.some((category) => previous[category] && !next[category])

/**
 * `document.cookie` strings for the given choices: one per category, plus an
 * expiry for every legacy cookie.
 */
export const consentCookieStrings = (choices: ConsentChoices, secure: boolean): string[] => {
  const attributes = (maxAge: number) =>
    ["Path=/", `Max-Age=${maxAge}`, "SameSite=Lax", ...(secure ? ["Secure"] : [])].join("; ")
  return [
    ...consentCategories.map(
      (category) =>
        `${consentCookieNames[category]}=${choices[category] ? "true" : "false"}; ${attributes(CONSENT_MAX_AGE_SECONDS)}`
    ),
    ...legacyConsentCookies.map((name) => `${name}=; ${attributes(0)}`),
  ]
}
