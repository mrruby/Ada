import React from "react"

export const WYZWANIE_PAGE_TITLE = "Kampania sprzedażowa w pigułce - Wyzwanie"
export const wyzwanieHeroBgColor = "bg-ada-magicYellow"

export const wyzwanieBenefits = [
  {
    bgClass: "bg-ada-magicPink3",
    title: "👩 Wsparcie i motywacja",
    description:
      "Nie zostawiamy Cię samej przed komputerem. Przez cały tydzień masz do kogo napisać, kiedy coś nie działa albo nie wiesz, co dalej.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "👥 dostęp do zespołu 4 ekspertek",
    description:
      "Ada, Justyna, Dorota i Nicola pomogą Ci w: reklamach Meta Ads, tekstach, grafikach i organizacji kampanii.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🤗 Społeczność i zrozumienie",
    description:
      'Dołączasz do grupy kobiet, które też chcą ogarnąć reklamy - bez googlowania, bez czekania 4 dni na odpowiedź w facebookowej grupie i bez "sama sobie".',
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "👩‍💻 Nagrania krok po kroku",
    description:
      "Tekst, grafika, piksel, kampania. Konkretne nagrania i wytyczne, zero lania wody, 100% praktyki.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "👥 Spotkanie LIVE z Adą",
    description:
      "Razem ustawiamy kampanię sprzedażową + Q&A. Zadajesz pytanie, pokazujesz swój przypadek i dostajesz odpowiedź na żywo.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "💎 Konsultacje na platformie",
    description:
      "Od czwartku do poniedziałku wrzucasz swoje materiały do skonsultowania. Tekst, grafika, ustawienia - sprawdzimy i powiemy, co poprawić.",
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
