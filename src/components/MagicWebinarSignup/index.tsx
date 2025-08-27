import { Button } from "helpers/Button"
import { MagicSunYellow } from "helpers/LayoutElements"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinarSignup = () => {
  return (
    <div className="bg-ada-newPurple py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Main heading with yellow suns */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2">
            <div className="w-[60px] h-[60px]">
              <MagicSunYellow width="60px" zIndex="z-0" />
            </div>
            <Typography
              variant="h1"
              className="text-ada-pink7 text-3xl md:text-4xl font-bold"
            >
              Nie czekaj - liczba miejsc ograniczona!
            </Typography>
            <div className="w-[60px] h-[60px]">
              <MagicSunYellow width="60px" zIndex="z-0" />
            </div>
          </div>
        </div>

        {/* Pink rounded square with event details */}
        <div className="bg-pink-200 rounded-lg p-6 max-w-md mx-auto mb-8">
          <div className="text-center space-y-3">
            <Typography
              variant="h2"
              className="text-ada-magicPurple text-2xl md:text-3xl font-extrabold"
            >
              ⏰ Termin: 10.09
            </Typography>
            <Typography
              variant="h2"
              className="text-ada-magicPurple text-2xl md:text-3xl font-extrabold"
            >
              🕒 Godzina: 18:00
            </Typography>
          </div>
        </div>

        {/* Sign up button */}
        <div className="flex justify-center">
          <Button
            type="button"
            text={
              <span className="font-bold text-white uppercase">
                ZAPISUJĘ SIĘ!
              </span>
            }
            sectionId="top"
            textSize="text-lg md:text-xl"
            btnStyle="bg-ada-pink7 hover:bg-ada-pink7/90 px-8 py-4 rounded-full uppercase font-bold shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default MagicWebinarSignup
