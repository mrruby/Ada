import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Section from "../shared/Section"
import BannerBox2 from "./BannerBox3"

const bannerContent = [
  {
    bgColor: "bg-ada-magicGreen",
    title: "🚀 KAMPANIA SINGLE",
    subtitle:
      "Praca przy kampanii sprzedażowej jednego produktu cyfrowego/mentoringu (2 miesiące)",
    description: (
      <div>
        <p className="font-bold mb-4">Co otrzymujesz:</p>
        <ul className="space-y-2 mb-6">
          <li>💼 Kompleksowa obsługa prekampanii i kampanii sprzedażowej</li>
          <li>📊 Strategia, wdrożenie i optymalizacja reklam</li>
          <li>💡 Analiza wyników i rekomendacje na przyszłość</li>
          <li>📈 Obsługa reklam Meta/TikTok/LinkedIn</li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>
            👀 Idealne rozwiązanie dla jednorazowych projektów sprzedażowych
          </li>
          <li>🎯 Testowanie współpracy przed długoterminowym partnerstwem</li>
          <li>💼 Konkretny launch produktu lub usługi</li>
        </ul>
      </div>
    ),
  },
  {
    bgColor: "bg-ada-magicPink",
    title: "⭐ MARKETING PARTNER",
    subtitle:
      "Kompleksowe zarządzanie kampaniami na wszystkich kluczowych platformach (stała współpraca)",
    description: (
      <div>
        <p className="font-bold mb-4">Co otrzymujesz:</p>
        <ul className="space-y-2 mb-6">
          <li>
            👩‍💻 Kompleksowe zarządzanie kampaniami na wszystkich kluczowych
            platformach
          </li>
          <li>📈 Strategia, wdrożenie, optymalizacja i raportowanie</li>
          <li>😎 Dostęp do specjalistek od każdej platformy reklamowej</li>
          <li>
            🚀 Regularne aktualizacje zgodne z najnowszymi trendami i
            algorytmami
          </li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>📊 Firmy gotowe na systematyczne inwestowanie w marketing</li>
          <li>🎯 Przedsiębiorczynie chcące skalować biznes profesjonalnie</li>
          <li>
            💼 Właścicielki biznesów potrzebujące stałego wsparcia
            marketingowego
          </li>
        </ul>
      </div>
    ),
  },
  {
    bgColor: "bg-ada-purple3",
    title: "💎 GROWTH INTENSIVE",
    subtitle:
      "Obsługa reklam Meta, TikTok, LinkedIn + konsultacje strategiczne 1:1 (premium)",
    description: (
      <div>
        <p className="font-bold mb-4">Co otrzymujesz:</p>
        <ul className="space-y-2 mb-6">
          <li>👩‍💻 Prowadzenie kampanii reklamowych na wszystkich platformach</li>
          <li>
            🤝 Regularne sesje konsultacyjne z ekspertkami (2x w miesiącu)
          </li>
          <li>🎯 Strategiczne planowanie działań marketingowych</li>
          <li>👉🏻 Rekomendacje dotyczące contentu i komunikacji</li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>🚀 Ambitne przedsiębiorczynie nastawione na znaczący wzrost</li>
          <li>
            💰 Firmy gotowe na większe inwestycje w profesjonalny marketing
          </li>
          <li>📈 Biznesy gotowe na intensywne skalowanie</li>
        </ul>
      </div>
    ),
  },
  {
    bgColor: "bg-ada-magicPink2",
    title: "💌 NEWSLETTER MASTER",
    subtitle:
      "Wdrożenie newslettera + obsługa reklam Meta, TikTok, LinkedIn + prowadzenie newslettera",
    description: (
      <div>
        <p className="font-bold mb-4">Co otrzymujesz:</p>
        <ul className="space-y-2 mb-6">
          <li>📫 Kompleksowe wdrożenie systemu mailingowego</li>
          <li>🖥️ Prowadzenie kampanii reklamowych na wszystkich platformach</li>
          <li>📯 Regularne prowadzenie komunikacji e-mail</li>
          <li>📊 Analiza wyników i optymalizacja strategii</li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>💌 Firmy chcące zbudować silną bazę newsletterową</li>
          <li>🎯 Biznesy potrzebujące automatyzacji komunikacji</li>
          <li>
            📈 Przedsiębiorczynie stawiające na długoterminowe relacje z
            klientami
          </li>
        </ul>
      </div>
    ),
  },
]

