import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

type BlogData = {
  data: {
    markdownRemark: {
      frontmatter: {
        number: number
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
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
        number
        description
      }
    }
  }
`
