import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicCollectiveBanner from "components/MagicCollectiveBanner"
import SEO from "components/seo"
import React from "react"

const MagicInvitationePage = (): React.JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <SEO
        title="Magic: Marketing Ads Girls Inside Collective"
        image="https://adrianna.com.pl/img/ada_purple.webp"
      />
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MagicCollectiveBanner version={11} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-pink">
        <div className="max-w-3xl mx-auto">
          <div className="bg-ada-white2 py-8 px-4 md:px-20">
            <MagicCollectiveBanner version={12} />
          </div>
        </div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
        <MagicCollectiveBanner version={13} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicCollectiveBanner version={14} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default MagicInvitationePage
