import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

const blobMocks = vi.hoisted(() => {
  const store = {
    getWithMetadata: vi.fn(),
    setJSON: vi.fn(),
  }

  return {
    getStore: vi.fn(() => store),
    store,
  }
})

vi.mock("@netlify/blobs", () => ({
  getStore: blobMocks.getStore,
}))

import {
  expireSession,
  getOrCreateSession,
  getSession,
  getSessionKey,
  getSessionStatus,
  isSessionActive,
  OtoSession,
  saveSession,
} from "../sessions"

const NOW = new Date("2026-01-15T12:00:00.000Z")

const activeSession = (overrides: Partial<OtoSession> = {}): OtoSession => ({
  campaignId: "wyzwanie",
  subjectHash: "subject-hash",
  startedAt: "2026-01-15T11:45:00.000Z",
  endsAt: "2026-01-15T12:15:00.000Z",
  status: "active",
  ...overrides,
})

describe("OTO sessions", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(NOW)
    blobMocks.getStore.mockClear()
    blobMocks.store.getWithMetadata.mockReset()
    blobMocks.store.setJSON.mockReset()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("creates a 30-minute session with a conditional only-if-new Blob write", async () => {
    blobMocks.store.getWithMetadata.mockResolvedValueOnce(null)
    blobMocks.store.setJSON.mockResolvedValueOnce({
      modified: true,
      etag: "created-etag",
    })

    const result = await getOrCreateSession(
      "wyzwanie",
      "subject-hash",
      30 * 60 * 1000
    )

    expect(result).toEqual({
      session: {
        campaignId: "wyzwanie",
        subjectHash: "subject-hash",
        startedAt: "2026-01-15T12:00:00.000Z",
        endsAt: "2026-01-15T12:30:00.000Z",
        status: "active",
      },
      etag: "created-etag",
    })
    expect(blobMocks.store.setJSON).toHaveBeenCalledWith(
      "oto:wyzwanie:subject-hash",
      result.session,
      {
        onlyIfNew: true,
        metadata: {
          campaignId: "wyzwanie",
          subjectHash: "subject-hash",
          endsAt: "2026-01-15T12:30:00.000Z",
          status: "active",
        },
      }
    )
  })

  it("reuses an existing session without attempting a write", async () => {
    const session = activeSession()
    blobMocks.store.getWithMetadata.mockResolvedValueOnce({
      data: session,
      etag: "existing-etag",
    })

    await expect(
      getOrCreateSession("wyzwanie", "subject-hash", 30 * 60 * 1000)
    ).resolves.toEqual({ session, etag: "existing-etag" })
    expect(blobMocks.store.setJSON).not.toHaveBeenCalled()
  })

  it("CURRENT CONTRACT: does not restart an existing expired session", async () => {
    const expired = activeSession({
      endsAt: "2026-01-15T11:59:59.000Z",
      status: "expired",
    })
    blobMocks.store.getWithMetadata.mockResolvedValueOnce({
      data: expired,
      etag: "expired-etag",
    })

    await expect(
      getOrCreateSession("wyzwanie", "subject-hash", 30 * 60 * 1000)
    ).resolves.toEqual({ session: expired, etag: "expired-etag" })
    expect(blobMocks.store.setJSON).not.toHaveBeenCalled()
  })

  it("returns the winning stored session when a concurrent only-if-new write loses", async () => {
    const winningSession = activeSession({
      startedAt: "2026-01-15T11:59:59.000Z",
      endsAt: "2026-01-15T12:29:59.000Z",
    })
    blobMocks.store.getWithMetadata
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce({ data: winningSession, etag: "winner-etag" })
    blobMocks.store.setJSON.mockResolvedValueOnce({ modified: false })

    await expect(
      getOrCreateSession("wyzwanie", "subject-hash", 30 * 60 * 1000)
    ).resolves.toEqual({ session: winningSession, etag: "winner-etag" })
  })

  it("uses the configured strong-consistency Blob store and rejects malformed records", async () => {
    blobMocks.store.getWithMetadata.mockResolvedValueOnce({
      data: { campaignId: "wyzwanie" },
      etag: "malformed-etag",
    })

    await expect(getSession("wyzwanie", "subject-hash")).resolves.toBeNull()
    expect(blobMocks.getStore).toHaveBeenCalledWith({
      name: "oto-sessions",
      siteID: "offline-test-site",
      token: "offline-test-token",
    })
    expect(blobMocks.store.getWithMetadata).toHaveBeenCalledWith(
      "oto:wyzwanie:subject-hash",
      { type: "json", consistency: "strong" }
    )
  })

  it("saves updates conditionally with the current etag", async () => {
    const session = activeSession()
    blobMocks.store.setJSON.mockResolvedValueOnce({ modified: false })

    await expect(saveSession(session, "current-etag")).resolves.toBe(false)
    expect(blobMocks.store.setJSON).toHaveBeenCalledWith(
      "oto:wyzwanie:subject-hash",
      session,
      {
        onlyIfMatch: "current-etag",
        metadata: {
          campaignId: "wyzwanie",
          subjectHash: "subject-hash",
          endsAt: session.endsAt,
          status: "active",
        },
      }
    )
  })

  it("treats an active session as expired exactly at endsAt and preserves endsAt in status", () => {
    const session = activeSession({ endsAt: NOW.toISOString() })

    expect(isSessionActive(session)).toBe(false)
    expect(getSessionStatus(session)).toEqual({
      active: false,
      endsAt: NOW.toISOString(),
      secondsLeft: 0,
    })
    expect(expireSession(session)).toEqual({ ...session, status: "expired" })
  })

  it("rounds a live session's remaining time up to the next whole second", () => {
    const session = activeSession({ endsAt: "2026-01-15T12:00:01.001Z" })

    expect(getSessionStatus(session)).toEqual({
      active: true,
      endsAt: session.endsAt,
      secondsLeft: 2,
    })
  })

  it("uses the stable campaign-and-subject Blob key format", () => {
    expect(getSessionKey("wyzwanie", "abc123")).toBe("oto:wyzwanie:abc123")
  })
})
