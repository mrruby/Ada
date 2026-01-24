import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Section from "../shared/Section"

const MagicFinalCTA = () => {
  return (
    <Section bgColor="bg-transparent" padding="py-8 md:py-12 px-6">
      <div className="text-center py-12">
        <Button
          type="button"
          text={
            <span className="!font-extrabold uppercase">
              Dołączam do Magic!
            </span>
          }
          sectionId="magic-package"
          textSize="text-lg md:text-xl"
          btnStyle="bg-ada-magicPink4 text-black
                    font-semibold tracking-wide h-[60px] md:h-[80px]
                    px-8 md:px-12 shadow-xl hover:opacity-90 rounded-full"
        />

        {/* Instagram icons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/klub.magic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80"
          >
            <StaticImage
              src="../../images/instagram.svg"
              alt="Klub MAGIC Instagram"
              placeholder="blurred"
              width={40}
              height={40}
            />
            <span className="text-sm text-gray-600">@klub.magic</span>
          </a>
          <a
            href="https://www.instagram.com/adapromis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:opacity-80"
          >
            <StaticImage
              src="../../images/instagram.svg"
              alt="Ada Promis Instagram"
              placeholder="blurred"
              width={40}
              height={40}
            />
            <span className="text-sm text-gray-600">@adapromis</span>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default MagicFinalCTA
