import React from "react"
import { graphql } from "gatsby"
// @ts-ignore
import { Disqus } from "gatsby-plugin-disqus"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { siteName } from "../../helpers"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import BlogPostLayout from "components/BlogPostLayout"

type BlogData = {
  data: {
    markdownRemark: {
      frontmatter: {
        description: string
        title: string
        date: string
        tags: string[]
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
      frontmatter: { description, title, date, tags },
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
    <Layout    >
      <SEO title={title} description={description} />
      <MaxWithBgColorContainer extraStyle="pt-[50px]">
        <BlogPostLayout title={title} date={date} tags={tags} html={html} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer extraStyle="px-2">
        <Disqus config={disqusConfig} />
      </MaxWithBgColorContainer>
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
        tags
        date
      }
      fields {
        slug
      }
    }
  }
`
