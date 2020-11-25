import React from "react"
import Layout from "components/Layout"
import CustomBanner from "components/CustomBanner"
import { graphql, useStaticQuery } from "gatsby"
import { theme } from "components/Layout/theme"
import SEO from "components/seo"
import { PrimaryButton } from "../shared.styled"

const ContactPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      imageDesktop: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fixed(height: 380) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageMobile: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fixed(height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Kontakt" />
      <CustomBanner
        reverse={true}
        actionButton={
          <PrimaryButton href="mailto:adrianna@getbold.agency">
            klik
          </PrimaryButton>
        }
        title="Kontakt"
        paragraph1="Dobrze dogaduję się z alpakami, z ludźmi też całkiem nieźle, więc jeśli chcesz porozmawiać, wyślij mi maila:"
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

export default ContactPage
