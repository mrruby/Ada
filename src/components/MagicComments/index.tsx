import Section from "components/shared/Section"
import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const MagicComments = ({ version }: { version: number }) => {
  return (
    <Section>
      {version === 1 && (
        <div className="flex flex-col items-center text-ada-black">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            Zobacz przykładowe pytania i odpowiedzi!
          </Typography>

          <div className="flex flex-col justify-between items-center w-full">
            <div
              className="opacity-0 animate-fadeUp -ml-12"
              style={{ animationDelay: "0s" }}
            >
              <StaticImage
                loading="eager"
                src="../../images/comment1a.webp"
                alt=""
                placeholder="blurred"
                width={490}
                height={284}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>

            <div
              className="opacity-0 animate-fadeUp -mt-4 -mr-12"
              style={{ animationDelay: "0.2s" }}
            >
              <StaticImage
                loading="eager"
                src="../../images/comment1b.webp"
                alt=""
                placeholder="blurred"
                width={488}
                height={288}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default MagicComments
