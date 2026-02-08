import { Button } from "helpers/Button"
import React from "react"

interface Props {
  text: React.JSX.Element
  buttonText: string
  buttonUrl: string

  image?: React.JSX.Element
}
export const HomePageSection: React.FC<Props> = ({
  text,
  buttonText,
  buttonUrl,
  image,
}) => {
  const hasImage = Boolean(image)

  return (
    <div
      className={`
        relative flex flex-col md:flex-row
        bg-ada-white2 border border-ada-magicOrange rounded-[40px]
        text-black max-w-[920px] lg:min-h-[480px]
        mx-auto p-10 my-5 lg:my-20
        ${hasImage ? "items-center" : "items-center justify-center text-center"}
      `}
    >
      <div className={hasImage ? "" : "flex flex-col items-center"}>
        <div className="md:text-adaBase max-w-[460px]">{text}</div>

        <Button
          type="button"
          text={buttonText}
          url={buttonUrl}
          textSize="lg:text-adaSubtitle"
          btnStyle="uppercase bg-black text-white p-8 rounded-xl mt-5 mb-5 font-black"
        />
      </div>

      {hasImage && <div>{image}</div>}
    </div>
  )
}

export default HomePageSection
