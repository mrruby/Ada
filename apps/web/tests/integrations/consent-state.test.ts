import { describe, expect, it } from "vitest"

import {
  createConsentRecord,
  hasConsentWithdrawal,
  legacyCookieValues,
  resolveConsentState,
  serializeConsentRecord,
} from "../../src/integrations/consent/consent-state"
import { CANONICAL_CONSENT_COOKIE_NAME, LEGACY_CONSENT_COOKIE_NAMES } from "../../src/integrations/consent/consent-types"

const timestamp = "2026-07-11T12:00:00.000Z"

function cookie(name: string, value: string): string {
  return `${name}=${encodeURIComponent(value)}`
}

describe("pilot consent state", () => {
  it("denies every optional category for an absent cookie state", () => {
    const result = resolveConsentState("", timestamp)

    expect(result.source).toBe("absent")
    expect(result.hasDecision).toBe(false)
    expect(result.record.categories).toEqual({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    })
  })

  it("denies every optional category when the canonical cookie is malformed", () => {
    const result = resolveConsentState(`${CANONICAL_CONSENT_COOKIE_NAME}=%7Bnot-json`, timestamp)

    expect(result.source).toBe("malformed")
    expect(result.hasDecision).toBe(false)
    expect(result.record.categories.analytics).toBe(false)
    expect(result.record.categories.marketing).toBe(false)
  })

  it("uses a complete canonical choice", () => {
    const record = createConsentRecord(
      { functional: true, analytics: true, marketing: false },
      timestamp,
    )
    const result = resolveConsentState(
      cookie(CANONICAL_CONSENT_COOKIE_NAME, serializeConsentRecord(record)),
      timestamp,
    )

    expect(result.source).toBe("canonical")
    expect(result.hasDecision).toBe(true)
    expect(result.record).toEqual(record)
  })

  it("migrates partial and contradictory Gatsby choices conservatively", () => {
    const result = resolveConsentState(
      [
        cookie(LEGACY_CONSENT_COOKIE_NAMES.analytics, "true"),
        cookie(LEGACY_CONSENT_COOKIE_NAMES.tagManager, "false"),
        cookie(LEGACY_CONSENT_COOKIE_NAMES.marketing, "true"),
      ].join("; "),
      timestamp,
    )

    expect(result.source).toBe("legacy")
    expect(result.hasDecision).toBe(true)
    expect(result.record.categories).toEqual({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: true,
    })
  })

  it("migrates both true Google legacy cookies as an analytics grant", () => {
    const result = resolveConsentState(
      [
        cookie(LEGACY_CONSENT_COOKIE_NAMES.analytics, "true"),
        cookie(LEGACY_CONSENT_COOKIE_NAMES.tagManager, "true"),
        cookie(LEGACY_CONSENT_COOKIE_NAMES.marketing, "false"),
      ].join("; "),
      timestamp,
    )

    expect(result.record.categories.analytics).toBe(true)
    expect(result.record.categories.functional).toBe(false)
    expect(result.record.categories.marketing).toBe(false)
  })

  it("mirrors granted and denied choices to every Gatsby rollback cookie", () => {
    const granted = createConsentRecord(
      { functional: true, analytics: true, marketing: true },
      timestamp,
    )
    const denied = createConsentRecord(
      { functional: false, analytics: false, marketing: false },
      timestamp,
    )

    expect(legacyCookieValues(granted)).toEqual({
      [LEGACY_CONSENT_COOKIE_NAMES.analytics]: "true",
      [LEGACY_CONSENT_COOKIE_NAMES.tagManager]: "true",
      [LEGACY_CONSENT_COOKIE_NAMES.marketing]: "true",
    })
    expect(legacyCookieValues(denied)).toEqual({
      [LEGACY_CONSENT_COOKIE_NAMES.analytics]: "false",
      [LEGACY_CONSENT_COOKIE_NAMES.tagManager]: "false",
      [LEGACY_CONSENT_COOKIE_NAMES.marketing]: "false",
    })
  })

  it("keeps an explicit denial as a saved state", () => {
    const denied = createConsentRecord(
      { functional: false, analytics: false, marketing: false },
      timestamp,
    )
    const result = resolveConsentState(
      cookie(CANONICAL_CONSENT_COOKIE_NAME, serializeConsentRecord(denied)),
      timestamp,
    )

    expect(result.source).toBe("canonical")
    expect(result.hasDecision).toBe(true)
    expect(result.record.categories).toEqual(denied.categories)
  })

  it("detects a withdrawn category so the browser can reload without it", () => {
    const granted = createConsentRecord(
      { functional: true, analytics: true, marketing: true },
      timestamp,
    )
    const withdrawn = createConsentRecord(
      { functional: false, analytics: false, marketing: false },
      timestamp,
    )

    expect(hasConsentWithdrawal(granted, withdrawn)).toBe(true)
    expect(hasConsentWithdrawal(withdrawn, granted)).toBe(false)
  })
})
