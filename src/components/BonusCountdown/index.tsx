import React, { useEffect, useState } from "react"
import CountdownTimer from "../../helpers/CountdownTimer"
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer"

const BonusCountdown: React.FC = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null)

  useEffect(() => {
    const now = new Date()
    const day = now.getDay()
    // 0 = Sunday, 1 = Monday, 2 = Tuesday, ...
    // Calculate days until next Tuesday (2)
    // If today is Tuesday (2), diff is 0 (so today)
    // If today is Wednesday (3), diff is 6 (next Tuesday)
    const daysUntilTuesday = (2 - day + 7) % 7
    
    const target = new Date(now)
    target.setDate(target.getDate() + daysUntilTuesday)
    target.setHours(23, 59, 59, 999)
    
    setTargetDate(target)
  }, [])

  if (!targetDate) return null

  return (
    <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
      <div className="py-2 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-center">
          ✨ Bonusy ukryte w koszyku znikają za:
        </p>
        <div className="-mt-2 md:mt-0">
          <CountdownTimer targetDate={targetDate} color="bg-ada-light-pink" />
        </div>
      </div>
    </MaxWithBgColorContainer>
  )
}

export default BonusCountdown
