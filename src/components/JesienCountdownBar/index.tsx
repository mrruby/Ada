import { CountdownTiles, useCountdown } from "components/JesienShared/countdown"
import React, { useEffect, useRef, useState } from "react"
import { JESIEN_DEADLINE_DAY } from "values/jesienLanding"

type JesienCountdownBarProps = {
  targetDate: Date
  label?: React.ReactNode
  subline?: React.ReactNode
}

const defaultLabel = (
  <>
    ⏳ Nagranie za 0 zł jest dostępne tylko do{" "}
    <strong className="text-ada-jesienPink">
      {JESIEN_DEADLINE_DAY}, do końca dnia
    </strong>
  </>
)

const JesienCountdownBar: React.FC<JesienCountdownBarProps> = ({
  targetDate,
  label = defaultLabel,
  subline,
}) => {
  const timeLeft = useCountdown(targetDate)
  const [barHeight, setBarHeight] = useState<number | null>(null)
  const barRef = useRef<HTMLDivElement>(null)

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
              label
            )}
          </span>
          <CountdownTiles timeLeft={timeLeft} />
        </div>
        {subline && (
          <p className="px-[22px] pb-[7px] text-center text-[0.72rem] leading-[1.4] text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk max-[560px]:text-[0.66rem]">
            {subline}
          </p>
        )}
        <span
          className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-ada-jesienOrange via-ada-jesienPink to-ada-jesienPurple"
          aria-hidden="true"
        />
      </div>
      <div
        className={
          subline
            ? "h-[80px] max-[714px]:h-[113px]"
            : "h-[57px] max-[714px]:h-[90px]"
        }
        style={barHeight ? { height: barHeight } : undefined}
        aria-hidden="true"
      />
    </>
  )
}

export default JesienCountdownBar
