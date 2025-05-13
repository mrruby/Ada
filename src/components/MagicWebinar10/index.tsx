import { Button } from "helpers/Button"
import CountdownTimer from "helpers/CountdownTimer"
import { MagicSunPink, MagicSunYellow } from "helpers/LayoutElements"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar10 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const isVersion2 = version === 2
  const colors = {
    background: isVersion2 ? "bg-ada-newPurple" : "bg-ada-magicPurple",
    accent: isVersion2 ? "text-ada-pink7" : "text-ada-magicOrange",
    button: isVersion2
      ? "bg-ada-pink7 hover:bg-ada-pink7/90"
      : "bg-ada-magicOrange hover:bg-ada-magicOrange/90",
    buttonText: isVersion2 ? "text-white" : "text-ada-magicPurple",
  }

  const renderSun = (position: string, rotate: string) =>
    isVersion2 ? (
      <MagicSunYellow mobileLeft={position} rotate={rotate} />
    ) : (
      <MagicSunPink mobileLeft={position} rotate={rotate} />
    )

  return (
    <div
      className={`flex flex-col items-center justify-center ${colors.background} p-4 text-center py-16`}
    >
      <div className="max-w-md w-full">
        {/* Header with spinners */}
        <div className="flex items-center justify-center gap-4 mb-12 relative">
          {renderSun("-left-10", "animate-spin-slow")}
          <Typography variant="h1" className={colors.accent}>
            Liczba miejsc ograniczona!
          </Typography>
          {renderSun("-right-10", "animate-spin-slow")}
        </div>

        {/* Date and time box */}
        <div className="bg-pink-100 rounded-lg p-6 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">⏰</span>
            <Typography variant="h2" className="text-[#5D4B8C]">
              Termin: 21.05
            </Typography>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">🕔</span>
            <Typography variant="h2" className="text-[#5D4B8C]">
              Godzina: 18:00
            </Typography>
          </div>
        </div>

        <CountdownTimer targetDate={new Date("2025-05-21T18:00:00")} />

        {/* Sign up button */}
        <Button
          type="button"
          text={
            <span className={`font-bold uppercase ${colors.buttonText}`}>
              ZAPISUJĘ SIĘ!
            </span>
          }
          sectionId="signup"
          textSize="text-sm md:text-base"
          btnStyle={`${colors.button} text-xl mt-6 font-bold py-6 px-12 rounded-full border-none`}
        />
      </div>
    </div>
  )
}

export default MagicWebinar10
