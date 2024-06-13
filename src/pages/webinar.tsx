import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import References from "components/References"
import WebinarAbout from "components/WebinarAbout"
import WebinarBanner from "components/WebinarBanner"
import WebinarAgenda from "components/WebinarAgenda"
import WebinarForm from "components/WebinarForm"
import WebinarInfo from "components/WebinarInfo"
import WebinarButton from "components/WebinarButton"

const WebinarPage = (): JSX.Element => {
  return (
    <Layout
      flowerBlue={true}
      flowerBlue2={true}
      flowerBlue4={true}
      flowerBlue5={true}
    >
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

export const Head = () => <SEO title="Webinar" />

export default WebinarPage
