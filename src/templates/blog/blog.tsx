import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { DesktopRowMobileColumn } from "../../shared.styled"

type BlogData = {
  data: {
    markdownRemark: {
      frontmatter: {
        description: string
        title: string
      }
      html: string
    }
  }
}

const PodcastPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { description, title },
    },
  },
}: BlogData): JSX.Element => {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <DesktopRowMobileColumn dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PodcastPage

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
