import React from "react"
import { Button } from "helpers/Button"

type Props = {
  title: string
  reverse?: boolean
  paragraph1: JSX.Element
  paragraph2?: JSX.Element
  paragraph3?: string
  actionButton?: boolean
  btnText: string
  image: JSX.Element
}

const CustomBanner = ({
  title,
  actionButton = true,
  paragraph1,
  paragraph2,
  paragraph3,
  btnText,
  image,
}: Props): JSX.Element => {
  const subtitleClass = "text-adaSubtitle font-medium leading-tight py-2";

  return (
    <div className="flex px-4 lg:pl-[110px] flex-col items-center lg:flex-row text-ada-blue relative min-h-[660px]">
        <div className="lg:w-[678px]">
          <h1 className="text-adaTitle font-bold pb-8 lg:w-[704px]">{title}</h1>
          <p className={subtitleClass}>{paragraph1}</p>
          <p className={subtitleClass}>{paragraph2}</p>
          <p className={subtitleClass}>{paragraph3}</p>
          <div className="mt-[14px]">
          {actionButton && <Button type="button" text={btnText} url="https://sklep.adrianna.com.pl/search"/>}
          </div>
        </div>
        <div className="lg:absolute top-0 right-[-50px]">
          {image}
        </div>
    </div>
  )
}

export default CustomBanner
