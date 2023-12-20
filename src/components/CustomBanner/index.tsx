import React from "react"
import { Button } from "helpers/Button"

type Props = {
  title: string
  reverse?: boolean
  paragraph1: JSX.Element
  paragraph2?: JSX.Element
  paragraph3?: string
  paragraphStyle?: string
  paragraphTextStyle?: string
  actionButton?: boolean
  btnText: string
  image: JSX.Element
  imgStyle?: string
  btnUrl: string
}

const CustomBanner = ({
  title,
  actionButton = true,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraphStyle,
  paragraphTextStyle = "text-adaSubtitle",
  btnText,
  image,
  imgStyle = "lg:absolute bottom-0 right-[-50px]",
  btnUrl,
}: Props): JSX.Element => {
  const subtitleClass = `${paragraphTextStyle} font-medium leading-tight py-2`

  return (
    <div className="flex px-2 xl:px-6 flex-col items-center lg:flex-row text-ada-blue min-h-[560px] max-w-[1280px] mx-auto relative">
      <div className={paragraphStyle}>
        <h1 className="text-adaTitle font-bold pb-8 lg:w-[704px] animate-bounce">
          {title}
        </h1>
        <p className={subtitleClass}>{paragraph1}</p>
        <p className={subtitleClass}>{paragraph2}</p>
        <p className={subtitleClass}>{paragraph3}</p>
        <div className="mt-[14px]">
          {actionButton && (
            <Button
              type="button"
              text={btnText}
              sectionId={btnUrl}
              btnStyle="md:w-[344px]"
            />
          )}
        </div>
      </div>
      <div className={imgStyle}>{image}</div>
    </div>
  )
}

export default CustomBanner
