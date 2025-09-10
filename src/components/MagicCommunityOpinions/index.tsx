import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicCommunityOpinions = () => {
  return (
    <Section bgColor="bg-transparent" className="pt-24 md:pt-32">
      <div className="w-full">
        <Typography variant="h1" className="mb-12 text-center text-ada-black">
          Zobacz, co członkinie <span className="text-ada-pink7">MAGIC</span> mówią o społeczności:
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
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
          
          <div className="flex flex-col gap-6">
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
          
          <div className="flex flex-col gap-6">
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