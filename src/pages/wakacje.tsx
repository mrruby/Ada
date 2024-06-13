import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import WebinarBanner from "components/WebinarBanner"
import HolidayForm from "components/HolidayForm"
import WebinarAbout from "components/WebinarAbout"
import HolidayInfo from "components/HolidayInfo"
import ReferencesMentoring from "components/ReferencesMentoring"
import MentoringBanner from "components/MentoringBanner"

const MasterclassPage = (): JSX.Element => {
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
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <WebinarBanner version={2} />
      </MaxWithBgColorContainer>
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
      <MaxWithBgColorContainer>
        <ReferencesMentoring title1 />
      </MaxWithBgColorContainer>
      <HolidayForm />
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Warsztat - Niech reklamy pracują na Twoje wakacje!" />
)

export default MasterclassPage
