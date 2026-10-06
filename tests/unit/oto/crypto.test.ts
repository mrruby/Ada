import { createHmac } from "node:crypto"
import { describe, expect, it, vi } from "vitest"
import {
  hashSubject,
  randomHex,
  signCookiePayload,
  signJson,
  signTokenPayload,
  verifyCookiePayload,
  verifySignedJson,
  verifyTokenPayload,
} from "@/lib/oto/crypto"

const SECRET = "unit-secret"
const payload = { campaignId: "wyzwanie", subjectId: "ada@example.com", n: 1 }

const base64Url = (value: string | Buffer) =>
  Buffer.from(value).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")

/** Flips one character of a base64url string. */
const flip = (value: string, index = 0) =>
  value.slice(0, index) + (value[index] === "A" ? "B" : "A") + value.slice(index + 1)

describe("signJson / verifySignedJson", () => {
  it("round-trips a payload as `<payload>.<signature>` in base64url", () => {
    const token = signJson(payload, SECRET)

    expect(token).toMatch(/^[\w-]+\.[\w-]+$/)
    expect(verifySignedJson(token, SECRET)).toEqual(payload)
  })

  it("keeps non-ASCII text intact", () => {
    const token = signJson({ name: "Zażółć gęślą jaźń ✨" }, SECRET)
    expect(verifySignedJson(token, SECRET)).toEqual({ name: "Zażółć gęślą jaźń ✨" })
  })

  it("rejects a tampered signature", () => {
    const [body, signature] = signJson(payload, SECRET).split(".")
    expect(verifySignedJson(`${body}.${flip(signature, 3)}`, SECRET)).toBeNull()
    expect(verifySignedJson(`${body}.${signature.slice(0, -1)}`, SECRET)).toBeNull()
  })

  it("rejects a tampered payload", () => {
    const [, signature] = signJson(payload, SECRET).split(".")
    const forged = base64Url(JSON.stringify({ ...payload, subjectId: "eve@example.com" }))
    expect(verifySignedJson(`${forged}.${signature}`, SECRET)).toBeNull()
  })

  it("rejects a token signed with another secret", () => {
    expect(verifySignedJson(signJson(payload, "other-secret"), SECRET)).toBeNull()
  })

  it.each(["", "abc", "abc.", ".abc", "a.b.c"])("rejects malformed token %j", (token) => {
    expect(verifySignedJson(token, SECRET)).toBeNull()
  })

  it("rejects a correctly signed payload that is not JSON", () => {
    const body = base64Url("not json {")
    const signature = base64Url(createHmac("sha256", SECRET).update(body).digest())
    expect(verifySignedJson(`${body}.${signature}`, SECRET)).toBeNull()
  })
})

describe("token and cookie secrets", () => {
  it("signs tokens with OTO_TOKEN_SECRET", () => {
    const token = signTokenPayload(payload)
    expect(verifyTokenPayload(token)).toEqual(payload)
    expect(verifySignedJson(token, "test-token-secret")).toEqual(payload)
  })

  it("signs cookies with OTO_COOKIE_SECRET", () => {
    const cookie = signCookiePayload(payload)
    expect(verifyCookiePayload(cookie)).toEqual(payload)
    expect(verifySignedJson(cookie, "test-cookie-secret")).toEqual(payload)
  })

  it("does not accept a cookie value as a token (or vice versa)", () => {
    expect(verifyTokenPayload(signCookiePayload(payload))).toBeNull()
    expect(verifyCookiePayload(signTokenPayload(payload))).toBeNull()
  })

  it("stops verifying after the secret is rotated", () => {
    const token = signTokenPayload(payload)
    vi.stubEnv("OTO_TOKEN_SECRET", "rotated")
    expect(verifyTokenPayload(token)).toBeNull()
  })

  it("throws when the secret is not configured", () => {
    vi.stubEnv("OTO_TOKEN_SECRET", "")
    expect(() => signTokenPayload(payload)).toThrow(/OTO_TOKEN_SECRET/)
    vi.stubEnv("OTO_COOKIE_SECRET", "")
    expect(() => verifyCookiePayload("a.b")).toThrow(/OTO_COOKIE_SECRET/)
  })
})

describe("hashSubject", () => {
  it("is a stable hex HMAC per campaign and subject", () => {
    const hash = hashSubject("wyzwanie", "ada@example.com")
    expect(hash).toMatch(/^[0-9a-f]{64}$/)
    expect(hashSubject("wyzwanie", "ada@example.com")).toBe(hash)
    expect(hashSubject("other", "ada@example.com")).not.toBe(hash)
    expect(hashSubject("wyzwanie", "eve@example.com")).not.toBe(hash)
  })

  it("depends on the token secret", () => {
    const hash = hashSubject("wyzwanie", "ada@example.com")
    vi.stubEnv("OTO_TOKEN_SECRET", "rotated")
    expect(hashSubject("wyzwanie", "ada@example.com")).not.toBe(hash)
  })
})

describe("randomHex", () => {
  it("returns uppercase hex of the requested byte length", () => {
    expect(randomHex(5)).toMatch(/^[0-9A-F]{10}$/)
    expect(randomHex(16)).toMatch(/^[0-9A-F]{32}$/)
    expect(randomHex(16)).not.toBe(randomHex(16))
  })
})
