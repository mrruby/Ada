import MentoringKoalendar from "components/MentoringKoalendar"
import CountdownTimer from "helpers/CountdownTimer"
import React from "react"

interface MastermindVideoProps {
  videoUrl: string
  buttonUrl: string
  targetDate: Date
}

const MastermindVideo = ({ videoUrl, targetDate }: MastermindVideoProps) => {
  return (
    <div className="flex flex-col pb-20 pt-20 md:pt-14 gap-10 px-2">
      <div className="flex flex-col items-center gap-2 mx-auto pb-8">
        <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight animate-bounce pt-5">
          ZAREZERWUJ SPOTKANIE DO ☕
        </h2>
        <CountdownTimer targetDate={targetDate} />
        <div className="flex flex-col items-center pt-20">
          <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight pb-8">
            Umów się na wirtualną kawkę ☕, <br /> aby pogadać o programie
            mentoringowym
          </h2>
        </div>
        <MentoringKoalendar />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-adaBase lg:text-adaTitle font-bold text-center leading-tight animate-bounce pb-8">
          Powtórka webinaru
        </h1>
        <iframe className="w-full aspect-video" src={videoUrl} title="Powtórka webinaru"></iframe>
      </div>
    </div>
  )
}

export default MastermindVideo
