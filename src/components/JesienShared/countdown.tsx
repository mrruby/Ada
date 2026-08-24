import React, { useEffect, useState } from "react"

export type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const difference = +targetDate - Date.now()
  if (difference <= 0) return null

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

// null = jeszcze nie zmierzone (SSR), false = czas minął
export const useCountdown = (targetDate: Date): TimeLeft | null | false => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | false>(null)

  useEffect(() => {
    const tick = () => {
      const next = calculateTimeLeft(targetDate)
      setTimeLeft(next ?? false)
      return next !== null
    }

    if (!tick()) return

    const timer = setInterval(() => {
      if (!tick()) clearInterval(timer)
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

const padNumber = (value: number) => value.toString().padStart(2, "0")

const Tile: React.FC<{
  label: string
  value: number | null
  bgClassName: string
}> = ({ label, value, bgClassName }) => (
  <span
    className={`min-w-[46px] rounded-[9px] px-1.5 pt-1 pb-[5px] leading-none text-white max-[560px]:min-w-[40px] ${bgClassName}`}
  >
    <span className="block text-center font-anton text-[1.28rem] tracking-[0.04em] tabular-nums max-[560px]:text-[1.06rem]">
      {value === null ? "--" : padNumber(value)}
    </span>
    <span className="mt-0.5 block text-center text-[0.52rem] font-semibold tracking-[0.14em] opacity-70">
      {label}
    </span>
  </span>
)

const Separator = () => (
  <span className="-translate-y-1 font-extrabold text-ada-jesienPink max-[560px]:hidden">
    :
  </span>
)

export const CountdownTiles: React.FC<{
  timeLeft: TimeLeft | null | false
  tileBgClassName?: string
}> = ({ timeLeft, tileBgClassName = "bg-ada-jesienInk" }) => {
  const values =
    timeLeft === false
      ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
      : timeLeft

  return (
    <div className="flex items-center gap-[5px]" aria-live="off">
      <Tile
        label="DNI"
        value={values ? values.days : null}
        bgClassName={tileBgClassName}
      />
      <Separator />
      <Tile
        label="GODZ"
        value={values ? values.hours : null}
        bgClassName={tileBgClassName}
      />
      <Separator />
      <Tile
        label="MIN"
        value={values ? values.minutes : null}
        bgClassName={tileBgClassName}
      />
      <Separator />
      <Tile
        label="SEK"
        value={values ? values.seconds : null}
        bgClassName={tileBgClassName}
      />
    </div>
  )
}
