import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import Features from "components/Features"
import Products from "components/Products"
import NewsletterBanner from "components/NewsletterBanner"
import References from "components/References"

const EbookPage = (): JSX.Element => {
  return (
    <Layout
    flowerBlue={true}
    starPink={true}
    flowerWhite={true}
    flowerBlue3={true}
    >
      <SEO title="Home" lang="pl"/>
      <MaxWithBgColorContainer bgColor="bg-transparent">
      <CustomBanner
        title="Chcesz zdobyć nowych, lojalnych klientów?"
        paragraph1={<>Dowiedz się, jak to zrobić za pomocą reklam na Facebooku i Instagramie.</>}
        paragraph2={<>Nawet jeśli teraz Manager Reklam budzi u Ciebie przerażenie <span className="font-bold">(albo myślisz: co to w ogóle jest?).</span> </>}
        btnText="Dowiedz się więcej o tym, jak zdobyć klientów"
        image={<StaticImage src={"../images/ada_ebook.webp"} alt="Ada Promis - Ebook" placeholder="none" width={650} height={650}  />}
        btnUrl="#ebook"
      />
        <Products />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
      <Features />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-transparent">
          <References
            title2
          />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="transparent">
          <NewsletterBanner/>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default EbookPage
