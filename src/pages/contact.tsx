import React from "react"
import Layout from "components/Layout"
import CustomBanner from "components/CustomBanner"
import SEO from "components/seo"
import { PrimaryButton } from "../shared.styled"
import { StaticImage } from "gatsby-plugin-image"

const ContactPage = (): JSX.Element => {
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
        paragraph1={"Masz pytanie? Szukasz wsparcia marketingowego? Chcesz pogadać o alpakach? pisz śmiało!".toUpperCase()}
        image={<StaticImage src={"../images/contact.webp"} alt="banner" />}
      />
    </Layout>
  )
}

export default ContactPage
