// BannerBox.tsx
import React from "react"
import { CircleImage } from "./circleImages"
import { IconImage } from "./iconImages"
import Typography from "../shared/Typography"

type BannerBoxProps = {
  circleKey: string
  iconKey: string
  bgColor: string
  title?: string | JSX.Element
  price?: string | JSX.Element
  description: string | JSX.Element
  styles?: string
  url?: string
}

const BannerBox = ({
  circleKey,
  iconKey,
  bgColor,
  title,
  price,
  description,
  styles,
  url,
}: BannerBoxProps) => {
  const content = (
    <div className="relative md:mt-0">
      <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-[90px] h-[90px]">
        {title}
        {price}
        <CircleImage circleKey={circleKey} />
        <IconImage iconKey={iconKey} />
      </div>
      <div
        className={`${bgColor} rounded-3xl p-4 md:p-6 text-center flex flex-col items-center justify-center shadow-lg pt-16 ${styles}`}
      >
        <p className="text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}

export default BannerBox
