import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

type Variant = "default" | "sowa"

const variantConfig: Record<
  Variant,
  {
    bgColor: string
    headingClass: string
    textColor: string
    magicColor: string
  }
> = {
  default: {
    bgColor: "bg-ada-magicYellow",
    headingClass: "",
    textColor: "text-ada-black",
    magicColor: "text-ada-pink7",
  },
  sowa: {
    bgColor: "bg-ada-sowaBurgundy",
    headingClass:
      "font-playfair font-normal text-[48px] leading-[100%] uppercase",
    textColor: "text-white",
    magicColor: "text-ada-sowaGold",
  },
}

const MagicCommunityOpinions = ({
  variant = "default",
}: {
  variant?: Variant
}) => {
  const config = variantConfig[variant]

  return (
    <Section
      bgColor={config.bgColor}
      className="pt-24 md:pt-32"
      id="opinie"
      padding="py-8 md:py-12 px-6"
    >
      <div className="w-full">
        {variant === "sowa" ? (
          <h2
            className={`mb-12 text-center ${config.headingClass} ${config.textColor}`}
          >
            Zobacz, co mówią o naszych{" "}
            <span className={config.magicColor}>magicznych eliksirach:</span>
          </h2>
        ) : (
          <Typography
            variant="h1"
            className={`mb-6 text-center ${config.textColor}`}
          >
            Wyniki i opinie członkiń
          </Typography>
        )}

        {variant !== "sowa" && (
          <div className="mx-auto mb-10 grid max-w-[900px] grid-cols-1 items-center gap-6 sm:grid-cols-3">
            <StaticImage
              src="../../images/wyzwanie-sales-result-1.webp"
              alt="Wyniki reklam członkini MAGIC"
              placeholder="blurred"
              className="w-full"
            />
            <StaticImage
              src="../../images/wyzwanie-sales-result-2.webp"
              alt="Wyniki reklam członkini MAGIC"
              placeholder="blurred"
              className="w-full"
            />
            <StaticImage
              src="../../images/wyzwanie-sales-result-3.webp"
              alt="Wyniki reklam członkini MAGIC"
              placeholder="blurred"
              className="w-full"
            />
          </div>
        )}

        {variant !== "sowa" && (
          <div className="mb-10 text-center">
            <p className={`mb-6 ${config.textColor}`}>
              Chcesz takich liczb u siebie? Twój MAGIC Plan pokaże pierwszy krok
            </p>
            <a
              href="https://cart.easy.tools/checkout/81632369/magic-subskrypcja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                type="button"
                text={<span className="!font-extrabold">Dołączam</span>}
                textSize="text-xs md:text-adaBase uppercase text-black"
                btnStyle="bg-ada-pink8 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl"
              />
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_1.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_2.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_3.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_4.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_5.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_6.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default MagicCommunityOpinions
