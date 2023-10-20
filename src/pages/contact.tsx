import React from "react"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import ContactForm from "components/ContactForm"
import ContactFormHeader from "components/ContactFormHeader"

const ContactPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <ContactFormHeader />
      <MaxWithBgColorContainer bgColor="bg-linear" extraStyle="pt-[50px]">
        <ContactForm />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default ContactPage
