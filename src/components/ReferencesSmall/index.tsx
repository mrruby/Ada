import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Reference from "../../helpers/Reference"
import ArrowLeft from "../../images/arrow-left.svg"
import ArrowRight from "../../images/arrow-right.svg"
import { StaticImage } from "gatsby-plugin-image"

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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[60px] bottom-0 left-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="Left Arrow" width={16} height={25} />
    </div>
  )
}

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[60px] bottom-0 right-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="Right Arrow" width={16} height={25} />
    </div>
  )
}

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