const bannerContent2 = [
  {
    bgColor: "bg-ada-magicGreen",
    title: (
      <>
        🎨 Twoja identyfikacja wizualna <br />- fundament dobrych kreacji
      </>
    ),
    description: (
      <div>
        <p className="mb-4">
          Zanim zaczniemy tworzyć, bardzo ważne jest dla nas poznanie Twojej
          marki! Dlatego{" "}
          <b>na samym początku zapytamy Cię o identyfikację wizualną</b>- nawet
          najprostszą. Czy masz już ustalone kolory, fonty, styl graficzny? A
          może korzystasz z konkretnych elementów wizualnych?
        </p>
        <p className="mb-4">
          <b>Jeśli jeszcze nie masz spójnej identyfikacji wizualnej, </b>
          możemy dla Ciebie przygotować prostą identyfikację wizualną (za
          dodatkową opłatą) - dobierzemy zestaw fontów, kolorów,
          charakterystyczne elementy jak ikonki czy kształty, a także szablony
          na Instagram i Facebook. To inwestycja, która sprawi, że Twoja marka
          będzie spójna i bardziej rozpoznawalna!
        </p>
      </div>
    ),
    button: (
      <>
        <div className="flex justify-center items-center absolute  left-1/2 -translate-x-1/2 -bottom-24 z-100 cursor-pointer">
          <a href="#tempo">
            <StaticImage
              src={"../../images/magicBtn.svg"}
              alt=""
              placeholder="blurred"
              width={80}
              height={80}
            />
          </a>
        </div>
      </>
    ),
    showDefaultButton: false,
  },
  {
    bgColor: "bg-ada-magicGreen",
    title: (
      <>
        🧐 Materiały, których potrzebujemy na starcie <br />
        <span className="font-normal text-base">
          Żeby móc stworzyć dla Ciebie najlepsze kreacje, potrzebujemy kilku
          rzeczy:
        </span>
      </>
    ),
    description: (
      <div>
        <ul className="mb-4">
          <li>
            <b>✅ Logotyp</b> (w różnych wersjach - kolorowej, czarno-białej,
            poziomej, pionowej)
          </li>
          <li>
            <b>✅ Zdjęcia produktowe i wizerunkowe</b> (im więcej, tym lepiej!)
          </li>
          <li>
            <b>✅ Kolorystyka marki</b> (konkretne kody kolorów, jeśli masz)
          </li>
          <li>
            <b>✅ Fonty</b> (które używasz lub chcesz używać)
          </li>
          <li>
            <b>✅ Wykorzystywane wcześniej materiały</b> (jako przykłady i punkt
            odniesienia)
          </li>
          <li>
            <b>✅ Inspiracje graficzne</b> (pokaż nam, jaka estetyka Ci się
            podoba!)
          </li>
          <li>
            <b>✅ Opinie</b> (najlepiej w formie screenów)
          </li>
        </ul>
        <p className="mb-4">
          Im szybciej je otrzymamy, tym szybciej wystartujemy z kampaniami!
          <br />
          <b>Bardzo ważne:</b> Opóźnienie w przekazaniu materiałów automatycznie
          wiąże się z opóźnieniem w starcie kampanii. Im szybciej będziemy mieli
          komplet, tym szybciej zobaczymy pierwsze efekty!
        </p>
      </div>
    ),
    button: (
      <>
        <div className="flex justify-center items-center absolute  left-1/2 -translate-x-1/2 -bottom-24 z-100 cursor-pointer">
          <a href="#tempo">
            <StaticImage
              src={"../../images/magicBtn.svg"}
              alt=""
              placeholder="blurred"
              width={80}
              height={80}
            />
          </a>
        </div>
      </>
    ),
    showDefaultButton: false,
  },
  {
    bgColor: "bg-ada-magicGreen",
    title: <>🔮 Graficzne czary</>,
    description: (
      <div>
        <p className="mb-4">
          <b>
            Przygotowujemy dla Ciebie wszystkie grafiki reklamowe i udostępniamy
            je w Canvie
          </b>
          , gdzie możesz zostawić swoje uwagi i komentarze. To nasze wspólne
          studio kreatywne! Jeśli potrzebujesz czegoś więcej - materiałów
          brandingowych, grafik na stronę czy innych projektów - chętnie
          wycenimy to osobno. Lubimy graficzne wyzwania!
        </p>
        <Typography variant="h3">
          👀 Jak przekazywać nam swoje pomysły?
        </Typography>
        <p className="mb-4">
          Wszystkie komentarze do projektów graficznych najlepiej zostawiać
          bezpośrednio w <b>Canvie</b> - dzięki temu nic się nie zgubi, a my
          widzimy dokładnie, o co Ci chodzi.
        </p>
      </div>
    ),
    button: <></>,
    showDefaultButton: false,
  },
]

