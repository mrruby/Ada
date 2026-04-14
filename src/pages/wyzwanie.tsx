import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import TrainingLandingPage from "components/TrainingLandingPage"
import WyzwanieStickyCountdown from "components/WyzwanieStickyCountdown"
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
const WYZWANIE_CHECKOUT_URL = "https://easl.ink/Yib03"

const wyzwanieHeroFigure = (
  <div className="relative z-10 flex justify-center items-center">
    <div className="w-full max-w-[800px] xl:max-w-[950px]">
      <StaticImage
        src="../images/wyzwanie-hero-combined.webp"
        alt="Kampania sprzedażowa w pigułce - hero"
        placeholder="blurred"
        className="w-full"
        objectFit="contain"
      />
    </div>
  </div>
)

const wyzwanieAfterHeroSection = (
  <MaxWithBgColorContainer bgColor="bg-white">
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="mb-6 text-[24px] lg:text-[32px] font-bold text-black">
          🗓️ 20.04 - start wyzwania
        </p>
        <Button
          type="button"
          variant="dark"
          sectionId={OFFER_SECTION_ID}
          text={<span className="font-anton uppercase">Sprawdzam</span>}
          textSize="text-[32px] lg:text-[40px]"
          btnStyle="px-16 lg:px-24 py-4"
        />
      </div>
    </div>
  </MaxWithBgColorContainer>
)

const wyzwaniePinkSection = (
  <div className="py-16 lg:py-20 px-4">
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center lg:max-w-[70%]">
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
      <div className="max-w-4xl text-[16px] lg:text-[20px] leading-[160%] text-black text-left">
        <p className="mb-6">
          Widzisz, jak inni puszczają reklamy, testują kreacje, analizują wyniki... i wydaje Ci się, że za tym stoi cały zespół. Graficzka, copywriterka, specjalistka od adsów, ktoś od strategii.
        </p>
        <p className="mb-6">
          A za Twoim biznesem stoisz Ty. Jedna osoba. Robisz grafiki, piszesz teksty, ogarniasz klientów, wystawiasz faktury - i gdzieś pomiędzy tym wszystkim masz jeszcze "nauczyć się reklam".
        </p>
        <p className="mb-6">
          Prawda jest taka: <span className="font-bold">nie potrzebujesz zespołu, żeby postawić skuteczną kampanię sprzedażową. Potrzebujesz kogoś, kto Ci pokaże jak - krok po kroku, bez lania wody, w tempie, które jest realne dla osoby, która robi wszystko sama.</span>
        </p>
        <p className="mb-6">
          <span className="font-bold">W ciągu 7 dni przeprowadzimy Cię przez cały proces - od tekstu i grafiki, przez piksel i zdarzenia, aż po ustawienie kampanii sprzedażowej w Menedżerze Reklam.</span> Konkretne nagrania, wytyczne krok po kroku i wsparcie 4 ekspertek, które codziennie pracują z Meta Ads. Również na małych budżetach i z małymi markami - takimi jak Twoja.
        </p>
      </div>
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
  noShadow?: boolean
}

