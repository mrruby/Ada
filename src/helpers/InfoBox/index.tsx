import React from "react"
import { Button } from "helpers/Button"

interface Props {
  btnText: string
  url: string
  image: JSX.Element
}

export const InfoBox: React.FC<Props> = ({ btnText, url, image }) => {
  return (
    <div className="flex flex-col items-center pt-[170px]">
      <Button
        type="button"
        text={btnText}
        border={true}
        url={url}
        textSize="lg:text-adaBase"
        btnStyle="md:w-[314px]"
      />
      {image}
    </div>
  )
}
