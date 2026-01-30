import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import LegalLayout from "components/LegalLayout"
import SEO from "components/seo"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

type PolicyData = {
  data: {
    markdownRemark: {
      rawMarkdownBody: any
    }
  }
}

const PolicyPage = ({
  data: {
    markdownRemark: { rawMarkdownBody },
  },
}: PolicyData) => {
  return (
    <Layout>
      <SEO title="Polityka prywatności & plików cookies" />
      <MaxWithBgColorContainer>
        <LegalLayout markdown={rawMarkdownBody} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default PolicyPage

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/legal/policy/" } }) {
      rawMarkdownBody
    }
  }
`
