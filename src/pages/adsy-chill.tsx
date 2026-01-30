import IconText from "components/IconText"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassesInfo from "components/MasterclassesInfo"
import MasterclassFAQ from "components/MasterclassFAQ"
import MasterclassPreparing from "components/MasterclassPreparing"
import MentoringBanner from "components/MentoringBanner"
import ReferencesMentoring from "components/ReferencesMentoring"
import WebinarAbout from "components/WebinarAbout"
import WebinarBanner from "components/WebinarBanner"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const AdsyAndChill = () => {
  return (
    <Layout
      showHeaderAndFooter={false}
      flowerBlue2={true}
      flowerBlue5={true}
      flowerBlue7={true}
      flowerBlue8={true}
      flowerBlue9={true}
      flowerBlue10={true}
      flowerBlue11={true}
      sun6={true}
      sun7={true}
      sunglasses2={true}
      flaps2={true}
      ball3={true}
      drinks={true}
    >
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
      <MaxWithBgColorContainer>
        <WebinarBanner version={3} />
      </MaxWithBgColorContainer>
      <div className="opacity-0 xl:opacity-100 h-[180px] bg-wave2 absolute top-[820px] w-screen z-0"></div>
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
        <ReferencesMentoring title3 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4 mt-5">
        <MasterclassAgenda version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MentoringBanner version={6} />
      </MaxWithBgColorContainer>
      <div
        className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[5380px] w-screen z-0"
        id="masterclasses"
      ></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={1} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[6890px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassesInfo version={2} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[8400px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[9650px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassPreparing version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassAgenda version={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassFAQ version={3} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default AdsyAndChill
