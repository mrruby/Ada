import React from "react"

export const WYZWANIE_PAGE_TITLE = "Kampania sprzedażowa w pigułce - Wyzwanie"
export const wyzwanieHeroBgColor = "bg-ada-magicYellow"
export const WYZWANIE_START_DATE = new Date("2026-04-23T17:00:00")

export const wyzwanieBenefits = [
  {
    bgClass: "bg-ada-magicPink3",
    title: "✍️ NAGRANIE Z PISANIA TEKSTÓW SPRZEDAŻOWYCH",
    description:
      "Justyna pokazuje 3 kroki, które powtarza przy pisaniu tekstów reklamowych do każdej kampanii sprzedażowej. Na nagraniu poznasz gotowe schematy i prompty, które możesz zastosować od razu.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🎨 NAGRANIE Z TWORZENIA GRAFIK SPRZEDAŻOWYCH",
    description:
      "Po nagraniu Doroty będziesz wiedziała czym różni się grafika, którą ludzie przewijają, od grafiki, przy której się zatrzymują i stworzysz takie dla siebie.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "🔧 NAGRANIA Z INSTRUKCJĄ TWORZENIA PIKSELA I TESTOWANIA ZDARZEŃ",
    description:
      "Nicola nagrała dwie instrukcje jak krok po kroku ogarnąć piksel i testowanie zdarzeń - dzięki nim te techniczne sprawy przestaną być takie straszne.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🎬 NAGRANIE LIVE PROWADZONEGO PRZEZ ADĘ",
    description:
      "To jest serce całego wyzwania. W tym nagraniu Ada pokazuje jak krok po kroku ustawić kampanię sprzedażową, w Menedżerze Reklam.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "🤖 ASYSTENTKA AI - KAPIBARA BARBARA",
    description:
      "Jest 23:00, a Ty masz pytanie o kampanię? Barbara nie śpi. Nasza asystentka AI jest napędzana wiedzą z materiałów MAGIC - możesz jej wysłać screena, nagrać notatkę głosową albo po prostu zapytać jak koleżankę.",
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
