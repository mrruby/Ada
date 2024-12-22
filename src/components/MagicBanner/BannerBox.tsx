// BannerBox.tsx
import React from "react"
import { CircleImage } from "./circleImages"
import { IconImage } from "./iconImages"

type BannerBoxProps = {
  circleKey: string
  iconKey: string
  bgColor: string
  title: string
  description: string
}

const BannerBox = ({
  circleKey,
  iconKey,
  bgColor,
  title,
  description,
}: BannerBoxProps) => (
  <div className="relative mt-20 md:mt-0">
    <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-[90px] h-[90px]">
      <CircleImage circleKey={circleKey} />
      <IconImage iconKey={iconKey} />
    </div>
    <div
      className={`${bgColor} rounded-3xl p-4 md:p-6 text-center flex flex-col items-center pt-16`}
    >
      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  </div>
)

export default BannerBox
