import { Button } from "helpers/Button"
import React, { useEffect, useRef, useState } from "react"

const NICOLA_CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2R36p86iZGPSsdhYrFdXIzDLsNY1t1QDgYSXS4aHyeqhQTgNOzE_gqZTnzjq0eaNVYtOMgNwpS"

export const NicolaCallPopup = () => {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Sentinel: marks the end of the section. When it scrolls into view
          (reader is finishing the section) the pop-up appears. */}
      <div ref={sentinelRef} aria-hidden className="h-px w-full" />

      {visible && !dismissed && (
        <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-md rounded-3xl bg-ada-magicPink4 p-6 pt-8 text-center text-black shadow-2xl md:inset-x-auto md:right-6 md:bottom-6">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Zamknij"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-2xl leading-none text-black transition hover:opacity-60"
          >
            &times;
          </button>
          <p className="text-adaSubtitle text-black">
            Nie wiesz, czy MAGIC jest dla Ciebie? Umów{" "}
            <b>bezpłatną 30-minutową rozmowę z Nicolą</b>
          </p>
          <a
            href={NICOLA_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block"
          >
            <Button
              type="button"
              text={<span>umawiam się na rozmowę</span>}
              textSize="text-base uppercase !font-extrabold text-white"
              btnStyle="bg-ada-black tracking-wide p-3 hover:opacity-90 rounded-full min-w-[180px] h-[56px] shadow-xl"
            />
          </a>
        </div>
      )}
    </>
  )
}
