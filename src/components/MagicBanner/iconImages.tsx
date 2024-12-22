// iconImages.ts
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const IconImage = ({ iconKey }: { iconKey: string }) => {
  switch (iconKey) {
    case "calendarIcon":
      return (
        <StaticImage
          src="../../images/calendarIcon.webp"
          alt="Kalendarz"
          layout="fixed"
          width={45}
          height={45}
          placeholder="blurred"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          quality={90}
        />
      )
    case "questions":
      return (
        <StaticImage
          src="../../images/questions.webp"
          alt="Ikona pytań"
          layout="fixed"
          width={45}
          height={45}
          placeholder="blurred"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          quality={90}
        />
      )
    case "heart":
      return (
        <StaticImage
          src="../../images/heart.webp"
          alt="Ikona serca"
          layout="fixed"
          width={45}
          height={45}
          placeholder="blurred"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          quality={90}
        />
      )
    default:
      return null
  }
}
