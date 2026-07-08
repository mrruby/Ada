import { Button } from "helpers/Button"
import React, { useEffect, useRef, useState } from "react"

const NICOLA_CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2R36p86iZGPSsdhYrFdXIzDLsNY1t1QDgYSXS4aHyeqhQTgNOzE_gqZTnzjq0eaNVYtOMgNwpS"

const MagicNicolaPopup = () => {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || hasShown) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setHasShown(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [hasShown])

  return (
    <>
      {/* Sentinel: marks the end of the section. The pop-up fires once the
          reader scrolls far enough to reach it (i.e. finishes the section). */}
      <div ref={sentinelRef} aria-hidden="true" className="h-px w-full" />

      {isVisible && (
        <div className="fixed inset-x-4 bottom-4 z-50 md:inset-x-auto md:right-6 md:max-w-sm">
          <div className="relative rounded-2xl bg-ada-magicPink4 p-6 text-black shadow-2xl">
            <button
              type="button"
              aria-label="Zamknij"
              onClick={() => setIsVisible(false)}
              className="absolute right-3 top-2 text-3xl leading-none text-black transition hover:opacity-70"
            >
              &times;
            </button>
            <p className="pr-6 text-lg font-bold text-black">
              Nie wiesz, czy MAGIC jest dla Ciebie?
            </p>
            <p className="mt-2 text-black">
              Umów <b>bezpłatną 30-minutową rozmowę z Nicolą</b>.
            </p>
            <a
              href={NICOLA_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
              onClick={() => setIsVisible(false)}
            >
              <Button
                type="button"
                text={<span>umawiam się na rozmowę</span>}
                textSize="text-base uppercase !font-extrabold text-black"
                btnStyle="bg-white tracking-wide p-3 hover:opacity-90 rounded-full min-w-[180px] h-[56px] shadow-xl"
              />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default MagicNicolaPopup
