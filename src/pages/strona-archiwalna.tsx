import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MastermindOffertExpired from "components/MastermindOffertExpired"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const MastermindPage = () => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <SEO title="Ogarnij swoje Adsy" />
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindOffertExpired />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default MastermindPage
