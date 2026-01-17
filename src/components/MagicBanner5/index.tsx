import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Carousel from "react-multi-carousel"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const carouselResponsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
}

const variant1Images = [
  <StaticImage
    key="v1a"
    src="../../images/magda1a.webp"
    alt="Magda – case study 1"
    placeholder="blurred"
  />,
  <StaticImage
    key="v1b"
    src="../../images/magda1b.webp"
    alt="Magda – case study 1"
    placeholder="blurred"
  />,
  <StaticImage
    key="v1c"
    src="../../images/magda1c.webp"
    alt="Magda – case study 1"
    placeholder="blurred"
  />,
  <StaticImage
    key="v1d"
    src="../../images/magda1d.webp"
    alt="Magda – case study 1"
    placeholder="blurred"
  />,
]

const variant2Images = [
  <StaticImage
    key="v2a"
    src="../../images/magda2a.webp"
    alt="Magda – case study 2"
    placeholder="blurred"
  />,
  <StaticImage
    key="v2b"
    src="../../images/magda2b.webp"
    alt="Magda – case study 2"
    placeholder="blurred"
  />,
  <StaticImage
    key="v2c"
    src="../../images/magda2c.webp"
    alt="Magda – case study 2"
    placeholder="blurred"
  />,
  <StaticImage
    key="v2d"
    src="../../images/magda2d.webp"
    alt="Magda – case study 2"
    placeholder="blurred"
  />,
]

const MagicBanner5 = ({ version }: { version: number }) => {
  return (
    <>
      <Section
        className="text-black relative overflow-hidden"
        padding="py-8 md:py-12"
        maxWidth="2xl"
      >
        {version == 1 && (
          <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center px-2">
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
            <div className="my-4">
              <Carousel
                responsive={carouselResponsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
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
              loading="eager"
              src="../../images/opiniaMagdy.webp"
              alt="Opinia Magdy o MAGIC"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              quality={100}
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
          <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center px-2">
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
            <div className="my-4">
              <Carousel
                responsive={carouselResponsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
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
            <div className="relative w-full max-w-[380px] overflow-hidden aspect-[9/16] rounded-lg mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://player.vimeo.com/video/1155023182?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
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
