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

type IReferences = {
  title1?: boolean
  title2?: boolean
  title3?: boolean
  title4?: boolean
  title5?: boolean
  version?: "1" | "2" | "3"
}

const referencesList: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/opinia1typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Martyna Baran"
        placeholder="blurred"
        height={800}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia2typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Ania Stobnicka"
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia3typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Kasia Szust"
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia4typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Agnieszka Sosik-Grzyb"
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia5typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Martyna Sitarz"
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia6typ2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Magda Kostrzewska"
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const referencesList2: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy1.webp"}
        alt="Opinia o programie mentoringowym"
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
        alt="Opinia o programie mentoringowym"
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
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={387}
        height={387}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const referencesList3: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/slider1.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={463}
        height={296}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/slider2.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={464}
        height={85}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/slider3.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={456}
        height={119}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/slider4.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={577}
        height={89}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/slider5.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={577}
        height={89}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/slider6.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={577}
        height={140}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/slider7.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={577}
        height={89}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const referencesList4: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/magic1.webp"}
        alt="Opinia o Magic"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magic2.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magic3.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magic4.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
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

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[160px] bottom-0 left-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="Left Arrow" width={16} height={25} />
    </div>
  )
}

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[160px] bottom-0 right-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="Right Arrow" width={16} height={25} />
    </div>
  )
}

const ReferencesMentoring = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  version = "1",
}: IReferences): JSX.Element => {
  const selectedList =
    version === "2"
      ? referencesList2
      : version === "3"
        ? referencesList3
        : referencesList

  return (
    <div className="pt-[40px]">
      {title1 && (
        <>
          <h3 className="mx-auto md:max-w-[900px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            TAK mówią osoby, które uczyłam
          </h3>
          <h3 className="mx-auto md:max-w-[600px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            prowadzenia reklam:
          </h3>
        </>
      )}
      {title2 && (
        <>
          <h3 className="mx-auto md:max-w-[1000px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            Dzięki niemu docieranie do nowych klientów{" "}
          </h3>
          <h3 className="mx-auto md:max-w-[500px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            może wyglądać tak:
          </h3>
        </>
      )}
      {title3 && (
        <>
          <h3 className="mx-auto md:max-w-[1200px] text-center text-adaStandard md:text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            Tak mówią osoby, którym pomogłam rozkręcić
          </h3>
          <h3 className="mx-auto md:max-w-[800px] text-center text-adaStandard md:text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            biznes dzięki reklamom!
          </h3>
        </>
      )}
      {title4 && (
        <>
          <h2 className="text-adaSubtitle md:text-adaSubtitleSecondary font-bold text-center text-purple-800 pb-4">
            A przecież Twoja nauka reklam może wyglądać tak:
          </h2>
        </>
      )}
      {title5 && (
        <>
          <div className="text-adaSubtitle md:text-adaSubtitleSecondary font-bold text-center text-ada-black pb-4">
            Zobacz, co członkinie <span className="text-ada-pink7">MAGIC</span>{" "}
            mówią o społeczności:
          </div>
        </>
      )}
      <div className="max-h-[600px] mx-auto mt-5 pb-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          ssr={true}
          autoPlay
          autoPlaySpeed={2000}
        >
          {referencesList4.map((reference, index) => (
            <Reference key={index} image={reference.image} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ReferencesMentoring