const wyzwanieDays: WyzwanieDay[] = [
  {
    number: "1",
    date: "PONIEDZIAŁEK 20.04",
    side: "left",
    sectionBg: "bg-ada-magicPurple4",
    pillBg: "bg-ada-magicYellow",
    numberBg: "bg-black",
    titleBold:
      "Słowa, które sprzedają.",
    subtitle: "Justyna na co dzień pisze teksty, które sprzedają - od sekwencji mailowych, przez landing page'e, po kreacje reklamowe. Dostaniesz od niej nagranie z gotowym schematem na tekst do reklamy sprzedażowej. Żadnego \"pisz z serca\" - konkretna struktura, którą wypełnisz swoimi słowami. Tego samego dnia siadasz i masz gotowy tekst.",
    portrait: (
      <StaticImage
        src="../images/justyna_portrait.webp"
        alt="Justyna Król"
        placeholder="blurred"
        className="h-full w-full"
        objectFit="cover"
        objectPosition="50% 50%"
      />
    ),
  },
  {
    number: "2",
    date: "WTOREK 21.04",
    side: "right",
    sectionBg: "bg-ada-magicYellow",
    pillBg: "bg-ada-magicPurple4",
    numberBg: "bg-black",
    titleBold:
      "Grafiki do reklam sprzedażowych",
    subtitle:
      "Dorota zajmuje się brandingiem i identyfikacją wizualną, a w MAGIC uczy, jak tworzyć kreacje, które wyglądają profesjonalnie - nawet w Canvie, nawet bez budżetu na graficzkę. Po tym nagraniu będziesz wiedzieć, czym się różni grafika, którą ludzie przewijają, od grafiki, przy której się zatrzymują i stworzysz takie dla siebie.",
    portrait: (
      <StaticImage
        src="../images/dorota_portrait.webp"
        alt="Dorota Woźniak"
        placeholder="blurred"
        className="h-full w-full"
        objectFit="cover"
        objectPosition="50% 50%"
      />
    ),
  },
  {
    number: "3",
    date: "ŚRODA 22.04",
    side: "left",
    sectionBg: "bg-ada-magicPurple4",
    pillBg: "bg-ada-magicYellow",
    numberBg: "bg-black",
    titleBold: "Piksel przestanie być straszny. Obiecujemy.",
    subtitle: "Nicola ogarnia reklamy i techniczne zaplecze - piksel, zdarzenia, testowanie. To ona pomaga naszym klubowiczkom w MAGIC ogarnąć tę część, której większość się boi. Dostajesz nagranie z instrukcją krok po kroku. Żadnego żargonu, żadnego \"to proste, wystarczy dodać kod\" - Nicola pokaże Ci każdy klik.",
    portrait: (
      <StaticImage
        src="../images/nicola_portrait.webp"
        alt="Nicola Kut"
        placeholder="blurred"
        className="h-full w-full"
        objectFit="cover"
        objectPosition="50% 50%"
      />
    ),
  },
  {
    number: "4",
    date: "CZWARTEK 23.04",
    side: "right",
    sectionBg: "bg-ada-magicYellow",
    pillBg: "bg-ada-magicPurple4",
    numberBg: "bg-black",
    titleBold:
      "Ustawiasz swoją kampanię sprzedażową. Na żywo. Ze mną.",
    subtitle: "To jest serce wyzwania. Spotkanie LIVE, na którym razem przechodzimy przez Menedżera Reklam i stawiasz swoją kampanię. Nie \"oglądam, jak Ada klika\" - Ty klikasz razem ze mną, pytasz, pokazujesz swój przypadek. Dostajesz też nagranie, żebyś mogła wrócić do każdego kroku podczas wyzwania.",
    portrait: (
      <StaticImage
        src="../images/ada_portrait.webp"
        alt="Adrianna Promis-Urbas"
        placeholder="blurred"
        className="h-full w-full"
        objectFit="cover"
        objectPosition="50% 50%"
        imgStyle={{ transform: "scale(1.12)" }}
      />
    ),
  },
  {
    number: "5",
    date: "PRZEZ CAŁY CZAS WYZWANIA",
    side: "full",
    sectionBg: "bg-ada-magicPurple4",
    pillBg: "bg-ada-magicYellow",
    numberBg: "bg-black",
    titleBold: "Masz pytanie? Nie googluj - napisz do nas.",
    subtitle: "Przez 8 dni masz dostęp do mnie, Justyny, Doroty i Nicoli na platformie. Wrzucasz swój tekst - dostajesz feedback. Nie wiesz, czy grafika jest ok - sprawdzimy. Coś nie działa w Menedżerze - pomożemy. To jak mieć mini-agencję w kieszeni, tylko że ta agencja naprawdę Ci tłumaczy, co i dlaczego.",
  },
]

