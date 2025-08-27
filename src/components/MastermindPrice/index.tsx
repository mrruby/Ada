import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React from "react"

const MastermindPrice = ({ version }: { version: number }) => {
  return (
    <div className="w-full flex flex-col px-3 items-center text-center pb-8">
      {version === 1 && (
        <div className="mt-20">
          <Button
            type="button"
            text={<span className="font-bold">Chcę dołączyć!</span>}
            sectionId="zostaw-maila"
            textSize="md:text-adaSubtitle"
            btnStyle="md:w-[280px] border-b-4 border-ada-pink"
          />
        </div>
      )}
      {version === 2 && (
        <>
          <div className="text-adaSubtitle lg:text-adaTitle font-bold animate-bounce uppercase pt-[60px] lg:pt-[40px]">
            <TypingAnimation
              text="...abyś lepiej niż kiedykolwiek zadbała"
              textStyle="text-ada-grey"
            />
            <TypingAnimation text="o biznesy swoich klientów!" textStyle="" />
          </div>
        </>
      )}
    </div>
  )
}

export default MastermindPrice
