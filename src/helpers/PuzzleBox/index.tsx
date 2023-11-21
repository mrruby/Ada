import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

interface Props {
  text: string
  btnText: string
  url: string
}

export const PuzzleBox: React.FC<Props> = ({ text, btnText, url }) => {
  return (
    <div className="flex flex-col items-center pt-[80px] relative lg:min-w-[240px] bg-white pb-6 mt-[30px] md:mt-[80px]">
      <div className="mb-[-10px] absolute top-[-60px]">
        <StaticImage
          src={"./../../images/puzzle.png"}
          alt="Blue Flower Ada Promis"
          placeholder="none"
          width={180}
          height={125}
        />
      </div>
      <h3 className="lg:text-adaDesc max-w-[240px] text-center pt-[-10px] leading-snug font-bold pb-[30px]">
        {text}
      </h3>
      <Button
        type="button"
        text={btnText}
        url={url}
        border={true}
        textSize="lg:text-adaBase"
        btnStyle="md:w-[200px]"
      />
    </div>
  )
}
