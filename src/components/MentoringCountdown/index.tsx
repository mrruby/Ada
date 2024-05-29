import React from "react"
import CountdownTimer from "helpers/CountdownTimer"

const MentoringCountdown = (): JSX.Element => {
  return (
    <div className="flex flex-col pb-10 pt-20 md:pt-14 gap-10 px-2 mx-auto">
      <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight animate-bounce pt-5">
        UMÓW ☕ DO:
      </h2>
      <CountdownTimer targetDate={new Date("2024-05-31T23:59:00")} />
    </div>
  )
}

export default MentoringCountdown
