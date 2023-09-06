import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import {
  Center,
  Column,
  Container,
  PrimaryButton,
  Title,
} from "../shared.styled"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "components/ContactForm"

const ContactPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <MaxWithBgColorContainer extraStyle="pt-[50px]">
      <Title>Kontakt</Title>
      <Container
        reverse
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <Column reverse>
          <ContactForm />
        </Column>
        <Column reverse>
          <Center>
            <StaticImage src={"../images/contact.webp"} alt="banner" />
          </Center>
        </Column>
      </Container>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default ContactPage
