import { Button } from "helpers/Button"
import React from "react"

interface Props {
  btnText: string
  url: string
  image: React.JSX.Element
}

export const InfoBox: React.FC<Props> = ({ btnText, url, image }) => {
  return (
    <div className="flex flex-col items-center pt-[170px] animate-fadeIn">
      <Button
        type="button"
        text={btnText}
        border={true}
        url={url}
        textSize="lg:text-adaBase"
        btnStyle="md:w-[314px] mb-4"
      />
      <div className="hover:opacity-50">{image}</div>
    </div>
  )
}
