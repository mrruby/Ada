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
      <p className="font-bold">Ustawić pierwszą automatyzację w reklamach</p>
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
      <Section className="text-black relative">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[800px]">
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
                    <span className="font-bold text-ada-white text-adaSubtitle">
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
          <div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[800px]">
                  {bannerContent2.map((item, i) => (
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
                    <span className="font-bold text-black text-adaSubtitle">
                      WYBIERAM!
                    </span>
                  }
                  sectionId="signup"
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
