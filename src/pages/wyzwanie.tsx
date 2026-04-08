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

const AprilCalendarPhone = () => (
  <div className="w-[140px] xl:w-[160px] bg-white rounded-[24px] p-3 shadow-[0_18px_36px_rgba(0,0,0,0.22)]">
    <div className="text-center mb-2">
      <p className="text-[10px] font-bold text-black uppercase">Kwiecień 2026</p>
    </div>
    <div className="grid grid-cols-7 gap-[2px] text-[8px] text-center">
      <span className="text-gray-400">Pn</span>
      <span className="text-gray-400">Wt</span>
      <span className="text-gray-400">Śr</span>
      <span className="text-gray-400">Cz</span>
      <span className="text-gray-400">Pt</span>
      <span className="text-gray-400">Sb</span>
      <span className="text-gray-400">Nd</span>
      {/* Week 1: 1-5 */}
      <span></span><span></span><span className="text-black">1</span><span className="text-black">2</span><span className="text-black">3</span><span className="text-black">4</span><span className="text-black">5</span>
      {/* Week 2: 6-12 */}
      <span className="text-black">6</span><span className="text-black">7</span><span className="text-black">8</span><span className="text-black">9</span><span className="text-black">10</span><span className="text-black">11</span><span className="text-black">12</span>
      {/* Week 3: 13-19 */}
      <span className="text-black">13</span><span className="text-black">14</span><span className="text-black">15</span><span className="text-black">16</span><span className="text-black">17</span><span className="text-black">18</span><span className="text-black">19</span>
      {/* Week 4: 20-26 - highlighted dates */}
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto font-bold ring-2 ring-ada-pink7">20</span>
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto font-bold ring-2 ring-ada-pink7">21</span>
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto">22</span>
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto">23</span>
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto">24</span>
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto">25</span>
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto">26</span>
      {/* Week 5: 27-30 */}
      <span className="bg-ada-magicPink3 text-black rounded-full w-5 h-5 flex items-center justify-center mx-auto">27</span>
      <span className="text-black">28</span><span className="text-black">29</span><span className="text-black">30</span><span></span><span></span><span></span>
    </div>
  </div>
)

const wyzwanieHeroOverlay = (
  <div className="absolute -top-2 -right-16 z-0 pointer-events-none">
    <AprilCalendarPhone />
  </div>
)

const wyzwanieHeroFigure = (
  <div className="relative z-10 flex justify-center">
    <div className="w-[280px] xl:w-[340px] overflow-hidden">
      <StaticImage
        src="../images/ada_portrait.webp"
        alt="Ada"
        placeholder="blurred"
        className="object-cover object-top"
      />
    </div>
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
          circleColor="#FFFFFF"
          arrowColor="#000000"
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
        którzy mogliby trafić do Ciebie.
        <br /><br />
        <span className="font-bold">
          W ciągu 7 dni przeprowadzimy Cię przez cały proces - od<br />
          tekstu i grafiki, przez piksel i zdarzenia, aż po ustawienie<br />
          kampanii sprzedażowej w Menedżerze Reklam.
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
    numberBg: "bg-black",
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
    numberBg: "bg-black",
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
    numberBg: "bg-black",
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
    numberBg: "bg-black",
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
    numberBg: "bg-black",
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
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${day.numberBg} text-[28px] font-anton leading-none text-white lg:h-14 lg:w-14 lg:text-[36px]`}
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
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${day.numberBg} text-[28px] font-anton leading-none text-white lg:h-14 lg:w-14 lg:text-[36px]`}
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
    {/* SPRAWDZAM button positioned between purple and light sections */}
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 h-1/2 bg-ada-magicPurple4" />
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-white" />
      <div className="relative z-10 flex justify-center py-4">
        <Button
          type="button"
          variant="dark"
          sectionId={OFFER_SECTION_ID}
          text={<span className="font-bold uppercase text-ada-magicYellow">Sprawdzam</span>}
          textSize="text-[20px] lg:text-[26px]"
          btnStyle="px-10 lg:px-14 py-4"
        />
      </div>
    </div>
  </>
)

