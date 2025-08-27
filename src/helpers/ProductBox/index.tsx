import { Button } from "helpers/Button"
import React from "react"

type ContentBoxProps = {
  title: string
  description: string
  image?: React.JSX.Element
  buttonText: string
  url: string
}

export const ProductBox: React.FC<ContentBoxProps> = ({
  title,
  description,
  image,
  buttonText,
  url,
}) => {
  return (
    <div className="bg-white w-full lg:min-w-[582px] flex flex-col items-start relative pt-[80px] pb-[30px] px-4 lg:pl-[74px] z-10">
      <div className="lg:absolute bottom-0 right-0 max-w-[340px] -z-10">
        {image}
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="font-bold  text-adaSubtitleSecondary italic max-w-[325px] leading-tight">
          {title}
        </h2>
        <p className="text-adaBase leading-tight max-w-[245px] font-medium">
          {description}
        </p>
        <Button
          type="button"
          text={buttonText}
          url={url}
          border={true}
          textSize="lg:text-[18px]"
        />
      </div>
    </div>
  )
}
