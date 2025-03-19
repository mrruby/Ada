import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import Reference from "helpers/Reference"
import React from "react"
import Carousel from "react-multi-carousel"
import { responsive } from "values/const"

const MagicWebinar7 = (): JSX.Element => {
  const referencesList4 = [
    {
      image: (
        <StaticImage
          src={"../../images/magic_webinar1.webp"}
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
          src={"../../images/magic_webinar2.webp"}
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
          src={"../../images/magic_webinar3.webp"}
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
  return (
    <div className="bg-ada-magicPurple min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <Typography variant="h2" className="font-bold max-w-xl mx-auto pb-8">
        <span className="text-pink-100">Oto co mówią </span>
        <span className="text-ada-magicOrange">przedsiębiorczynie</span>
        <span className="text-pink-100">
          , które już z nami współpracowały:
        </span>
      </Typography>
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

export default MagicWebinar7
