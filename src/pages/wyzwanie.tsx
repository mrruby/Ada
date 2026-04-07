import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Accordion } from "helpers/Accordion"
import { Button } from "helpers/Button"
import YellowCircleArrow from "helpers/YellowCircleArrow"
import React from "react"
import {
  WYZWANIE_PAGE_TITLE,
  wyzwanieBenefits,
  wyzwanieHeroBgColor,
  wyzwanieHeroLeft,
} from "values/wyzwanieLanding"

const OFFER_SECTION_ID = "oferta"
// TODO: replace with the real easycart checkout URL
const WYZWANIE_CHECKOUT_URL = "#TODO-checkout"

const wyzwanieHeroOverlay = (
  <div className="absolute -top-2 -right-28 z-0 w-[360px] xl:w-[420px] pointer-events-none">
    <div className="relative">
      <div className="drop-shadow-[0_22px_42px_rgba(0,0,0,0.28)]">
        <StaticImage
          src="../images/wyzwanie-laptop.webp"
          alt="Podgląd kampanii sprzedażowej na laptopie"
          placeholder="blurred"
        />
      </div>
      <div className="absolute -bottom-4 right-0 w-[120px] xl:w-[140px] drop-shadow-[0_18px_36px_rgba(0,0,0,0.22)]">
        <StaticImage
          src="../images/wyzwanie-phone.webp"
          alt="Podgląd społeczności na telefonie"
          placeholder="blurred"
        />
      </div>
    </div>
  </div>
)

const wyzwanieHeroFigure = (
  <div className="relative z-10">
    <StaticImage
      src="../images/ada-show.webp"
      alt="Ada"
      placeholder="blurred"
    />
  </div>
)

const wyzwanieAfterHeroSection = (
  <MaxWithBgColorContainer bgColor="bg-white">
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="text-[28px] lg:text-adaSubtitleThird font-anton font-normal text-black leading-none mb-8">
          🗓️ 20.04 - start wyzwania
        </p>
        <Button
          type="button"
          variant="dark"
          sectionId={OFFER_SECTION_ID}
          text={<span className="font-bold uppercase">Sprawdzam</span>}
          textSize="text-[24px] lg:text-[30px]"
          btnStyle="px-10 lg:px-14 py-5"
        />
      </div>
    </div>
  </MaxWithBgColorContainer>
)

const wyzwaniePinkSection = (
  <div className="py-16 lg:py-20 px-4">
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center lg:max-w-[50%]">
      <div className="relative w-full h-[84px] mb-2">
        <YellowCircleArrow
          mobileTop="top-0"
          mobileLeft="left-1/2 -translate-x-1/2"
          width="72px"
        />
      </div>
      <h2 className="inline-block bg-ada-magicYellow px-4 py-3 text-[32px] lg:text-[56px] font-anton font-normal uppercase leading-[95%] text-black mb-8">
        O CO CHODZI W TYM WYZWANIU?
      </h2>
      <p className="max-w-4xl text-[18px] lg:text-[24px] leading-[150%] text-black">
        <span className="font-bold">
          Wrzucasz posty, stories, reelsy… i czekasz, aż ktoś w końcu kliknie w
          link i kupi.
        </span>{" "}
        A tymczasem Twoja konkurencja już puszcza reklamy i zbiera klientów,
        którzy mogliby trafić do Ciebie.{" "}
        <span className="font-bold">
          W ciągu 7 dni przeprowadzimy Cię przez cały proces - od tekstu i
          grafiki, przez piksel i zdarzenia, aż po ustawienie kampanii
          sprzedażowej w Menedżerze Reklam.
        </span>{" "}
        Konkretne nagrania, wytyczne krok po kroku i wsparcie 4 ekspertek, które
        codziennie pracują z Meta Ads.
      </p>
    </div>
  </div>
)

type WyzwanieDay = {
  number: string
  date: string
  side: "left" | "right" | "full"
  sectionBg: string
  pillBg: string
  numberBg: string
  titleBold: string
  subtitle: string
  portrait?: React.ReactNode
}

