import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import BlogPosts from "components/BlogPosts"
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
    >
      <SEO title="Home" />
      <MaxWithBgColorContainer bgColor="bg-transparent">
      <CustomBanner
        title="Chcesz zdobyć nowych, lojalnych klientów?"
        paragraph1={<>Dowiedz się, jak to zrobić za pomocą reklam na Facebooku i Instagramie.</>}
        paragraph2={<>Nawet jeśli teraz Manager Reklam budzi u Ciebie przerażenie <span className="font-bold">(albo myślisz: co to w ogóle jest?).</span> </>}
        btnText="Dowiedz się więcej o tym, jak zdobyć klientów"
        image={<StaticImage src={"../images/ada_ebook.webp"} alt="Ada Promis - Ebook" placeholder="none" width={650} height={650}  />}
      />
        <Products />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
      <Features />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear" extraStyle="z-20">
      <BlogPosts />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-transparent">
          <References
            title="Co mówią osoby, z którymi współpracowałam?"
          />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="transparent">
          <NewsletterBanner/>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default EbookPage
