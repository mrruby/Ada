import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { OtoSession } from "../sessions"

const domainMocks = vi.hoisted(() => ({
  ensurePromotionCode: vi.fn(),
  getOrCreateSession: vi.fn(),
  getSession: vi.fn(),
  saveSession: vi.fn(),
}))

vi.mock("@netlify/blobs", () => ({
  getStore: vi.fn(),
}))

vi.mock("stripe", () => ({
  default: vi.fn(),
}))

vi.mock("../sessions", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../sessions")>()
  return {
    ...actual,
    getOrCreateSession: domainMocks.getOrCreateSession,
    getSession: domainMocks.getSession,
    saveSession: domainMocks.saveSession,
  }
})

vi.mock("../discount", () => ({
  ensurePromotionCode: domainMocks.ensurePromotionCode,
}))

import checkoutHandler from "../../../api/oto/checkout"
import startHandler from "../../../api/oto/start"
import statusHandler from "../../../api/oto/status"
import { createSessionCookie, readSessionCookie } from "../cookies"
import { createOtoToken, getSubjectHash } from "../tokens"

const NOW = new Date("2026-01-15T12:00:00.000Z")
const NOW_SECONDS = Math.floor(NOW.getTime() / 1000)

type MockRequest = {
  method: string
  query: Record<string, string | string[] | undefined>
  body?: Record<string, unknown>
  cookies?: Record<string, string>
  headers?: { cookie?: string | string[] }
}

type MockResponse = {
  statusCode: number
  headers: Record<string, unknown>
  body?: unknown
  setHeader: ReturnType<typeof vi.fn>
  status: ReturnType<typeof vi.fn>
  json: ReturnType<typeof vi.fn>
  end: ReturnType<typeof vi.fn>
}

const request = (overrides: Partial<MockRequest> = {}): MockRequest => ({
  method: "GET",
  query: {},
  ...overrides,
})

const response = (): MockResponse => {
  const res = {
    statusCode: 200,
    headers: {},
  } as MockResponse

  res.setHeader = vi.fn((name: string, value: unknown) => {
    res.headers[name] = value
    return res
  })
  res.status = vi.fn((statusCode: number) => {
    res.statusCode = statusCode
    return res
  })
  res.json = vi.fn((body: unknown) => {
    res.body = body
    return res
  })
  res.end = vi.fn(() => res)

  return res
}

const session = (overrides: Partial<OtoSession> = {}): OtoSession => ({
  campaignId: "wyzwanie",
  subjectHash: "subject-hash",
  startedAt: "2026-01-15T12:00:00.000Z",
  endsAt: "2026-01-15T12:30:00.000Z",
  status: "active",
  ...overrides,
})

const cookieFor = (subjectHash = "subject-hash") =>
  createSessionCookie({
    campaignId: "wyzwanie",
    subjectHash,
    iat: NOW_SECONDS,
  })

const expectNoStore = (res: MockResponse) => {
  expect(res.headers["Cache-Control"]).toBe("no-store, max-age=0")
}

const invoke = async (
  handler: typeof startHandler | typeof statusHandler | typeof checkoutHandler,
  req: MockRequest,
  res: MockResponse
) => handler(req as never, res as never)

