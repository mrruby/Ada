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
  variant2?: boolean
}

const referencesList: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/opinia1.webp"}
        alt="Opinia o współpracy z Adą Promis - Ziołowa Wyspa"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia2.webp"}
        alt="Opinia o współpracy z Adą Promis - Natalia Plewniok"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia3.webp"}
        alt="Opinia o współpracy z Adą Promis - Aleksandra Adamczyk"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia4.webp"}
        alt="Opinia o współpracy z Adą Promis - Stan Skupienia"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia5.webp"}
        alt="Opinia o współpracy z Adą Promis - Creatownia Studio"
        placeholder="none"
        width={1414}
        height={2000}
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
        src={"../../images/opinia1typ2.webp"}
        alt="Opinia o współpracy z Adą Promis - Ziołowa Wyspa"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia2.webp"}
        alt="Opinia o współpracy z Adą Promis - Natalia Plewniok"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia3.webp"}
        alt="Opinia o współpracy z Adą Promis - Aleksandra Adamczyk"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opinia4.webp"}
        alt="Opinia o współpracy z Adą Promis - Stan Skupienia"
        placeholder="none"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
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

const References = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  variant2 = false,
}: IReferences): JSX.Element => {
  return (
    <div className="pt-[40px]">
      {title1 && (
        <>
          <h3 className="mx-auto max-w-[500px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            Co mówią osoby,
          </h3>
          <h3 className="mx-auto max-w-[780px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            z którymi współpracowałam?
          </h3>
        </>
      )}
      {title2 && (
        <>
          <h3 className="mx-auto max-w-[778px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            Opinie właścicielek biznesów,
          </h3>
          <h3 className="mx-auto max-w-[500px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            które mi zaufały
          </h3>
        </>
      )}
      {title3 && (
        <h3 className="mx-auto max-w-[850px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[68px]">
          Co mówią Ci, którzy przeczytali?
        </h3>
      )}
      {title4 && (
        <>
          <h3 className="mx-auto md:max-w-[941px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-light-pink md:h-[24px] lg:h-[40px] animate-bounce uppercase">
            TAK mówią osoby, z którymi współpracowałam
          </h3>
          <h3 className="mx-auto md:max-w-[680px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-light-pink md:h-[24px] lg:h-[40px] animate-bounce uppercase">
            przy kampaniach reklamowych:
          </h3>
        </>
      )}
      {title5 && (
        <>
          <h3 className="mx-auto md:max-w-[540px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            Moje klientki tak mówią{" "}
          </h3>
          <h3 className="mx-auto md:max-w-[540px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            o współpracy ze mną:{" "}
          </h3>
        </>
      )}
      <div className="max-w-[600px] max-h-[720px] mx-auto mt-[-40px] md:mt-[-100px]">
        {variant2
          ? referencesList2 && (
              <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                ssr={true}
              >
                {referencesList2.map((reference, index) => (
                  <Reference key={index} image={reference.image} />
                ))}
              </Carousel>
            )
          : referencesList && (
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
            )}
      </div>
    </div>
  )
}

export default References
