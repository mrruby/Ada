import { Button } from "helpers/Button"
import React from "react"
import Section from "../shared/Section"

const MagicFinalCTA = () => {
  return (
    <Section bgColor="bg-transparent">
      <div className="text-center py-12">
        <Button
          type="button"
          text={<span className="font-bold uppercase">Dołączam do Magic!</span>}
          sectionId="top"
          textSize="text-lg md:text-xl"
          btnStyle="bg-ada-magicPink4 text-black 
                    font-semibold tracking-wide h-[60px] md:h-[80px] 
                    px-8 md:px-12 shadow-xl hover:opacity-90 rounded-full"
        />
      </div>
    </Section>
  )
}

export default MagicFinalCTA