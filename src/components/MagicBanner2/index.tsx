import React from "react"
import BannerBox from "./BannerBox"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

const bannerContent = [
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-purple2",
    description: <p><span className="font-bold">Wspólnie opracować Twój lejek reklamowy</span> na konsultacjach</p>,
    styles: "text-ada-white"
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-pink7",
    description: <p>Dowiedzieć się, co zrobić,<span className="font-bold"> gdy Twoje konto reklamowe zostaje zablokowane</span></p>,
    styles: "text-ada-white"
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-pink7",
    description: <p><span className="font-bold">Skonsultować teksty</span> i projekt <span className="font-bold">landing page</span></p>,
    styles: "text-ada-white"
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-yellow3",
    description: <p className="font-bold">Ustawić pierwszą automatyzację w reklamach</p>,
    styles: "text-ada-white"
  },
]



const MagicBanner2 = ({ }: {}): JSX.Element => {
  return (
    <>
      <Section className="text-black relative">
        <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center">
          <Typography variant="h2" className="text-ada-pink7"><span className="text-ada-black">MAGIC to Twój </span>podręczny<br /> abonament na marketing</Typography>
          <Typography variant="h3" className="text-ada-black font-medium pt-4">Jako członkini możesz na przykład:</Typography>
        </div>
        <div className="z-1 md:absolute left-0 top-40">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[800px]">
            {bannerContent.map((item, i) => (
              <BannerBox
                key={i}
                circleKey={item.circleKey}
                iconKey={item.iconKey}
                bgColor={item.bgColor}
                description={item.description}
                styles={item.styles}
              />
            ))}
          </div>
          {/* <div className="">
            <Button
              type="button"
              text="Działam!"
              sectionId="webinar-form"
              textSize="text-sm md:text-base"
              btnStyle="bg-ada-blue text-ada-white
                                font-semibold tracking-wide h-[48px] md:h-[60px] 
                                px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
            />
          </div> */}
        </div>
      </Section>
    </>
  )
}

export default MagicBanner2
