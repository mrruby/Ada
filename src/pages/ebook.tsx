import CustomBanner from "components/CustomBanner"
import EbookContainer from "components/EbookContainer"
import EbookKnowledge from "components/EbookKnowledge"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import References from "components/References"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const EbookPage = () => {
  return (
    <Layout flowerBlue={true} starPink={true} flowerWhite={true}>
      <SEO title="Ebook" />
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <CustomBanner
          title="W e-booku przeczytasz o…."
          paragraph1={
            <>
              zastosowaniu Slow Marketingu w kampaniach reklamowych na Facebooku
              i Instagramie. Dowiesz się, czym się kierować przy wyborze celów
              reklamowych,{" "}
              <span className="font-bold">
                jakie sposoby targetowania grup wybrać i jak tworzyć kreacje.
              </span>
            </>
          }
          paragraph2={
            <>
              Pewnie wolisz korzystać ze sprawdzonej wiedzy niż próbować znaleźć
              informacje w Internecie, prawda?
            </>
          }
          btnText="Chcę nauczyć się wdrażać kampanie w rytmie slow"
          image={
            <StaticImage
              src={"../images/ada_ebook.webp"}
              alt="Ada Promis - Ebook"
              placeholder="blurred"
              width={650}
              height={650}
            />
          }
          imgStyle="lg:absolute right-[-100px] z-20"
          btnUrl="https://sklep.adrianna.com.pl/product/e-book-slow-marketing-a-reklamy-na-facebooku-i-instagramie"
          paragraphStyle="max-w-[640px] xl:max-w-[790px] px-2 md:px-5"
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <EbookContainer />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <EbookKnowledge />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-transparent">
        <References title2 />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default EbookPage
