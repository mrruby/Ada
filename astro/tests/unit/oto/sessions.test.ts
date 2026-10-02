import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import type { OtoSession } from "@/lib/oto/sessions"

/**
 * In-memory stand-in for a Netlify Blobs store: JSON values with etags and
 * the `onlyIfNew` / `onlyIfMatch` conditional writes the sessions use.
 */
const blobs = vi.hoisted(() => {
  type Entry = { data: unknown; etag: string; metadata: Record<string, unknown> }
  const entries = new Map<string, Entry>()
  let version = 0

  const store = {
    getWithMetadata: async (key: string, _options?: { type?: string; consistency?: string }) => {
      const entry = entries.get(key)
      return entry ? structuredClone(entry) : null
    },
    setJSON: async (
      key: string,
      value: unknown,
      options: {
        onlyIfNew?: boolean
        onlyIfMatch?: string
        metadata?: Record<string, unknown>
      } = {}
    ) => {
      const existing = entries.get(key)
      if (options.onlyIfNew && existing) return { modified: false }
      if (options.onlyIfMatch && existing?.etag !== options.onlyIfMatch) return { modified: false }
      const etag = `"v${++version}"`
      entries.set(key, { data: structuredClone(value), etag, metadata: options.metadata ?? {} })
      return { modified: true, etag }
    },
  }

  return { entries, store, getStore: vi.fn((..._args: unknown[]) => store) }
})

vi.mock("@netlify/blobs", () => ({ getStore: blobs.getStore }))

const {
  expireSession,
  getOrCreateSession,
  getSession,
  getSessionKey,
  getSessionStatus,
  isSessionActive,
  saveSession,
} = await import("@/lib/oto/sessions")

const NOW = new Date("2026-03-01T12:00:00.000Z")
const MINUTE = 60_000
const DURATION = 30 * MINUTE
const SUBJECT = "f".repeat(64)

const session = (overrides: Partial<OtoSession> = {}): OtoSession => ({
  campaignId: "wyzwanie",
  subjectHash: SUBJECT,
  startedAt: NOW.toISOString(),
  endsAt: new Date(+NOW + DURATION).toISOString(),
  status: "active",
  ...overrides,
})

beforeEach(() => {
  blobs.entries.clear()
  blobs.getStore.mockClear()
  vi.useFakeTimers()
  vi.setSystemTime(NOW)
})

afterEach(() => {
  vi.useRealTimers()
})

describe("session status", () => {
  it("is active until endsAt", () => {
    expect(isSessionActive(session())).toBe(true)
    vi.advanceTimersByTime(DURATION)
    expect(isSessionActive(session())).toBe(false)
  })

  it("is inactive once expired, even before endsAt", () => {
    expect(isSessionActive(session({ status: "expired" }))).toBe(false)
  })

  it("reports seconds left rounded up", () => {
    vi.advanceTimersByTime(10 * MINUTE + 500)
    expect(getSessionStatus(session())).toEqual({
      active: true,
      endsAt: session().endsAt,
      secondsLeft: 20 * 60,
    })
  })

  it("reports an inactive status with endsAt after the deadline", () => {
    vi.advanceTimersByTime(DURATION + 1)
    expect(getSessionStatus(session())).toEqual({
      active: false,
      endsAt: session().endsAt,
      secondsLeft: 0,
    })
    expect(getSessionStatus(session({ status: "expired" })).active).toBe(false)
  })

  it("expireSession returns an expired copy", () => {
    const original = session()
    const expired = expireSession(original)
    expect(expired).toEqual({ ...original, status: "expired" })
    expect(original.status).toBe("active")
  })
})

