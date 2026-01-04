import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBioBanner from "components/MagicBioBanner"
import MagicWebinar2 from "components/MagicWebinar2"
import MagicWebinar3 from "components/MagicWebinar3"
import SEO from "components/seo"
import React from "react"
import kopertaImage from "../images/koperta.webp"
import mSignImage from "../images/m-sign.webp"
import magicStampImage from "../images/magic-stamp.webp"
import sowaSection2Bg from "../images/sowa-section-2.webp"
import sowaImage from "../images/sowa.webp"
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
        {/* Top bar - full width */}
        <div className="bg-ada-sowaBurgundy relative">
          {/* Sowa on the left, partially off-screen */}
          <img
            src={sowaImage}
            alt="Sowa"
            className="absolute left-0 top-0 -translate-x-1/3 w-[27rem] lg:w-[33rem] z-10"
          />
          <div className="py-3 w-screen mt-10 bg-ada-sowaGold2">
            <p className="text-black font-bold text-[48px] leading-[100%] text-center">
              Webinar za 0 zł:{" "}
              <span className="text-ada-sowaBurgundy">10 września o 18:00</span>
            </p>
          </div>
        </div>
        <MaxWithBgColorContainer bgColor="bg-ada-sowaBurgundy">
          <div className="relative">
            <div className="pt-4 flex flex-col lg:flex-row items-center lg:items-start justify-between px-4">
              <div className="w-full lg:w-[87.5%] relative -mt-40">
                <img
                  src={mSignImage}
                  alt=""
                  className="absolute left-40 bottom-0 -translate-y-1/2 w-16 z-20"
                />
                <img
                  src={mSignImage}
                  alt=""
                  className="absolute right-40 bottom-0 -translate-y-1/2 w-16 z-20"
                />
                <img src={kopertaImage} alt="Koperta" className="w-full block" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 mx-auto top-64 left-8 pt-10">
                  <h1 className="font-extrabold text-[44px] leading-[113%] text-center uppercase text-black max-w-md mx-auto">
                    Ogarniam reklamy w małej firmie
                  </h1>
                  <h1 className="font-extrabold text-[44px] leading-[113%] text-center uppercase text-ada-sowaGold">
                    jesienny re-start
                  </h1>
                  <p className="font-montserrat font-normal text-[24px] leading-[100%] text-center text-black mt-2 max-w-xs">
                    Najlepszy czas na działanie jest teraz: pod okiem ekspertki
                    przygotujesz swój biznes do kampanii reklamowej Meta Ads.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-auto mt-8 lg:mt-0">
                <SowaFormCard className="pt-8" />
              </div>
            </div>
          </div>
        </MaxWithBgColorContainer>

        {/* Section 2 - MagicWebinar2 */}
        <div
          className="bg-white -mt-8"
          style={{
            backgroundImage: `url(${sowaSection2Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <MagicWebinar2 variant="sowa" />
        </div>

        {/* Section 3 - MagicWebinar3 */}
        <div className="relative">
          <img
            src={magicStampImage}
            alt="Magic Stamp"
            className="absolute left-1/2 -translate-x-1/2 -top-16 w-32 z-20"
          />
          <MagicWebinar3 variant="sowa" />
        </div>

        {/* Section 4 - Bio */}
        <MagicBioBanner version={4} />

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
