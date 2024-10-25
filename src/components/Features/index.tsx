import React from "react"
import { FeatureBox } from "helpers/FeatureBox"

const Features = (): JSX.Element => {
  const featuresData = [
    {
      text: "6 lat doświadczenia w sprzedaży",
    },
    {
      text: "+1 000 000 złotych wydane na reklamę",
    },
    {
      text: ">1000 godzin konsultacji marketingowych",
    },
  ]

  return (
    <div className=" text-ada-blue flex gap-[80px] flex-col md:flex-row items-center justify-center pb-[24px]">
      {featuresData.map((feature, index) => (
        <FeatureBox key={index} text={feature.text} />
      ))}
    </div>
  )
}

export default Features
