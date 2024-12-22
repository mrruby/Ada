// circleImages.ts
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const CircleImage = ({ circleKey }: { circleKey: string }) => {
  switch (circleKey) {
    case "purpleCircle":
      return (
        <StaticImage
          src="../../images/purpleCircle.webp"
          alt="Fioletowe kółko"
          layout="fixed"
          width={90}
          height={90}
          placeholder="blurred"
          className="absolute top-0 left-0"
          quality={90}
        />
      )
    case "yellowCircle":
      return (
        <StaticImage
          src="../../images/yellowCircle.webp"
          alt="Żółte kółko"
          layout="fixed"
          width={90}
          height={90}
          placeholder="blurred"
          className="absolute top-0 left-0"
          quality={90}
        />
      )
    case "pinkCircleFull":
      return (
        <StaticImage
          src="../../images/pinkCircleFull.webp"
          alt="Różowe kółko"
          layout="fixed"
          width={90}
          height={90}
          placeholder="blurred"
          className="absolute top-0 left-0"
          quality={90}
        />
      )
    default:
      return null
  }
}
