import { CountdownTiles, useCountdown } from "components/JesienShared/countdown"
import { Button } from "helpers/Button"
import React from "react"

const COUNTDOWN_TARGET = new Date("2026-09-17T18:00:00+02:00")

const MagicStickyBar = () => {
  const timeLeft = useCountdown(COUNTDOWN_TARGET)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-ada-magicPurple4 py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-6 flex-wrap">
        <span className="text-white text-xs sm:text-sm md:text-lg font-semibold text-center">
          🔥 Oferta dla listy zainteresowanych – tylko do:
        </span>
        <CountdownTiles
          timeLeft={timeLeft}
          tileBgClassName="bg-ada-magicPink4 !text-black"
        />
        <Button
          type="button"
          text={<span className="font-bold">Dołączam!</span>}
          sectionId="magic-package"
          btnStyle="bg-ada-magicPink4 text-black px-5 py-2 rounded-full text-sm md:text-base hover:opacity-90"
        />
      </div>
    </div>
  )
}

export default MagicStickyBar
