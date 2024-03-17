import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  text: string | JSX.Element
  text2?: string | JSX.Element
  styleText?: string
  image: JSX.Element
}

export const BonusBox: React.FC<Props> = ({
  text,
  text2,
  styleText,
  image,
}) => {
  return (
    <div className="flex flex-col items-center relative lg:min-w-[240px] md:max-w-[416px] px-3">
      {image}
      <p
        className={`lg:text-adaDesc text-center pt-[-10px] leading-snug ${styleText}`}
      >
        {text}
      </p>
      {text2 && (
        <p
          className={`lg:text-[18px] w-full text-center pt-4 leading-snug px-2 ${styleText}`}
        >
          {text2}
        </p>
      )}
    </div>
  )
}
