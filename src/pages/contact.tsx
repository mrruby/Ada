import ContactForm from "components/ContactForm"
import ContactFormHeader from "components/ContactFormHeader"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import React from "react"

type ContactPageProps = {
  location: {
    search: string
  }
}

const ContactPage = ({ location }: ContactPageProps) => {
  const params = new URLSearchParams(location.search)
  const source = params.get("source") || "Ada"

  return (
    <Layout>
      <ContactFormHeader />
      <MaxWithBgColorContainer bgColor="bg-linear" extraStyle="pt-[50px]">
        <ContactForm source={source} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Kontakt" />

export default ContactPage
