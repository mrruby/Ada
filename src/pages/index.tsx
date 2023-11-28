import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import Features from "components/Features"
import Services from "components/Services"
import NewsletterBanner from "components/NewsletterBanner"
import References from "components/References"

const IndexPage = (): JSX.Element => {
  return (
    <Layout
      flowerBlue={true}
      starPink={true}
      flowerWhite={true}
      twoBlueFlowers={true}
      flowerBlue2={true}
      flowerBlue3={true}
    >
      <SEO title="Home" />
      <MaxWithBgColorContainer>
        <CustomBanner
          title="Cześć!"
          paragraph1={
            <>
              Tutaj Ada Promis. <br /> Zajmuję się strategią marketingową,
              mediami społecznościowymi i płatnymi reklamami. Podpowiem Ci, jak
              prowadzić świadomy, kreatywny marketing dla Twojego biznesu.
            </>
          }
          btnText="Pokaż mi więcej"
          image={
            <StaticImage
              src={"./../images/ada_homepage2.webp"}
              alt="Ada Promis - hero"
              placeholder="none"
              width={680}
              height={700}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          }
          imgStyle="lg:h-[740px] lg:absolute top-0 lg:right-[-80px] xl:right-[-140px] 2xl:right-[-310px]"
          paragraphStyle="lg:h-[700px] lg:pt-[100px] max-w-[592px] px-2 md:px-5"
          btnUrl="#uslugi"
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
        <Services />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <Features />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <References title1 />
        <NewsletterBanner title1 paragraph image />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default IndexPage
