import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"

type ContentBoxProps = {
  title: string
  description: string
  actionButton?: boolean
  url?: string
  btnText: string
}

export const ContentBox: React.FC<ContentBoxProps> = ({
  title,
  description,
  actionButton = false,
  url,
  btnText,
}) => {
  return (
    <div className="bg-white mx-6 lg:w-[272px] lg:max-h-[432px] flex flex-col items-center justify-between relative mt-[100px] pt-[58px] lg:pb-[40px] animate-fadeIn hover:shadow-xl">
      <div className="absolute top-[-90px]">
        <StaticImage
          src={"../../images/flower-blue.svg"}
          alt="Blue Flower Ada Promis"
          placeholder="none"
          width={150}
          height={150}
        />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-adaSubtitle border-b-[25px]	border-ada-light-pink h-[33px]">
          {title}
        </h3>
        <p className="text-adaDesc pt-9 pb-[30px] leading-tight max-w-[240px] m-auto font-medium">
          {description}
        </p>
      </div>
      {actionButton && url && (
        <Button
          type="button"
          text={btnText}
          url={url}
          border={true}
          textSize="lg:text-adaBase"
        />
      )}
    </div>
  )
}
