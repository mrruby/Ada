import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { signCookiePayload, signTokenPayload } from "@/lib/oto/crypto"
import {
  createAnonymousSubjectHash,
  createOtoToken,
  getSubjectHash,
  verifyOtoToken,
  type OtoTokenPayload,
} from "@/lib/oto/tokens"

const NOW = new Date("2026-03-01T12:00:00.000Z")
const nowSeconds = Math.floor(+NOW / 1000)

const payload = (overrides: Partial<OtoTokenPayload> = {}): OtoTokenPayload => ({
  campaignId: "wyzwanie",
  subjectId: "ada@example.com",
  iat: nowSeconds - 60,
  exp: nowSeconds + 3600,
  ...overrides,
})

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(NOW)
})

afterEach(() => {
  vi.useRealTimers()
})

describe("verifyOtoToken", () => {
  it("accepts a valid token for its campaign", () => {
    const token = createOtoToken(payload())
    expect(verifyOtoToken(token, "wyzwanie")).toEqual(payload())
  })

  it("rejects a token for another campaign", () => {
    const token = createOtoToken(payload({ campaignId: "other" }))
    expect(verifyOtoToken(token, "wyzwanie")).toBeNull()
  })

  it("rejects an expired token (exp is exclusive)", () => {
    expect(verifyOtoToken(createOtoToken(payload({ exp: nowSeconds - 1 })), "wyzwanie")).toBeNull()
    expect(verifyOtoToken(createOtoToken(payload({ exp: nowSeconds })), "wyzwanie")).toBeNull()
    expect(
      verifyOtoToken(createOtoToken(payload({ exp: nowSeconds + 1 })), "wyzwanie")
    ).not.toBeNull()
  })

  it("expires as time passes", () => {
    const token = createOtoToken(payload({ exp: nowSeconds + 10 }))
    expect(verifyOtoToken(token, "wyzwanie")).not.toBeNull()
    vi.advanceTimersByTime(10_000)
    expect(verifyOtoToken(token, "wyzwanie")).toBeNull()
  })

  it("rejects a blank subject", () => {
    expect(verifyOtoToken(createOtoToken(payload({ subjectId: "   " })), "wyzwanie")).toBeNull()
  })

  it("rejects payloads with missing or mistyped fields", () => {
    const { exp: _exp, ...withoutExp } = payload()
    expect(verifyOtoToken(signTokenPayload(withoutExp), "wyzwanie")).toBeNull()
    expect(verifyOtoToken(signTokenPayload({ ...payload(), iat: "now" }), "wyzwanie")).toBeNull()
    expect(verifyOtoToken(signTokenPayload({ ...payload(), subjectId: 42 }), "wyzwanie")).toBeNull()
  })

  it("rejects a tampered token and one signed with the cookie secret", () => {
    const token = createOtoToken(payload())
    expect(verifyOtoToken(`${token}x`, "wyzwanie")).toBeNull()
    expect(verifyOtoToken(signCookiePayload(payload()), "wyzwanie")).toBeNull()
  })
})

describe("subject hashes", () => {
  it("normalizes the subject (case, surrounding spaces)", () => {
    expect(getSubjectHash("wyzwanie", "  Ada@Example.COM ")).toBe(
      getSubjectHash("wyzwanie", "ada@example.com")
    )
  })

  it("differs per campaign", () => {
    expect(getSubjectHash("wyzwanie", "ada@example.com")).not.toBe(
      getSubjectHash("other", "ada@example.com")
    )
  })

  it("creates a fresh anonymous subject every time", () => {
    const first = createAnonymousSubjectHash("wyzwanie")
    expect(first).toMatch(/^[0-9a-f]{64}$/)
    expect(createAnonymousSubjectHash("wyzwanie")).not.toBe(first)
  })
})
