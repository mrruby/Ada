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
    <div className="fixed top-0 left-0 right-0 z-50 bg-ada-magicPurple4 py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 md:gap-6 flex-wrap">
        <span className="text-white text-sm md:text-xl font-medium">
          🔥 Niższa cena tylko do 2.02:
        </span>
        <span className="text-ada-magicYellow font-bold text-lg md:text-2xl">
          {pad(timeLeft.days)}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s
        </span>
        <Button
          type="button"
          text={<span className="font-bold">Dołączam!</span>}
          sectionId="magic-package"
          btnStyle="bg-ada-magicPink4 text-black px-5 py-2 rounded-full text-base hover:opacity-90"
        />
      </div>
    </div>
  )
}

export default MagicStickyBar
