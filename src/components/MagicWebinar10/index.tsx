import { Button } from "helpers/Button"
import CountdownTimer from "helpers/CountdownTimer"
import { MagicSunPink } from "helpers/LayoutElements"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar10 = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#5D4B8C] p-4 text-center">
      <div className="max-w-md w-full">
        {/* Header with spinners */}
        <div className="flex items-center justify-center gap-4 mb-12 relative">
          <MagicSunPink mobileLeft="-left-10" rotate="animate-spin-slow" />
          <Typography variant="h1" className="text-ada-magicOrange">
            Nie czekaj - liczba
            <br />
            miejsc ograniczona!
          </Typography>
          <MagicSunPink mobileRight="-right-10" rotate="animate-spin-slow" />
        </div>

        {/* Date and time box */}
        <div className="bg-pink-100 rounded-lg p-6 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">⏰</span>
            <Typography variant="h2" className="text-[#5D4B8C]">
              Termin: 3.04
            </Typography>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">🕔</span>
            <Typography variant="h2" className="text-[#5D4B8C]">
              Godzina: 18:00
            </Typography>
          </div>
        </div>

        <CountdownTimer targetDate={new Date("2025-03-30T18:00:00")} />

        {/* Sign up button */}
        <Button
          type="button"
          text={
            <span className="font-bold text-ada-magicPurple uppercase">
              ZAPISUJĘ SIĘ!
            </span>
          }
          sectionId="pakiety"
          textSize="text-sm md:text-base"
          btnStyle="bg-ada-magicOrange hover:bg-ada-magicOrange/90 text-xl mt-6 font-bold py-6 px-12 rounded-full border-none"
        />
      </div>
    </div>
  )
}

export default MagicWebinar10
