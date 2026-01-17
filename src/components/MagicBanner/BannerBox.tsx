import React from "react"
import { CircleImage } from "./circleImages"
import { IconImage } from "./iconImages"

type BannerBoxProps = {
  circleKey: string
  iconKey: string
  bgColor: string
  title?: string | React.JSX.Element
  price?: string | React.JSX.Element
  description: string | React.JSX.Element
  styles?: string
  url?: string
  zoom?: string
  animationDelay?: string
  animationClass?: string
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
  zoom,
  animationDelay,
  animationClass,
}: BannerBoxProps) => {
  const content = (
    <div
      className={`relative md:mt-0 lg:opacity-0 transform ${animationClass || ""}`}
      style={{
        animationDelay: animationDelay,
        animationFillMode: "forwards",
      }}
    >
      <div
        className={`absolute left-1/2 -top-16 -translate-x-1/2 w-[90px] h-[90px] ${zoom}`}
      >
        {title}
        <CircleImage circleKey={circleKey} />
        <IconImage iconKey={iconKey} />
      </div>
      <div
        className={`${bgColor} rounded-3xl p-4 md:p-6 text-center flex flex-col items-center justify-center shadow-lg pt-6 md:pt-16 ${styles}`}
      >
        {price}
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
