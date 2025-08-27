import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import LegalLayout from "components/LegalLayout"
import SEO from "components/seo"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

type TermsData = {
  data: {
    markdownRemark: {
      rawMarkdownBody: any
    }
  }
}

const TermsPage = ({
  data: {
    markdownRemark: { rawMarkdownBody },
  },
}: TermsData) => {
  return (
    <Layout>
      <MaxWithBgColorContainer>
        <LegalLayout markdown={rawMarkdownBody} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default TermsPage

export const Head = () => <SEO title="Polityka prywatności & plików cookies" />

export const termsQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/legal/terms/" } }) {
      rawMarkdownBody
    }
  }
`
