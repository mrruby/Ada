// PersonBox.tsx
import React from "react"
import Typography from "../shared/Typography"
import { CircleImage } from "./circleImages"
import magicStampImage from "../../images/magic-stamp.webp"

type PersonBoxProps = {
  img: string
  name: string
  description: string
  showStamp?: boolean
}

const PersonBox = ({ img, name, description, showStamp }: PersonBoxProps) => {
  return (
    <div className="text-center text-ada-black flex flex-col justify-center items-center pt-4 md:max-w-[300px]">
      <div className="relative">
        <CircleImage circleKey={img} />
        {showStamp && (
          <img
            src={magicStampImage}
            alt=""
            className="absolute bottom-0 right-0 w-10"
          />
        )}
      </div>
      <Typography variant="h3" className="mb-2 mt-2">
        {name}
      </Typography>
      <p className="text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  )
}

export default PersonBox
