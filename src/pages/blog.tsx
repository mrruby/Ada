import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogElement from "components/BlogElement"
import { DesktopRowMobileColumn } from "../shared.styled"

type Blog = {
  node: {
    frontmatter: {
      title: string
      thumbnail: string
    }
  }
}

type Blogs = {
  allMarkdownRemark: { edges: Blog[] }
}

const BlogPage = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: Blogs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/blog/" } } }) {
        edges {
          node {
            frontmatter {
              title
              thumbnail
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Lista moich blogów</h1>
      <DesktopRowMobileColumn>
        {edges.map(({ node: { frontmatter } }) => (
          <BlogElement key={frontmatter.title} {...frontmatter} />
        ))}
      </DesktopRowMobileColumn>
    </Layout>
  )
}

export default BlogPage