const wyzwanieFaqList = [
  {
    question: "Czy muszę mieć doświadczenie z reklamami?",
    answer:
      "Nie. Wyzwanie jest zaprojektowane tak, żebyś mogła postawić swoją pierwszą kampanię sprzedażową od zera. A jeśli już próbowałaś i czujesz, że przepalasz budżet - uporządkujesz cały proces i zrobisz to z głową.",
  },
  {
    question: "Nie jestem techniczna. Dam radę?",
    answer:
      "Tak. Piksel, zdarzenia, Menedżer Reklam - brzmi strasznie, ale dostajesz nagrania krok po kroku i wsparcie. Nie musisz być techniczna, wystarczy odpalić nagranie i robić razem z nami.",
  },
  {
    question: "Ile czasu dziennie muszę poświęcić?",
    answer:
      "Nagrania trwają max 30 minut. Razem z wdrożeniem wytycznych - godzina dziennie wystarczy, żeby pod koniec tygodnia mieć gotową kampanię.",
  },
  {
    question: "Czy spotkanie live z Adą jest nagrywane?",
    answer:
      "Tak, nagranie będzie dostępne na platformie.",
  },
  {
    question: "Jak długo mam dostęp do materiałów?",
    answer:
      "Przez cały czas trwania wyzwania, czyli 20–27 kwietnia.",
  },
  {
    question: "Dla kogo jest to wyzwanie?",
    answer:
      "Jeśli jesteś soloprzedsięborczynią, budujesz markę osobistą, prowadzisz sklep online, jesteś marketerką lub wirtualną asystentką - i chcesz ogarnąć reklamy sprzedażowe, które generują kasę, a nie tylko kliknięcia - to wyzwanie jest dla Ciebie.",
  },
  {
    question: "Czy 97 zł to dużo?",
    answer:
      "Jedna źle ustawiona kampania potrafi przepalić więcej w jeden dzień. Za 97 zł dostajesz wiedzę od 4 ekspertek, gotowe wytyczne i spotkanie live, dzięki którym Twoja kampania ma szansę faktycznie zadziałać.",
  },
]

const WyzwanieFaq = () => (
  <div className="flex flex-col items-center px-6 text-black py-12 lg:py-16">
    <div className="pt-[40px] lg:pt-[60px]">
      <h2 className="text-[20px] lg:text-adaTitle font-bold lg:mb-2 animate-bounce text-center mx-auto text-black">
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
  title: "KAMPANIA\nSPRZEDAŻOWA\nW PIGUŁCE",
  priceLabel: "cena",
  price: "97 zł",
  ctaLabel: "KUPUJĘ DOSTĘP",
  benefits: [
    {
      icon: "✍️",
      title: "konsultacje pisemne z ekspertkami",
      description:
        'pytasz, dostajesz konkretną odpowiedź, nie "przycupnę" i nie "też się chętnie dowiem"',
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

const WyzwanieTestimonials = () => (
  <MaxWithBgColorContainer bgColor="bg-ada-magicPink3">
    <div className="py-12 lg:py-16 px-4">
      <h2 className="text-[28px] lg:text-[42px] font-anton font-normal uppercase leading-[95%] text-center mb-10 text-black">
        ZOBACZ CO CZŁONKINIE{" "}
        <span className="text-ada-magicYellow">MAGIC</span> MÓWIĄ O SPOŁECZNOŚCI:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto">
        <div className="flex flex-col gap-0">
          <StaticImage
            src="../images/magic_reference_sell_1.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_2.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_3.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_4.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-0">
          <StaticImage
            src="../images/magic_reference_sell_5.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_6.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_7.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_8.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-0">
          <StaticImage
            src="../images/magic_reference_sell_9.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_10.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
          <StaticImage
            src="../images/magic_reference_sell_12.webp"
            alt="Opinia o społeczności MAGIC"
            placeholder="blurred"
            className="w-full"
          />
        </div>
      </div>
    </div>
  </MaxWithBgColorContainer>
)

const WyzwanieCTA = () => (
  <MaxWithBgColorContainer bgColor="bg-ada-magicPink3">
    <div className="py-10 lg:py-14 px-4 text-center">
      <p className="text-[18px] lg:text-[22px] leading-[140%] text-black max-w-2xl mx-auto mb-8">
        Kliknij przycisk i dołącz do społeczności, w której reklamy Meta Ads przestają być problemem i stają się przyjemnością
      </p>
      <Button
        type="button"
        variant="dark"
        sectionId={OFFER_SECTION_ID}
        text={<span className="font-bold uppercase text-ada-magicYellow">DOŁĄCZAM</span>}
        textSize="text-[22px] lg:text-[28px]"
        btnStyle="px-12 lg:px-16 py-5"
      />
    </div>
  </MaxWithBgColorContainer>
)

const wyzwanieBottomSection = (
  <>
    <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
      <div className="px-4 py-14 lg:py-20">
        <div
          id={OFFER_SECTION_ID}
          className="mx-auto w-full max-w-[340px] rounded-[24px] bg-[#f7f4ef] px-6 py-8 text-black shadow-[0_18px_36px_rgba(0,0,0,0.22)] lg:w-[30%] lg:max-w-none lg:px-7 lg:py-8"
        >
          <p className="text-[16px] leading-none">{wyzwanieOfferBox.eyebrow}</p>
          <h2 className="mt-4 text-[36px] lg:text-[42px] font-anton uppercase leading-[110%] whitespace-pre-line">
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
            textSize="text-[22px] lg:text-[26px]"
            btnStyle="mt-8 w-full px-3 py-5 cursor-pointer block text-center"
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

    <WyzwanieTestimonials />
    <WyzwanieCTA />

    <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
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
          <span className="text-ada-magicPurple4">pakiecie</span>
          <span className="text-black">?</span>
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
