import React from "react"
import { Button } from "helpers/Button"
import CountdownTimer  from "helpers/CountdownTimer"

const MastermindVideo = (): JSX.Element => {
  return (
    <div className="flex flex-col pb-20 pt-20 md:pt-14 gap-10 px-2">
      <div className="flex flex-col md:flex-row items-center gap-8 mx-auto">
        <CountdownTimer targetDate={new Date('2023-12-04T00:00:00')} />
        <Button
            type="button"
            text={
              <>
                Umów konsultacje i<span className="font-bold"> dołącz teraz</span>
              </>
            }
            url="https://koalendar.com/e/ogarnij-swoje-adsy-konsultacja/"
            textSize="md:text-adaSubtitle"
            btnStyle="xl:w-[600px] border-b-4 border-ada-pink"
            iconCalender
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-adaBase lg:text-adaTitle font-bold text-center leading-tight animate-bounce pb-8">
           Powtórka webinaru
          </h1>
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/T8BlrsS4lLE?si=Cd2vxXE0l7xTJDKE"></iframe>
      </div>
    </div>
  )
}

export default MastermindVideo
