import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MentoringBanner from "components/MentoringBanner"
import MentoringWhy from "components/MentoringWhy"
import MentoringWhy2 from "components/MentoringWhy2"
import MentoringInfo from "components/MentoringInfo"
import MastermindBanner from "components/MastermindBanner"
import MastermindSteps from "components/MastermindSteps"
import MentoringAbout from "components/MentoringAbout"
import MastermindInfo3 from "components/MastermindInfo3"
import MastermindAgenda from "components/MastermindAgenda"
import MastermindPrice from "components/MastermindPrice"
import MastermindFAQ from "components/MastermindFAQ"
import References from "components/References"

const MentoringPage = (): JSX.Element => {
  return (
    <Layout
      flowerBlue={true}
      flowerBlue2={true}
      flowerBlue3={true}
      flowerBlue4={true}
    >
      <MastermindBanner version={2} />
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MentoringBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MentoringWhy />
      </MaxWithBgColorContainer>
      <div className="h-[300px] bg-wave absolute top-[3600px] w-screen"></div>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MentoringWhy2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindAgenda version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindSteps version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MentoringInfo />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-wave">
        <MentoringBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MentoringAbout />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <References title4 variant2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-wave">
        <MentoringBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MastermindInfo3 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <MastermindPrice version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <MastermindFAQ version={2} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Program mentoringowy - Ogarnij te Adsy" />

export default MentoringPage
