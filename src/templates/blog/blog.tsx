import { graphql } from "gatsby"
import React from "react"
// @ts-ignore
import BlogPostLayout from "components/BlogPostLayout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import { Disqus } from "gatsby-plugin-disqus"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { siteName } from "../../helpers"

type BlogData = {
  data: {
    markdownRemark: {
      frontmatter: {
        description: string
        title: string
        date: string
        tags: string[]
      }
      rawMarkdownBody: any
      fields: {
        slug: string
      }
    }
  }
}

const BlogPage = ({
  data: {
    markdownRemark: {
      rawMarkdownBody,
      frontmatter: { title, date, tags, description },
      fields: { slug },
    },
  },
}: BlogData) => {
  const disqusConfig = {
    url: `${siteName + slug.slice(0, -1)}`,
    identifier: slug,
    title: title,
  }
  return (
    <Layout>
      <SEO title={title} description={description} />
      <MaxWithBgColorContainer extraStyle="pt-[50px]">
        <BlogPostLayout
          title={title}
          date={date}
          tags={tags}
          markdown={rawMarkdownBody}
        />
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
      frontmatter {
        title
        description
        tags
        date
      }
      rawMarkdownBody
      fields {
        slug
      }
    }
  }
`
