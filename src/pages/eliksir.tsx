import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBioBanner from "components/MagicBioBanner"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicSowaCTA from "components/MagicSowaCTA"
import MagicWebinar2 from "components/MagicWebinar2"
import MagicWebinar3 from "components/MagicWebinar3"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import formSowaHTML from "../values/forms/form-sowa.html"

// Reusable form component
const SowaFormCard = ({ className = "" }: { className?: string }) => (
  <div className={`bg-white rounded-lg ${className}`}>
    <div dangerouslySetInnerHTML={{ __html: formSowaHTML }} />
  </div>
)

const SowaPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <div className="font-playfair bg-ada-sowaBurgundy">
        {/* Section 1 - Hero (Burgundy) */}

        {/* Anchor target for scroll links */}
        <div id="sowa-form" className="absolute" />

        {/* Mobile Hero */}
        <div className="sowa-hero-mobile bg-ada-sowaBurgundy">
          <div className="flex flex-col items-center py-8 px-4">
            {/* Main heading */}
            <h1 className="font-extrabold text-[28px] sm:text-[32px] leading-[120%] text-center uppercase max-w-sm mx-auto mb-6">
              <span className="text-ada-sowaGold">ADS ELIKSIR:</span>{" "}
              <span className="text-white">
                grafiki, teksty i strategia kampanii sprzedażowych Meta Ads w
                2026
              </span>
            </h1>

            {/* Sowa */}
            <StaticImage
              src="../images/sowa.webp"
              alt="Sowa"
              placeholder="blurred"
              className="w-40 md:w-56 mb-6"
            />

            {/* Date text */}
            <p className="font-normal text-[20px] md:text-[32px] leading-[152%] text-center mb-6">
              <span className="text-ada-sowaGold">Odbierz nagranie warsztatu za 0 zł</span>
            </p>

            {/* Form */}
            <div className="w-full max-w-md mb-6">
              <SowaFormCard className="p-4" />
            </div>
          </div>
        </div>

        {/* XL Hero */}
        <div className="sowa-hero-xl bg-ada-sowaBurgundy">
          <div className="container mx-auto px-4 pt-8 relative">
            {/* Top row: Date text left (50%), Form right (50%) */}
            <div className="flex flex-row items-start relative z-20">
              <div className="w-1/2">
                <p className="font-normal text-[54px] leading-[152%]">
                  <span className="text-ada-sowaGold">Odbierz nagranie warsztatu za 0 zł</span>
                </p>
              </div>
              <div className="w-1/2 flex justify-end relative">
                <div className="!absolute -left-24 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <StaticImage
                    src="../images/wypełnij-sowa.webp"
                    alt="Wypelnij"
                    placeholder="blurred"
                    className="w-[240px]"
                  />
                  <StaticImage
                    src="../images/arrow-sowa.webp"
                    alt="Arrow"
                    placeholder="blurred"
                    className="w-[160px] mt-2"
                  />
                </div>
                <SowaFormCard className="p-6" />
              </div>
            </div>

            {/* Below: Koperta with text + Sowa */}
            <div className="flex justify-center -mt-[450px]">
              {/* Koperta with text and Sowa */}
              <div className="relative w-[85%]">
                {/* Sowa - positioned top-left of koperta */}
                <StaticImage
                  src="../images/sowa.webp"
                  alt="Sowa"
                  placeholder="blurred"
                  className="!absolute left-0 top-[10%] -translate-x-1/4 w-[38rem] z-10"
                />
                <StaticImage
                  src="../images/m-sign.webp"
                  alt=""
                  placeholder="blurred"
                  className="!absolute left-[25%] bottom-20 -translate-y-1/2 w-16 z-20"
                />
                <StaticImage
                  src="../images/m-sign.webp"
                  alt=""
                  placeholder="blurred"
                  className="!absolute right-[20%] bottom-20 -translate-y-1/2 w-16 z-20"
                />
                <StaticImage
                  src="../images/koperta.webp"
                  alt="Koperta"
                  placeholder="blurred"
                  className="w-full block rounded-b-3xl overflow-hidden"
                  imgClassName="rounded-b-3xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 top-[320px]">
                  <h1 className="font-extrabold text-[44px] leading-[113%] text-center uppercase max-w-lg mx-auto">
                    <span className="text-ada-sowaGold">ADS ELIKSIR:</span>{" "}
                    <span className="text-black">
                      grafiki, teksty i strategia kampanii sprzedażowych Meta
                      Ads w 2026
                    </span>
                  </h1>
                  <a
                    href="#sowa-form"
                    className="inline-flex items-center justify-center mt-6 bg-black hover:bg-gray-800 px-12 py-4 rounded-full"
                  >
                    <span className="text-white font-montserrat font-bold text-[20px] md:text-[24px]">
                      Dołączam
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Podczas warsztatów */}
        <MagicWebinar2 variant="sowa" />

        {/* Section 3 - MagicWebinar3 */}
        <div className="relative">
          <StaticImage
            src="../images/magic-stamp.webp"
            alt="Magic Stamp"
            placeholder="blurred"
            className="!absolute left-1/2 -translate-x-1/2 -top-16 w-32 z-20"
          />
          <MagicWebinar3 variant="sowa" sectionId="sowa-form" />
        </div>

        {/* Section 4 - Bio */}
        <MagicBioBanner version={4} />

        <MagicCommunityOpinions variant="sowa" />

        {/* Section 5 - Gold CTA */}
        <div className="relative">
          <StaticImage
            src="../images/magic-stamp.webp"
            alt="Magic Stamp"
            placeholder="blurred"
            className="!absolute left-1/2 -translate-x-1/2 -top-16 w-32 z-20"
          />
          <MagicSowaCTA variant="gold" />
        </div>

        {/* Section 6 - CTA (Navy) */}
        <MaxWithBgColorContainer bgColor="bg-ada-sowaNavy">
          <div className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center">
              <StaticImage
                src="../images/wypełnij-sowa.webp"
                alt="Wypelnij"
                placeholder="blurred"
                className="w-[240px]"
              />
              <StaticImage
                src="../images/arrow-sowa.webp"
                alt="Arrow"
                placeholder="blurred"
                className="w-[160px] mt-2"
              />
            </div>
            <div>
              <SowaFormCard className="p-8" />
            </div>
          </div>
        </MaxWithBgColorContainer>
      </div>
    </Layout>
  )
}

export const Head = () => <SEO title="Ads Eliksir" />

export default SowaPage
