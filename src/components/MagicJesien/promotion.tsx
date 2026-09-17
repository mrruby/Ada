import React, { useEffect, useState } from "react"
import { PROMOTION_END } from "./config"

// Stable first render for Gatsby SSR; only the client reads the clock.
export function usePromotion() {
  const [active, setActive] = useState(true)
  useEffect(() => {
    const remaining = PROMOTION_END - Date.now()
    if (remaining <= 0) {
      setActive(false)
      return
    }
    const timer = window.setTimeout(() => setActive(false), remaining)
    return () => window.clearTimeout(timer)
  }, [])
  return active
}

export function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null)
  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, PROMOTION_END - Date.now()))
    tick()
    const timer = window.setInterval(tick, 1000)
    return () => window.clearInterval(timer)
  }, [])
  if (remaining === 0) return <span className="cd">Promocja zakończona</span>
  const units = [
    [86400000, 0, "dni"],
    [3600000, 24, "godz"],
    [60000, 60, "min"],
    [1000, 60, "sek"],
  ] as const
  return (
    <span className="cd" aria-label="Czas do końca promocji">
      {units.map(([divisor, modulus, label]) => {
        const value =
          remaining === null
            ? "--"
            : String(
                modulus
                  ? Math.floor(remaining / divisor) % modulus
                  : Math.floor(remaining / divisor)
              ).padStart(2, "0")
        return (
          <React.Fragment key={label}>
            <b>{value}</b>
            <i>{label}</i>
          </React.Fragment>
        )
      })}
    </span>
  )
}

export function HeroWord() {
  const [word, setWord] = useState("Ads")
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer: number | undefined
    const sync = () => {
      window.clearInterval(timer)
      if (preference.matches) {
        setWord("Ads")
      } else {
        timer = window.setInterval(
          () => setWord((value) => (value === "Ads" ? "AI" : "Ads")),
          2800
        )
      }
    }
    sync()
    preference.addEventListener("change", sync)
    return () => {
      window.clearInterval(timer)
      preference.removeEventListener("change", sync)
    }
  }, [])
  return (
    <>
      <span aria-hidden="true">{word}</span>
      <span className="sr-only">Ads i AI</span>
    </>
  )
}
