// PersonBox.tsx
import React from "react"
import Typography from "../shared/Typography"
import { CircleImage } from "./circleImages"

type PersonBoxProps = {
  img: string
  name: string
  description: string
}

const PersonBox = ({ img, name, description }: PersonBoxProps) => {
  const nameParts = name.split(" ")
  const firstName = nameParts[0]
  const lastName = nameParts.slice(1).join(" ")

  return (
    <div className="text-center text-ada-black flex flex-col justify-start items-center pt-4 w-full max-w-[220px]">
      <div className="relative flex-shrink-0 w-[184px] h-[184px] overflow-hidden rounded-full border-[3px] border-ada-magicPurple4 bg-ada-magicPurple4">
        <CircleImage circleKey={img} />
      </div>
      <Typography variant="h3" className="mb-2 mt-4">
        {firstName}
        <br />
        {lastName}
      </Typography>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default PersonBox
