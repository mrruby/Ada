import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Reference from "../../helpers/Reference"

const customResponsive = {
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
        width={400}
        height={400}
        formats={["auto", "webp", "avif"]}
        quality={90}
        className="mx-auto"
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Juila Boryczka"
        placeholder="blurred"
        width={400}
        height={400}
        formats={["auto", "webp", "avif"]}
        quality={90}
        className="mx-auto"
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy3.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Martyna Sitarz"
        placeholder="blurred"
        width={400}
        height={400}
        formats={["auto", "webp", "avif"]}
        quality={90}
        className="mx-auto"
      />
    ),
  },
]

const ReferencesSmall = (): JSX.Element => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Carousel
        responsive={customResponsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        ssr={true}
        autoPlay
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {referencesList.map((reference, index) => (
          <Reference key={index} image={reference.image} />
        ))}
      </Carousel>
    </div>
  )
}

export default ReferencesSmall
