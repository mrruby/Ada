import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner4 from "components/MagicBanner4"
import MagicBioBanner2 from "components/MagicBioBanner2"
import MagicCollectiveBanner from "components/MagicCollectiveBanner"
import MagicOpinions from "components/MagicOpinions"
import SEO from "components/seo"
import React from "react"

const MagicCollectiveTalkPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <div className="kolektyw-rozmowa-page relative isolate">
        <MaxWithBgColorContainer
          bgColor="bg-ada-white2"
          extraStyle="relative isolate z-10"
        >
          <MagicCollectiveBanner version={15} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer
          bgColor="bg-magic-pink"
          extraStyle="relative isolate z-50 pointer-events-auto"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative z-50 overflow-visible bg-ada-magicGreen pt-8 px-4 md:px-8">
              <MagicCollectiveBanner version={16} />
            </div>
          </div>
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-white2 reltive">
          <MagicBanner4 version={1} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicGreen reltive">
          <MagicBanner4 version={2} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-white2 reltive">
          <MagicBanner4 version={3} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer
          bgColor="bg-ada-white2"
          extraStyle="relative isolate z-0"
        >
          <MagicCollectiveBanner version={17} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
          <MagicBioBanner2 version={2} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-white2">
          <MagicOpinions />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer
          bgColor="bg-magic-pink"
          extraStyle="relative isolate z-10 pointer-events-auto"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-ada-magicGreen py-8 px-4 md:px-8">
              <MagicCollectiveBanner version={18} />
            </div>
          </div>
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

export default MagicCollectiveTalkPage
