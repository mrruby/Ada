import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner2 from "components/MagicBanner2"
import MagicBanner5 from "components/MagicBanner5"
import MagicBioBanner from "components/MagicBioBanner"
import MagicCaseStudies from "components/MagicCaseStudies"
import MagicComments from "components/MagicComments"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicDateBanner from "components/MagicDateBanner"
import MagicFinalCTA from "components/MagicFinalCTA"
import MagicLogoHeader from "components/MagicLogoHeader"
import MagicSaleBanner from "components/MagicSaleBanner"
import MagicStickyBar from "components/MagicStickyBar"
import MagicVideo from "components/MagicVideo"
import MagicWhy from "components/MagicWhy"
import MasterclassFAQ from "components/MasterclassFAQ"
import SEO from "components/seo"
import { Button } from "helpers/Button"
import React from "react"

const AdsEliksirPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <SEO
        title="Magic: Marketing Ads Girls Inside Collective"
        image="https://adrianna.com.pl/img/ada_purple.webp"
      />
      <MagicStickyBar />
      <div className="pt-14">
        <MagicLogoHeader variant="pink" />
        <MaxWithBgColorContainer bgColor="bg-ada-pink8">
          <MagicVideo version={3} />
        </MaxWithBgColorContainer>
        <div className="bg-ada-pink8 text-center pb-12">
          <p className="text-black font-semibold text-lg md:text-xl pb-6">
            Obejrzałaś szkolenie? Czas wdrożyć plan w działanie!
          </p>
          <Button
            type="button"
            text={
              <span className="!font-extrabold uppercase">
                Zmieniam wiedzę w działanie - sprawdzam MAGIC
              </span>
            }
            sectionId="magic-package"
            textSize="text-sm md:text-lg"
            btnStyle="bg-ada-purple3 text-black
                      font-semibold tracking-wide h-[60px] md:h-[80px]
                      px-6 md:px-12 shadow-xl hover:opacity-90 rounded-full"
          />
        </div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicWhy part={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicDateBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicDateBanner version={4} />
      </MaxWithBgColorContainer>
      <div className="bg-magic">
        <MaxWithBgColorContainer bgColor="bg-transparent">
          <MagicWhy part={12} />
        </MaxWithBgColorContainer>
      </div>
      <div className="bg-ada-pink8">
        <MagicComments version={1} />
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicBioBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicCaseStudies />
      </MaxWithBgColorContainer>
      <div id="magic-package" className="scroll-mt-14"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-magicOrange2">
        <MagicSaleBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicCommunityOpinions />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPurple4">
        <MagicBanner5 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPink4">
        <MagicBanner5 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicBanner2 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassFAQ version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicFinalCTA />
      </MaxWithBgColorContainer>
      </div>
    </Layout>
  )
}

export default AdsEliksirPage
