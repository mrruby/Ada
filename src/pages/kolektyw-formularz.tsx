import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicTitle from "components/MagicTitle"
import SEO from "components/seo"
import React from "react"

const MagicCollectiveFormPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <SEO
        title="Magic: Marketing Ads Girls Inside Collective"
        image="https://adrianna.com.pl/img/ada_purple.webp"
      />
      <MaxWithBgColorContainer bgColor="bg-ada-white2 reltive">
        <div className="z-10 relative">
          <MagicTitle version={3} />
        </div>
        <div className="bg-magic-pink2"></div>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default MagicCollectiveFormPage
