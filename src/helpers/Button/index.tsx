import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type ButtonVariant = "default" | "dark" | "offer" | "pink"

interface Props {
  type: "button" | "submit" | "reset"
  text: string | React.JSX.Element
  url?: string
  textSize?: string
  sectionId?: string
  border?: boolean
  btnStyle?: string
  variant?: ButtonVariant
  iconCalender?: boolean
  iconCalender2?: boolean
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  default:
    "bg-ada-light-pink hover:bg-ada-pink hover:shadow-xl px-[20px] py-[6px]",
  dark: "bg-black text-ada-magicYellow rounded-full shadow-[0_16px_38px_rgba(0,0,0,0.18)]",
  offer:
    "bg-ada-magicOrange2 text-black rounded-[14px] shadow-[0_8px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:brightness-95 hover:shadow-xl",
  pink: "bg-ada-pink7 text-white rounded-[14px] shadow-[0_8px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:brightness-95 hover:shadow-xl",
}

const shouldUseAnchor = (url: string): boolean =>
  url.startsWith("http://") ||
  url.startsWith("https://") ||
  url.startsWith("/api/") ||
  url.startsWith("mailto:") ||
  url.startsWith("tel:")

export const Button: React.FC<Props> = ({
  type,
  text,
  url,
  textSize = "lg:text-[25px]",
  sectionId,
  border,
  btnStyle,
  variant = "default",
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
  const className = `${VARIANT_STYLES[variant]} ${textSize} font-medium ${borderStyles} ${btnStyle}`

  const content = (
    <>
      {text}
      {iconCalender && (
        <StaticImage
          src={"../../images/calendar.svg"}
          alt=""
          placeholder="blurred"
          width={24}
          height={24}
          className="ml-1 md:ml-4 md:mt-[5px]"
        />
      )}
      {iconCalender2 && (
        <StaticImage
          src={"../../images/calendar.svg"}
          alt=""
          placeholder="blurred"
          width={48}
          height={48}
          className="w-[24px] md:w-[48px] ml-4 md:mt-[10px]"
        />
      )}
    </>
  )

  const buttonContent = (
    <button onClick={handleButtonClick} type={type} className={className}>
      {content}
    </button>
  )

  if (!url) return buttonContent

  return shouldUseAnchor(url) ? (
    <a href={url} className={className}>
      {content}
    </a>
  ) : (
    <Link to={url} className={className}>
      {content}
    </Link>
  )
}
