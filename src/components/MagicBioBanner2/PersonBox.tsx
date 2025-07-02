// PersonBox.tsx
import React from "react"
import { CircleImage } from "./circleImages"

type PersonBoxProps = {
  img: string
  name: string
  title: string
  description: JSX.Element
}

const PersonBox = ({ img, name, title, description }: PersonBoxProps) => {
  return (
    <div className="text-left text-ada-black flex flex-col md:flex-row justify-center items-center gap-4 pt-4 w-full">
      <div className="w-[170px] h-[170px]">
        <CircleImage circleKey={img} />
      </div>
      <div className="w-[320px] max-w-[320px]">
        <p className="text-adaStandard text-ada-magicPurple2 font-bold">
          {name}
        </p>
        <p className="text-adaStandard leading-relaxed">{title}</p>
        <p className="text-adaMin leading-relaxed mt-2">{description}</p>
      </div>
    </div>
  )
}

export default PersonBox
