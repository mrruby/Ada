import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import EbookContainer from "components/EbookContainer"
import EbookKnowledge from "components/EbookKnowledge"
import References from "components/References"

const ProductPage = (): JSX.Element => {
  return (
    <Layout
    flowerBlue={true}
    starPink={true}
    flowerWhite={true}
    >
      <SEO title="Home" lang="pl"/>
      <MaxWithBgColorContainer bgColor="bg-transparent">
      <CustomBanner
        title="W e-booku przeczytasz o…"
        paragraph1={<>zastosowaniu Slow Marketingu w kampaniach reklamowych na Facebooku i Instagramie. Dowiesz się, czym się kierować przy wyborze celów reklamowych,<span className="font-bold"> jakie sposoby targetowania grup wybrać i jak tworzyć kreacje. </span> </>}
        paragraph2={<>Pewnie wolisz korzystać ze sprawdzonej wiedzy niż próbować znaleźć informacje  w Internecie, prawda?</>}
        image={<StaticImage src={"../images/ada_ebook.png"} alt="Ada Promis - Ebook" placeholder="none" width={650} height={650}  />}
        btnText="Chcę nauczyć się wdrażać kampanie w rytmie slow"
        actionButton={true}
      />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
        <EbookContainer />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
        <EbookKnowledge />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-transparent">
          <References
            title="Co mówią osoby, z którymi tworzyłam kampanie?"
          />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default ProductPage
