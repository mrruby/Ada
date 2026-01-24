import { Button } from "helpers/Button"
import React, { useEffect, useState } from "react"

const MagicStickyBar = () => {
  const targetDate = new Date("2026-02-02T23:59:59")

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date()
    if (difference <= 0) return null
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    if (!timeLeft) return

    const timer = setInterval(() => {
      const newTime = calculateTimeLeft()
      if (!newTime) {
        clearInterval(timer)
      }
      setTimeLeft(newTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, "0")

  if (!timeLeft) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-ada-magicPurple4 py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 flex-wrap">
        <span className="text-white text-xs md:text-base font-medium">
          🔥 Niższa cena tylko do 2.02:
        </span>
        <span className="text-ada-magicYellow font-bold text-xs md:text-base">
          {pad(timeLeft.days)}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
        </span>
        <Button
          type="button"
          text={<span className="font-bold">Dołączam!</span>}
          sectionId="magic-package"
          btnStyle="bg-ada-magicPink4 text-black px-4 py-1 rounded-full text-sm hover:opacity-90"
        />
      </div>
    </div>
  )
}

export default MagicStickyBar
