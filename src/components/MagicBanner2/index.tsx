import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React, { useState } from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import BannerBox2 from "./BannerBox2"

const bannerContent = [
  {
    bgColor: "bg-ada-purple2",
    description: (
      <p>
        <span className="font-bold">
          Wspólnie opracować Twój lejek reklamowy
        </span>{" "}
        na konsultacjach
      </p>
    ),
    styles: "text-ada-white",
  },
  {
    bgColor: "bg-ada-pink7",
    description: (
      <p>
        Dowiedzieć się, co zrobić,
        <span className="font-bold">
          {" "}
          gdy Twoje konto reklamowe zostaje zablokowane
        </span>
      </p>
    ),
    styles: "text-ada-white",
  },
  {
    bgColor: "bg-ada-pink7",
    description: (
      <p>
        <span className="font-bold">Skonsultować teksty</span> i projekt{" "}
        <span className="font-bold">landing page</span>
      </p>
    ),
    styles: "text-ada-white",
  },
  {
    bgColor: "bg-ada-yellow3",
    description: (
      <p className="font-bold">Ustawić pierwszą automatyzację w reklamach</p>
    ),
    styles: "text-ada-white",
  },
]

const bannerContent2 = [
  {
    bgColor: "bg-ada-magicPurple4",
    description: (
      <p>
        <span className="font-bold">
          Wspólnie opracować Twój lejek reklamowy
        </span>{" "}
        na konsultacjach
      </p>
    ),
    styles: "text-black",
  },
  {
    bgColor: "bg-ada-magicOrange2",
    description: (
      <p>
        Dowiedzieć się, co zrobić,
        <span className="font-bold">
          {" "}
          gdy Twoje konto reklamowe zostaje zablokowane
        </span>
      </p>
    ),
    styles: "text-black",
  },
  {
    bgColor: "bg-ada-magicPink4",
    description: (
      <p>
        <span className="font-bold">Skonsultować teksty</span> i projekt{" "}
        <span className="font-bold">landing page</span>
      </p>
    ),
    styles: "text-black",
  },
  {
    bgColor: "bg-ada-magicPurple4",
    description: (
      <p>
        <span className="font-bold">
          Ustawić pierwszą automatyzację w reklamach
        </span>
      </p>
    ),
    styles: "text-black",
  },
]

const MagicBanner2 = ({ version }: { version: number }) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }
  return (
    <>
      <Section
        className="text-black relative overflow-hidden"
        padding="py-8 md:py-12"
        maxWidth="2xl"
      >
        {version == 1 && (
          <div>
            <div
              className="max-w-4xl mx-auto mb-8 md:mb-20 text-center"
              onMouseOver={handleMouseEnter}
            >
              <Typography
                variant="h2"
                className="text-ada-pink7 animate-bounce"
              >
                <span className="text-ada-black">MAGIC to Twój </span>podręczny
                <br /> abonament na marketing
              </Typography>
              <Typography
                variant="h3"
                className="text-ada-black font-medium pt-4"
              >
                Jako członkini możesz na przykład:
              </Typography>
            </div>
            <div className="z-1 md:absolute -left-12 top-40">
              <StaticImage
                loading="eager"
                src="../../images/ada_magic.webp"
                alt="Ada w telefonie"
                placeholder="blurred"
                width={620}
                height={600}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="w-full flex justify-end">
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[800px]">
                  {bannerContent.map((item, i) => (
                    <div
                      key={i}
                      className={`${
                        hasAnimated
                          ? i % 2 === 0
                            ? "lg:animate-slideInFromLeft opacity-100"
                            : "lg:animate-slideInFromRight opacity-100"
                          : " "
                      }`}
                    >
                      <BannerBox2
                        bgColor={item.bgColor}
                        description={item.description}
                        styles={item.styles}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  text={
                    <span className="!font-extrabold text-ada-white text-adaSubtitle">
                      Działam!
                    </span>
                  }
                  sectionId="signup"
                  textSize="text-sm md:text-base"
                  btnStyle="bg-blue text-ada-black 
                      font-semibold tracking-wide h-[48px] md:h-[70px] 
                      px-6 shadow-xl hover:opacity-90 rounded-full max-w-[430px] mx-auto mt-8"
                />
              </div>
            </div>
          </div>
        )}
        {version == 2 && (
          <div className="w-full">
            <div
              className="max-w-4xl mx-auto mb-8 md:mb-20 text-center text-black"
              onMouseOver={handleMouseEnter}
            >
              <Typography variant="h2" className="animate-bounce uppercase">
                <span className="text-ada-white4">MAGIC</span> to Twój podręczny
                abonament na marketing
              </Typography>
              <Typography
                variant="h3"
                className="text-ada-black font-medium pt-4"
              >
                Jako członkini możesz na przykład:
              </Typography>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 md:-mx-32 lg:-mx-48">
              <div className="w-full md:w-auto flex-shrink-0 px-4 md:pl-0 md:pr-8 -mb-12">
                <StaticImage
                  loading="eager"
                  src="../../images/magic_adsy2.webp"
                  alt="Ada w telefonie"
                  placeholder="blurred"
                  width={540}
                  height={722}
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
              <div className="w-full md:w-3/4 flex flex-col justify-center px-4 md:px-0">
                <div className="flex flex-col gap-4 md:gap-6 w-full">
                  {/* First row: 2/3 and 1/3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                    <div
                      className={`md:col-span-2 h-full ${
                        hasAnimated
                          ? "lg:animate-slideInFromLeft opacity-100"
                          : " "
                      }`}
                    >
                      <BannerBox2
                        bgColor={bannerContent2[0].bgColor}
                        description={bannerContent2[0].description}
                        styles={bannerContent2[0].styles}
                      />
                    </div>
                    <div
                      className={`md:col-span-1 h-full ${
                        hasAnimated
                          ? "lg:animate-slideInFromRight opacity-100"
                          : " "
                      }`}
                    >
                      <BannerBox2
                        bgColor={bannerContent2[1].bgColor}
                        description={bannerContent2[1].description}
                        styles={bannerContent2[1].styles}
                      />
                    </div>
                  </div>
                  {/* Second row: 1/3 and 2/3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                    <div
                      className={`md:col-span-1 h-full ${
                        hasAnimated
                          ? "lg:animate-slideInFromLeft opacity-100"
                          : " "
                      }`}
                    >
                      <BannerBox2
                        bgColor={bannerContent2[2].bgColor}
                        description={bannerContent2[2].description}
                        styles={bannerContent2[2].styles}
                      />
                    </div>
                    <div
                      className={`md:col-span-2 h-full ${
                        hasAnimated
                          ? "lg:animate-slideInFromRight opacity-100"
                          : " "
                      }`}
                    >
                      <BannerBox2
                        bgColor={bannerContent2[3].bgColor}
                        description={bannerContent2[3].description}
                        styles={bannerContent2[3].styles}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  type="button"
                  text={
                    <span className="!font-extrabold text-black text-adaSubtitle">
                      WYBIERAM!
                    </span>
                  }
                  sectionId="magic-package"
                  textSize="text-sm md:text-base"
                  btnStyle="bg-ada-white
                      font-semibold tracking-wide h-[48px] md:h-[70px]
                      px-6 shadow-xl hover:opacity-90 rounded-full max-w-[430px] mx-auto mt-8"
                />
              </div>
            </div>
          </div>
        )}
      </Section>
    </>
  )
}

export default MagicBanner2
