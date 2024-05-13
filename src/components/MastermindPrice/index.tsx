import React from "react"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"

const MastermindPrice = ({ version }: { version: number }): JSX.Element => {
  return (
    <div className="w-full flex flex-col px-3 items-center text-center pb-8">
      {version === 1 && (
        <div className="mt-20">
          <Button
            type="button"
            text={<span className="font-bold">Chcę dołączyć!</span>}
            url="https://koalendar.com/e/ogarnij-swoje-adsy"
            textSize="md:text-adaSubtitle"
            btnStyle="md:w-[280px] border-b-4 border-ada-pink"
            iconCalender
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
