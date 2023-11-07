import React from "react"
import { Link } from "gatsby"

interface Props {
  type: "button" | "submit" | "reset"
  text: string | JSX.Element
  url: string
  textSize?: string
  sectionId?: string
  border?: boolean
  btnStyle?: string
}

export const Button: React.FC<Props> = ({
  type,
  text,
  textSize = "lg:text-[25px]",
  url,
  border,
  sectionId,
  btnStyle,
}) => {
  const handleButtonClick = () => {
    if (sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const borderStyles = border ? "border border-ada-blue" : ""

  return (
    <Link to={url}>
      <button
        onClick={handleButtonClick}
        type={type}
        className={`bg-ada-light-pink ${textSize} font-medium px-[20px] py-[6px] hover:bg-ada-pink ${borderStyles} ${btnStyle}`}
      >
        {text}
      </button>
    </Link>
  )
}
