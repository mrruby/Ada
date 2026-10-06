export type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** Remaining time until `target`, or null once it has passed. */
export const getTimeLeft = (target: Date | number): TimeLeft | null => {
  const difference = +target - Date.now()
  if (difference <= 0) return null
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export const pad2 = (value: number) => value.toString().padStart(2, "0")

/**
 * Per-visitor deadline persisted in localStorage: starts on the first visit
 * and stays fixed afterwards ("evergreen" offers).
 */
export const getEvergreenDeadline = (storageKey: string, durationMs: number): Date => {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored && !Number.isNaN(Date.parse(stored))) return new Date(stored)
    const deadline = new Date(Date.now() + durationMs)
    localStorage.setItem(storageKey, deadline.toISOString())
    return deadline
  } catch {
    return new Date(Date.now() + durationMs)
  }
}
