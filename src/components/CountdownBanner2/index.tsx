import Typography from "components/shared/Typography"
import React, { useEffect, useState } from "react"
import CountdownTimer from "../../helpers/CountdownTimer"
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer"

const CountdownBanner2: React.FC = () => {
  const targetDate = new Date("2025-09-10T17:59:59")

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 70)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <MaxWithBgColorContainer
      bgColor={`fixed ${
        isScrolled ? "top-0" : "top-[70px]"
      } left-0 z-50 bg-ada-magicPink3  p-4 text-center`}
    >
      <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
        <Typography
          variant="h3"
          className="text-ada-pink7 text-xl md:text-2xl font-bold mb-2"
        >
          Nie czekaj - liczba miejsc ograniczona!
        </Typography>
        <CountdownTimer targetDate={targetDate} color="bg-ada-magicPink3" />
      </div>
    </MaxWithBgColorContainer>
  )
}

export default CountdownBanner2
