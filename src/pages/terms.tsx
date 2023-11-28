import React from "react"
import { graphql } from "gatsby"
import SEO from "components/seo"
import Layout from "../components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import LegalLayout from "components/LegalLayout"

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
}: TermsData): JSX.Element => {
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
