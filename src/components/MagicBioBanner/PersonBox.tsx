// PersonBox.tsx
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Typography from "../shared/Typography"
import { CircleImage } from "./circleImages"

type PersonBoxProps = {
  img: string
  name: string
  description: string
  showStamp?: boolean
  textColor?: string
}

const PersonBox = ({
  img,
  name,
  description,
  showStamp,
  textColor = "text-ada-black",
}: PersonBoxProps) => {
  return (
    <div
      className={`text-center ${textColor} flex flex-col justify-center items-center pt-4 md:max-w-[300px]`}
    >
      <div className="relative">
        <CircleImage circleKey={img} />
        {showStamp && (
          <StaticImage
            src="../../images/magic-stamp.webp"
            alt=""
            placeholder="blurred"
            className="!absolute bottom-0 right-0 w-10"
          />
        )}
      </div>
      <Typography variant="h3" className="mb-2 mt-2 whitespace-nowrap">
        {name}
      </Typography>
      <p className="text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  )
}

export default PersonBox
