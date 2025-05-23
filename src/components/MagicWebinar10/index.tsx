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
            Adsy Starter Pack: Ogarniam kampanię reklamową w małej firmie!
          </Typography>
          {renderSun("-right-10", "animate-spin-slow")}
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar10
