import React from "react"
import { graphql } from "gatsby"
import SEO from "components/seo"
import Layout from "../components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import LegalLayout from "components/LegalLayout"


type PolicyData = {
  data: {
    markdownRemark: {
      rawMarkdownBody: any
    } 
  }
}

const PolicyPage = ({
  data: {
    markdownRemark: {
      rawMarkdownBody
    },
  },
  }: PolicyData): JSX.Element => {

  return (
    <Layout>
      <SEO title="Polityka prywatności & plików cookies" />
      <MaxWithBgColorContainer>
        <LegalLayout markdown={rawMarkdownBody}  />
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
