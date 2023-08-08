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
      <SEO title="Home" />
      <MaxWithBgColorContainer bgColor="bg-transparent">
      <CustomBanner
        title={<><span className="italic">Slow Marketing</span> a reklama na Facebooku i Instagramie</>}
        paragraph1={<>Chcesz zdobyć nowych<span className="font-bold"> lojalnych</span> klientów?</>}
        paragraph2={<>Pokażę Ci, jak to zrobić za pomocą kampanii na Facebooku i Instagramie. Nawet jeśli teraz Manager Reklam budzi u Ciebie <span className="font-bold">przerażenie!</span></>}
        image={<StaticImage src={"../images/ada_ebook.webp"} alt="Ada Promis - hero" placeholder="none"  />}
        actionButton={false}
      />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
        <EbookContainer />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
        <EbookKnowledge />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-transparent">
          <References/>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default ProductPage
