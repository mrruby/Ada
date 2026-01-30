import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MagicComments from "components/MagicComments"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicDateBanner from "components/MagicDateBanner"
import MagicFinalCTA from "components/MagicFinalCTA"
import MagicLogoHeader from "components/MagicLogoHeader"
import MagicSaleBanner from "components/MagicSaleBanner"
import MagicVideo from "components/MagicVideo"
import MagicWhy from "components/MagicWhy"
import MasterclassFAQ from "components/MasterclassFAQ"
import SEO from "components/seo"
import React from "react"

const MagicSpecialPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <SEO
        title="Magic: Marketing Ads Girls Inside Collective"
        image="https://adrianna.com.pl/img/ada_purple.webp"
      />
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
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicWhy part={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicDateBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicDateBanner version={4} />
      </MaxWithBgColorContainer>
      <div id="magic-package"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-magicOrange2">
        <MagicSaleBanner
          version={2}
          url="https://slowmarketing.zanfia.co/c/sesame/magic-pakiet-basic-rXx5?variant=ad0a7a4d-a612-4afc-870d-d1a660b44872"
        />
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
        <MagicBanner2 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicCommunityOpinions />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassFAQ version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicFinalCTA />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default MagicSpecialPage
