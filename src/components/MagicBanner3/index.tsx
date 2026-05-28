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
          <li>🔥 Skuteczne kampanie, która zwiększa sprzedaż i zainteresowanie ofertą</li>
          <li>🎯 Strategię dopasowaną do Twojego produktu i grupy docelowej</li>
          <li>💡 Jasne wnioski, plany zmian i konkretne rekomendacje na przyszłość</li>
          <li>💼 Spokojną głowę podczas kampanii - wiesz, że reklamy są pod kontrolą i pracują na wynik!</li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>🚀 Dla osób planujących premierę produktu, kursu lub mentoringu</li>
          <li>🧪 Dla marek, które chcą sprawdzić współpracę przed wejściem w długoterminowe działania</li>
        </ul>
      </div>
    ),
  },
  {
    bgColor: "bg-ada-magicPink",
    title: "⭐ MARKETING PARTNER",
    subtitle:
      "Kompleksowe zarządzanie kampaniami na wszystkich kluczowych platformach w systemie Meta (stała współpraca)",
    description: (
      <div>
        <p className="font-bold mb-4">Co otrzymujesz:</p>
        <ul className="space-y-2 mb-6">
          <li>🚀 Wzrost sprzedaży i rozwój marki dzięki profesjonalnym kampaniom reklamowym</li>
          <li>📈 Strategię nastawioną na skalowanie biznesu i lepszy zwrot z budżetu reklamowego</li>
          <li>💡 Skuteczniejsze reklamy i optymalizacja kosztów, dzięki regularnym optymalizacjom</li>
          <li>👩‍💻 Dostęp do eksperckiej wiedzy i bieżących rozwiązań zgodnych z aktualnymi trendami oraz algorytmami Meta</li>
          <li>😌 Pewność, że marketing jest prowadzony profesjonalnie i pod stałą kontrolą</li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>💼 Dla firm, które chcą rozwijać sprzedaż w sposób przewidywalny i długoterminowy</li>
          <li>📊 Dla przedsiębiorczyń gotowych skalować biznes z pomocą strategicznego marketingu</li>
          <li>🎯 Dla właścicielek marek, które potrzebują stałego wsparcia i partnera do rozwoju biznesu</li>
        </ul>
      </div>
    ),
  },
  {
    bgColor: "bg-ada-purple3",
    title: "💎 GROWTH INTENSIVE",
    subtitle:
      "Obsługa reklam Meta + konsultacje strategiczne 1:1 (premium)",
    description: (
      <div>
        <p className="font-bold mb-4">Co otrzymujesz:</p>
        <ul className="space-y-2 mb-6">
          <li>🚀 Skalowanie sprzedaży i rozwój marki dzięki kampaniom reklamowym</li>
          <li>🤝 Regularne konsultacje strategiczne, dzięki którym podejmujesz lepsze decyzje biznesowe i marketingowe</li>
          <li>📈 Jasny plan działań dopasowany do Twoich celów oraz etapu rozwoju firmy</li>
          <li>🎯 Magnetyczną strategię kontentu, która przyciągnie nowych klientów</li>
          <li>💡 Szybszy i bardziej świadomy rozwój biznesu, dzięki wsparciu ekspertek</li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>💎 Dla ambitnych przedsiębiorczyń, które chcą wejść na wyższy poziom biznesowy</li>
          <li>🚀 Dla marek gotowych inwestować w profesjonalny marketing i realny wzrost</li>
          <li>📈 Dla biznesów nastawionych na intensywne skalowanie i mocniejsze wyniki sprzedażowe</li>
        </ul>
      </div>
    ),
  },
  {
    bgColor: "bg-ada-magicPink2",
    title: "💌 NEWSLETTER MASTER",
    subtitle:
      "Wdrożenie newslettera + obsługa reklam Meta + prowadzenie newslettera",
    description: (
      <div>
        <p className="font-bold mb-4">Co otrzymujesz:</p>
        <ul className="space-y-2 mb-6">
          <li>📈 System komunikacji, który pomaga regularnie docierać do klientów i zwiększać sprzedaż</li>
          <li>💌 Silniejsze relacje z odbiorcami dzięki wartościowej i spójnej obecności marki</li>
          <li>🚀 Stały dopływ nowych potencjalnych klientów oraz rozwój własnej bazy kontaktów</li>
          <li>🤝 Większą niezależność od algorytmów i kanał komunikacji, który naprawdę należy do Ciebie</li>
          <li>📊 Działania stale optymalizowane pod lepsze wyniki, zaangażowanie i konwersję</li>
        </ul>
        <p className="font-bold mb-4">Dla kogo:</p>
        <ul className="space-y-2">
          <li>💌 Dla marek, które chcą budować lojalną i zaangażowaną społeczność</li>
          <li>🎯 Dla biznesów szukających bardziej przewidywalnego i zautomatyzowanego marketingu</li>
          <li>📈 Dla przedsiębiorczyń, które myślą długoterminowo i chcą zwiększać sprzedaż bez ciągłego polegania wyłącznie na social mediach</li>
        </ul>
      </div>
    ),
  },
]

const MagicBanner3 = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }

  return (
    <Section className="text-black relative">
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
    </Section>
  )
}

export default MagicBanner3
