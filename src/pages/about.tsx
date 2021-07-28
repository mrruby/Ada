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
        paragraph1="Jako małe dziecko pochłaniałam stosy książek, aby następnie zacząć
    pisać swoje. Jako że niewiele z nich ujrzało światło dzienne, jako
    28-latka postanowiłam nadrobić stracony czas i podzielić się ze
    światem tym co czuję i myślę."
        paragraph2="pracuję w marketingu (wiecie, te fejsbuki i inne...), uwielbiam
    gotować i uczę się uważności w życiu codziennym."
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
