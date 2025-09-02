import Typography from "components/shared/Typography"
import React from "react"
import CountdownTimer from "../../helpers/CountdownTimer"
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer"

const CountdownBanner2: React.FC = () => {
  const targetDate = new Date("2025-09-10T17:59:59")

  return (
    <MaxWithBgColorContainer bgColor="fixed bottom-0 left-0 w-full z-50 bg-ada-light-pink flex flex-col items-center p-4 text-center">
      <Typography
        variant="h2"
        className="text-ada-pink7 text-3xl md:text-4xl font-bold mb-4"
      >
        Nie czekaj - liczba miejsc ograniczona!
      </Typography>
      <CountdownTimer targetDate={targetDate} text="" />
    </MaxWithBgColorContainer>
  )
}

export default CountdownBanner2
