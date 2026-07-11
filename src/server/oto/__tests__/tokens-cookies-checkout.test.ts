import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { buildEasyCheckoutUrlWithPromo } from "../checkout"
import { getCampaignConfig } from "../config"
import {
  clearSessionCookie,
  createSessionCookie,
  OTO_SESSION_COOKIE,
  readSessionCookie,
} from "../cookies"
import { createOtoToken, getSubjectHash, verifyOtoToken } from "../tokens"

const NOW = new Date("2026-01-15T12:00:00.000Z")
const NOW_SECONDS = Math.floor(NOW.getTime() / 1000)

describe("OTO tokens", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(NOW)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("accepts a valid signed token for the expected campaign", () => {
    const payload = {
      campaignId: "wyzwanie",
      subjectId: "Customer@example.com",
      iat: NOW_SECONDS - 60,
      exp: NOW_SECONDS + 60,
    }

    expect(verifyOtoToken(createOtoToken(payload), "wyzwanie")).toEqual(payload)
  })

  it("rejects tampering, a campaign mismatch, a blank subject, and malformed payloads", () => {
    const validToken = createOtoToken({
      campaignId: "wyzwanie",
      subjectId: "customer@example.com",
      iat: NOW_SECONDS - 60,
      exp: NOW_SECONDS + 60,
    })
    const blankSubjectToken = createOtoToken({
      campaignId: "wyzwanie",
      subjectId: "   ",
      iat: NOW_SECONDS - 60,
      exp: NOW_SECONDS + 60,
    })

    expect(verifyOtoToken(`${validToken}x`, "wyzwanie")).toBeNull()
    expect(verifyOtoToken(validToken, "another-campaign")).toBeNull()
    expect(verifyOtoToken(blankSubjectToken, "wyzwanie")).toBeNull()
    expect(verifyOtoToken("not-a-signed-token", "wyzwanie")).toBeNull()
  })

  it("rejects a token exactly at its exp timestamp", () => {
    const token = createOtoToken({
      campaignId: "wyzwanie",
      subjectId: "customer@example.com",
      iat: NOW_SECONDS - 60,
      exp: NOW_SECONDS,
    })

    expect(verifyOtoToken(token, "wyzwanie")).toBeNull()
  })

  it("CURRENT CONTRACT: validates exp but accepts a future iat", () => {
    const payload = {
      campaignId: "wyzwanie",
      subjectId: "customer@example.com",
      iat: NOW_SECONDS + 3600,
      exp: NOW_SECONDS + 7200,
    }

    expect(verifyOtoToken(createOtoToken(payload), "wyzwanie")).toEqual(payload)
  })

  it("normalizes the subject before producing a stable, campaign-scoped hash", () => {
    expect(getSubjectHash("wyzwanie", " Customer@Example.com ")).toBe(
      getSubjectHash("wyzwanie", "customer@example.com")
    )
    expect(getSubjectHash("wyzwanie", "customer@example.com")).not.toBe(
      getSubjectHash("other-campaign", "customer@example.com")
    )
  })
})

describe("OTO session cookies", () => {
  beforeEach(() => {
    process.env.NODE_ENV = "test"
  })

  afterEach(() => {
    process.env.NODE_ENV = "test"
  })

  it("signs the ada_oto_session cookie for 180 days with HttpOnly and SameSite=Lax", () => {
    const payload = {
      campaignId: "wyzwanie",
      subjectHash: "subject-hash",
      iat: NOW_SECONDS,
    }

    const cookie = createSessionCookie(payload)

    expect(cookie).toMatch(
      /^ada_oto_session=[^;]+; Path=\/; Max-Age=15552000; HttpOnly; SameSite=Lax$/
    )
    expect(readSessionCookie({ headers: { cookie } }, "wyzwanie")).toEqual(
      payload
    )
    expect(OTO_SESSION_COOKIE).toBe("ada_oto_session")
  })

  it("adds Secure in production to both creation and clearing cookies", () => {
    process.env.NODE_ENV = "production"

    expect(
      createSessionCookie({
        campaignId: "wyzwanie",
        subjectHash: "subject-hash",
        iat: NOW_SECONDS,
      })
    ).toMatch(/; HttpOnly; SameSite=Lax; Secure$/)
    expect(clearSessionCookie()).toBe(
      "ada_oto_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax; Secure"
    )
  })

  it("rejects a tampered signature and a cookie for another campaign", () => {
    const cookie = createSessionCookie({
      campaignId: "wyzwanie",
      subjectHash: "subject-hash",
      iat: NOW_SECONDS,
    })
    const encodedValue = cookie.match(/^ada_oto_session=([^;]+)/)?.[1]
    expect(encodedValue).toBeDefined()

    const signedValue = decodeURIComponent(encodedValue as string)
    const [encodedPayload, signature] = signedValue.split(".")
    const replacement = signature.startsWith("A") ? "B" : "A"
    const tamperedValue = `${encodedPayload}.${replacement}${signature.slice(1)}`

    expect(
      readSessionCookie(
        {
          headers: {
            cookie: `other=value; ada_oto_session=${encodeURIComponent(
              tamperedValue
            )}`,
          },
        },
        "wyzwanie"
      )
    ).toBeNull()
    expect(
      readSessionCookie({ headers: { cookie } }, "other-campaign")
    ).toBeNull()
  })
})

describe("OTO checkout URL", () => {
  it("preserves existing query parameters and sets the promo parameter", () => {
    const campaign = getCampaignConfig("wyzwanie")
    expect(campaign).not.toBeNull()

    expect(buildEasyCheckoutUrlWithPromo(campaign!, "OTO-WYZ-ABCDE12345")).toBe(
      "https://checkout.example.test/oto?source=campaign&promo=OTO-WYZ-ABCDE12345"
    )
  })
})
