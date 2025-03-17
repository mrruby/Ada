import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import magicFormWide from "../../values/forms/magic-form-wide.html"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicTitle = ({ version }: { version: number }): JSX.Element => {
  const scrollToWebinarForm = () => {
    const element = document.getElementById("webinar-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPackages = () => {
    const element = document.getElementById("pakiety")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {version == 1 && (
        <Section
          bgColor="bg-ada-newPurple"
          className="text-white overflow-hidden sm:mt-10"
          padding="py-8 md:py-0 md:pt-8 px-4 md:px-8"
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
              <Typography variant="h1" className="mb-4">
                <span className="text-ada-pink7">WEBINAR:</span>{" "}
                <span className="text-ada-yellow3">
                  3 zmiany w reklamach Twojego biznesu, które zadziałają w 2025
                  roku
                </span>
              </Typography>
              <Typography variant="body" className="mb-6 text-white">
                Zmień te 3 rzeczy, aby Twoja marka wystrzeliła z reklamami w
                2025 roku!
              </Typography>

              <Button
                type="button"
                text={<span className="font-bold">Zapisuję się! 🙌</span>}
                sectionId="webinar-form"
                textSize="text-sm md:text-base"
                btnStyle="uppercase bg-ada-pink2 text-ada-black 
                      font-semibold tracking-wide h-[48px] md:h-[60px] 
                      px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
              />
              <div className="my-4">
                <div dangerouslySetInnerHTML={{ __html: magicFormWide }} />
              </div>
            </div>

            {/* Right image (phone mockup) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative max-w-[280px] sm:max-w-[400px]">
                <div className="z-10">
                  <StaticImage
                    loading="eager"
                    src="../../images/ada_purple.webp"
                    alt="Ada w telefonie"
                    placeholder="blurred"
                    width={400}
                    height={600}
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                  />
                </div>

                <div className="absolute bottom-10  left-[-40px] sm:left-[-20px] z-20">
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

                <div className="absolute top-40 right-[-30px] sm:right-0 z-20">
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
      )}
      {version == 2 && (
        <Section
          bgColor="bg-ada-newPurple"
          className="text-white overflow-hidden sm:mt-10"
          padding="py-8 md:py-0 md:pt-8 px-4 md:px-8"
          maxWidth="5xl"
        >
          <div className="flex justify-between items-center mb-8">
            <Link to={"/"}>
              <StaticImage
                src={"../../images/magic.webp"}
                alt="Ada Promis"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                width={140}
                height={60}
                quality={95}
              />
            </Link>
            <button
              onClick={scrollToPackages}
              className="text-sm md:text-base font-semibold hover:underline"
            >
              Zgłaszam się!
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            {/* Left text column */}
            <div className="w-full md:w-1/2 mt-8 animate-bounce text-ada-yellow3">
              <Typography variant="h1" className="mb-4 md:pt-20">
                Marketing Ads Girls
                <br />
                Inside Club
                <span className="text-ada-pink7 uppercase"> (MAGIC)</span>
              </Typography>
              <Typography variant="body" className="mb-6 text-white">
                Społeczność kobiet, które skalują swoje biznesy z pomocą reklam
                pod czujnym okiem profesjonalistek
              </Typography>
              <Button
                type="button"
                text={
                  <span className="font-bold text-ada-pink7 uppercase">
                    Dołączam!
                  </span>
                }
                sectionId="pakiety"
                textSize="text-sm md:text-base"
                btnStyle="uppercase bg-ada-pink2 text-ada-black 
                      font-semibold tracking-wide h-[48px] md:h-[60px] 
                      px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
              />
            </div>

            {/* Right image (phone mockup) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4">
              <div
                className="relative w-full max-w-[360px] overflow-hidden"
                style={{ aspectRatio: "9 / 16" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={
                    "https://player.vimeo.com/video/1050085535?h=b0386215c3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  }
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  )
}

export default MagicTitle