describe("OTO API handler contracts", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(NOW)
    domainMocks.ensurePromotionCode.mockReset()
    domainMocks.getOrCreateSession.mockReset()
    domainMocks.getSession.mockReset()
    domainMocks.saveSession.mockReset()
    vi.spyOn(console, "error").mockImplementation(() => undefined)
    process.env.NODE_ENV = "test"

    const active = session()
    domainMocks.getOrCreateSession.mockResolvedValue({
      session: active,
      etag: "session-etag",
    })
    domainMocks.getSession.mockResolvedValue({
      session: active,
      etag: "session-etag",
    })
    domainMocks.saveSession.mockResolvedValue(true)
    domainMocks.ensurePromotionCode.mockResolvedValue(
      session({
        promoCode: "OTO-WYZ-CREATED",
        stripePromotionCodeId: "promo_created",
        promoCodeCreatedAt: NOW.toISOString(),
        promoCodeExpiresAt: active.endsAt,
      })
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it.each([
    ["start", startHandler, "PUT"],
    ["status", statusHandler, "POST"],
    ["checkout", checkoutHandler, "POST"],
  ])(
    "/%s rejects unsupported methods with the shared JSON contract",
    async (_name, handler, method) => {
      const res = response()

      await invoke(handler, request({ method }), res)

      expect(res.statusCode).toBe(405)
      expect(res.body).toEqual({ error: "Method not allowed" })
      expectNoStore(res)
    }
  )

  it.each([
    ["start", startHandler],
    ["status", statusHandler],
    ["checkout", checkoutHandler],
  ])(
    "/%s rejects an unknown campaign with the shared JSON contract",
    async (_name, handler) => {
      const res = response()

      await invoke(handler, request({ query: { campaign: "unknown" } }), res)

      expect(res.statusCode).toBe(400)
      expect(res.body).toEqual({ error: "Invalid OTO campaign" })
      expectNoStore(res)
    }
  )

  describe("/api/oto/start", () => {
    it("accepts GET, starts the token subject's session, and returns status plus a signed cookie", async () => {
      const subjectId = "Customer@Example.com"
      const token = createOtoToken({
        campaignId: "wyzwanie",
        subjectId,
        iat: NOW_SECONDS - 60,
        exp: NOW_SECONDS + 60,
      })
      const expectedSubjectHash = getSubjectHash("wyzwanie", subjectId)
      const active = session({ subjectHash: expectedSubjectHash })
      domainMocks.getOrCreateSession.mockResolvedValueOnce({
        session: active,
        etag: "created-etag",
      })
      const res = response()

      await invoke(startHandler, request({ query: { oto: token } }), res)

      expect(domainMocks.getOrCreateSession).toHaveBeenCalledWith(
        "wyzwanie",
        expectedSubjectHash,
        30 * 60 * 1000
      )
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual({
        active: true,
        endsAt: "2026-01-15T12:30:00.000Z",
        secondsLeft: 1800,
      })
      expect(res.headers["Set-Cookie"]).toEqual(
        expect.stringMatching(
          /^ada_oto_session=[^;]+; Path=\/; Max-Age=15552000; HttpOnly; SameSite=Lax$/
        )
      )
      expect(
        readSessionCookie(
          { headers: { cookie: res.headers["Set-Cookie"] as string } },
          "wyzwanie"
        )
      ).toEqual({
        campaignId: "wyzwanie",
        subjectHash: expectedSubjectHash,
        iat: NOW_SECONDS,
      })
      expectNoStore(res)
    })

    it("accepts POST tokens from the request body", async () => {
      const token = createOtoToken({
        campaignId: "wyzwanie",
        subjectId: "body@example.com",
        iat: NOW_SECONDS - 60,
        exp: NOW_SECONDS + 60,
      })
      const res = response()

      await invoke(
        startHandler,
        request({ method: "POST", body: { oto: token } }),
        res
      )

      expect(domainMocks.getOrCreateSession).toHaveBeenCalledWith(
        "wyzwanie",
        getSubjectHash("wyzwanie", "body@example.com"),
        30 * 60 * 1000
      )
      expect(res.statusCode).toBe(200)
      expectNoStore(res)
    })

    it("returns the current 500 JSON shape when session creation fails", async () => {
      domainMocks.getOrCreateSession.mockRejectedValueOnce(
        new Error("Blob unavailable")
      )
      const res = response()

      await invoke(startHandler, request(), res)

      expect(res.statusCode).toBe(500)
      expect(res.body).toEqual({ error: "Internal Server Error" })
      expectNoStore(res)
    })
  })

  describe("/api/oto/status", () => {
    it("returns the inactive JSON shape without storage I/O when the cookie is absent", async () => {
      const res = response()

      await invoke(statusHandler, request(), res)

      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual({
        active: false,
        endsAt: null,
        secondsLeft: 0,
      })
      expect(domainMocks.getSession).not.toHaveBeenCalled()
      expectNoStore(res)
    })

    it("returns the fixed-clock status of the cookie's stored session", async () => {
      const res = response()

      await invoke(
        statusHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(domainMocks.getSession).toHaveBeenCalledWith(
        "wyzwanie",
        "subject-hash"
      )
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual({
        active: true,
        endsAt: "2026-01-15T12:30:00.000Z",
        secondsLeft: 1800,
      })
      expectNoStore(res)
    })

    it("returns the inactive JSON shape when the cookie's session no longer exists", async () => {
      domainMocks.getSession.mockResolvedValueOnce(null)
      const res = response()

      await invoke(
        statusHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual({
        active: false,
        endsAt: null,
        secondsLeft: 0,
      })
      expectNoStore(res)
    })

    it("returns the current 500 JSON shape when session storage fails", async () => {
      domainMocks.getSession.mockRejectedValueOnce(
        new Error("Blob unavailable")
      )
      const res = response()

      await invoke(
        statusHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(res.statusCode).toBe(500)
      expect(res.body).toEqual({ error: "Internal Server Error" })
      expectNoStore(res)
    })
  })

  describe("/api/oto/checkout", () => {
    it("redirects cookie-less requests to regular checkout with an empty 302 response", async () => {
      const res = response()

      await invoke(checkoutHandler, request(), res)

      expect(res.statusCode).toBe(302)
      expect(res.headers.Location).toBe("https://checkout.example.test/regular")
      expect(res.end).toHaveBeenCalledOnce()
      expect(res.json).not.toHaveBeenCalled()
      expect(domainMocks.getSession).not.toHaveBeenCalled()
      expectNoStore(res)
    })

    it("redirects missing stored sessions to regular checkout", async () => {
      domainMocks.getSession.mockResolvedValueOnce(null)
      const res = response()

      await invoke(
        checkoutHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(res.statusCode).toBe(302)
      expect(res.headers.Location).toBe("https://checkout.example.test/regular")
      expect(domainMocks.ensurePromotionCode).not.toHaveBeenCalled()
      expectNoStore(res)
    })

    it("marks a timed-out active record expired and redirects to regular checkout", async () => {
      const timedOut = session({ endsAt: NOW.toISOString() })
      domainMocks.getSession.mockResolvedValueOnce({
        session: timedOut,
        etag: "timed-out-etag",
      })
      const res = response()

      await invoke(
        checkoutHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(domainMocks.saveSession).toHaveBeenCalledWith(
        { ...timedOut, status: "expired" },
        "timed-out-etag"
      )
      expect(res.statusCode).toBe(302)
      expect(res.headers.Location).toBe("https://checkout.example.test/regular")
      expectNoStore(res)
    })

    it("redirects an active session to easy checkout with the ensured promo parameter", async () => {
      const active = session()
      const withPromo = session({
        promoCode: "OTO-WYZ-CREATED",
        stripePromotionCodeId: "promo_created",
        promoCodeExpiresAt: active.endsAt,
      })
      domainMocks.getSession.mockResolvedValueOnce({
        session: active,
        etag: "active-etag",
      })
      domainMocks.ensurePromotionCode.mockResolvedValueOnce(withPromo)
      const res = response()

      await invoke(
        checkoutHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(domainMocks.saveSession).toHaveBeenCalledWith(
        withPromo,
        "active-etag"
      )
      expect(res.statusCode).toBe(302)
      expect(res.headers.Location).toBe(
        "https://checkout.example.test/oto?source=campaign&promo=OTO-WYZ-CREATED"
      )
      expect(res.end).toHaveBeenCalledOnce()
      expect(res.json).not.toHaveBeenCalled()
      expectNoStore(res)
    })

    it("CURRENT CONTRACT: after a conditional save race, redirects with the competing stored promo", async () => {
      const active = session()
      const locallyCreated = session({ promoCode: "OTO-WYZ-LOCAL" })
      const competing = session({ promoCode: "OTO-WYZ-COMPETING" })
      domainMocks.getSession
        .mockResolvedValueOnce({ session: active, etag: "stale-etag" })
        .mockResolvedValueOnce({ session: competing, etag: "fresh-etag" })
      domainMocks.ensurePromotionCode.mockResolvedValueOnce(locallyCreated)
      domainMocks.saveSession.mockResolvedValueOnce(false)
      const res = response()

      await invoke(
        checkoutHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(domainMocks.getSession).toHaveBeenCalledTimes(2)
      expect(res.statusCode).toBe(302)
      expect(res.headers.Location).toBe(
        "https://checkout.example.test/oto?source=campaign&promo=OTO-WYZ-COMPETING"
      )
      expectNoStore(res)
    })

    it("returns the current 500 JSON shape if checkout resolution throws", async () => {
      domainMocks.ensurePromotionCode.mockRejectedValueOnce(
        new Error("Stripe unavailable")
      )
      const res = response()

      await invoke(
        checkoutHandler,
        request({ headers: { cookie: cookieFor() } }),
        res
      )

      expect(res.statusCode).toBe(500)
      expect(res.body).toEqual({ error: "Internal Server Error" })
      expectNoStore(res)
    })
  })
})
