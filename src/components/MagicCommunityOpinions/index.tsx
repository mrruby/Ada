import { StaticImage } from "gatsby-plugin-image"
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
    bgColor: "bg-transparent",
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
            className={`mb-12 text-center ${config.textColor}`}
          >
            Zobacz, co członkinie{" "}
            <span className={config.magicColor}>MAGIC</span> mówią o
            społeczności:
          </Typography>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_1.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_2.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_3.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_4.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_5.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_6.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_7.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_8.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-0">
            <StaticImage
              src="../../images/magic_reference_sell_9.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_10.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_11.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
            <StaticImage
              src="../../images/magic_reference_sell_12.webp"
              alt="Opinia o społeczności MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default MagicCommunityOpinions
