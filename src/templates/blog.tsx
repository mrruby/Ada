import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "../shared.styled"

type BlogData = {
  data: {
    markdownRemark: {
      frontmatter: {
        description: string
      }
      html: string
    }
  }
}

const PodcastPage = ({
  data: {
    markdownRemark: { html },
  },
}: BlogData): JSX.Element => {
  return (
    <Layout>
      <SEO title="Podcast" />
      <h1>Blog</h1>
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PodcastPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
