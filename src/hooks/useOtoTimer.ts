import { useState, useEffect, useCallback } from "react"

type OtoStatusResponse = {
  active: boolean
  endsAt: string | null
  secondsLeft: number
}

const DEFAULT_TIME_LEFT = { minutes: 0, seconds: 0 }
const CAMPAIGN_ID = "wyzwanie"

const getOtoToken = () => {
  if (typeof window === "undefined") return null
  return new URLSearchParams(window.location.search).get("oto")
}

const getStatusEndpoint = () => {
  const token = getOtoToken()
  const params = new URLSearchParams({ campaign: CAMPAIGN_ID })

  if (token) {
    params.set("oto", token)
    return `/api/oto/start?${params.toString()}`
  }

  return `/api/oto/status?${params.toString()}`
}

const getTimeLeft = (endsAt: string) => {
  const remaining = new Date(endsAt).getTime() - Date.now()

  if (remaining <= 0) return DEFAULT_TIME_LEFT

  return {
    minutes: Math.floor(remaining / 60000),
    seconds: Math.floor((remaining % 60000) / 1000),
  }
}

export const useOtoTimer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isOtoActive, setIsOtoActive] = useState(false)
  const [endsAt, setEndsAt] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME_LEFT)

  const applyStatus = useCallback((status: OtoStatusResponse | null) => {
    if (!status?.active || !status.endsAt) {
      setIsOtoActive(false)
      setEndsAt(null)
      setTimeLeft(DEFAULT_TIME_LEFT)
      return
    }

    setIsOtoActive(true)
    setEndsAt(status.endsAt)
    setTimeLeft(getTimeLeft(status.endsAt))
  }, [])

  useEffect(() => {
    let isMounted = true

    const loadStatus = async () => {
      if (typeof window === "undefined") return

      try {
        const response = await fetch(getStatusEndpoint(), {
          credentials: "include",
        })
        const status = response.ok
          ? ((await response.json()) as OtoStatusResponse)
          : null

        if (isMounted) applyStatus(status)
      } catch (error) {
        console.error("Error loading OTO status:", error)
        if (isMounted) applyStatus(null)
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadStatus()

    return () => {
      isMounted = false
    }
  }, [applyStatus])

  useEffect(() => {
    if (!endsAt) return

    const updateTimer = () => {
      const nextTimeLeft = getTimeLeft(endsAt)

      if (nextTimeLeft.minutes === 0 && nextTimeLeft.seconds === 0) {
        setIsOtoActive(false)
        setEndsAt(null)
        setTimeLeft(DEFAULT_TIME_LEFT)
        return
      }

      setTimeLeft(nextTimeLeft)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [endsAt])

  return { isLoading, isOtoActive, timeLeft, endsAt }
}

export const OTO_PRICE = "67 zł"
export const OTO_OLD_PRICE = "119 zł"
export const REGULAR_PRICE = "119 zł"
export const OTO_CHECKOUT_URL = `/api/oto/checkout?campaign=${CAMPAIGN_ID}`
