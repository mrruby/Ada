// PersonBox.tsx
import React from "react"
import Typography from "../shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { CircleImage } from "./circleImages"

type PersonBoxProps = {
  img: string
  name: string
  description: string
}

const PersonBox = ({
  img,
  name,
  description,
}: PersonBoxProps) => {
  return (
    <div
      className="text-center text-ada-black flex flex-col justify-center items-center pt-4 md:max-w-[300px]"
    >
      <CircleImage circleKey={img} />
      <Typography variant="h3" className="mb-2 mt-2">
        {name}
      </Typography>
      <p className="text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  )
};

export default PersonBox;
