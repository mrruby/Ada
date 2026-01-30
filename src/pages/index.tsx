import CustomBanner from "components/CustomBanner"
import Features from "components/Features"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import NewsletterBanner from "components/NewsletterBanner"
import References from "components/References"
import SEO from "components/seo"
import Services from "components/Services"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const IndexPage = () => {
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
              src={"../images/contact.webp"}
              alt="Ada Promis - hero"
              placeholder="blurred"
              width={600}
              height={600}
            />
          }
          paragraphStyle="max-w-[400px] xl:max-w-[532px] h-[620px] pt-[160px] text-adaBase"
          imgStyle="lg:absolute top-[20px] right-[20px] lg:pt-[10px]"
          btnUrl="uslugi"
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
