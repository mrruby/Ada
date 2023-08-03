import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  title1: JSX.Element
  title2: JSX.Element
  paragraph: JSX.Element
}

const AdaBanner = ({
  title1,
  title2,
  paragraph,
}: Props): JSX.Element => {

  return (
    <div className="flex px-4 lg:pl-[120px] flex-col lg:flex-row text-ada-blue relative h-[500px]">
        <div className="lg:w-[705px] pt-[120px] z-10">
          <h2 className="text-adaSubtitle lg:text-adaTitle font-bold lg:mb-8 border-b-[20px] lg:border-b-[34px]	border-ada-light-pink h-[60px]">{title1}</h2>
          <h2 className="text-adaSubtitle lg:text-adaTitle font-bold lg:mb-8 border-b-[20px] lg:border-b-[34px]	border-ada-light-pink h-[60px]">{title2}</h2>
          <p className="lg:text-adaSubtitle">{paragraph}</p>
        </div>
        <div className="absolute top-[300px] lg:top-[-40px] right-0">
        <StaticImage src={"../../images/ada_homepage.webp"} alt="Blue Flower Ada Promis" placeholder="none" />
        </div>
    </div>
  )
}

export default AdaBanner

