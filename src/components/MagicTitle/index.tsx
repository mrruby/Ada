import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicTitle = (): JSX.Element => {
  const scrollToWebinarForm = () => {
    const element = document.getElementById("webinar-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section
      bgColor="bg-ada-newPurple"
      className="text-white overflow-hidden sm:mt-10"
      padding="py-8 md:py-12 px-4 md:px-8"
      maxWidth="5xl"
    >
      <div className="flex justify-between items-center mb-8">
        <Link to={"/"}>
          <StaticImage
            src={"../../images/logo.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            width={35}
            height={35}
            quality={95}
          />
        </Link>
        <button
          onClick={scrollToWebinarForm}
          className="text-sm md:text-base font-semibold hover:underline"
        >
          Zgłaszam się!
        </button>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left text column */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Typography variant="h1" className="mb-4 text-[#FFD600]">
            Webinar: 3 zmiany w reklamach Twojego biznesu, które zadziałają w
            2025 roku
          </Typography>
          <Typography variant="body" className="mb-6 text-white">
            2024 rok pokazał nam jedno – to, co działało jeszcze rok temu, dziś
            przynosi coraz słabsze rezultaty. Właścicielki marek osobistych
            widzą to na własnej skórze – spadające zasięgi, rosnące koszty
            reklam i coraz trudniejsza walka o uwagę odbiorców. Niech zgadnę: Ty
            też to czujesz?
          </Typography>

          <Button
            type="button"
            text={<span className="font-bold">Tak! 🙌</span>}
            sectionId="webinar-form"
            textSize="text-sm md:text-base"
            btnStyle="uppercase bg-ada-pink2 text-ada-black 
                        font-semibold tracking-wide h-[48px] md:h-[60px] 
                        px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
          />
        </div>

        {/* Right image (phone mockup) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative max-w-[280px] sm:max-w-[400px]">
            <div className="z-10">
              <StaticImage
                loading="eager"
                src="../../images/phoneAda.webp"
                alt="Ada w telefonie"
                placeholder="blurred"
                width={400}
                height={600}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>

            <div className="absolute top-5 left-[-40px] sm:left-[-20px] z-20">
              <StaticImage
                loading="eager"
                src="../../images/pinkCircle.webp"
                alt="Różowe kółko"
                placeholder="blurred"
                width={80}
                height={80}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>

            <div className="absolute bottom-10 right-[-30px] sm:right-0 z-20">
              <StaticImage
                loading="eager"
                src="../../images/yellowCircle.webp"
                alt="Żółte kółko"
                placeholder="blurred"
                width={80}
                height={80}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default MagicTitle
