import React from "react"
import CountdownTimer from "helpers/CountdownTimer"
import { Button } from "helpers/Button"

const MasterclassTime1 = (): JSX.Element => {
  return (
    <div className="flex flex-col pt-20 md:pt-20  pb-5 gap-10 px-2 justify-center items-center bg-ada-light-pink">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <h2 className="text-adaBase font-bold text-center animate-bounce">
          Na dołączenie do warsztatów zostało:{" "}
        </h2>
        <div className="border-[1px] border-ada-blue">
          <CountdownTimer targetDate={new Date("2024-01-25T18:00:00")} />
        </div>
        <Button
          type="button"
          text={<span className="font-bold">DOŁĄCZ DO WARSZTATÓW</span>}
          url="/"
          textSize="md:text-adaSubtitle"
          btnStyle="md:w-[400px] bg-ada-pink2"
        />
      </div>
      <h1 className="text-adaBase md:text-adaSubtitleThird font-bold text-center animate-bounce">
        Bądź jak Kevin, postaw na siebie w przemyślany sposób!{" "}
      </h1>
    </div>
  )
}

export default MasterclassTime1
