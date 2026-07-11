import {
  CANONICAL_CONSENT_COOKIE_NAME,
  defaultConsentChoices,
  LEGACY_CONSENT_COOKIE_NAMES,
  type ConsentChoices,
  type ConsentRecord,
  type ResolvedConsent,
} from "./consent-types"

type CookieMap = Readonly<Record<string, string | undefined>>

function createDefaultRecord(timestamp: string): ConsentRecord {
  return {
    version: 1,
    timestamp,
    categories: { ...defaultConsentChoices },
  }
}

function isValidTimestamp(value: unknown): value is string {
  return typeof value === "string" && !Number.isNaN(Date.parse(value))
}

function isConsentChoices(value: unknown): value is ConsentChoices {
  if (!value || typeof value !== "object") {
    return false
  }

  const categories = value as Record<string, unknown>
  return (
    categories.necessary === true &&
    typeof categories.functional === "boolean" &&
    typeof categories.analytics === "boolean" &&
    typeof categories.marketing === "boolean" &&
    Object.keys(categories).length === 4
  )
}

function isConsentRecord(value: unknown): value is ConsentRecord {
  if (!value || typeof value !== "object") {
    return false
  }

  const record = value as Record<string, unknown>
  return (
    record.version === 1 &&
    isValidTimestamp(record.timestamp) &&
    isConsentChoices(record.categories) &&
    Object.keys(record).length === 3
  )
}

export function parseCookieHeader(cookieHeader: string): CookieMap {
  return cookieHeader.split(";").reduce<Record<string, string>>((cookies, part) => {
    const separator = part.indexOf("=")

    if (separator === -1) {
      return cookies
    }

    const name = part.slice(0, separator).trim()
    const value = part.slice(separator + 1).trim()

    if (!name) {
      return cookies
    }

    try {
      cookies[name] = decodeURIComponent(value)
    } catch {
      cookies[name] = value
    }

    return cookies
  }, {})
}

export function createConsentRecord(
  selections: Omit<ConsentChoices, "necessary">,
  timestamp = new Date().toISOString(),
): ConsentRecord {
  return {
    version: 1,
    timestamp,
    categories: {
      necessary: true,
      functional: selections.functional,
      analytics: selections.analytics,
      marketing: selections.marketing,
    },
  }
}

export function serializeConsentRecord(record: ConsentRecord): string {
  return JSON.stringify(record)
}

export function resolveConsentState(
  cookieHeader: string,
  timestamp = new Date().toISOString(),
): ResolvedConsent {
  const cookies = parseCookieHeader(cookieHeader)
  const canonical = cookies[CANONICAL_CONSENT_COOKIE_NAME]

  if (canonical !== undefined) {
    try {
      const parsed: unknown = JSON.parse(canonical)
      if (isConsentRecord(parsed)) {
        return { record: parsed, source: "canonical", hasDecision: true }
      }
    } catch {
      // A malformed canonical value must never fall through to a legacy grant.
    }

    return {
      record: createDefaultRecord(timestamp),
      source: "malformed",
      hasDecision: false,
    }
  }

  const legacyAnalytics = cookies[LEGACY_CONSENT_COOKIE_NAMES.analytics]
  const legacyTagManager = cookies[LEGACY_CONSENT_COOKIE_NAMES.tagManager]
  const legacyMarketing = cookies[LEGACY_CONSENT_COOKIE_NAMES.marketing]
  const hasLegacyValue =
    legacyAnalytics !== undefined ||
    legacyTagManager !== undefined ||
    legacyMarketing !== undefined

  if (!hasLegacyValue) {
    return {
      record: createDefaultRecord(timestamp),
      source: "absent",
      hasDecision: false,
    }
  }

  return {
    record: createConsentRecord(
      {
        functional: false,
        analytics: legacyAnalytics === "true" && legacyTagManager === "true",
        marketing: legacyMarketing === "true",
      },
      timestamp,
    ),
    source: "legacy",
    hasDecision: true,
  }
}

export function legacyCookieValues(record: ConsentRecord): Readonly<Record<string, "true" | "false">> {
  const value = (allowed: boolean): "true" | "false" => (allowed ? "true" : "false")

  return {
    [LEGACY_CONSENT_COOKIE_NAMES.analytics]: value(record.categories.analytics),
    [LEGACY_CONSENT_COOKIE_NAMES.tagManager]: value(record.categories.analytics),
    [LEGACY_CONSENT_COOKIE_NAMES.marketing]: value(record.categories.marketing),
  }
}

export function hasConsentWithdrawal(previous: ConsentRecord, next: ConsentRecord): boolean {
  return (
    (previous.categories.functional && !next.categories.functional) ||
    (previous.categories.analytics && !next.categories.analytics) ||
    (previous.categories.marketing && !next.categories.marketing)
  )
}