const wyzwanieDays: WyzwanieDay[] = [
  {
    number: "1",
    date: "PONIEDZIAŁEK 21.04",
    side: "left",
    sectionBg: "bg-ada-magicPurple4",
    pillBg: "bg-ada-magicYellow",
    numberBg: "bg-ada-magicYellow",
    titleBold:
      "Przywitanie od Ady + nagranie od Justyny z wytycznymi do tekstów sprzedażowych.",
    subtitle: "Dostajesz konkretne wskazówki, siadasz i piszesz.",
    portrait: (
      <StaticImage
        src="../images/justyna_portrait.webp"
        alt="Justyna Król"
        placeholder="blurred"
        className="h-full w-full"
      />
    ),
  },
  {
    number: "2",
    date: "WTOREK 22.04",
    side: "right",
    sectionBg: "bg-ada-magicYellow",
    pillBg: "bg-ada-magicPurple4",
    numberBg: "bg-ada-magicPurple4",
    titleBold:
      "Nagranie od Doroty: jak przygotować grafikę do reklamy, która zatrzymuje scroll.",
    subtitle:
      "Bo najlepszy tekst nie zadziała, jeśli nikt nie zatrzyma się na Twojej kreacji.",
    portrait: (
      <StaticImage
        src="../images/dorota_portrait.webp"
        alt="Dorota Woźniak"
        placeholder="blurred"
        className="h-full w-full"
      />
    ),
  },
  {
    number: "3",
    date: "ŚRODA 23.04",
    side: "left",
    sectionBg: "bg-ada-magicPurple4",
    pillBg: "bg-ada-magicYellow",
    numberBg: "bg-ada-magicYellow",
    titleBold: "Piksel, zdarzenia, testowanie. Brzmi przerażająco?",
    subtitle: "Dostajesz nagranie z instrukcją krok po kroku.",
    portrait: (
      <StaticImage
        src="../images/nicola_portrait.webp"
        alt="Nicola Kut"
        placeholder="blurred"
        className="h-full w-full"
      />
    ),
  },
  {
    number: "4",
    date: "CZWARTEK 24.04",
    side: "right",
    sectionBg: "bg-ada-magicYellow",
    pillBg: "bg-ada-magicPurple4",
    numberBg: "bg-ada-magicPurple4",
    titleBold:
      "Spotkanie LIVE z Adą: ustawiamy kampanię sprzedażową razem + Q&A na żywo.",
    subtitle: "Otrzymujesz także dostęp do nagrania.",
    portrait: (
      <StaticImage
        src="../images/ada_portrait.webp"
        alt="Adrianna Promis-Urbas"
        placeholder="blurred"
        className="h-full w-full"
      />
    ),
  },
  {
    number: "5",
    date: "PIĄTEK – PONIEDZIAŁEK 27.04",
    side: "full",
    sectionBg: "bg-ada-magicPurple4",
    pillBg: "bg-ada-magicYellow",
    numberBg: "bg-ada-magicYellow",
    titleBold: "Czas na wdrożenie, pytania i konsultacje na platformie.",
    subtitle: "Wrzucasz materiały, dostajesz feedback.",
  },
]

