import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import VimeoFacade from "components/VimeoFacade"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const carouselResponsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
}

const variant1Images = [
  <div key="v1a" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda1a.webp"
      alt="Magda – case study 1"
      placeholder="blurred"
    />
  </div>,
  <div key="v1b" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda1b.webp"
      alt="Magda – case study 1"
      placeholder="blurred"
    />
  </div>,
  <div key="v1c" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda1c.webp"
      alt="Magda – case study 1"
      placeholder="blurred"
    />
  </div>,
  <div key="v1d" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda1d.webp"
      alt="Magda – case study 1"
      placeholder="blurred"
    />
  </div>,
]

const variant2Images = [
  <div key="v2a" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda2a.webp"
      alt="Magda – case study 2"
      placeholder="blurred"
    />
  </div>,
  <div key="v2b" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda2b.webp"
      alt="Magda – case study 2"
      placeholder="blurred"
    />
  </div>,
  <div key="v2c" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda2c.webp"
      alt="Magda – case study 2"
      placeholder="blurred"
    />
  </div>,
  <div key="v2d" className="flex justify-center items-center h-full">
    <StaticImage
      src="../../images/magda2d.webp"
      alt="Magda – case study 2"
      placeholder="blurred"
    />
  </div>,
]

const MagicBanner5 = ({ version }: { version: number }) => {
  return (
    <>
      <Section
        className="text-black relative"
        padding="py-8 md:py-12 px-6"
        maxWidth="2xl"
      >
        {version == 1 && (
          <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center px-6">
            <Typography variant="h2" className="text-ada-black animate-bounce">
              💼
              <br />
              Case study przedsiębiorczyni:
            </Typography>
            <Typography
              variant="h3"
              className="text-ada-black font-medium pt-4"
            >
              Jak <b>Magda</b> uporządkowała chaos reklamowy i zyskała pewność w
              prowadzeniu kampanii?
            </Typography>
            <div className="my-4 relative">
              <Carousel
                responsive={carouselResponsive}
                customLeftArrow={<CustomLeftArrow dark />}
                customRightArrow={<CustomRightArrow dark />}
              >
                {variant1Images}
              </Carousel>
            </div>
            <Typography
              variant="h3"
              className="text-ada-black font-medium pt-4"
            >
              Przeczytaj, co <b>Magda</b> mówi o <b>MAGIC:</b>
            </Typography>
            <StaticImage
              src="../../images/opiniaMagdy.webp"
              alt="Opinia Magdy o MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={75}
              width={800}
              className="max-w-4xl my-4"
            />
            <Button
              type="button"
              text={<span className="!font-extrabold"> Dołączam!</span>}
              sectionId="magic-package"
              textSize="text-xs md:text-adaBase uppercase text-black"
              btnStyle="bg-ada-pink8 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl mt-4"
            />
          </div>
        )}
        {version == 2 && (
          <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center px-6">
            <Typography variant="h2" className="text-ada-black animate-bounce">
              👩‍💻
              <br />
              Case study marketerki:
            </Typography>
            <Typography
              variant="h3"
              className="text-ada-black font-medium pt-4"
            >
              Jak <b>Magda</b> uporządkowała chaos reklamowy i zyskała pewność w
              prowadzeniu kampanii?
            </Typography>
            <div className="my-4 relative">
              <Carousel
                responsive={carouselResponsive}
                customLeftArrow={<CustomLeftArrow dark />}
                customRightArrow={<CustomRightArrow dark />}
              >
                {variant2Images}
              </Carousel>
            </div>
            <Typography
              variant="h3"
              className="text-ada-black font-medium py-4"
            >
              Posłuchaj, co <b>Magda</b> mówi o <b>MAGIC:</b>
            </Typography>
            <div className="w-full max-w-[380px] overflow-hidden rounded-lg mx-auto">
              <VimeoFacade
                videoId="1155023182"
                title="Opinia Magdy o MAGIC"
                aspectRatio="16:9"
                eager
              />
            </div>
            <Button
              type="button"
              text={<span className="!font-extrabold"> Dołączam!</span>}
              sectionId="magic-package"
              textSize="text-xs md:text-adaBase uppercase text-black"
              btnStyle="bg-ada-magicPurple4 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl mt-4"
            />
          </div>
        )}
      </Section>
    </>
  )
}

export default MagicBanner5
