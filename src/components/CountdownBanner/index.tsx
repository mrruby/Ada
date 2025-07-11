import React from "react"
import CountdownTimer from "../../helpers/CountdownTimer"
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer"

const CountdownBanner: React.FC = () => {
  const targetDate = new Date("2025-07-14T23:59:59")

  return (
    <MaxWithBgColorContainer bgColor="bg-ada-yellow">
      <div className="py-4 md:py-6">
        <CountdownTimer
          targetDate={targetDate}
          text="Najniższa cena i bonus znikają za"
        />
      </div>
    </MaxWithBgColorContainer>
  )
}

export default CountdownBanner