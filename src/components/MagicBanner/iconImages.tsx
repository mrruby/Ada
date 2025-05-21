// iconImages.ts
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const IconImage = ({ iconKey }: { iconKey: string }) => {
  switch (iconKey) {
    case "calendarIcon":
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <StaticImage
            src="../../images/calendarIcon.webp"
            alt="Kalendarz"
            layout="fixed"
            width={45}
            height={45}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    case "6-calender":
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <StaticImage
            src="../../images/6-calender.png"
            alt="Kalendarz"
            layout="fixed"
            width={45}
            height={45}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    case "3-calender":
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <StaticImage
            src="../../images/3-calender.png"
            alt="Kalendarz"
            layout="fixed"
            width={45}
            height={45}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    case "1-calender":
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <StaticImage
            src="../../images/1-calender.png"
            alt="Kalendarz"
            layout="fixed"
            width={45}
            height={45}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    case "questions":
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <StaticImage
            src="../../images/questions.webp"
            alt="Ikona pytań"
            layout="fixed"
            width={45}
            height={45}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    case "heart":
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <StaticImage
            src="../../images/heart.webp"
            alt="Ikona serca"
            layout="fixed"
            width={45}
            height={45}
            placeholder="blurred"
            quality={90}
          />
        </div>
      )
    default:
      return null
  }
}
