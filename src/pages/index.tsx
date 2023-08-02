import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import Services from "components/Services"
import Features from "components/Features"
import AdaBanner from "components/AdaBanner"

const IndexPage = (): JSX.Element => {
  return (
    <Layout
    flowerBlue={true}
    starPink={true}
    >
      <SEO title="Home" />
      <MaxWithBgColorContainer bgColor="bg-ada-white">
      <CustomBanner
        title={<>Ada<span className="text-ada-pink"> Promis</span></>}
        paragraph1={<>Zajmuję się strategią marketingową, mediami społecznościowymi i płatnymi reklamami. Podpowiem Ci, jak prowadzić <span className="font-bold">świadomy, kreatywny marketing</span> dla Twojego biznesu.</>}
        image={<StaticImage src={"../images/ada_hero.webp"} alt="Ada Promis - hero" placeholder="none"  />}
      />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
      <Services />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
      <Features />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white">
      <AdaBanner
        title={<>Lorem ipsum dolor sit amet <br/> Lorem ipsum dolor sit amet</>}
        paragraph={<>Bla bla bla bla bla bla bla bla bla bla <span>bla bla bla bla</span> bla bla bla bla bla bla bla bla bla bla</>}
      />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default IndexPage
