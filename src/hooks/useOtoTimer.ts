import { useState, useEffect, useCallback } from "react"

const OTO_DURATION_MS = 30 * 60 * 1000 // 30 minutes
const OTO_START_KEY = "wyzwanie_oto_start"

export const useOtoTimer = () => {
  const [isOtoActive, setIsOtoActive] = useState(true)
  const [timeLeft, setTimeLeft] = useState({ minutes: 30, seconds: 0 })

  const getStartTime = useCallback(() => {
    if (typeof window === "undefined") return null
    const stored = localStorage.getItem(OTO_START_KEY)
    if (stored) {
      return parseInt(stored, 10)
    }
    const now = Date.now()
    localStorage.setItem(OTO_START_KEY, now.toString())
    return now
  }, [])

  useEffect(() => {
    const startTime = getStartTime()
    if (!startTime) return

    const updateTimer = () => {
      const elapsed = Date.now() - startTime
      const remaining = OTO_DURATION_MS - elapsed

      if (remaining <= 0) {
        setIsOtoActive(false)
        setTimeLeft({ minutes: 0, seconds: 0 })
        return
      }

      setIsOtoActive(true)
      setTimeLeft({
        minutes: Math.floor(remaining / 60000),
        seconds: Math.floor((remaining % 60000) / 1000),
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [getStartTime])

  return { isOtoActive, timeLeft }
}

export const OTO_PRICE = "67 zł"
export const OTO_OLD_PRICE = "119 zł"
export const REGULAR_PRICE = "119 zł"
export const OTO_URL = "https://easl.ink/v62RG"
export const REGULAR_URL = "https://easl.ink/Yib03"
