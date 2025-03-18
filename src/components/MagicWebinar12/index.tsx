import { Button } from "helpers/Button"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar12 = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-ada-magicOrange p-4 text-center">
      {/* Sign up button */}
      <Button
        type="button"
        text={
          <span className="font-bold text-ada-magicPurple uppercase">
            REZERWUJE MIEJSCE
          </span>
        }
        sectionId="pakiety"
        textSize="text-xl md:text-2xl"
        btnStyle="bg-pink-100 hover:bg-ada-magicPurple/90 text-xl font-bold py-6 mb-6 px-12 rounded-full border-none"
      />
      <div>
        <div className="bg-ada-magicPurple p-1 text-white font-bold mr-1 mb-3 md:mb-0 inline">
          Uwaga:
        </div>
        <Typography variant="body" className="text-white inline font-bold">
          Ilość miejsc ograniczona - zdecyduj się teraz!
        </Typography>
      </div>
    </div>
  )
}

export default MagicWebinar12
