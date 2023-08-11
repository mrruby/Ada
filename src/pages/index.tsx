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
    flowerWhite={true}
    >
      <SEO title="Home" />
      <MaxWithBgColorContainer bgColor="bg-ada-white">
      <CustomBanner
        title="Cześć!"
        paragraph1={<>Tutaj Ada Promis. <br/> Zajmuję się strategią marketingową, mediami społecznościowymi i płatnymi reklamami. Podpowiem Ci, jak prowadzić świadomy, kreatywny marketing dla Twojego biznesu.</>}
        btnText="Pokaż mi więcej"
        image={<StaticImage src={"../images/ada_hero.png"} alt="Ada Promis - hero" placeholder="none"  width={700} height={700} />}
      />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear" extraStyle="z-20">
      <Services />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
      <Features />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white">
      <AdaBanner
        title1="Praktykuję slow marketing: przemyślany,"
        title2="wartościowy, zbudowany na relacjach."
        paragraph1={<>W kampaniach reklamowych buduję świadomość, wzbudzam zainteresowanie i sprawiam, aby klient Cię polubił.</>} 
        paragraph2={<>Zgaduję, że Ty też chętniej kupujesz od marek, do których czujesz <span className="font-bold italic"> sympatię? :)</span></>}
      />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default IndexPage
