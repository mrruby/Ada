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
        title={<><span className="italic">Slow Marketing</span> a reklama na Facebooku i Instagramie</>}
        paragraph1={<>Chcesz zdobyć nowych<span className="font-bold">lojalnych</span> klientów?</>}
        paragraph2={<>Pokażę Ci, jak to zrobić za pomocą kampanii na Facebooku i Instagramie. Nawet jeśli teraz Manager Reklam budzi u Ciebie <span className="font-bold">przerażenie!</span></>}
        image={<StaticImage src={"../images/ada_ebook.webp"} alt="Ada Promis - hero" placeholder="none"  />}
      />
        <Products />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
      <Features />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear" extraStyle="z-20">
      <BlogPosts />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="transparent">
          <NewsletterBanner/>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default EbookPage
