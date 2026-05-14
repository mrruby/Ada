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
          className="!-m-2 !h-[200px] !w-[200px] rounded-full"
          imgClassName="!h-full !w-full !object-cover rounded-full"
          objectFit="cover"
        />
      )
    case "justyna":
      return (
        <StaticImage
          src="../../images/justyna_portrait.webp"
          alt=""
          layout="fixed"
          width={184}
          height={184}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full rounded-full"
          imgClassName="!h-full !w-full !object-cover rounded-full"
          objectFit="cover"
        />
      )
    case "dorota":
      return (
        <StaticImage
          src="../../images/dorota_portrait.webp"
          alt=""
          layout="fixed"
          width={184}
          height={184}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full rounded-full"
          imgClassName="!h-full !w-full !object-cover rounded-full"
          objectFit="cover"
        />
      )
    case "marianna":
      return (
        <StaticImage
          src="../../images/marianna_portrait.webp"
          alt=""
          layout="fixed"
          width={184}
          height={184}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full rounded-full"
          imgClassName="!h-full !w-full !object-cover rounded-full"
          objectFit="cover"
        />
      )
    case "nicola":
      return (
        <StaticImage
          src="../../images/nicola_portrait.webp"
          alt=""
          layout="fixed"
          width={184}
          height={184}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full rounded-full"
          imgClassName="!h-full !w-full !object-cover rounded-full"
          objectFit="cover"
        />
      )
    case "dawid":
      return (
        <StaticImage
          src="../../images/dawid_portrait.webp"
          alt=""
          layout="fixed"
          width={184}
          height={184}
          placeholder="blurred"
          quality={90}
          className="!h-full !w-full rounded-full"
          imgClassName="!h-full !w-full !object-cover rounded-full"
          objectFit="cover"
        />
      )
    default:
      return null
  }
}
