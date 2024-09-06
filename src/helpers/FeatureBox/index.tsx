import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  text: string | JSX.Element
  text2?: string | JSX.Element
  number?: string
  styleText?: string
  styleParagraph?: string
  flowerColor?: "blue" | "white" | "yellow"
}

export const FeatureBox: React.FC<Props> = ({
  text,
  text2,
  number,
  styleText,
  styleParagraph,
  flowerColor = "blue",
}) => {
  const isBlueFlower = flowerColor === "blue"
  const isYellowFlower = flowerColor === "yellow"

  return (
    <div className="flex flex-col items-center pt-[-30px] relative lg:min-w-[240px]">
      {isBlueFlower || isYellowFlower ? (
        <p className="absolute text-adaDesc font-semibold top-[60px] z-10">
          {number}
        </p>
      ) : (
        <p className="absolute text-adaSubtitleThird font-bold top-[24px] z-10">
          {number}
        </p>
      )}
      {isBlueFlower ? (
        <div className="animate-spin-slow mb-[-10px]">
          <StaticImage
            src={"../../images/flower-white-pink.svg"}
            alt="Blue Flower Ada Promis"
            placeholder="blurred"
            width={150}
            height={150}
          />
        </div>
      ) : isYellowFlower ? (
        <div className="animate-spin-slow mb-[-10px]">
          <StaticImage
            src={"../../images/floweryellow.svg"}
            alt="Yellow Flower Ada Promis"
            placeholder="blurred"
            width={150}
            height={150}
          />
        </div>
      ) : (
        <div className="animate-spin-slow mb-[20px]">
          <StaticImage
            src={"../../images/flower-white.svg"}
            alt="White Flower Ada Promis"
            placeholder="blurred"
            width={96}
            height={108}
          />
        </div>
      )}
      <p
        className={`lg:text-adaDesc max-w-[240px] text-center pt-[-10px] leading-snug font-bold ${styleText}`}
      >
        {text}
      </p>
      <div className={` ${styleParagraph}`}>
        {text2 && (
          <p
            className={`lg:text-[18px] w-full md:max-w-[220px] text-center pt-[-10px] leading-snug px-2 ${styleText}`}
          >
            {text2}
          </p>
        )}
      </div>
    </div>
  )
}
