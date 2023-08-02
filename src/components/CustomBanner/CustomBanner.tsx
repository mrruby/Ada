import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
// import { Paragraph, Border } from "./CustomBanner.styled"
// import { Center, Container, Column, Title } from "../../shared.styled"

type Props = {
  title: JSX.Element
  reverse?: boolean
  paragraph1: JSX.Element
  paragraph2?: string
  paragraph3?: string
  actionButton?: JSX.Element
  image: JSX.Element
}

const CustomBanner = ({
  title,
  reverse = false,
  actionButton,
  paragraph1,
  paragraph2,
  paragraph3,
  image,
}: Props): JSX.Element => {
  return (
    <div className="flex px-2 flex-col lg:flex-row text-ada-blue">
        <div className="lg:w-[575px] pt-[120px]">
          <h1 className="text-adaTitle font-bold pb-8">{title}</h1>
          <p className="text-adaSubtitle font-medium">{paragraph1}</p>
          <p className="text-adaSubtitle font-medium">{paragraph2}</p>
          <p className="text-adaSubtitle font-medium">{paragraph3}</p>
          <Button
          type="button"
          text="Pokaż mi więcej"
        />   
        </div>
        <div>
          {image}
        </div>
    </div>
  )
}

export default CustomBanner
