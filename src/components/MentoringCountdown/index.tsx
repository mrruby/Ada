import React from "react"
import CountdownTimer from "helpers/CountdownTimer"

const MentoringCountdown = (): JSX.Element => {
  return (
    <div className="flex flex-col pb-6 pt-20 md:pt-14 gap-10 px-2 mx-auto">
      <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight animate-bounce pt-5">
        ZAREZERWUJ SPOTKANIE DO ☕
      </h2>
      <CountdownTimer targetDate={new Date("2024-04-03T00:00:00")} />
    </div>
  )
}

export default MentoringCountdown
