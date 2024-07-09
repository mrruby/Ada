import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import WebinarBanner from "components/WebinarBanner"
import MasterclassFAQ from "components/MasterclassFAQ"
import IconText from "components/IconText"
import WebinarAbout from "components/WebinarAbout"
import ReferencesMentoring from "components/ReferencesMentoring"
import MasterclassPreparing from "components/MasterclassPreparing"
import MentoringBanner from "components/MentoringBanner"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassesInfo from "components/MasterclassesInfo"
import CountdownTimer from "helpers/CountdownTimer"

const AdsyAndChill = (): JSX.Element => {
  return (
    <Layout
      showHeaderAndFooter={false}
      arrowMasterclass={true}
      flowerBlue2={true}
      flowerBlue5={true}
      flowerBlue7={true}
      flowerBlue8={true}
      flowerBlue9={true}
      flowerBlue10={true}
      flowerBlue11={true}
      sun6={true}
      sunglasses2={true}
      flaps2={true}
      ball3={true}
      drinks={true}
    >
      <MaxWithBgColorContainer>
        <WebinarBanner version={3} />
      </MaxWithBgColorContainer>
      <div className="opacity-0 xl:opacity-100 h-[180px] bg-wave2 absolute top-[1020px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <IconText version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassAgenda version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <WebinarAbout version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <ReferencesMentoring title1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4 mt-5">
        <MasterclassAgenda version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MentoringBanner version={6} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[5680px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={1} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[7190px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassesInfo version={2} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[8800px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[10250px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassPreparing version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassAgenda version={4} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[12650px] 2xl:top-[12750px]  w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassFAQ version={3} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Adsy&chill"
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
export default AdsyAndChill
