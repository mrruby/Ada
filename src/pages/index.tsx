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

const IndexPage = (): JSX.Element => {
  return (
    <Layout
    flowerBlue={true}
    starPink={true}
    flowerWhite={true}
    twoBlueFlowers={true}
    flowerBlue2={true}
    >
      <SEO title="Home" lang="pl"/>
      <MaxWithBgColorContainer >
          <CustomBanner
            title="Chcesz zdobyć nowych, lojalnych klientów?"
            paragraph1={<>Dowiedz się, jak to zrobić za pomocą reklam na Facebooku i Instagramie.</>}
            paragraph2={<>Nawet jeśli teraz Manager Reklam budzi u Ciebie przerażenie <span className="font-bold">(albo myślisz: co to w ogóle jest?).</span> </>}
            btnText="Dowiedz się więcej o tym, jak zdobyć klientów"
            image={<StaticImage src={"../images/ada-ebook.webp"} placeholder="none" alt="Ada Promis - Ebook" width={700} height={700} loading="lazy" />}
          />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-linear2">
          <Products />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
          <Features />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-linear3 bg-bgPosition" extraStyle="z-20">
          <BlogPosts />
          <References
            title="Co mówią osoby, z którymi współpracowałam?"
          />
          <NewsletterBanner />
        </MaxWithBgColorContainer>

      {/* <MaxWithBgColorContainer bgColor="bg-ada-white">
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
      </MaxWithBgColorContainer> */}
    </Layout>
  )
}

export default IndexPage
