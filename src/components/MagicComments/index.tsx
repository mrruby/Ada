import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"

const MagicComments = ({ version }: { version: number }) => {
  return (
    <div className="w-screen pt-8 px-6">
      {version === 1 && (
        <div className="flex flex-col items-center text-ada-black">
          <h2 className="font-montserrat font-bold text-[32px] md:text-[48px] leading-[100%] text-center uppercase max-w-[500px] md:max-w-[800px]">
            Zobacz przykładowe pytania i odpowiedzi!
          </h2>
          <StaticImage
            loading="eager"
            src="../../images/pyt-odp.webp"
            alt="Przykładowe pytania i odpowiedzi z MAGIC"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            quality={100}
            className="max-w-4xl -my-8"
          />
          <Button
            type="button"
            text={<span className="!font-extrabold"> WCHODZĘ W TO!</span>}
            sectionId="magic-package"
            textSize="text-xs md:text-adaSubtitleSecondary uppercase text-black"
            btnStyle="bg-ada-magicPurple4 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl mb-10"
          />
        </div>
      )}
    </div>
  )
}

export default MagicComments
