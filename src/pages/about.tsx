import React from "react"
import Layout from "components/Layout"
import CustomBanner from "components/CustomBanner"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from "components/Layout/theme"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"

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
        image={
          <StaticImage
            imgStyle={{ margin: "0 auto", display: "block" }}
            width={400}
            src={"../images/about-me.png"}
            alt="banner"
          />
        }
      />
    </Layout>
  )
}

export default AboutPage
