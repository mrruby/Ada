import CollapsibleFAQ from "components/CollapsibleFAQ"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner3 from "components/MagicBanner3"
import MagicBioBanner2 from "components/MagicBioBanner2"
import MagicCollectiveBanner from "components/MagicCollectiveBanner"
import MagicTitle from "components/MagicTitle"
import ReferencesMentoring from "components/ReferencesMentoring"
import SEO from "components/seo"
import React from "react"

const MagicCollectivePage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-white2 reltive">
        <div className="z-10 relative">
          <MagicTitle version={3} />
        </div>
        <div className="bg-magic-pink2"></div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple3 z-10 relative bg-magic-banner1a">
        <MagicCollectiveBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-green">
        <MagicCollectiveBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple3">
        <MagicCollectiveBanner version={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicBioBanner2 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
        <MagicBanner3 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={20} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <div className="max-w-6xl mx-auto">
          <div className="bg-ada-white2 py-8 px-4 md:px-8">
            <MagicCollectiveBanner version={5} />
            <MagicCollectiveBanner version={6} />
          </div>
        </div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={21} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPink2">
        <MagicCollectiveBanner version={22} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={23} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <ReferencesMentoring title9 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPink2 bg-magicWave">
        <MagicCollectiveBanner version={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-newPurple">
        <CollapsibleFAQ />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Magic: Marketing Ads Girls Inside Collective"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicCollectivePage
