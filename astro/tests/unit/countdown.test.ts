import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { getEvergreenDeadline, getTimeLeft, pad2 } from "@/lib/countdown"

const NOW = new Date("2026-03-01T12:00:00.000Z")
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/** Minimal Storage stand-in backed by a Map. */
const createStorage = (initial: Record<string, string> = {}) => {
  const data = new Map(Object.entries(initial))
  return {
    getItem: vi.fn((key: string) => data.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => void data.set(key, String(value))),
    removeItem: vi.fn((key: string) => void data.delete(key)),
    clear: vi.fn(() => data.clear()),
    get length() {
      return data.size
    },
    key: (index: number) => [...data.keys()][index] ?? null,
    data,
  }
}

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(NOW)
})

afterEach(() => {
  vi.useRealTimers()
})

describe("getTimeLeft", () => {
  it("splits the remaining time into days, hours, minutes and seconds", () => {
    const target = new Date(+NOW + 2 * DAY + 3 * HOUR + 4 * MINUTE + 5 * SECOND + 999)
    expect(getTimeLeft(target)).toEqual({ days: 2, hours: 3, minutes: 4, seconds: 5 })
  })

  it("accepts a timestamp", () => {
    expect(getTimeLeft(+NOW + 90 * SECOND)).toEqual({ days: 0, hours: 0, minutes: 1, seconds: 30 })
  })

  it("keeps hours below 24 when there are full days left", () => {
    expect(getTimeLeft(+NOW + 25 * HOUR)).toEqual({ days: 1, hours: 1, minutes: 0, seconds: 0 })
  })

  it("returns null once the target is reached or in the past", () => {
    expect(getTimeLeft(NOW)).toBeNull()
    expect(getTimeLeft(+NOW - SECOND)).toBeNull()
  })

  it("follows the clock", () => {
    const target = +NOW + 10 * SECOND
    expect(getTimeLeft(target)?.seconds).toBe(10)
    vi.advanceTimersByTime(4 * SECOND)
    expect(getTimeLeft(target)?.seconds).toBe(6)
    vi.advanceTimersByTime(6 * SECOND)
    expect(getTimeLeft(target)).toBeNull()
  })
})

describe("pad2", () => {
  it.each([
    [0, "00"],
    [7, "07"],
    [42, "42"],
    [123, "123"],
  ])("pad2(%i) → %s", (value, expected) => {
    expect(pad2(value)).toBe(expected)
  })
})

describe("getEvergreenDeadline", () => {
  const KEY = "kursTestEndTime"

  it("starts a deadline on the first visit and stores it", () => {
    const storage = createStorage()
    vi.stubGlobal("localStorage", storage)

    const deadline = getEvergreenDeadline(KEY, DAY)

    expect(deadline.toISOString()).toBe(new Date(+NOW + DAY).toISOString())
    expect(storage.data.get(KEY)).toBe(deadline.toISOString())
  })

  it("keeps the stored deadline on later visits", () => {
    const storage = createStorage()
    vi.stubGlobal("localStorage", storage)

    const first = getEvergreenDeadline(KEY, DAY)
    vi.advanceTimersByTime(5 * HOUR)
    const second = getEvergreenDeadline(KEY, DAY)

    expect(second.getTime()).toBe(first.getTime())
    expect(storage.setItem).toHaveBeenCalledTimes(1)
  })

  it("returns a stored deadline that already passed (offer expired)", () => {
    const past = new Date(+NOW - HOUR).toISOString()
    vi.stubGlobal("localStorage", createStorage({ [KEY]: past }))

    const deadline = getEvergreenDeadline(KEY, DAY)

    expect(deadline.toISOString()).toBe(past)
    expect(getTimeLeft(deadline)).toBeNull()
  })

  it("replaces an unparsable stored value", () => {
    const storage = createStorage({ [KEY]: "not a date" })
    vi.stubGlobal("localStorage", storage)

    const deadline = getEvergreenDeadline(KEY, HOUR)

    expect(deadline.getTime()).toBe(+NOW + HOUR)
    expect(storage.data.get(KEY)).toBe(deadline.toISOString())
  })

  it("uses separate deadlines per storage key", () => {
    vi.stubGlobal("localStorage", createStorage({ other: new Date(+NOW - DAY).toISOString() }))
    expect(getEvergreenDeadline(KEY, HOUR).getTime()).toBe(+NOW + HOUR)
  })

  it("falls back to a fresh deadline when storage is unavailable", () => {
    vi.stubGlobal("localStorage", {
      getItem: () => {
        throw new Error("SecurityError")
      },
      setItem: () => {
        throw new Error("SecurityError")
      },
    })

    expect(getEvergreenDeadline(KEY, HOUR).getTime()).toBe(+NOW + HOUR)
  })
})
