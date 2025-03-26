// circleImages.ts
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const CircleImage = ({ circleKey }: { circleKey: string }) => {
  switch (circleKey) {
    case "purpleCircle":
      return (
        <div className="absolute top-0 left-0 animate-spin-slow">
          <StaticImage
            src="../../images/purpleCircle.webp"
            alt="Fioletowe kółko"
            layout="fixed"
            width={90}
            height={90}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    case "yellowCircle":
      return (
        <div className="absolute top-0 left-0 animate-spin-slow">
          <StaticImage
            src="../../images/yellowCircle.webp"
            alt="Żółte kółko"
            layout="fixed"
            width={90}
            height={90}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    case "pinkCircleFull":
      return (
        <div className="absolute top-0 left-0 animate-spin-slow">
          <StaticImage
            src="../../images/pinkCircleFull.webp"
            alt="Różowe kółko"
            layout="fixed"
            width={90}
            height={90}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    default:
      return null
  }
}
