import React from "react"
import CountdownTimer from "helpers/CountdownTimer"

const MasterclassTime = (): JSX.Element => {
  return (
    <div className="flex flex-col pt-20 md:pt-14 gap-10 px-2 items-center">
      <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight animate-bounce pt-5">
        Na dołączenie do warsztatów zostało:{" "}
      </h2>
      <CountdownTimer targetDate={new Date("2024-01-17T18:00:00")} />
    </div>
  )
}

export default MasterclassTime
