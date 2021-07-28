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
        paragraph1="Dobrze dogaduję się z alpakami, z ludźmi też całkiem nieźle, więc jeśli chcesz porozmawiać, wyślij mi maila:"
        image={
          <StaticImage
            imgStyle={{ margin: "0 auto", display: "block" }}
            width={340}
            src={"../images/contact.png"}
            alt="banner"
          />
        }
      />
    </Layout>
  )
}

export default ContactPage
