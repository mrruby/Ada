import { Button } from "helpers/Button"
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
      className={`flex flex-col items-center justify-center ${colors.background} p-4 text-center`}
    >
      <div className="max-w-md w-full">
        {/* Header with spinners */}
        <div className="flex items-center justify-center gap-4 mb-12 relative">
          <Button
            type="button"
            text={
              <span className="text-ada-newPurple font-bold uppercase">
                Ogarniam reklamy w małej firmie - jesienny re-start
              </span>
            }
            sectionId="top"
            textSize="text-sm md:text-base"
            btnStyle="bg-ada-yellow3 hover:bg-ada-yellow3/90 px-6 py-4 rounded-lg uppercase font-bold"
          />
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar10
