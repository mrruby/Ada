import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React, { useState } from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import BannerBox2 from "./BannerBox3"

const bannerContent = [
  {
    bgColor: "bg-ada-magicGreen",
    title: "👩‍💻 Praca przy kampanii sprzedażowej jednego produktu cyfrowego/mentoringu (2 miesiące)",
    description: (
      <ul>
        <li className="mb-2">💼 Kompleksowa obsługa prekampanii i kampanii sprzedażowej</li>
        <li className="mb-2">📊 Strategia, wdrożenie i optymalizacja reklam</li>
        <li className="mb-2">💡 Analiza wyników i rekomendacje na przyszłość</li>
        <li className="mb-2">👀 Idealne rozwiązanie dla jednorazowych projektów sprzedażowych</li>
      </ul>
    ),
  },
  {
    bgColor: "bg-ada-magicPink",
    title: "📈 Obsługa reklam Meta, TikTok, LinkedIn",
    description: (
      <ul>
        <li className="mb-2">👩‍💻 Kompleksowe zarządzanie kampaniami na wszystkich kluczowych platformach</li>
        <li className="mb-2">📈 Strategia, wdrożenie, optymalizacja i raportowanie</li>
        <li className="mb-2">😎 Dostęp do specjalistów od każdej platformy reklamowej</li>
        <li className="mb-2">🚀 Regularne aktualizacje zgodne z najnowszymi trendami i algorytmami</li>
      </ul>
    ),
  },
  {
    bgColor: "bg-ada-purple3",
    title: "‍💻 Obsługa reklamMeta, TikTok, LinkedIn & konsultacje strategiczne 1:1",
    description: (
      <ul>
        <li className="mb-2">👩‍💻 Prowadzenie kampanii reklamowych</li>
        <li className="mb-2">🤝 Regularne sesje konsultacyjne z ekspertem</li>
        <li className="mb-2">🎯 Strategiczne planowanie działań marketingowych</li>
        <li className="mb-2">👉🏻 Rekomendacje dotyczące contentu i komunikacji</li>
      </ul>
    ),
  },
  {
    bgColor: "bg-ada-magicPink2",
    title: "💌 Wdrożenie newslettera + połączenie z reklamami + prowadzenie newslettera",
    description: (
      <ul>
        <li className="mb-2">📫 Kompleksowe wdrożenie systemu mailingowego</li>
        <li className="mb-2">🖥️ Integracja z kampaniami reklamowymi</li>
        <li className="mb-2">📯 Regularne prowadzenie komunikacji e-mail</li>
        <li className="mb-2">📉 Analiza wyników i optymalizacja strategii</li>
      </ul>
    ),
  },
]

const MagicBanner3 = (): JSX.Element => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }

  return (
    <Section className="text-black relative">
      <div
        className="mb-8 md:mb-20"
        onMouseOver={handleMouseEnter}
      >
          <div className="border-ada-orange border rounded-2xl max-w-[660px] mx-auto">
                <Typography variant="h2" className="p-2 font-anton font-normal text-center text-ada-orange">
                Jak możesz z nami współpracować?
                </Typography>
          </div>
        <div className="w-full flex justify-end mt-6">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {bannerContent.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    hasAnimated
                      ? i % 2 === 0
                        ? "lg:animate-slideInFromLeft opacity-100"
                        : "lg:animate-slideInFromRight opacity-100"
                      : ""
                  }`}
                >
                  <BannerBox2
                    bgColor={item.bgColor}
                    description={item.description}
                    title={item.title}
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
