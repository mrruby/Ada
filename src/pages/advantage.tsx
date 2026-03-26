import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import formHTML from "../values/forms/form-marketerki.html"

const descriptionBullets = [
  "Dowiesz się, czym jest Advantage+ w systemie Meta",
  "Pokażę Ci, kiedy warto zaufać Advantage+, a kiedy lepiej zachować kontrolę",
  "Dostaniesz konkretne wskazówki, by świadomie wykorzystywać Advantage+ w swoich kampaniach",
]

const benefits = [
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
    bgClass: "bg-ada-magicPink3",
    title: "✅ ZROZUMIESZ FUNKCJE ADV+",
    description:
      "Poznasz, co oferuje Ci Advantage+ na etapie kampanii, zestawu i reklamy.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "👀 OTRZYMASZ PRAKTYCZNE WSKAZÓWKI",
    description:
      "Skorzystasz z naszej wiedzy i doświadczenia z Meta Ads zupełnie za 0zł!",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "✨ DOWIESZ SIĘ, CZY TWOJE KONTO JEST GOTOWE NA ADV+",
    description:
      "Zrozumiesz, kiedy Advantage+ wesprze Twoje reklamy, a kiedy może im zaszkodzić",
  },
]

const AdvantagePage = () => {
  return (
    <>
      <TrainingLandingPage
        heroBgColor="bg-ada-magicYellow"
        formHTML={formHTML}
        descriptionBullets={descriptionBullets}
        benefits={benefits}
        sectionTitle="POBIERZ PDF ZA 0ZŁ"
        benefitsTitle="Co zyskasz, dzięki tej ściądze?"
        mockupImage={
          <StaticImage
            src="../images/advantage-mockup.png"
            alt="Advantage+ Mockup"
            placeholder="blurred"
            className="w-full"
          />
        }
        heroLeft={
          <>
            <p className="text-[20px] lg:text-[24px] font-bold text-black mb-4">
              ODBIERZ ŚCIĄGĘ ZA 0ZŁ:
            </p>
            <h1 className="text-[32px] lg:text-[48px] font-anton font-normal leading-[125%] text-black">
              <span className="text-ada-magicPurple4 text-[40px] lg:text-[60px]">Advantage+</span>
              <br />
              Kiedy może pomóc Twoim kampaniom, a kiedy może zaszkodzić?
            </h1>
          </>
        }
      />
    </>
  )
}

export const Head = () => <SEO title="Advantage+ - Mini-kurs" />

export default AdvantagePage
