import CountdownTimer from "helpers/CountdownTimer"
import React from "react"

const MasterclassTime2 = () => {
  return (
    <div className="flex flex-col py-20 md:pt-14 gap-10 px-2 items-centeranimate-fadeIn">
      <h2 className="text-adaBase lg:text-[36px] font-bold text-center leading-tight animate-bounce pt-5 uppercase">
        Na dołączenie do warsztatów zostało:
      </h2>
      <div className="md:min-w-[720px] justify-center flex">
        <CountdownTimer targetDate={new Date("2024-08-05T18:00:00")} />
      </div>
    </div>
  )
}

export default MasterclassTime2
