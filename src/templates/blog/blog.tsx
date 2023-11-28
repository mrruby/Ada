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
    <Layout>
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

export const Head = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description },
    },
  },
}: BlogData) => <SEO title={title} description={description} />

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
