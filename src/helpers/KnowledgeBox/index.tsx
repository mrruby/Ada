import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"

interface Props {
  text: React.JSX.Element
  btnText: string | React.JSX.Element
  url: string
  type: "variant1" | "variant2"
}

export const KnowledgeBox: React.FC<Props> = ({ text, btnText, url, type }) => {
  const width =
    type === "variant1" ? "w-[240px] md:w-full" : "w-[240px] md:w-[500px]"

  return (
    <div className={`flex flex-col items-center ${width}`}>
      <div className="mb-[-10px] animate-spin-slow">
        <StaticImage
          src={"../../images/flower-white-pink.svg"}
          alt="Blue Flower Ada Promis"
          placeholder="blurred"
          width={150}
          height={150}
        />
      </div>
      <p className="text-center pt-[-10px] leading-snug lg:text-adaDesc max-w-[780px]">
        {text}
      </p>
      <div className="mt-[32px]">
        <Button
          type="button"
          text={btnText}
          border={true}
          url={url}
          textSize="lg:text-adaBase"
          btnStyle="bg-ada-white40 md:w-[398px] px-0"
        />
      </div>
    </div>
  )
}