const WyzwanieDaySection = ({ day }: { day: WyzwanieDay }) => {
  const isFull = day.side === "full"
  const isRight = day.side === "right"
  const pillExtraPadding = isFull
    ? ""
    : isRight
      ? "lg:pl-[180px]"
      : "lg:pr-[180px]"
  const subtitleExtraPadding = isFull
    ? ""
    : isRight
      ? "lg:pl-[240px]"
      : "lg:pr-[240px]"
  const portraitPosition = isRight ? "lg:-left-2" : "lg:-right-2"

  return (
    <MaxWithBgColorContainer bgColor={day.sectionBg}>
      <div className="px-4 py-10 lg:py-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center lg:w-1/2 lg:max-w-none">
          <div
            className={`relative w-full ${isFull ? "" : "lg:min-h-[220px]"}`}
          >
            <div className="w-full">
              <div
                className={`inline-flex w-full items-center gap-3 rounded-full ${day.pillBg} px-4 py-3 shadow-[0_12px_26px_rgba(0,0,0,0.14)] lg:gap-5 lg:px-6 lg:py-4 ${pillExtraPadding} ${
                  isRight ? "justify-end" : ""
                }`}
              >
                {!isRight && (
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${day.numberBg} text-[28px] font-anton leading-none text-black lg:h-14 lg:w-14 lg:text-[36px]`}
                  >
                    {day.number}
                  </div>
                )}
                <p
                  className={`font-anton uppercase leading-none text-black ${
                    isFull
                      ? "text-[22px] lg:text-[42px]"
                      : "text-[24px] lg:text-adaTitle"
                  }`}
                >
                  {day.date}
                </p>
                {isRight && (
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${day.numberBg} text-[28px] font-anton leading-none text-black lg:h-14 lg:w-14 lg:text-[36px]`}
                  >
                    {day.number}
                  </div>
                )}
              </div>
              <p
                className={`mt-6 text-[16px] leading-[120%] text-black lg:text-[18px] ${subtitleExtraPadding}`}
              >
                <span className="block font-bold">{day.titleBold}</span>
                <span className="mt-1 block font-normal">{day.subtitle}</span>
              </p>
            </div>
            {day.portrait && (
              <div
                className={`mt-8 flex justify-center lg:absolute ${portraitPosition} lg:top-[-28px] lg:mt-0`}
              >
                <div className="h-[180px] w-[180px] overflow-hidden rounded-full bg-white shadow-[0_18px_42px_rgba(0,0,0,0.18)] lg:h-[220px] lg:w-[220px]">
                  {day.portrait}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MaxWithBgColorContainer>
  )
}

const wyzwanieBeforeBenefitsSection = (
  <>
    {wyzwanieDays.map((day) => (
      <WyzwanieDaySection key={day.number} day={day} />
    ))}
  </>
)

const wyzwanieFaqList = [
  {
    question: "Czy to wyzwanie jest dla mnie?",
    answer:
      "Tak, jeśli chcesz postawić swoją pierwszą kampanię sprzedażową albo poukładać obecną i przejść przez cały proces krok po kroku. To wyzwanie jest dla osób, które chcą działać praktycznie i od razu wdrażać kolejne elementy kampanii na swoim koncie.",
  },
  {
    question: "Czy muszę mieć doświadczenie z reklamami?",
    answer:
      "Nie. Jeśli masz już jakieś próby za sobą, będzie Ci łatwiej, ale nie jest to warunek. Przeprowadzimy Cię przez cały proces od tekstu i grafiki po ustawienie kampanii sprzedażowej, więc możesz wejść w to także jako osoba początkująca.",
  },
  {
    question: "Nie umiem w techniczne rzeczy, czy dam sobie radę?",
    answer:
      "Tak. Wyzwanie zostało ułożone tak, żeby krok po kroku przejść przez kwestie techniczne bez zgadywania, a w razie blokady masz wsparcie zespołu. Piksel, zdarzenia i ustawienia kampanii rozkładamy na proste etapy.",
  },
  {
    question: "Co jeśli nie będę mogła pojawić się na żywo?",
    answer:
      "Materiały są rozpisane na kolejne dni, więc możesz pracować z nimi we własnym tempie w trakcie wyzwania. Jeśli nie wejdziesz na żywo w konkretnym momencie, dalej możesz wdrażać następne kroki i korzystać z przygotowanych materiałów oraz konsultacji.",
  },
  {
    question: "Jaki budżet muszę przygotować na reklamy?",
    answer:
      "Budżet reklamowy nie musi być ogromny, ale musi istnieć, żeby kampania mogła ruszyć. W praktyce start zwykle oznacza co najmniej kilkaset złotych przeznaczonych na test i pierwsze wyniki, a dokładną kwotę warto dopasować do oferty, celu i możliwości Twojego biznesu.",
  },
]

const WyzwanieFaq = () => (
  <div className="flex flex-col items-center px-6 text-ada-black">
    <div className="pt-[60px] lg:pt-[76px]">
      <h2 className="text-[20px] lg:text-adaTitle font-bold lg:mb-2 animate-bounce text-center mx-auto text-ada-pink7">
        FAQ
      </h2>
      <ul className="gap-10 md:gap-[120px] text-adaMin md:text-adaStandard">
        {wyzwanieFaqList.map((item) => (
          <li key={item.question} className="list-none">
            <Accordion question={item.question} answer={item.answer} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const wyzwanieOfferBox = {
  eyebrow: "dostęp do szkolenia",
  title: "KAMPANIA SPRZEDAŻOWA W PIGUŁCE",
  priceLabel: "cena",
  price: "97 zł",
  ctaLabel: "KUPUJĘ DOSTĘP",
  benefits: [
    {
      icon: "✍️",
      title: "konsultacje pisemne z ekspertkami",
      description:
        'pytasz, dostajesz konkretną odpowiedź, nie "przypuszczę" i nie "też się chętnie dowiem"',
    },
    {
      icon: "🎥",
      title:
        "materiały szkoleniowe wideo z tworzenia tekstów, grafiki i ustawiania kampanii sprzedażowej",
      description: "odtwarzasz, robisz, masz gotowe",
    },
    {
      icon: "👩‍💻",
      title: "dostęp do platformy z nagraniami, wytycznymi i wsparciem",
      description: "przez cały tydzień wyzwania",
    },
  ],
}

const wyzwanieBottomSection = (
  <>
    <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
      <div className="px-4 py-14 lg:py-20">
        <div
          id={OFFER_SECTION_ID}
          className="mx-auto w-full max-w-[340px] rounded-[24px] bg-[#f7f4ef] px-6 py-8 text-black shadow-[0_18px_36px_rgba(0,0,0,0.22)] lg:w-[30%] lg:max-w-none lg:px-7 lg:py-8"
        >
          <p className="text-[16px] leading-none">{wyzwanieOfferBox.eyebrow}</p>
          <h2 className="mt-4 text-adaSubtitleThird font-anton uppercase leading-[92%]">
            {wyzwanieOfferBox.title}
          </h2>

          <div className="mt-8">
            <p className="text-[16px] leading-none">
              {wyzwanieOfferBox.priceLabel}
            </p>
            <p className="mt-2 text-adaSubtitleThird font-anton uppercase leading-none lg:text-[44px]">
              {wyzwanieOfferBox.price}
            </p>
          </div>

          <Button
            type="button"
            variant="offer"
            url={WYZWANIE_CHECKOUT_URL}
            text={
              <span className="font-extrabold uppercase">
                {wyzwanieOfferBox.ctaLabel}
              </span>
            }
            textSize="text-[18px]"
            btnStyle="mt-8 w-full px-3 py-4 cursor-pointer block text-center"
          />

          <div className="mt-8 space-y-6">
            {wyzwanieOfferBox.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-3">
                <span className="mt-[2px] text-[18px] leading-none">
                  {benefit.icon}
                </span>
                <p className="text-[15px] leading-[120%] lg:text-[14px]">
                  <span className="block font-bold">{benefit.title}</span>
                  <span className="block font-normal">
                    {benefit.description}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWithBgColorContainer>

    <MaxWithBgColorContainer bgColor="bg-white">
      <WyzwanieFaq />
    </MaxWithBgColorContainer>
  </>
)

const WyzwaniePage = () => {
  return (
    <TrainingLandingPage
      heroBgColor={wyzwanieHeroBgColor}
      afterHeroSection={wyzwanieAfterHeroSection}
      pinkSectionContent={wyzwaniePinkSection}
      beforeBenefitsSection={wyzwanieBeforeBenefitsSection}
      benefits={wyzwanieBenefits}
      benefitsTitle={
        <>
          Co dostajesz w{" "}
          <span className="text-ada-magicPurple4">pakiecie?</span>
        </>
      }
      bottomSection={wyzwanieBottomSection}
      heroLeft={wyzwanieHeroLeft}
      heroFigure={wyzwanieHeroFigure}
      heroOverlay={wyzwanieHeroOverlay}
    />
  )
}

export const Head = () => <SEO title={WYZWANIE_PAGE_TITLE} />

export default WyzwaniePage
