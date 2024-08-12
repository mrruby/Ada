import React, { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
  text?: string
}

const TimeSegment: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => (
  <div className="flex flex-col items-center font-bold text-adaBase">
    <p className="font-medium">{label}</p>
    <div className="text-2xl">{value.toString().padStart(2, "0")}</div>
  </div>
)

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  text,
}) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date()
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div className="flex flex-col items-center">
      {text && <p className="mb-2 text-xl">{text}</p>}
      <div className="flex w-full gap-8 lg:max-w-[660px] justify-around bg-ada-light-pink px-4 py-2">
        <TimeSegment label="GODZIN" value={timeLeft.hours} />
        <TimeSegment label="MINUT" value={timeLeft.minutes} />
        <TimeSegment label="SEKUND" value={timeLeft.seconds} />
      </div>
    </div>
  )
}

export default CountdownTimer
