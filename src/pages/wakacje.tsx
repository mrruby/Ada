import CountdownBanner from "components/CountdownBanner"
import HolidayForm from "components/HolidayForm"
import HolidayFormTop from "components/HolidayFormTop"
import HolidayInfo from "components/HolidayInfo"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MentoringBanner from "components/MentoringBanner"
import ReferencesMentoring from "components/ReferencesMentoring"
import SEO from "components/seo"
import WebinarAbout from "components/WebinarAbout"
import WebinarBanner from "components/WebinarBanner"
import React from "react"

const MasterclassPage = () => {
  return (
    <Layout
      sun1={true}
      sun2={true}
      sun3={true}
      sun4={true}
      sun5={true}
      flaming={true}
      flaps={true}
      sunglasses={true}
      ball1={true}
      ball2={true}
      arrow={true}
    >
      <SEO title="Szkolenie - Niech kampanie pracują na moje wakacje!" />
      <div className="pt-[70px] md:pt-[50px]">
        <CountdownBanner />
      </div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <WebinarBanner version={2} />
      </MaxWithBgColorContainer>
      <HolidayFormTop />
      <MaxWithBgColorContainer>
        <WebinarAbout version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <HolidayInfo version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <HolidayInfo version={2} />
      </MaxWithBgColorContainer>
      <div className="h-[300px] bg-wave absolute top-[3480px] w-screen -z-50"></div>
      <MentoringBanner version={5} />
      <MaxWithBgColorContainer>
        <ReferencesMentoring title1 />
      </MaxWithBgColorContainer>
      <HolidayForm />
    </Layout>
  )
}

export default MasterclassPage
