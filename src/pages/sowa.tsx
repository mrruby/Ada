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
        {/* Top bar - always visible */}
        <div className="bg-ada-sowaBurgundy relative">
          <div className="py-2 md:py-3 w-full mt-6 md:mt-10 bg-ada-sowaGold2">
            <p className="text-black font-bold text-[20px] md:text-[36px] xl:text-[48px] leading-[100%] text-center px-4">
              Webinar za 0 zł:{" "}
              <span className="text-ada-sowaBurgundy">10 września o 18:00</span>
            </p>
          </div>
        </div>

        {/* Mobile & LG Hero - uses CSS class for visibility */}
        <div className="sowa-hero-mobile bg-ada-sowaBurgundy">
          <div className="flex flex-col items-center text-center py-8 px-4">
            <StaticImage
              src="../images/sowa.webp"
              alt="Sowa"
              placeholder="blurred"
              className="w-40 md:w-56 lg:w-72 mb-6"
            />
            <div className="flex items-center gap-3 md:gap-4 mb-2">
              <StaticImage
                src="../images/m-sign.webp"
                alt=""
                placeholder="blurred"
                className="w-6 md:w-10"
              />
              <h1 className="font-extrabold text-[20px] md:text-[32px] leading-[113%] text-center uppercase text-white">
                Ogarniam reklamy w małej firmie
              </h1>
              <StaticImage
                src="../images/m-sign.webp"
                alt=""
                placeholder="blurred"
                className="w-6 md:w-10"
              />
            </div>
            <h1 className="font-extrabold text-[24px] md:text-[40px] leading-[113%] text-center uppercase text-ada-sowaGold mb-4">
              jesienny re-start
            </h1>
            <p className="font-montserrat font-normal text-[14px] md:text-[18px] leading-[140%] text-center text-white max-w-sm">
              Najlepszy czas na działanie jest teraz: pod okiem ekspertki
              przygotujesz swój biznes do kampanii reklamowej Meta Ads.
            </p>
            <div id="sowa-form" className="w-full max-w-md mt-8">
              <SowaFormCard className="p-4" />
            </div>
          </div>
        </div>

        {/* XL Hero - Koperta design - uses CSS class for visibility */}
        <div className="sowa-hero-xl bg-ada-sowaBurgundy">
          {/* Viewport-width wrapper for positioning context */}
          <div className="relative w-full">
            {/* Owl positioned relative to full viewport */}
            <StaticImage
              src="../images/sowa.webp"
              alt="Sowa"
              placeholder="blurred"
              className="!absolute left-0 top-0 -translate-x-1/3 w-[33rem] z-10 -mt-[120px]"
            />

            {/* Content container - centered */}
            <div className="container mx-auto">
              <div className="pt-4 flex flex-row items-start justify-between px-4">
                <div className="w-[87.5%] relative -mt-20">
                  <StaticImage
                    src="../images/m-sign.webp"
                    alt=""
                    placeholder="blurred"
                    className="!absolute left-[15%] bottom-4 -translate-y-1/2 w-16 z-20"
                  />
                  <StaticImage
                    src="../images/m-sign.webp"
                    alt=""
                    placeholder="blurred"
                    className="!absolute right-[15%] bottom-4 -translate-y-1/2 w-16 z-20"
                  />
                  <StaticImage
                    src="../images/koperta.webp"
                    alt="Koperta"
                    placeholder="blurred"
                    className="w-full block"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 mx-auto top-64 left-8 pt-10">
                    <h1 className="font-extrabold text-[44px] leading-[113%] text-center uppercase text-black max-w-md mx-auto">
                      Ogarniam reklamy w małej firmie
                    </h1>
                    <h1 className="font-extrabold text-[44px] leading-[113%] text-center uppercase text-ada-sowaGold">
                      jesienny re-start
                    </h1>
                    <p className="font-montserrat font-normal text-[24px] leading-[100%] text-center text-black mt-2 max-w-xs">
                      Najlepszy czas na działanie jest teraz: pod okiem
                      ekspertki przygotujesz swój biznes do kampanii reklamowej
                      Meta Ads.
                    </p>
                  </div>
                </div>
                <div id="sowa-form-xl" className="mt-8">
                  <SowaFormCard className="pt-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - MagicWebinar2 */}
        <div className="relative -mt-8 bg-white pb-8 pt-1">
          <StaticImage
            src="../images/sowa-section-2.webp"
            alt=""
            placeholder="blurred"
            className="!absolute inset-0 w-full h-full"
            style={{ position: "absolute" }}
            imgStyle={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* White overlay for softer image */}
          <div className="absolute inset-0 bg-white/30 z-[5]" />
          <div className="relative z-10">
            <MagicWebinar2 variant="sowa" />
          </div>
        </div>

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

        {/* Section 6 - Red CTA */}
        <MagicSowaCTA variant="red" />

        {/* Section 7 - CTA (Burgundy) */}
        <MaxWithBgColorContainer bgColor="bg-ada-sowaBurgundy">
          <div className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[48px] lg:text-[72px] font-anton font-normal uppercase leading-none text-white text-center">
                WYPEŁNIJ
                <br />
                FORMULARZ!
              </h2>
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

export const Head = () => <SEO title="Sowa" />

export default SowaPage
