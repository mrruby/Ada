import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  text: string
  text2?: string
  number?: string
  styleText?: string
}

export const FeatureBox: React.FC<Props> = ({
  text,
  text2,
  number,
  styleText,
}) => {
  return (
    <div className="flex flex-col items-center pt-[-30px] relative lg:min-w-[240px]">
      <p className="absolute text-adaDesc font-semibold top-[60px] z-10">
        {number}
      </p>
      <div className="animate-spin-slow mb-[-10px]">
        <StaticImage
          src={"../../images/flower-white-pink.svg"}
          alt="Blue Flower Ada Promis"
          placeholder="none"
          width={150}
          height={150}
        />
      </div>
      <p
        className={`lg:text-adaDesc max-w-[240px] text-center pt-[-10px] leading-snug font-bold ${styleText}`}
      >
        {text}
      </p>
      <div className="md:absolute bottom-[-180px] lg:bottom-[-240px] h-full">
        {text2 && (
          <p className="lg:text-[18px] w-full md:max-w-[220px] text-center pt-[-10px] leading-snug px-2">
            {text2}
          </p>
        )}
      </div>
    </div>
  )
}
