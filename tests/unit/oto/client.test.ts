import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import type { OtoState, OtoStatusResponse } from "@/lib/oto/client"

const NOW = new Date("2026-03-01T12:00:00.000Z")

/** Fresh module per test: the client caches one request per endpoint. */
const loadClient = async (search = "") => {
  vi.resetModules()
  vi.stubGlobal("window", {
    location: { search },
    setInterval: globalThis.setInterval,
    clearInterval: globalThis.clearInterval,
  })
  return import("@/lib/oto/client")
}

const respond = (body: OtoStatusResponse | null, ok = true) =>
  vi.fn(async (_input: string, _init?: RequestInit) => ({ ok, json: async () => body }) as Response)

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(NOW)
})

afterEach(() => {
  vi.useRealTimers()
})

describe("getOtoTimeLeft", () => {
  it("returns minutes and seconds until endsAt, or zero after it", async () => {
    const { getOtoTimeLeft } = await loadClient()
    expect(getOtoTimeLeft(new Date(+NOW + 12 * 60_000 + 34_500).toISOString())).toEqual({
      minutes: 12,
      seconds: 34,
    })
    expect(getOtoTimeLeft(new Date(+NOW - 1).toISOString())).toEqual({ minutes: 0, seconds: 0 })
  })
})

describe("watchOto", () => {
  it("asks /api/oto/start for the campaign, forwarding the ?oto= token", async () => {
    const fetchMock = respond({ active: false, endsAt: null, secondsLeft: 0 })
    vi.stubGlobal("fetch", fetchMock)
    const { watchOto } = await loadClient("?oto=signed.token&utm=x")

    await watchOto("wyzwanie", () => {})

    expect(fetchMock).toHaveBeenCalledWith("/api/oto/start?campaign=wyzwanie&oto=signed.token", {
      credentials: "include",
    })
  })

  it("counts down every second while active and ends inactive", async () => {
    const endsAt = new Date(+NOW + 2500).toISOString()
    vi.stubGlobal("fetch", respond({ active: true, endsAt, secondsLeft: 3 }))
    const { watchOto } = await loadClient()
    const states: OtoState[] = []

    await watchOto("wyzwanie", (state) => states.push(state))
    expect(states).toEqual([{ active: true, endsAt, timeLeft: { minutes: 0, seconds: 2 } }])

    vi.advanceTimersByTime(1000)
    expect(states.at(-1)).toEqual({ active: true, endsAt, timeLeft: { minutes: 0, seconds: 1 } })

    vi.advanceTimersByTime(2000)
    expect(states.at(-1)).toEqual({ active: false })
    const count = states.length
    vi.advanceTimersByTime(5000)
    expect(states).toHaveLength(count)
  })

  it.each([
    ["an inactive status", respond({ active: false, endsAt: null, secondsLeft: 0 })],
    ["an active status without endsAt", respond({ active: true, endsAt: null, secondsLeft: 10 })],
    [
      "an already elapsed endsAt",
      respond({ active: true, endsAt: NOW.toISOString(), secondsLeft: 0 }),
    ],
    ["an HTTP error", respond(null, false)],
  ])("reports inactive for %s", async (_name, fetchMock) => {
    vi.stubGlobal("fetch", fetchMock)
    const { watchOto } = await loadClient()
    const onChange = vi.fn()

    await watchOto("wyzwanie", onChange)
    expect(onChange).toHaveBeenCalledExactlyOnceWith({ active: false })
  })

  it("reports inactive (and logs) when the request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => Promise.reject(new TypeError("offline")))
    )
    const error = vi.spyOn(console, "error").mockImplementation(() => {})
    const { watchOto } = await loadClient()
    const onChange = vi.fn()

    await watchOto("wyzwanie", onChange)
    expect(onChange).toHaveBeenCalledExactlyOnceWith({ active: false })
    expect(error).toHaveBeenCalled()
  })

  it("shares one request between callers on the page", async () => {
    const fetchMock = respond({ active: false, endsAt: null, secondsLeft: 0 })
    vi.stubGlobal("fetch", fetchMock)
    const { watchOto } = await loadClient()

    await Promise.all([watchOto("wyzwanie", () => {}), watchOto("wyzwanie", () => {})])
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})
