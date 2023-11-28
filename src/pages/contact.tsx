import React from "react"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import ContactForm from "components/ContactForm"
import ContactFormHeader from "components/ContactFormHeader"

const ContactPage = (): JSX.Element => {
  return (
    <Layout>
      <ContactFormHeader />
      <MaxWithBgColorContainer bgColor="bg-linear" extraStyle="pt-[50px]">
        <ContactForm />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Kontakt" />

export default ContactPage