const useInView = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}

const WyzwanieDaySection = ({ day, index }: { day: WyzwanieDay; index: number }) => {
  const { ref, isInView } = useInView()
  const isFull = day.side === "full"
  const isRight = day.side === "right"
  const pillExtraPadding = isFull
    ? ""
    : isRight
      ? "lg:pl-[230px]"
      : "lg:pr-[230px]"
  const subtitleExtraPadding = isFull
    ? ""
    : isRight
      ? "lg:pl-[250px]"
      : "lg:pr-[250px]"
  const portraitPosition = isRight ? "lg:left-0" : "lg:right-0"

  const slideAnimation = index % 2 === 0 ? "animate-slideInFromLeft" : "animate-slideInFromRight"

  return (
    <MaxWithBgColorContainer bgColor={day.sectionBg}>
      <div ref={ref} className="px-4 py-10 lg:py-12 overflow-hidden">
        <div className={`mx-auto w-full max-w-5xl ${isInView ? slideAnimation : "opacity-0"}`}>
          <div
            className={`relative w-full ${isFull ? "" : "lg:min-h-[260px]"}`}
          >
            <div className="w-full">
              <div
                className={`inline-flex ${isFull ? "w-fit" : "w-full"} items-center gap-3 rounded-full ${day.pillBg} px-4 py-3 shadow-[0_12px_26px_rgba(0,0,0,0.14)] lg:gap-5 lg:px-6 lg:py-4 ${pillExtraPadding} ${
                  isRight ? "justify-end" : ""
                }`}
              >
                {!isRight && (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-transparent text-[28px] font-anton leading-none text-black lg:h-14 lg:w-14 lg:text-[36px]">
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-transparent text-[28px] font-anton leading-none text-black lg:h-14 lg:w-14 lg:text-[36px]">
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
                className={`mt-8 flex justify-center lg:absolute ${portraitPosition} lg:top-1/2 lg:mt-0 lg:-translate-y-1/2`}
              >
                <div
                  className={`h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full lg:h-[220px] lg:w-[220px] ${
                    day.noShadow ? "" : "shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
                  }`}
                >
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

const DlaKogoSection = () => (
  <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
    <div className="py-12 lg:py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column - FOR WHOM */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[32px] lg:text-[42px]">✅</span>
            <h3 className="font-anton uppercase text-black text-[24px] lg:text-[32px] leading-[110%]">
              <span className="block">DLA KOGO JEST</span>
              <span className="block">TO WYZWANIE?</span>
            </h3>
          </div>
          <div className="border-2 border-black bg-ada-magicYellow rounded-lg p-6 flex-grow">
            <ul className="space-y-4 text-black text-[14px] lg:text-[16px] leading-[140%]">
              <li className="flex gap-3">
                <span className="shrink-0">👩‍💻</span>
                <span>Prowadzisz swój biznes i chcesz samodzielnie ustawiać reklamy, nie masz budżetu lub nie chcesz zlecać reklam innym</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">💼</span>
                <span>Obsługujesz klientów jako freelancerka i chcesz pewniej stawiać kampanie sprzedażowe</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">🖱️</span>
                <span>Próbowałaś już klikać w Menedżerze Reklam, ale nie masz pewności, czy robisz to dobrze (masz konto reklamowe)</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">💰</span>
                <span>Masz mały budżet reklamowy (do 2000 zł miesięcznie)</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">🚀</span>
                <span>Chcesz w końcu przestać "promować posty" i zacząć prowadzić kampanie sprzedażowe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column - NOT FOR WHOM */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[32px] lg:text-[42px]">❌</span>
            <h3 className="font-anton uppercase text-black text-[24px] lg:text-[32px] leading-[110%]">
              <span className="block">DLA KOGO NIE JEST</span>
              <span className="block">TO WYZWANIE?</span>
            </h3>
          </div>
          <div className="border-2 border-black bg-ada-magicYellow rounded-lg p-6 flex-grow">
            <ul className="space-y-4 text-black text-[14px] lg:text-[16px] leading-[140%]">
              <li className="flex gap-3">
                <span className="shrink-0">📈</span>
                <span>Masz już doświadczenie w kampaniach sprzedażowych i szukasz zaawansowanych strategii skalowania</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">🚫</span>
                <span>Nie planujesz w ogóle korzystać z płatnych reklam w swoim biznesie</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">🙅‍♀️</span>
                <span>Szukasz gotowej usługi "zrób to za mnie" - tutaj uczysz się robić to sama</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">🛒</span>
                <span>Nie masz produktu ani usługi do sprzedania (jeszcze!) - wróć do nas, kiedy będziesz gotowa: do wyzwania potrzebujesz koszyka/sklepu internetowego</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </MaxWithBgColorContainer>
)

const WyzwanieSalesResults = () => (
  <MaxWithBgColorContainer bgColor="bg-white">
    <div className="py-10 px-3">
      <h2 className="font-anton font-normal text-center text-black text-[26px] lg:text-[32px] mb-8">
        Jeżeli chcesz osiągać takie wyniki:
      </h2>
      <div className="flex flex-col gap-6 lg:gap-12 py-8 max-w-4xl mx-auto">
        <StaticImage
          src="../images/kolektyw6.webp"
          alt="Wyniki sprzedażowe - dodania do koszyka"
          placeholder="blurred"
          className="w-full"
        />
        <StaticImage
          src="../images/kolektyw7.webp"
          alt="Wyniki sprzedażowe - ciepła"
          placeholder="blurred"
          className="w-full"
        />
        <StaticImage
          src="../images/kolektyw3.webp"
          alt="Wyniki sprzedażowe - www kontakty"
          placeholder="blurred"
          className="w-full"
        />
      </div>
      <div className="flex justify-center pt-4 pb-6">
        <Button
          type="button"
          variant="dark"
          sectionId={OFFER_SECTION_ID}
          text={
            <span className="font-anton uppercase text-ada-magicYellow">
              DOŁĄCZ
            </span>
          }
          textSize="text-[22px] lg:text-[28px]"
          btnStyle="px-20 lg:px-28 py-4"
        />
      </div>
    </div>
  </MaxWithBgColorContainer>
)

const WyzwanieBeforeBenefitsSection = () => (
  <>
    {wyzwanieDays.map((day, index) => (
      <WyzwanieDaySection key={day.number} day={day} index={index} />
    ))}
    {/* SPRAWDZAM button positioned between purple and light sections */}
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 h-1/2 bg-ada-magicPurple4" />
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-ada-light-pink" />
      <div className="relative z-10 flex justify-center py-4">
        <Button
          type="button"
          variant="dark"
          sectionId={OFFER_SECTION_ID}
          text={
            <span className="font-anton uppercase text-ada-magicYellow">
              Sprawdzam
            </span>
          }
          textSize="text-[22px] lg:text-[28px]"
          btnStyle="px-16 lg:px-24 py-3"
        />
      </div>
    </div>
    <DlaKogoSection />
    <WyzwanieSalesResults />
  </>
)

const wyzwanieFaqList = [
  {
    question: "🎯 Czy muszę mieć doświadczenie z reklamami?",
    answer:
      "Nie. Wyzwanie jest zaprojektowane tak, żebyś mogła postawić swoją pierwszą kampanię sprzedażową od zera. A jeśli już próbowałaś i czujesz, że przepalasz budżet - uporządkujesz cały proces i zrobisz to z głową.",
  },
  {
    question: "💻 Nie jestem techniczna. Dam radę?",
    answer:
      "Tak. Piksel, zdarzenia, Menedżer Reklam - brzmi strasznie, ale dostajesz nagrania krok po kroku i wsparcie. Nie musisz być techniczna, wystarczy odpalić nagranie i robić razem z nami.",
  },
  {
    question: "⏰ Ile czasu dziennie muszę poświęcić?",
    answer:
      "Nagrania trwają około 30-40 minut, z wyjątkiem czwartkowego spotkania, na które najlepiej zarezerwować około 1,5 godziny. Około 4-5 godzin wystarczy Ci, aby przygotować całą kampanię od zera.",
  },
  {
    question: "🎥 Czy spotkanie live z Adą jest nagrywane?",
    answer: "Tak, nagranie będzie dostępne na platformie.",
  },
  {
    question: "📅 Jak długo mam dostęp do materiałów?",
    answer: "Przez cały czas trwania wyzwania, czyli 20–27 kwietnia.",
  },
  {
    question: "👩‍💼 Dla kogo jest to wyzwanie?",
    answer:
      "Jeśli jesteś soloprzedsięborczynią, budujesz markę osobistą, prowadzisz sklep online, jesteś marketerką lub wirtualną asystentką - i chcesz ogarnąć reklamy sprzedażowe, które generują kasę, a nie tylko kliknięcia - to wyzwanie jest dla Ciebie.",
  },
  {
    question: "💸 Czy 97 zł to dużo?",
    answer:
      "Jedna źle ustawiona kampania potrafi przepalić więcej w jeden dzień. Za 97 zł dostajesz wiedzę od 4 ekspertek, gotowe wytyczne i spotkanie live, dzięki którym Twoja kampania ma szansę faktycznie zadziałać.",
  },
]

const WyzwanieFaq = () => (
  <div className="flex flex-col items-center px-6 text-black py-12 lg:py-16">
    <div className="pt-[40px] lg:pt-[60px] bg-white rounded-[24px] p-6 lg:p-10">
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
      icon: "🔒",
      title: "Konsultacje pisemne z ekspertkami",
      description:
        "nie tylko w temacie reklam, ale także piksela, grafik, tekstów reklamowych",
    },
    {
      icon: "🎬",
      title:
        "Materiały szkoleniowe video z tworzenia tekstów, grafik i ustawiania kampanii sprzedażowej",
      description: "",
    },
    {
      icon: "🔓",
      title: "Dostęp do platformy z nagraniami, wytycznymi i wsparciem",
      description: "przez cały tydzień wyzwania",
    },
    {
      icon: "💡",
      title: "Tyle co jeden obiad z deserem. Tyle co 15 minut pracy agencji.",
      description: "A dostajesz 8 dni z 4 ekspertkami i gotowy system na kampanię.",
    },
  ],
}

const WyzwanieTestimonials = () => (
  <MaxWithBgColorContainer bgColor="bg-ada-magicPink3">
    <div className="py-12 lg:py-16 px-4">
      <h2 className="text-[32px] lg:text-[48px] font-montserrat font-extrabold uppercase leading-[95%] text-center mb-10 text-black">
        ZOBACZ CO CZŁONKINIE{" "}
        <span className="text-ada-magicOrange2">MAGIC</span>
        <br />
        MÓWIĄ O SPOŁECZNOŚCI:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Row 1 - Magda Sikorska, Paulina Leopold, Angelika Woźniak */}
        <StaticImage
          src="../images/magic_reference_sell_1.webp"
          alt="Opinia - Magda Sikorska"
          placeholder="blurred"
          className="w-full"
        />
        <StaticImage
          src="../images/magic_reference_sell_2.webp"
          alt="Opinia - Paulina Leopold"
          placeholder="blurred"
          className="w-full"
        />
        <StaticImage
          src="../images/magic_reference_sell_3.webp"
          alt="Opinia - Angelika Woźniak"
          placeholder="blurred"
          className="w-full"
        />
        {/* Row 2 - Aleksandra Ziober, Agnieszka, Martyna Żmuda */}
        <StaticImage
          src="../images/magic_reference_sell_4.webp"
          alt="Opinia - Aleksandra Ziober"
          placeholder="blurred"
          className="w-full"
        />
        <StaticImage
          src="../images/magic_reference_sell_5.webp"
          alt="Opinia - Agnieszka"
          placeholder="blurred"
          className="w-full"
        />
        <StaticImage
          src="../images/magic_reference_sell_6.webp"
          alt="Opinia - Martyna Żmuda"
          placeholder="blurred"
          className="w-full"
        />
      </div>
    </div>
  </MaxWithBgColorContainer>
)

const WyzwanieCTA = () => (
  <MaxWithBgColorContainer bgColor="bg-ada-magicPink3">
    <div className="py-6 lg:py-8 px-4 text-center">
      <p className="text-[20px] lg:text-[26px] leading-[140%] text-black max-w-2xl mx-auto mb-6 font-bold">
        Kliknij przycisk i dołącz do społeczności, w której reklamy Meta Ads
        przestają być problemem.
      </p>
      <p className="text-[20px] lg:text-[26px] leading-[140%] text-black max-w-2xl mx-auto mb-6 font-bold">
        Stają się przyjemnością
      </p>
      <Button
        type="button"
        variant="dark"
        sectionId={OFFER_SECTION_ID}
        text={
          <span className="font-anton uppercase text-ada-magicYellow">
            DOŁĄCZAM
          </span>
        }
        textSize="text-[22px] lg:text-[28px]"
        btnStyle="px-20 lg:px-28 py-4"
      />
    </div>
  </MaxWithBgColorContainer>
)

const WyzwanieStartSection = () => (
  <MaxWithBgColorContainer bgColor="bg-white">
    <div className="py-12 lg:py-16 px-4 text-center">
      <h2 className="font-anton font-normal text-black text-[28px] lg:text-[42px] mb-8">
        🗓️ 20.04 - start wyzwania
      </h2>
      <Button
        type="button"
        variant="dark"
        sectionId={OFFER_SECTION_ID}
        text={
          <span className="font-anton uppercase text-ada-magicYellow">
            SPRAWDZAM
          </span>
        }
        textSize="text-[22px] lg:text-[28px]"
        btnStyle="px-20 lg:px-28 py-4"
      />
    </div>
  </MaxWithBgColorContainer>
)

const WyzwanieBottomSection = () => (
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
              <span className="font-montserrat font-extrabold uppercase">
                {wyzwanieOfferBox.ctaLabel}
              </span>
            }
            textSize="text-[22px] lg:text-[26px]"
            btnStyle="mt-8 w-[85%] mx-auto px-3 py-5 cursor-pointer block text-center"
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

    <MaxWithBgColorContainer bgColor="bg-ada-magicPink3">
      <WyzwanieFaq />
    </MaxWithBgColorContainer>

    <WyzwanieStartSection />
  </>
)

const WyzwaniePage = () => {
  return (
    <>
      <WyzwanieStickyCountdown />
      <div className="pt-12">
        <TrainingLandingPage
          heroBgColor={wyzwanieHeroBgColor}
          afterHeroSection={wyzwanieAfterHeroSection}
          pinkSectionContent={wyzwaniePinkSection}
          beforeBenefitsSection={<WyzwanieBeforeBenefitsSection />}
          benefits={wyzwanieBenefits}
          benefitsTitle={
            <>
              Co dostajesz w <span className="text-ada-magicPurple4">pakiecie</span>
              <span className="text-black">?</span>
            </>
          }
          bottomSection={<WyzwanieBottomSection />}
          heroLeft={wyzwanieHeroLeft}
          heroFigure={wyzwanieHeroFigure}
          heroWrapperClassName="lg:right-8 lg:max-w-[800px] xl:right-4 xl:max-w-[950px]"
          heroOverlay={<></>}
        />
      </div>
    </>
  )
}

export const Head = () => <SEO title={WYZWANIE_PAGE_TITLE} />

export default WyzwaniePage
