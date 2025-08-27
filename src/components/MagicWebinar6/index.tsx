import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import Reference from "helpers/Reference"
import React from "react"
import Carousel from "react-multi-carousel"
import { responsive } from "values/const"

const MagicWebinar6 = ({ version = 1 }: { version?: number }) => {
  const isVersion2 = version === 2

  // StaticImage requires literal src values, not variables
  const referencesList4 = isVersion2
    ? [
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_1.webp"
              alt="Opinia o Magic"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_2.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_3.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_4.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_5.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_6.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_7.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_8.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_9.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_10.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
        {
          image: (
            <StaticImage
              src="../../images/magic_reference_11.webp"
              alt="Opinia o programie mentoringowym"
              placeholder="blurred"
              width={680}
              formats={["auto", "webp", "avif"]}
              quality={100}
              imgStyle={{ objectFit: "contain" }}
            />
          ),
        },
      ]
    : [
        {
          image: (
            <StaticImage
              src="../../images/magic_webinar1.webp"
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
              src="../../images/magic_webinar2.webp"
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
              src="../../images/magic_webinar3.webp"
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

  const renderTitle = () =>
    isVersion2 ? (
      <span className="text-pink-100">
        Zobacz, co mówią o współpracy ze mną:
      </span>
    ) : (
      <>
        <span className="text-pink-100">Oto co mówią </span>
        <span className="text-ada-magicOrange">przedsiębiorczynie</span>
        <span className="text-pink-100">
          , które już z nami współpracowały:
        </span>
      </>
    )

  const bgColor = isVersion2 ? "bg-ada-newPurple" : "bg-ada-magicPurple"

  return (
    <div className={`${bgColor} py-16 px-4 sm:px-6 lg:px-8`}>
      <Typography variant="h2" className="font-bold max-w-xl mx-auto pb-8">
        {renderTitle()}
      </Typography>
      <div className="h-[800px] mx-auto mt-5 pb-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          ssr={true}
          autoPlay={isVersion2}
          autoPlaySpeed={2000}
          className="h-full"
        >
          {referencesList4.map((reference, index) => (
            <Reference key={index} image={reference.image} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default MagicWebinar6