describe("persistence", () => {
  it("keys sessions by campaign and subject", () => {
    expect(getSessionKey("wyzwanie", "abc")).toBe("oto:wyzwanie:abc")
  })

  it("creates a 30-minute session on first visit", async () => {
    const { session: created, etag } = await getOrCreateSession("wyzwanie", SUBJECT, DURATION)

    expect(created).toEqual(session())
    expect(etag).toBeTruthy()
    expect(blobs.entries.get(getSessionKey("wyzwanie", SUBJECT))?.metadata).toMatchObject({
      campaignId: "wyzwanie",
      status: "active",
      endsAt: created.endsAt,
    })
  })

  it("resumes the existing session instead of restarting the timer", async () => {
    const first = await getOrCreateSession("wyzwanie", SUBJECT, DURATION)
    vi.advanceTimersByTime(10 * MINUTE)
    const second = await getOrCreateSession("wyzwanie", SUBJECT, DURATION)

    expect(second.session).toEqual(first.session)
    expect(getSessionStatus(second.session).secondsLeft).toBe(20 * 60)
  })

  it("keeps an expired session expired (no second OTO window)", async () => {
    await getOrCreateSession("wyzwanie", SUBJECT, DURATION)
    vi.advanceTimersByTime(DURATION + MINUTE)

    const { session: resumed } = await getOrCreateSession("wyzwanie", SUBJECT, DURATION)
    expect(getSessionStatus(resumed).active).toBe(false)
  })

  it("returns the winner's session when a concurrent request created it first", async () => {
    const winner = session({ startedAt: new Date(+NOW - MINUTE).toISOString() })
    // First lookup misses; by the time we write, another request has stored one.
    vi.spyOn(blobs.store, "getWithMetadata").mockImplementationOnce(async () => {
      await blobs.store.setJSON(getSessionKey("wyzwanie", SUBJECT), winner)
      return null
    })

    const { session: result } = await getOrCreateSession("wyzwanie", SUBJECT, DURATION)

    expect(result).toEqual(winner)
  })

  it("getSession ignores missing and malformed entries", async () => {
    expect(await getSession("wyzwanie", SUBJECT)).toBeNull()

    await blobs.store.setJSON(getSessionKey("wyzwanie", SUBJECT), { campaignId: "wyzwanie" })
    expect(await getSession("wyzwanie", SUBJECT)).toBeNull()

    await blobs.store.setJSON(
      getSessionKey("wyzwanie", SUBJECT),
      session({ status: "paused" as never })
    )
    expect(await getSession("wyzwanie", SUBJECT)).toBeNull()
  })

  it("saveSession writes only when the etag still matches", async () => {
    const { etag } = await getOrCreateSession("wyzwanie", SUBJECT, DURATION)
    const updated = { ...session(), promoCode: "OTO-WYZ-ABCDE" }

    expect(await saveSession(updated, '"stale"')).toBe(false)
    expect((await getSession("wyzwanie", SUBJECT))?.session.promoCode).toBeUndefined()

    expect(await saveSession(updated, etag)).toBe(true)
    expect((await getSession("wyzwanie", SUBJECT))?.session.promoCode).toBe("OTO-WYZ-ABCDE")
  })

  it("saveSession without an etag overwrites", async () => {
    await getOrCreateSession("wyzwanie", SUBJECT, DURATION)
    expect(await saveSession(expireSession(session()))).toBe(true)
    expect((await getSession("wyzwanie", SUBJECT))?.session.status).toBe("expired")
  })
})

describe("blob store selection", () => {
  it("uses the Netlify runtime store by default", async () => {
    await getSession("wyzwanie", SUBJECT)
    expect(blobs.getStore).toHaveBeenCalledWith("oto-sessions")
  })

  it("uses explicit credentials when configured", async () => {
    vi.stubEnv("NETLIFY_BLOBS_SITE_ID", "site-123")
    vi.stubEnv("NETLIFY_BLOBS_TOKEN", "token-456")
    await getSession("wyzwanie", SUBJECT)
    expect(blobs.getStore).toHaveBeenCalledWith({
      name: "oto-sessions",
      siteID: "site-123",
      token: "token-456",
    })
  })
})
