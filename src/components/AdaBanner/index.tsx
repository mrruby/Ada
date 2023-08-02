import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  title: JSX.Element
  paragraph: JSX.Element
}

const AdaBanner = ({
  title,
  paragraph,
}: Props): JSX.Element => {

  return (
    <div className="flex px-4 lg:pl-[110px] flex-col lg:flex-row text-ada-blue">
        <div className="lg:w-[705px] pt-[120px]">
          <h1 className="text-adaTitle font-bold pb-8">{title}</h1>
          <p className="text-adaSubtitle">{paragraph}</p>
        </div>
        <div>
        <StaticImage src={"../../images/ada_homepage.webp"} alt="Blue Flower Ada Promis" placeholder="none" />
        </div>
    </div>
  )
}

export default AdaBanner

