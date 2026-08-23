import React, { useEffect, useRef, useState } from "react"
import { JESIEN_DEADLINE_DAY } from "values/jesienLanding"

type JesienCountdownBarProps = {
  targetDate: Date
}

type TimeLeft = {
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

const padNumber = (value: number) => value.toString().padStart(2, "0")

const Tile: React.FC<{ label: string; value: number | null }> = ({
  label,
  value,
}) => (
  <span className="min-w-[46px] rounded-[9px] bg-ada-jesienInk px-1.5 pt-1 pb-[5px] leading-none text-white max-[560px]:min-w-[40px]">
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

const JesienCountdownBar: React.FC<JesienCountdownBarProps> = ({
  targetDate,
}) => {
  // null = jeszcze nie zmierzone (SSR), false = czas minął
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | false>(null)
  const [barHeight, setBarHeight] = useState<number | null>(null)
  const barRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const updateHeight = () => setBarHeight(bar.offsetHeight)
    updateHeight()

    if (!("ResizeObserver" in window)) return
    const observer = new ResizeObserver(updateHeight)
    observer.observe(bar)
    return () => observer.disconnect()
  }, [])

  const isExpired = timeLeft === false
  const values = isExpired
    ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
    : timeLeft

  return (
    <>
      <div
        ref={barRef}
        className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_6px_20px_rgba(36,26,58,0.08)]"
        role="region"
        aria-label="Odliczanie do końca dostępu"
      >
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-x-[18px] gap-y-2.5 px-[22px] py-[9px] text-center max-[560px]:gap-x-3 max-[560px]:gap-y-[5px] max-[560px]:px-3 max-[560px]:py-2">
          <span className="text-[0.86rem] font-semibold max-[560px]:text-[0.74rem]">
            {isExpired ? (
              <>
                ⏳ Czas minął — szkolenie jest już w{" "}
                <strong className="text-ada-jesienPink">
                  płatnej sprzedaży
                </strong>
              </>
            ) : (
              <>
                ⏳ Nagranie za 0 zł jest dostępne tylko do{" "}
                <strong className="text-ada-jesienPink">
                  {JESIEN_DEADLINE_DAY}, do końca dnia
                </strong>
              </>
            )}
          </span>
          <div className="flex items-center gap-[5px]" aria-live="off">
            <Tile label="DNI" value={values ? values.days : null} />
            <Separator />
            <Tile label="GODZ" value={values ? values.hours : null} />
            <Separator />
            <Tile label="MIN" value={values ? values.minutes : null} />
            <Separator />
            <Tile label="SEK" value={values ? values.seconds : null} />
          </div>
        </div>
        <span
          className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-ada-jesienOrange via-ada-jesienPink to-ada-jesienPurple"
          aria-hidden="true"
        />
      </div>
      <div
        className="h-[57px] max-[714px]:h-[90px]"
        style={barHeight ? { height: barHeight } : undefined}
        aria-hidden="true"
      />
    </>
  )
}

export default JesienCountdownBar
