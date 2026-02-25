// MagicInfoBox.tsx
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type MagicInfoBoxProps = {
  title: string
  color: string
  subtitle: React.JSX.Element
  subtitle2: React.JSX.Element
  content: React.JSX.Element
  description: React.JSX.Element
  showArrow?: boolean
}

const MagicInfoBox = ({
  title,
  color,
  subtitle,
  subtitle2,
  content,
  description,
  showArrow = true,
}: MagicInfoBoxProps) => {
  const bgClass = color === "green" ? "bg-ada-magicGreen" : "bg-ada-white2"

  return (
    <div className="relative text-center text-black w-full max-w-[900px] mt-10 mx-auto px-4 md:px-0 pb-16">
      <div
        className={`border-ada-orange border rounded-3xl px-12 py-4 mx-auto ${bgClass}`}
      >
        <p className="text-adaDesc">{subtitle}</p>
        <p className="text-adaSubtitleThird md:text-[150px] font-anton text-ada-orange">
          {title}
        </p>
        <p className="text-adaDesc">{subtitle2}</p>
      </div>
      <div className="mx-auto w-full max-w-[820px]">{content}</div>
      <div
        className={`border-ada-orange border rounded-3xl px-12 py-4 mx-auto text-adaDesc ${bgClass}`}
      >
        {description}
      </div>
      {showArrow && (
        <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
          <a href="#konsultacja">
            <StaticImage
              src={"../../images/magicBtn.svg"}
              alt=""
              placeholder="blurred"
              width={80}
              height={80}
            />
          </a>
        </div>
      )}
    </div>
  )
}

export default MagicInfoBox