const MagicBanner3 = ({ version }: { version: number }): JSX.Element => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }

  return (
    <Section className="text-black relative">
      {version == 1 && (
        <div className="mb-8 md:mb-20 z-30">
          <div className="flex gap-5 justify-center">
            <StaticImage
              src={"../../images/magicSign.svg"}
              alt=""
              placeholder="blurred"
              width={50}
              height={50}
              className="opacity-0 md:opacity-100 animate-spin-slow"
            />
            <div className="border-ada-orange border rounded-3xl max-w-[660px]">
              <Typography
                variant="h2"
                className="p-2 font-anton font-normal text-center text-ada-orange"
              >
                Jak możesz z nami współpracować?
              </Typography>
            </div>
            <StaticImage
              src={"../../images/magicSign.svg"}
              alt=""
              placeholder="blurred"
              width={50}
              height={50}
              className="opacity-0 md:opacity-100 animate-spin-slow"
            />
          </div>
          <div className="w-full flex justify-center mt-12">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <div
                className="flex flex-col gap-16 md:gap-8"
                onMouseOver={handleMouseEnter}
              >
                {bannerContent.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      hasAnimated ? "lg:animate-fadeIn opacity-100" : ""
                    }`}
                  >
                    <BannerBox2
                      styles="w-full"
                      bgColor={item.bgColor}
                      description={item.description}
                      title={item.title}
                      subtitle={item.subtitle}
                      key={i}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {version == 2 && (
        <div className="mb-8 md:mb-20 z-30">
          <div className="flex gap-5 justify-center">
            <div className="bg-ada-white2 border-ada-orange border rounded-3xl max-w-[480px] mx-auto">
              <Typography
                variant="h2"
                className="p-2 font-anton font-normal text-center text-ada-orange uppercase"
              >
                Tworzenie, które sprzedaje:
              </Typography>
            </div>
          </div>
          <div className="w-full flex justify-center mt-12">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <div
                className="flex flex-col gap-16 md:gap-8"
                onMouseOver={handleMouseEnter}
              >
                {bannerContent2.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      hasAnimated ? "lg:animate-fadeIn opacity-100" : ""
                    }`}
                  >
                    <div className="relative mb-16">
                      <BannerBox2
                        styles="w-full"
                        bgColor={item.bgColor}
                        description={item.description}
                        title={item.title}
                        btn={item.button}
                        showDefaultButton={item.showDefaultButton}
                        key={i}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default MagicBanner3
