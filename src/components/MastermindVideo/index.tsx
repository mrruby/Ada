import React from "react"
import { Button } from "helpers/Button"
import CountdownTimer from "helpers/CountdownTimer"

interface MastermindVideoProps {
  videoUrl: string
  buttonUrl: string
  targetDate: Date
}

const MastermindVideo = ({
  videoUrl,
  buttonUrl,
  targetDate,
}: MastermindVideoProps): JSX.Element => {
  return (
    <div className="flex flex-col pb-20 pt-20 md:pt-14 gap-10 px-2">
      <div className="flex flex-col items-center gap-2 mx-auto pb-8">
        <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight animate-bounce pt-5">
          Do końca zapisów na program zostało:
        </h2>
        <CountdownTimer targetDate={targetDate} />
        <div className="flex flex-col items-center pt-20">
          <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight pb-8">
            Umów się na wirtualną kawkę ☕, <br /> aby pogadać o programie
            mentoringowym
          </h2>
          <Button
            type="button"
            text={
              <>
                Kliknij<span className="font-bold"> i wybierz termin</span>
              </>
            }
            url={buttonUrl}
            textSize="md:text-adaSubtitle"
            btnStyle="xl:w-[410px] border-b-4 border-ada-pink"
            iconCalender
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-adaBase lg:text-adaTitle font-bold text-center leading-tight animate-bounce pb-8">
          Powtórka webinaru
        </h1>
        <iframe className="w-full aspect-video" src={videoUrl}></iframe>
      </div>
    </div>
  )
}

export default MastermindVideo
