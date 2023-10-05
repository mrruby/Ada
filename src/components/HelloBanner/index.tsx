import React from "react"

const HelloBanner = (): JSX.Element => {
  return (
    <div className="w-full bg-adapromis h-[500px] md:h-[690px] xl:h-[850px] flex flex-col items-center justify-center">
          <h2 className="text-[40px] lg:text-[96px] font-bold text-center">Cześć, tu Ada Promis!</h2>
          <p className="max-w-[726px] text-center font-medium text-[14px] md:text-adaBase">Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny: praktykuję slow marketing, przemyślany, wartościowy, zbudowany na relacjach</p>
    </div>
  )
}

export default HelloBanner

