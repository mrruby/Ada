import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassBanner from "components/MasterclassBanner"
import MasterclassInfo1 from "components/MasterclassInfo1"
import MasterclassInfo2 from "components/MasterclassInfo2"
import MasterclassInfo3 from "components/MasterclassInfo3"
import MasterclassInfo4 from "components/MasterclassInfo4"
import MasterclassTime from "components/MasterclassTime"

const MasterclassPage = (): JSX.Element => {
  return (
    <Layout
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
        <MasterclassTime />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Masterclass - Kevin sam w menedżerze reklam" />
)

export default MasterclassPage
