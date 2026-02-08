// circleImages.ts
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const CircleImage = ({ circleKey }: { circleKey: string }) => {
  switch (circleKey) {
    case "ada":
      return (
        <StaticImage
          src="../../images/m1.webp"
          alt=""
          layout="fixed"
          width={170}
          height={170}
          placeholder="blurred"
          quality={90}
        />
      )
    case "justyna":
      return (
        <StaticImage
          src="../../images/m2.webp"
          alt=""
          layout="fixed"
          width={170}
          height={170}
          placeholder="blurred"
          quality={90}
        />
      )
    case "dorota":
      return (
        <StaticImage
          src="../../images/m3.webp"
          alt=""
          layout="fixed"
          width={170}
          height={170}
          placeholder="blurred"
          quality={90}
        />
      )
    case "nicola":
      return (
        <StaticImage
          src="../../images/m4.webp"
          alt=""
          layout="fixed"
          width={170}
          height={170}
          placeholder="blurred"
          quality={90}
        />
      )
    case "anna":
      return (
        <StaticImage
          src="../../images/m6.webp"
          alt=""
          layout="fixed"
          width={170}
          height={170}
          placeholder="blurred"
          quality={90}
        />
      )
    case "papajka":
      return (
        <StaticImage
          src="../../images/m5.webp"
          alt=""
          layout="fixed"
          width={170}
          height={170}
          placeholder="blurred"
          quality={90}
        />
      )
    default:
      return null
  }
}
