import { StaticImage } from "gatsby-plugin-image"
import { InfoBox } from "helpers/InfoBox"
import React from "react"

const InfoBanner = () => {
  const infoData = [
    {
      btnText: "Darmowe materiały",
      url: "/materials",
      image: (
        <StaticImage
          src={"../../images/info_materials.webp"}
          alt="Ada Promis - materials"
          placeholder="blurred"
          width={360}
          height={200}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      ),
    },
    {
      btnText: "Poznaj mnie",
      url: "/about",
      image: (
        <StaticImage
          src={"../../images/info_about.webp"}
          alt="Ada Promis - about"
          placeholder="blurred"
          width={360}
          height={200}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      ),
    },
    {
      btnText: "Sklep",
      url: "https://sklep.adrianna.com.pl/",
      image: (
        <StaticImage
          src={"../../images/info_shop.webp"}
          alt="Ada Promis - shop"
          placeholder="blurred"
          width={360}
          height={200}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      ),
    },
  ]

  return (
    <div className=" text-ada-blue flex gap-[0px] lg:gap-[80px] flex-col md:flex-row items-center justify-center pb-10">
      {infoData.map((info, index) => (
        <InfoBox
          key={index}
          btnText={info.btnText}
          url={info.url}
          image={info.image}
        />
      ))}
    </div>
  )
}

export default InfoBanner
