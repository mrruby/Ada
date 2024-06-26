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

const AdsyAndChill = (): JSX.Element => {
  return (
    <Layout
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
      <div className="opacity-0 xl:opacity-100 h-[180px] bg-wave2 absolute top-[970px] w-screen z-0"></div>
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
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[5650px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={1} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[6990px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassesInfo version={2} />
      </MaxWithBgColorContainer>
      <div className="h-[180px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[8500px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink4">
        <MasterclassesInfo version={3} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[9950px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MasterclassPreparing version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassAgenda version={4} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] opacity-0 xl:opacity-100 bg-wave2 absolute top-[12450px] w-screen z-0"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassFAQ version={3} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Adsy&chill" />

export default AdsyAndChill
