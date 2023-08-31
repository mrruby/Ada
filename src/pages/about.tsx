import React from "react"
import Layout from "components/Layout"
import CustomBanner from "components/CustomBanner"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { SmallParagraphContainer } from "shared.styled"

const AboutPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="O mnie" />
      <CustomBanner
        title="KIM JESTEM?"
        paragraph1={<>Z zawodu tłumaczka j. francuskiego & angielskiego, a z zamiłowania — kreatywna dusza. Mam za sobą epizod pracy w audycie finansowym, ale moim powołaniem od zawsze był marketing!</>}
        paragraph2={<>I tak od stażu w agencji marketingowej do swojej działalności: dziś pod szyldem GetBold! obsługuję klientów z Europy, w tym Polski. Na moim liczniku wybiło już ponad 1 000 000 budżetów reklamowych wydanych w ram</>}
        paragraph3="Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny. Praktykuję slow marketing: przemyślany, wartościowy, zbudowany na relacjach.Moje 5 talentów Gallupa:
        indywidualizacja,
        zbieranie,
        strateg,
        odkrywczość,
        naprawianie"
        image={<StaticImage src={"../images/about-me.webp"} alt="banner" />}
        btnText=""
      />
      <SmallParagraphContainer>
        <span>Dane firmy:</span>
        <span>Dawid Urbas Get Bold</span>
        <span>ul. Żołnierzy Września 79/6, 41-500 Chorzów</span>
        <span>NIP: 6272725565</span>
      </SmallParagraphContainer>
    </Layout>
  )
}

export default AboutPage
