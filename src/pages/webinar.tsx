import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import References from "components/References"
import WebinarAbout from "components/WebinarAbout"
import WebinarAgenda from "components/WebinarAgenda"
import WebinarBanner from "components/WebinarBanner"
import WebinarButton from "components/WebinarButton"
import WebinarForm from "components/WebinarForm"
import WebinarInfo from "components/WebinarInfo"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const WebinarPage = () => {
  return (
    <Layout
      flowerBlue={true}
      flowerBlue2={true}
      flowerBlue4={true}
      flowerBlue5={true}
    >
      <SEO title="Webinar" />
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <WebinarBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <WebinarAbout version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <References title5 />
      </MaxWithBgColorContainer>
      <WebinarButton variant="variant1" />
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <WebinarInfo />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <WebinarAgenda />
      </MaxWithBgColorContainer>
      <WebinarButton variant="variant2" />
      <WebinarForm />
    </Layout>
  )
}

export default WebinarPage
