import React from "react"
import Layout from "components/Layout"
import CustomBanner from "components/CustomBanner"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from "components/Layout/theme"
import SEO from "components/seo"

const AboutPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      imageDesktop: file(relativePath: { eq: "about-me.png" }) {
        childImageSharp {
          fixed(width: 420) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageMobile: file(relativePath: { eq: "about-me.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
        fixedImagesArray={[
          data.imageMobile.childImageSharp.fixed,
          {
            ...data.imageDesktop.childImageSharp.fixed,
            media: `(min-width: ${theme.dimensions.desktop})`,
          },
        ]}
      />
    </Layout>
  )
}

export default AboutPage
