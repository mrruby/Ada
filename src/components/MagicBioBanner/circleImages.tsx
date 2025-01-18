// circleImages.ts
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const CircleImage = ({ circleKey }: { circleKey: string }) => {
  switch (circleKey) {
    case "ada":
      return (
        <StaticImage
          src="../../images/ada_portrait.webp"
          alt=""
          layout="fixed"
          width={200}
          height={200}
          placeholder="blurred"
          quality={90}
        />
      )
    case "justyna":
      return (
        <StaticImage
          src="../../images/justyna_portrait.webp"
          alt=""
          layout="fixed"
          width={200}
          height={200}
          placeholder="blurred"
          quality={90}
        />
      )
    case "dorota":
      return (
        <StaticImage
          src="../../images/dorota_portrait.webp"
          alt=""
          layout="fixed"
          width={200}
          height={200}
          placeholder="blurred"
          quality={90}
        />
      )
    case "marianna":
      return (
        <StaticImage
          src="../../images/marianna_portrait.webp"
          alt=""
          layout="fixed"
          width={200}
          height={200}
          placeholder="blurred"
          quality={90}
        />
      )
    case "nicola":
      return (
        <StaticImage
          src="../../images/nicola_portrait.webp"
          alt=""
          layout="fixed"
          width={200}
          height={200}
          placeholder="blurred"
          quality={90}
        />
      )
    default:
      return null
  }
}
