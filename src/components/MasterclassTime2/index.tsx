import React from "react"
import CountdownTimer from "helpers/CountdownTimer"

const MasterclassTime2 = (): JSX.Element => {
  return (
    <div className="flex flex-col py-20 md:pt-14 gap-10 px-2 items-center bg-ada-light-pink animate-fadeIn">
      <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight animate-bounce pt-5">
        Na dołączenie do warsztatów zostało:{" "}
      </h2>
      <div className="border-[1px] border-ada-blue md:min-w-[720px] justify-center flex">
        <CountdownTimer targetDate={new Date("2024-01-25T18:00:00")} />
      </div>
    </div>
  )
}

export default MasterclassTime2
