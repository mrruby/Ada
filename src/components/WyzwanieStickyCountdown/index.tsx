import React, { useEffect, useState } from "react"
import { WYZWANIE_START_DATE } from "values/wyzwanieLanding"

const OFFER_SECTION_ID = "oferta"

const WyzwanieStickyCountdown = () => {
  const calculateTimeLeft = () => {
    const difference = +WYZWANIE_START_DATE - +new Date()
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const padNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 flex-wrap">
        <span className="text-white text-sm md:text-lg font-semibold">
          Wyzwanie startuje za
        </span>
        <div className="flex items-center gap-1 md:gap-3 text-white font-bold">
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-2xl">{padNumber(timeLeft.days)}</span>
            <span className="text-[10px] md:text-xs uppercase">dni</span>
          </div>
          <span className="text-lg md:text-2xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-2xl">{padNumber(timeLeft.hours)}</span>
            <span className="text-[10px] md:text-xs uppercase">godz</span>
          </div>
          <span className="text-lg md:text-2xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-2xl">{padNumber(timeLeft.minutes)}</span>
            <span className="text-[10px] md:text-xs uppercase">min</span>
          </div>
          <span className="text-lg md:text-2xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-2xl">{padNumber(timeLeft.seconds)}</span>
            <span className="text-[10px] md:text-xs uppercase">sek</span>
          </div>
        </div>
        <button
          onClick={() => {
            const section = document.getElementById(OFFER_SECTION_ID)
            if (section) {
              section.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="bg-ada-magicYellow text-black font-anton uppercase text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 rounded-full shadow-md hover:brightness-95 transition-all"
        >
          SPRAWDZAM
        </button>
        <button
          onClick={() => {
            const section = document.getElementById(OFFER_SECTION_ID)
            if (section) {
              section.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="bg-ada-pink text-white font-anton uppercase text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 rounded-full shadow-md hover:brightness-95 transition-all"
        >
          DOŁĄCZAM
        </button>
      </div>
    </div>
  )
}

export default WyzwanieStickyCountdown
