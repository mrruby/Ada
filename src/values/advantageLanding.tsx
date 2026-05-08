import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const ADVANTAGE_PAGE_TITLE = "Advantage+ - Mini-kurs"
export const advantageHeroBgColor = "bg-ada-magicYellow"
export const advantageSectionTitle = "POBIERZ PDF ZA 0ZŁ"
export const advantageBenefitsTitle = "Co zyskasz, dzięki tej ściądze?"

export const advantageDescriptionBullets = [
  "Dowiesz się, czym jest Advantage+ w systemie Meta",
  "Pokażę Ci, kiedy warto zaufać Advantage+, a kiedy lepiej zachować kontrolę",
  "Dostaniesz konkretne wskazówki, by świadomie wykorzystywać Advantage+ w swoich kampaniach",
]

export const advantageBenefits = [
  {
    bgClass: "bg-ada-magicPink3",
    title: "🔥OGARNIESZ ADVANTAGE+",
    description:
      "Zrozumiesz, jak działa algorytm i co zmienić w kampaniach, żeby zacząć osiągać lepsze wyniki przy niższych kosztach.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "🎉 WYKORZYSTASZ SYSTEM STRATEGICZNIE",
    description:
      "Podejdziesz do swoich reklam świadomie, dzięki czemu nie przepalisz budżetu na niepotrzebne testy.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "🚀 UŁOŻYSZ STRATEGIĘ DZIAŁANIA",
    description:
      "Poznasz zasady, które ułatwią Ci pracę z kampaniami, nawet jeśli dopiero zaczynasz.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "✅ ZROZUMIESZ FUNKCJE ADV+",
    description:
      "Poznasz, co oferuje Ci Advantage+ na etapie kampanii, zestawu i reklamy.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "👀 OTRZYMASZ PRAKTYCZNE WSKAZÓWKI",
    description:
      "Skorzystasz z naszej wiedzy i doświadczenia z Meta Ads zupełnie za 0zł!",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "✨ DOWIESZ SIĘ, CZY TWOJE KONTO JEST GOTOWE NA ADV+",
    description:
      "Zrozumiesz, kiedy Advantage+ wesprze Twoje reklamy, a kiedy może im zaszkodzić",
  },
]

export const advantageMockupImage = (
  <div className="overflow-hidden">
    <StaticImage
      src="../images/advantage-mockup.webp"
      alt="Advantage+ Mockup"
      placeholder="blurred"
      className="w-full -mt-20 -mb-28 lg:-mt-28 lg:-mb-36"
    />
  </div>
)

export const advantageHeroLeft = (
  <>
    <p className="text-[20px] lg:text-[24px] font-bold text-black mb-4">
      ODBIERZ ŚCIĄGĘ ZA 0ZŁ:
    </p>
    <h1 className="text-[32px] lg:text-[48px] font-anton font-normal leading-[125%] text-black">
      <span className="text-[40px] lg:text-[60px]" style={{ color: "#B1A1FA" }}>
        Advantage+
      </span>
      <br />
      Kiedy może pomóc Twoim kampaniom, a kiedy może zaszkodzić?
    </h1>
  </>
)
