import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"
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

const MagicBanner2 = ({}: {}): JSX.Element => {
  return (
    <>
      <Section className="text-black relative">
        <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center">
          <Typography variant="h2" className="text-ada-pink7">
            <span className="text-ada-black">MAGIC to Twój </span>podręczny
            <br /> abonament na marketing
          </Typography>
          <Typography variant="h3" className="text-ada-black font-medium pt-4">
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
                <BannerBox2
                  key={i}
                  bgColor={item.bgColor}
                  description={item.description}
                  styles={item.styles}
                />
              ))}
            </div>
            <Button
              type="button"
              text={
                <span className="font-bold text-ada-white text-adaSubtitle">
                  Działam!
                </span>
              }
              sectionId="pakiety"
              textSize="text-sm md:text-base"
              btnStyle="bg-blue text-ada-black 
                      font-semibold tracking-wide h-[48px] md:h-[70px] 
                      px-6 shadow-xl hover:opacity-90 rounded-full max-w-[430px] mx-auto mt-8"
            />
          </div>
        </div>
      </Section>
    </>
  )
}

export default MagicBanner2
