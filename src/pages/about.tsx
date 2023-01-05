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
        paragraph1="Z wykształcenia tłumacz FR&ENG, z zawodu marketerka (znajdziemy kiedyś godne następstwo dla tego słowa, prawda?), 
        a z charakteru kreatywna dusza. Prowadzę swoją działalność: GetBold! Agency."
        paragraph2="Uwielbiam podróżować (w szczególności lubię wszelkie wyspy: wyspiarski klimat i luz to jest to!), zaczęłam pracować zdalnie długo przed pandemią (nie potrafiłam odnaleźć się w biurze), chętnie gotuję, medytuję i piszę."
        paragraph3="Moje 5 talentów Gallupa:
        indywidualizacja,
        zbieranie,
        strateg,
        odkrywczość,
        naprawianie"
        image={<StaticImage src={"../images/about-me.webp"} alt="banner" />}
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
