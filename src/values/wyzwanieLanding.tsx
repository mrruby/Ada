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
    bgClass: "bg-ada-magicYellow",
    title: "👩‍👩‍👧‍👧 DOSTĘP DO ZESPOŁU 4 EKSPERTEK",
    description:
      "Ada, Justyna, Dorota i Nicola pomogą Ci w: reklamach Meta Ads, tekstach, grafikach i organizacji kampanii. Jak mieć mini-agencję na wyciągnięcie ręki - za ułamek ceny.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🤝 SPOŁECZNOŚĆ I ZROZUMIENIE",
    description:
      'Dołączasz do grupy kobiet, które też chcą ogarnąć reklamy - bez googlowania, bez czekania 4 dni na odpowiedź w facebookowej grupie i bez "sama sobie". Tutaj nikt nie ocenia "głupich pytań".',
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🎬 NAGRANIA KROK PO KROKU",
    description:
      "Tekst, grafika, piksel, kampania. Konkretne nagrania i wytyczne, zero lania wody, 100% praktyki. Odtwarzasz, robisz, masz gotowe.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "👥 SPOTKANIE LIVE Z ADĄ",
    description:
      "Razem ustawiamy kampanię sprzedażową + Q&A. Zadajesz pytanie, pokazujesz swój przypadek i dostajesz odpowiedź na żywo. Jak konsultacja, tylko w cenie wyzwania.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "💎 KONSULTACJE NA PLATFORMIE",
    description:
      "Od czwartku do poniedziałku wrzucasz swoje materiały do skonsultowania. Tekst, grafika, ustawienia - sprawdzimy i powiemy, co poprawić. Konkretny feedback, nie ogólniki.",
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
