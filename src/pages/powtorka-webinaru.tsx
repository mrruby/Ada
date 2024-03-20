import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MastermindVideo from "components/MastermindVideo"

const WebinarReplayPage = (): JSX.Element => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MastermindVideo
          videoUrl="https://www.youtube.com/watch?v=y_HOSt8dcy4"
          buttonUrl="https://koalendar.com/e/meta-ads-master/"
          targetDate={new Date("2024-03-27T00:00:00")}
        />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Ogarnij swoje Adsy" />

export default WebinarReplayPage
