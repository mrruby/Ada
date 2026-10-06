import { describe, expect, it } from "vitest"
import {
  allGranted,
  consentCookieNames,
  consentCookieStrings,
  deniedChoices,
  isWithdrawal,
  legacyConsentCookies,
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

  it("is decided only when every category cookie exists", () => {
    const state = readConsentState(
      header({
        [consentCookieNames.statistics]: "true",
        [consentCookieNames.marketing]: "false",
        [consentCookieNames.media]: "true",
      })
    )
    expect(state).toEqual({
      choices: { statistics: true, marketing: false, media: true },
      decided: true,
    })
    expect(readConsentState(header({ [consentCookieNames.media]: "true" })).decided).toBe(false)
  })

  it("asks again after a Gatsby-era decision (the tools behind the categories changed)", () => {
    const state = readConsentState(
      header({
        "gatsby-gdpr-google-analytics": "true",
        "gatsby-gdpr-google-tagmanager": "true",
        "gatsby-gdpr-facebook-pixel": "true",
        [consentCookieNames.media]: "true",
      })
    )
    expect(state.decided).toBe(false)
    expect(state.choices.statistics).toBe(false)
    expect(state.choices.marketing).toBe(false)
  })

  it("treats anything other than 'true' as denied", () => {
    const state = readConsentState(
      header({
        [consentCookieNames.statistics]: "yes",
        [consentCookieNames.marketing]: "1",
        [consentCookieNames.media]: "false",
      })
    )
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
    expect(plain.slice(0, 3)).toEqual([
      "ada-consent-statistics=true; Path=/; Max-Age=31536000; SameSite=Lax",
      "ada-consent-marketing=false; Path=/; Max-Age=31536000; SameSite=Lax",
      "ada-consent-media=false; Path=/; Max-Age=31536000; SameSite=Lax",
    ])
    expect(plain.every((cookie) => !cookie.includes("Secure"))).toBe(true)
    expect(consentCookieStrings(allGranted, true).every((c) => c.endsWith("; Secure"))).toBe(true)
  })

  it("expires every legacy Gatsby consent cookie", () => {
    const expired = consentCookieStrings(allGranted, false).slice(3)
    expect(expired).toEqual(
      legacyConsentCookies.map((name) => `${name}=; Path=/; Max-Age=0; SameSite=Lax`)
    )
  })
})
