import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassAbout from "components/MasterclassAbout"
import MasterclassAgenda from "components/MasterclassAgenda"
import MasterclassBanner from "components/MasterclassBanner"
import MasterclassDate from "components/MasterclassDate"
import MasterclassFAQ from "components/MasterclassFAQ"
import MasterclassInfo1 from "components/MasterclassInfo1"
import MasterclassInfo2 from "components/MasterclassInfo2"
import MasterclassInfo3 from "components/MasterclassInfo3"
import MasterclassInfo4 from "components/MasterclassInfo4"
import MasterclassInfo5 from "components/MasterclassInfo5"
import MasterclassPreparing from "components/MasterclassPreparing"
import MasterclassTime1 from "components/MasterclassTime1"
import MasterclassTime2 from "components/MasterclassTime2"
import References from "components/References"
import SEO from "components/seo"
import React from "react"

const MasterclassPage = () => {
  return (
    <Layout
      flowerBlue2={true}
      flowerBlue4={true}
      flowerBlue5={true}
      flowerBlue6={true}
      flowerBlue7={true}
      flowerBlue8={true}
      flowerBlue9={true}
      flowerBlue10={true}
      flowerBlue11={true}
      waves1={true}
      waves2={true}
      waves3={true}
      waves4={true}
      waves5={true}
      sun1={true}
      showHeaderAndFooter={false}
    >
      <SEO title="Masterclass - Kevin sam w menedżerze reklam" />
      <MasterclassTime1 />
      <MasterclassBanner />
      {/* <Opinions /> */}
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo1 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassInfo3 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassAbout />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-white">
        <References title4 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassAgenda version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink2">
        <MasterclassInfo4 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MasterclassDate />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink2">
        <MasterclassInfo5 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MasterclassPreparing version={1} />
      </MaxWithBgColorContainer>
      <MasterclassTime2 />
      <MasterclassFAQ version={1} />
    </Layout>
  )
}

export default MasterclassPage
