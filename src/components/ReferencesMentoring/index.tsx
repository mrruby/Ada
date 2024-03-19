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
        src={"../../images/opinia1typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Monika Gajek"
        placeholder="none"
        width={412}
        height={583}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia2typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Juila Boryczka"
        placeholder="none"
        width={412}
        height={600}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia3typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Martyna Sitarz"
        placeholder="none"
        width={412}
        height={583}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia4typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Izabela Ścisłowska"
        placeholder="none"
        width={412}
        height={583}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia5typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Anna Ziętara"
        placeholder="none"
        width={412}
        height={583}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 2,
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
      className={`absolute max-h-[400px] top-0 md:top-[160px] bottom-0 left-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="Left Arrow" width={16} height={25} />
    </div>
  )
}

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[160px] bottom-0 right-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="Right Arrow" width={16} height={25} />
    </div>
  )
}

const ReferencesMentoring = (): JSX.Element => {
  return (
    <div className="pt-[40px]">
      <h3 className="mx-auto md:max-w-[1140px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
        TAK mówią osoby, z którymi współpracowałamą{" "}
      </h3>
      <h3 className="mx-auto md:max-w-[790px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
        przy kampaniach reklamowych
      </h3>

      <div className="max-h-[600px] mx-auto mt-5">
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          ssr={true}
        >
          {referencesList.map((reference, index) => (
            <Reference key={index} image={reference.image} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ReferencesMentoring
