import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import { StaticImage } from "gatsby-plugin-image"
import React, { JSX } from "react"
import Carousel from "react-multi-carousel"
import { responsive } from "values/const"
import Reference from "../../helpers/Reference"

type IReferencesList = {
  image: JSX.Element
}

type IReferences = {
  title1?: boolean
  title2?: boolean
  title3?: boolean
  title4?: boolean
  title5?: boolean
}

const referencesList: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/opinia1.webp"}
        alt="Opinia o współpracy z Adą Promis - Ziołowa Wyspa"
        placeholder="blurred"
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
        placeholder="blurred"
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
        placeholder="blurred"
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
        placeholder="blurred"
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
        placeholder="blurred"
        width={1414}
        height={2000}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const References = ({
  title1,
  title2,
  title3,
  title4,
  title5,
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
      <div className="max-h-[720px] mx-auto mt-[-40px] md:mt-[-100px]">
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

export default References
