import React from "react"
import { Link } from "gatsby"

interface Props {
  type: "button" | "submit" | "reset"
  text: string | JSX.Element
  url?: string
  textSize?: string
  sectionId?: string
  border?: boolean
  btnStyle?: string
}

export const Button: React.FC<Props> = ({
  type,
  text,
  url,
  textSize = "lg:text-[25px]",
  sectionId,
  border,
  btnStyle,
}) => {
  const handleButtonClick = () => {
    if (sectionId && !url) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const borderStyles = border ? "border border-ada-blue" : ""

  const buttonContent = (
    <button
      onClick={handleButtonClick}
      type={type}
      className={`bg-ada-light-pink ${textSize} font-medium px-[20px] py-[6px] hover:bg-ada-pink hover:shadow-xl ${borderStyles} ${btnStyle}`}
    >
      {text}
    </button>
  )

  return url ? <Link to={url}>{buttonContent}</Link> : buttonContent
}
