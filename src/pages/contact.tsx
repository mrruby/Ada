import ContactForm from "components/ContactForm"
import ContactFormHeader from "components/ContactFormHeader"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
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
    <Layout showHeaderAndFooter={false}>
      <main>
        <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
          <ContactFormHeader />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
          <ContactForm source={source} />
        </MaxWithBgColorContainer>
      </main>
      <footer className="flex items-center justify-center gap-4 bg-ada-magicPink2 py-7">
        <a
          href="https://www.instagram.com/adapromis/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram Adrianny Promis-Urbas"
          className="transition-opacity hover:opacity-70"
        >
          <StaticImage
            src="../images/instagram.svg"
            alt=""
            placeholder="blurred"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://www.facebook.com/WypadaNieWypada"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook Adrianny Promis-Urbas"
          className="transition-opacity hover:opacity-70"
        >
          <StaticImage
            src="../images/facebook.svg"
            alt=""
            placeholder="blurred"
            width={32}
            height={32}
          />
        </a>
      </footer>
    </Layout>
  )
}

export const Head = () => <SEO title="Kontakt" />

export default ContactPage
