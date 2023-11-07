import React from "react"
import { FeatureBox } from "helpers/FeatureBox"

const MastermindSteps = (): JSX.Element => {
  const featuresDataFirtstRow = [
    {
      text: "Start! Układamy swój lejek, analizujemy ścieżkę swojego biznesu.",
      number: "1",
    },
    {
      text: "Grafiki & teksty: jak je przygotować? Spotkanie z ekspertkami z mojego zespołu!",
      number: "2",
    },
    {
      text: "Lead magnet i newsletter: jak stworzyć kampanie reklamowe na zapis do newslettera?",
      number: "3",
    },
  ]

  const featuresDataSecondRow = [
    {
      text: "Kampanie na obserwacje na IG: jak pozyskiwać wartościowych odbiorców?",
      number: "4",
    },
    {
      text: "Strona www: kampanie reklamowe na Twoją stronę internetową",
      number: "5",
    },
    {
      text: "Remarketing: wszystko, co musisz wiedzieć o najskuteczniejszych kampaniach reklamowych",
      number: "6",
    },
  ]
  return (
    <div className="text-center pt-10">
      <h2 className="font-bold lg:h-[58px] text-adaTitle lg:text-adaTitle2 text-ada-grey">
        Nad czym będziemy
      </h2>
      <h2 className="px-6 text-adaTitle font-bold">pracować?</h2>
      <div className="flex flex-col mx-auto items-center justify-center pb-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[90px]">
          {featuresDataFirtstRow.map((feature, index) => (
            <FeatureBox
              key={index}
              text={feature.text}
              number={feature.number}
              styleText="font-medium"
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-[90px]">
          {featuresDataSecondRow.map((feature, index) => (
            <FeatureBox
              key={index}
              text={feature.text}
              number={feature.number}
              styleText="font-medium"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MastermindSteps
