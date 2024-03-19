import React from "react"
import { FeatureBox } from "helpers/FeatureBox"

const FeaturesAda = (): JSX.Element => {
  const featuresData = [
    {
      text: "ODKRYWCZOŚĆ",
      text2: "odkrywam potencjał reklamowy biznesów",
    },
    {
      text: "STRATEG",
      text2: "tworzę kreatywne koncepty reklamowe dla marek",
    },
    {
      text: "INDYWIDUALIZACJA",
      text2: "sprzedaję baz nachalnej sprzedaży ",
    },
    {
      text: "ZBIERANIE",
      text2: "zbieram wiele pomysłów w spójną komunikację",
    },
    {
      text: "NAPRAWIANIE",
      text2: "znajduję rozwiązania na problemy reklamowe",
    },
  ]

  return (
    <div className=" text-ada-blue flex lg:gap-[10px] flex-col md:flex-row items-center justify-center pb-[24px] mb-[150px]">
      {featuresData.map((feature, index) => (
        <FeatureBox
          key={index}
          text={feature.text}
          text2={feature.text2}
          styleParagraph="md:absolute bottom-[-180px] lg:bottom-[-240px] h-full"
        />
      ))}
    </div>
  )
}

export default FeaturesAda
