import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type StaticImageComponentProps = {
  name:
    | "ada_puzzle.webp"
    | "ada_laptop.webp"
    | "ada_puzzle_good.webp"
    | "ada_table.webp"
    | "ada_couch.webp"
  alt: string
  width: number
  top: string
  left?: string
  right?: string
}

const StaticImageComponent: React.FC<StaticImageComponentProps> = ({
  name,
  alt,
  width,
  top,
  left,
  right,
}) => {
  const getImage = (name: string) => {
    switch (name) {
      case "ada_puzzle.webp":
        return (
          <StaticImage
            src="../../images/ada_puzzle.webp"
            alt={alt}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            quality={100}
            style={{ width: `${width}px` }}
          />
        )
      case "ada_laptop.webp":
        return (
          <StaticImage
            src="../../images/ada_laptop.webp"
            alt={alt}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            quality={100}
            style={{ width: `${width}px` }}
          />
        )
      case "ada_puzzle_good.webp":
        return (
          <StaticImage
            src="../../images/ada_puzzle_good.webp"
            alt={alt}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            quality={100}
            style={{ width: `${width}px` }}
          />
        )
      case "ada_table.webp":
        return (
          <StaticImage
            src="../../images/ada_table.webp"
            alt={alt}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            quality={100}
            style={{ width: `${width}px` }}
          />
        )
      case "ada_couch.webp":
        return (
          <StaticImage
            src="../../images/ada_couch.webp"
            alt={alt}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            quality={100}
            style={{ width: `${width}px` }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`absolute ${top} ${left || right} hidden lg:block z-50`}>
      {getImage(name)}
    </div>
  )
}

export default StaticImageComponent
