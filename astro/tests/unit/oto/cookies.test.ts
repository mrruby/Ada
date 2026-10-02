import { describe, expect, it, vi } from "vitest"
import {
  OTO_SESSION_COOKIE,
  clearSessionCookie,
  createSessionCookie,
  getCookie,
  readSessionCookie,
  type OtoSessionCookiePayload,
} from "@/lib/oto/cookies"
import { signCookiePayload, signTokenPayload } from "@/lib/oto/crypto"

const payload: OtoSessionCookiePayload = {
  campaignId: "wyzwanie",
  subjectHash: "a".repeat(64),
  iat: 1_772_000_000,
}

/** `name=value` part of a Set-Cookie header. */
const pair = (setCookie: string) => setCookie.split(";")[0]

const requestWithCookie = (cookie?: string) =>
  new Request("https://adrianna.com.pl/api/oto/start", {
    headers: cookie === undefined ? {} : { cookie },
  })

const attributes = (setCookie: string) =>
  setCookie
    .split(";")
    .slice(1)
    .map((part) => part.trim())

describe("createSessionCookie", () => {
  it("sets a signed, HttpOnly, Lax cookie for the whole site (180 days)", () => {
    const cookie = createSessionCookie(payload)

    expect(cookie.startsWith(`${OTO_SESSION_COOKIE}=`)).toBe(true)
    expect(attributes(cookie)).toEqual(
      expect.arrayContaining([
        "Path=/",
        `Max-Age=${180 * 24 * 60 * 60}`,
        "HttpOnly",
        "SameSite=Lax",
      ])
    )
  })

  it("is Secure only in the production build", () => {
    expect(attributes(createSessionCookie(payload))).not.toContain("Secure")
    vi.stubEnv("PROD", true)
    expect(attributes(createSessionCookie(payload))).toContain("Secure")
    expect(attributes(clearSessionCookie())).toContain("Secure")
  })

  it("clamps a negative max age to 0", () => {
    expect(attributes(createSessionCookie(payload, -10))).toContain("Max-Age=0")
    expect(attributes(createSessionCookie(payload, 60))).toContain("Max-Age=60")
  })

  it("clears the cookie with Max-Age=0", () => {
    const cookie = clearSessionCookie()
    expect(pair(cookie)).toBe(`${OTO_SESSION_COOKIE}=`)
    expect(attributes(cookie)).toContain("Max-Age=0")
  })
})

describe("readSessionCookie", () => {
  it("reads back the payload of a cookie it created", () => {
    const request = requestWithCookie(pair(createSessionCookie(payload)))
    expect(readSessionCookie(request, "wyzwanie")).toEqual(payload)
  })

  it("finds the cookie among others", () => {
    const cookie = `foo=1; ${pair(createSessionCookie(payload))}; gatsby-gdpr-google-analytics=false`
    expect(readSessionCookie(requestWithCookie(cookie), "wyzwanie")).toEqual(payload)
  })

  it("returns null without a cookie", () => {
    expect(readSessionCookie(requestWithCookie(), "wyzwanie")).toBeNull()
    expect(readSessionCookie(requestWithCookie("foo=bar"), "wyzwanie")).toBeNull()
    expect(readSessionCookie(requestWithCookie(`${OTO_SESSION_COOKIE}=`), "wyzwanie")).toBeNull()
  })

  it("rejects a tampered cookie", () => {
    const value = decodeURIComponent(
      pair(createSessionCookie(payload)).split("=").slice(1).join("=")
    )
    const [body, signature] = value.split(".")
    const forgedBody = Buffer.from(
      JSON.stringify({ ...payload, subjectHash: "b".repeat(64) })
    ).toString("base64url")

    expect(
      readSessionCookie(
        requestWithCookie(`${OTO_SESSION_COOKIE}=${forgedBody}.${signature}`),
        "wyzwanie"
      )
    ).toBeNull()
    expect(
      readSessionCookie(
        requestWithCookie(`${OTO_SESSION_COOKIE}=${body}.${signature}x`),
        "wyzwanie"
      )
    ).toBeNull()
  })

  it("rejects a cookie for another campaign", () => {
    const request = requestWithCookie(
      pair(createSessionCookie({ ...payload, campaignId: "other" }))
    )
    expect(readSessionCookie(request, "wyzwanie")).toBeNull()
  })

  it("rejects values signed with the token secret", () => {
    const value = encodeURIComponent(signTokenPayload({ ...payload }))
    expect(
      readSessionCookie(requestWithCookie(`${OTO_SESSION_COOKIE}=${value}`), "wyzwanie")
    ).toBeNull()
  })

  it("rejects signed payloads with the wrong shape", () => {
    const wrong = [
      { ...payload, subjectHash: 42 },
      { ...payload, iat: "yesterday" },
      { campaignId: "wyzwanie" },
    ]
    for (const body of wrong) {
      const value = encodeURIComponent(signCookiePayload(body))
      expect(
        readSessionCookie(requestWithCookie(`${OTO_SESSION_COOKIE}=${value}`), "wyzwanie")
      ).toBeNull()
    }
  })

  it("drops unknown fields from the payload", () => {
    const value = encodeURIComponent(signCookiePayload({ ...payload, admin: true }))
    expect(
      readSessionCookie(requestWithCookie(`${OTO_SESSION_COOKIE}=${value}`), "wyzwanie")
    ).toEqual(payload)
  })
})

describe("getCookie", () => {
  it("parses names, decodes values and strips quotes", () => {
    const request = requestWithCookie('a=1; b="quoted"; c=x%20y; d=e=f')
    expect(getCookie(request, "a")).toBe("1")
    expect(getCookie(request, "b")).toBe("quoted")
    expect(getCookie(request, "c")).toBe("x y")
    expect(getCookie(request, "d")).toBe("e=f")
    expect(getCookie(request, "missing")).toBeUndefined()
  })

  it("uses the first occurrence of a name", () => {
    expect(getCookie(requestWithCookie("a=first; a=second"), "a")).toBe("first")
  })

  it("keeps a value that is not valid percent-encoding", () => {
    expect(getCookie(requestWithCookie("a=%E0%A4%A"), "a")).toBe("%E0%A4%A")
  })
})
