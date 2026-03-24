import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import React from "react"
import formHTML from "../values/forms/form-marketerki.html"

const descriptionBullets = [
  "Dowiesz się, jak działa system Andromeda i zaczniesz działać z aktualną wiedzą!",
  "Pokażę Ci, kiedy warto zaufać Advantage+, a kiedy lepiej zachować kontrolę nad targetowaniem.",
  "Dostaniesz konkretne przykłady reklam i tekstów, które możesz wdrożyć u swoich klientek w 2026 - bez zgadywania i marnowania budżetów ✨",
]

const benefits = [
  {
    bgClass: "bg-ada-magicPink3",
    title: "🔥 Ogarniesz system Andromeda",
    description:
      "Zrozumiesz, jak działa algorytm i co zmienić w kampaniach, żeby zacząć osiągać lepsze wyniki przy niższych kosztach.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "🔝 Poznasz najlepszą strukturę kampanii na 2026",
    description:
      "Dzięki której zaoszczędzisz budżety klientek i sprawisz, że ich kampanie szybciej wejdą w fazę uczenia.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "📊 Ułożysz kreacje strategicznie",
    description: "Poznasz zasady, które ułatwią Ci pracę z kampaniami.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "✨ Wykorzystasz Advantage+ świadomie",
    description:
      "Dowiesz się, kiedy Adv+ rzeczywiście pomaga w dotarciu do właściwych osób, a kiedy lepiej jej nie włączać.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "🚀 Zobaczysz reklamy, które działają w praktyce",
    description:
      "Dostaniesz konkretne case studies i zrozumiesz, dlaczego te rozwiązania sprawdzają się w 2026 roku.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "😎 Otrzymasz praktyczne inspiracje",
    description: "Pokażę Ci teksty i grafiki, które działają!",
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
        heroLeft={
          <>
            <p className="text-[20px] lg:text-[24px] font-bold text-black mb-4">
              Mini-kurs za 0zł:
            </p>
            <h1 className="text-[32px] lg:text-[48px] font-anton font-normal leading-[125%] text-black">
              Dowiedz się, kiedy{" "}
              <span className="text-ada-magicPurple4">
                Advantage+ może pomóc Twoim kampaniom
              </span>
              , a kiedy Ci zaszkodzi.
            </h1>
          </>
        }
      />
    </>
  )
}

export const Head = () => <SEO title="Advantage+ - Mini-kurs" />

export default AdvantagePage
