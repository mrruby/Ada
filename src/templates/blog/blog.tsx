import React from "react"
import { graphql } from "gatsby"
// @ts-ignore
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { DesktopRowMobileColumn } from "../../shared.styled"
import { siteName } from "../../helpers"

type BlogData = {
  data: {
    markdownRemark: {
      frontmatter: {
        description: string
        title: string
      }
      html: string
      fields: {
        slug: string
      }
    }
  }
}

const BlogPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { description, title },
      fields: { slug },
    },
  },
}: BlogData): JSX.Element => {
  const disqusConfig = {
    url: `${siteName + slug.slice(0, -1)}`,
    identifier: slug,
    title: title,
  }
  return (
    <Layout>
      <SEO title={title} description={description} />
      <div>
        <DesktopRowMobileColumn dangerouslySetInnerHTML={{ __html: html }} />
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
    }
  }
`
