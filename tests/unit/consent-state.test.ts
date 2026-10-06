import { describe, expect, it } from "vitest"
import {
  allGranted,
  consentCookieNames,
  consentCookieStrings,
  deniedChoices,
  googleConsentMode,
  isWithdrawal,
  parseCookieHeader,
  readConsentState,
} from "@/lib/consent-state"

const header = (cookies: Record<string, string>) =>
  Object.entries(cookies)
    .map(([name, value]) => `${name}=${value}`)
    .join("; ")

describe("readConsentState", () => {
  it("denies everything and asks again when no consent cookie exists", () => {
    expect(readConsentState("")).toEqual({ choices: deniedChoices, decided: false })
    expect(readConsentState("other=1; session=abc")).toEqual({
      choices: deniedChoices,
      decided: false,
    })
  })

  it("keeps decisions made on the Gatsby site (legacy cookie names)", () => {
    const state = readConsentState(
      header({
        "gatsby-gdpr-google-analytics": "true",
        "gatsby-gdpr-google-tagmanager": "false",
        "gatsby-gdpr-facebook-pixel": "true",
      })
    )
    expect(state.decided).toBe(true)
    expect(state.choices).toEqual({
      statistics: true,
      preferences: false,
      marketing: true,
      // New category: not granted until the visitor allows it.
      media: false,
    })
  })

  it("treats anything other than 'true' as denied", () => {
    const state = readConsentState(header({ [consentCookieNames.media]: "yes" }))
    expect(state).toEqual({ choices: deniedChoices, decided: true })
  })
})

describe("parseCookieHeader", () => {
  it("decodes values and tolerates malformed ones", () => {
    expect(parseCookieHeader("a=1; b=hello%20world; c=%E0%A4%A; =x; broken")).toEqual({
      a: "1",
      b: "hello world",
      c: "%E0%A4%A",
    })
  })
})

describe("isWithdrawal", () => {
  it("detects a granted category being turned off", () => {
    expect(isWithdrawal(allGranted, { ...allGranted, marketing: false })).toBe(true)
  })

  it("is false when consent only grows or stays the same", () => {
    expect(isWithdrawal(deniedChoices, allGranted)).toBe(false)
    expect(isWithdrawal(allGranted, allGranted)).toBe(false)
  })
})

describe("consentCookieStrings", () => {
  it("writes one year-long cookie per category, Secure only on https", () => {
    const plain = consentCookieStrings({ ...deniedChoices, statistics: true }, false)
    expect(plain).toHaveLength(4)
    expect(plain[0]).toBe(
      "gatsby-gdpr-google-analytics=true; Path=/; Max-Age=31536000; SameSite=Lax"
    )
    expect(plain.every((cookie) => !cookie.includes("Secure"))).toBe(true)
    expect(consentCookieStrings(allGranted, true).every((c) => c.endsWith("; Secure"))).toBe(true)
  })
})

describe("googleConsentMode", () => {
  it("maps categories to Consent Mode v2 signals", () => {
    expect(googleConsentMode(deniedChoices)).toEqual({
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
    })
    const marketingOnly = googleConsentMode({ ...deniedChoices, marketing: true })
    expect(marketingOnly.ad_storage).toBe("granted")
    expect(marketingOnly.ad_user_data).toBe("granted")
    expect(marketingOnly.analytics_storage).toBe("denied")
  })
})
