import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { responsive } from "values/const"
import Reference from "../../helpers/Reference"

type IReferencesList = {
  image: JSX.Element
}

const referencesList: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy1.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Monika Gajek"
        placeholder="blurred"
        width={387}
        height={387}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Juila Boryczka"
        placeholder="blurred"
        width={387}
        height={387}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy3.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Martyna Sitarz"
        placeholder="blurred"
        width={387}
        height={387}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const ReferencesSmall = (): JSX.Element => {
  return (
    <div className="max-h-[600px] mx-auto max-w-[360px] md:max-w-screen">
      <Carousel
        responsive={responsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        ssr={true}
        autoPlay
        autoPlaySpeed={2000}
      >
        {referencesList.map((reference, index) => (
          <Reference key={index} image={reference.image} />
        ))}
      </Carousel>
    </div>
  )
}

export default ReferencesSmall
