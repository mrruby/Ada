import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import React from "react"
import formHTML from "../values/forms/form-przedsiebiorczynie.html"

const descriptionBullets = [
  "Dowiesz się, jak działa system Andromeda i jak dzielić kampanie oraz kreacje, żeby algorytm pracował na Twoją korzyść!",
  "Pokażę Ci, kiedy warto zaufać Advantage+, a kiedy lepiej zachować kontrolę.",
  "Dostaniesz konkretne przykłady reklam i tekstów, które warto wdrożyć w 2026 - bez zgadywania i straty pieniędzy ✨",
]

const benefits = [
  {
    bgClass: "bg-ada-magicPink3",
    title: "🔥 Ogarniesz system Andromeda",
    description:
      "Zrozumiesz, jak działa algorytm i co powinnaś zmienić, żeby wreszcie zaczął dla Ciebie pracować.",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "🔝 Poznasz najlepszą strukturę kampanii na 2026",
    description:
      'Dzięki której oszczędzisz budżet i sprawisz, że kampanie szybciej się "rozkręcą"',
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "💜 Dowiesz się, jak układać kreacje",
    description:
      "Poznasz proste zasady, dzięki którym ustawianie kampanii będzie łatwiejsze i bardziej efektywne.",
  },
  {
    bgClass: "bg-ada-magicPink3",
    title: "✨ Wykorzystasz Advantage+ z głową",
    description: "Dowiesz się, kiedy warto, a kiedy lepiej unikać opcji Adv+",
  },
  {
    bgClass: "bg-ada-magicYellow",
    title: "🚀 Zobaczysz reklamy, które działają",
    description:
      "Dostaniesz konkretne przykłady i zrozumiesz, dlaczego akurat one się sprawdzają.",
  },
  {
    bgClass: "bg-ada-magicPurple4",
    title: "😎 Otrzymasz praktyczne inspiracje",
    description: "Pokażę Ci teksty i grafiki, które działają!",
  },
]

const Meta2026Page = () => {
  return (
    <TrainingLandingPage
      heroBgColor="bg-ada-magicOrange2"
      formHTML={formHTML}
      descriptionBullets={descriptionBullets}
      benefits={benefits}
      heroLeft={
        <>
          <p className="text-[20px] lg:text-[24px] font-bold text-black mb-4">
            Mini-kurs za 0zł:
          </p>
          <h1 className="text-[32px] lg:text-[48px] font-anton font-normal leading-[125%] text-black">
            W 45 minut pokażę Ci, jak{" "}
            <span className="text-ada-magicPurple4">
              zrozumieć reklamy Meta w 2026 roku
            </span>{" "}
            bez przepalania budżetu i nerwowego testowania!
          </h1>
        </>
      }
    />
  )
}

export const Head = () => <SEO title="Meta 2026 - Mini-kurs" />

export default Meta2026Page
