import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  type: "button" | "submit" | "reset"
  text: string | JSX.Element
  url?: string
  textSize?: string
  sectionId?: string
  border?: boolean
  btnStyle?: string
  iconCalender?: boolean
  iconCalender2?: boolean
}

export const Button: React.FC<Props> = ({
  type,
  text,
  url,
  textSize = "lg:text-[25px]",
  sectionId,
  border,
  btnStyle,
  iconCalender,
  iconCalender2,
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
      {iconCalender && (
        <StaticImage
          src={"../../images/calendar.svg"}
          alt=""
          placeholder="none"
          width={24}
          height={24}
          className="ml-1 md:ml-4 md:mt-[5px]"
        />
      )}
      {iconCalender2 && (
        <StaticImage
          src={"../../images/calendar.svg"}
          alt=""
          placeholder="none"
          width={48}
          height={48}
          className="w-[24px] md:w-[48px] ml-4 md:mt-[10px]"
        />
      )}
    </button>
  )

  return url ? <Link to={url}>{buttonContent}</Link> : buttonContent
}
