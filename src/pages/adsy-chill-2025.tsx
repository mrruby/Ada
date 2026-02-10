import BonusCountdown from "components/BonusCountdown"
import IconText from "components/IconText"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicCollectiveBanner from "components/MagicCollectiveBanner"
import MagicWhy from "components/MagicWhy"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassesInfo2 from "components/MasterclassesInfo2"
import MasterclassFAQ from "components/MasterclassFAQ"
import ReferencesMentoring from "components/ReferencesMentoring"
import WebinarBanner from "components/WebinarBanner"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const AdsyAndChill2025 = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <BonusCountdown />
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <WebinarBanner version={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <IconText version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple3">
        <MagicCollectiveBanner version={19} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <ReferencesMentoring title7 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MasterclassesInfo2 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MasterclassesInfo2 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MasterclassesInfo2 version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <MagicWhy part={13} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MasterclassAgenda version={15} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
        <MasterclassAgenda version={18} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
        <ReferencesMentoring title8 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <MasterclassAgenda version={17} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple3">
        <MasterclassFAQ version={7} />
      </MaxWithBgColorContainer>
      <BonusCountdown />
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Adsy&chill 2025"
    script={`
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:5046108,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
  />
)

export default AdsyAndChill2025
