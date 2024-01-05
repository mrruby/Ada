import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassBanner from "components/MasterclassBanner"
import MasterclassInfo1 from "components/MasterclassInfo1"
import MasterclassInfo2 from "components/MasterclassInfo2"
import MasterclassInfo3 from "components/MasterclassInfo3"
import MasterclassInfo4 from "components/MasterclassInfo4"
import MasterclassInfo5 from "components/MasterclassInfo5"
import MasterclassInfo6 from "components/MasterclassInfo6"
import MasterclassTime from "components/MasterclassTime"
import MasterclassFAQ from "components/MasterclassFAQ"
import MasterclassAbout from "components/MasterclassAbout"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassDate from "components/MasterclassDate"
import MasterclassPreparing from "components/MasterclassPreparing"
import References from "components/References"

const MasterclassPage = (): JSX.Element => {
  return (
    <Layout
      flowerBlue={true}
      waves1={true}
      waves2={true}
      waves3={true}
      waves4={true}
      waves5={true}
      waves6={true}
    >
      <MasterclassBanner />
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo3 />
        <MasterclassInfo4 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassAbout />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-white">
        <References title4 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassAgenda />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink2">
        <MasterclassInfo5 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassDate />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink2">
        <MasterclassInfo6 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassPreparing />
      </MaxWithBgColorContainer>
      <MasterclassTime />
      <MasterclassFAQ />
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Masterclass - Kevin sam w menedżerze reklam" />
)

export default MasterclassPage
