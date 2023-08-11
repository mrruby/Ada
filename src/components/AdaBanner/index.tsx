import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  title1: string
  title2: string
  paragraph1: JSX.Element
  paragraph2: JSX.Element
}

const AdaBanner = ({
  title1,
  title2,
  paragraph1,
  paragraph2,
}: Props): JSX.Element => {

  return (
    <div className="flex px-6 lg:pl-[120px] flex-col lg:flex-row text-ada-blue relative h-[500px]">
        <div className="lg:w-[736px] pt-[60px] lg:pt-[120px] z-0">
          <h2 className="text-[15px] lg:text-adaSubtitleSecondary font-bold border-b-[12px] lg:mb-2 lg:border-b-[34px]	border-ada-light-pink h-[24px] lg:h-[52px]">{title1}</h2>
          <h2 className="text-[15px] lg:text-adaSubtitleSecondary font-bold lg:mb-8 border-b-[12px] lg:border-b-[34px]	border-ada-light-pink h-[24px] lg:h-[52px] ">{title2}</h2>
          <p className="lg:text-[20px] lg:w-[600px]">{paragraph1}</p>
          <p className="lg:text-[20px] py-4 lg:w-[600px]">{paragraph2}</p>
        </div>
        <div className="absolute top-[290px] lg:top-[-40px] right-0">
        <StaticImage src={"../../images/ada_homepage.png"} alt="Ada Promis" placeholder="none" width={700} height={700}  />
        </div>
    </div>
  )
}

export default AdaBanner

