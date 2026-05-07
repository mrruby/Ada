import React from "react"

export const WYZWANIE_PAGE_TITLE = "Kampania sprzedażowa w pigułce - Wyzwanie"
export const wyzwanieHeroBgColor = "bg-ada-magicYellow"
export const WYZWANIE_START_DATE = new Date("2026-04-23T17:00:00")

export const wyzwanieBenefits = [
  {
    bgClass: "bg-ada-magicPink3",
    title: "🤖 ASYSTENTKA AI - KAPIBARA BARBARA",
    description:
      "Jest 23:00, ekspertki śpią, a Ty masz pytanie o kampanię? Barbara nie śpi. Nasza asystentka AI jest napędzana wiedzą z materiałów MAGIC - możesz jej wysłać screena, nagrać notatkę głosową albo po prostu zapytać jak koleżankę. Odpowiada po polsku, tylko o marketingu i bez halucynacji - konkret z naszej bazy wiedzy.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🎬 NAGRANIA KROK PO KROKU",
    description:
      "Tekst, grafika, piksel, kampania. Konkretne nagrania i wytyczne, zero lania wody, 100% praktyki. Odtwarzasz, robisz, masz gotowe.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "👥 NAGRANIE LIVE Z ADĄ",
    description:
      "Nagranie LIVE, na którym zobaczysz jak krok po kroku ustawić kampanię sprzedażową, w Menedżerze Reklam.",
  },
]

export const wyzwanieHeroLeft = (
  <>
    <h1 className="text-[48px] lg:text-adaBig font-anton font-normal leading-[95%] mb-5">
      <span className="text-ada-magicPurple4">Kampania</span>
      <br />
      <span className="text-ada-magicPurple4">sprzedażowa</span>
      <br />
      <span className="text-black">w pigułce</span>
    </h1>
    <div className="flex flex-col items-start gap-1">
      <span className="inline-block bg-white px-4 py-2 text-[18px] lg:text-[20px] font-normal leading-[140%] text-black whitespace-nowrap">
        Twoja pierwsza (albo lepsza)
      </span>
      <span className="inline-block bg-white px-4 py-2 text-[18px] lg:text-[20px] font-normal leading-[140%] text-black">
        kampania sprzedażowa.
      </span>
    </div>
  </>
)
