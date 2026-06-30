import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicDateBanner from "components/MagicDateBanner"
import MagicFinalCTA from "components/MagicFinalCTA"
import MagicLogoHeader from "components/MagicLogoHeader"
import MagicSaleBanner from "components/MagicSaleBanner"
import MagicStickyBar from "components/MagicStickyBar"
import MagicVideo from "components/MagicVideo"
import MagicWhy from "components/MagicWhy"
import SEO from "components/seo"
import React from "react"

const MagicSpecialPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MagicStickyBar />
      <div className="pt-12">
        <MagicLogoHeader variant="pink" />
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicSaleBanner version={1} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-pink8">
          <MagicVideo />
        </MaxWithBgColorContainer>
        <div className="bg-ada-white3">
          <MagicBanner1 version={4} />
        </div>
        <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
          <MagicWhy part={9} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
          <MagicDateBanner version={5} layout="magic-special" />
        </MaxWithBgColorContainer>
        <div id="magic-package"></div>
        <div className="bg-magic">
          <MaxWithBgColorContainer bgColor="bg-transparent">
            <MagicWhy part={12} />
          </MaxWithBgColorContainer>
        </div>
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicBioBanner version={3} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-pink8">
          <MagicBanner2 version={2} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
          <MagicCommunityOpinions />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicFinalCTA />
        </MaxWithBgColorContainer>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Magic: Marketing Ads Girls Inside Collective"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicSpecialPage
