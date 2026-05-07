import React from "react"
import { useOtoTimer, OTO_URL } from "hooks/useOtoTimer"

const WyzwanieStickyCountdown = () => {
  const { isOtoActive, timeLeft } = useOtoTimer()

  const padNumber = (num: number) => num.toString().padStart(2, "0")

  if (!isOtoActive) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 flex-wrap">
        <span className="text-white text-base md:text-xl lg:text-2xl font-semibold">
          Dostęp do wyzwania za 67 zł - TYLKO przez 30 minut
        </span>
        <div className="flex items-center gap-1 md:gap-3 text-white font-bold">
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
        <a
          href={OTO_URL}
          className="bg-ada-pink7 text-white font-anton uppercase text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 rounded-full shadow-md hover:brightness-95 transition-all"
        >
          DOŁĄCZAM W NIŻSZEJ CENIE
        </a>
      </div>
    </div>
  )
}

export default WyzwanieStickyCountdown
