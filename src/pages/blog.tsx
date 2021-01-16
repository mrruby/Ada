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
      description: string
      thumbnail: string
      tags: string[]
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
              tags
              description
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Lista moich blogów</h1>
      <DesktopRowMobileColumn>
        {edges.map(({ node: { frontmatter } }, index) => (
          <BlogElement
            reverse={index % 2 == 0}
            key={frontmatter.title}
            {...frontmatter}
          />
        ))}
      </DesktopRowMobileColumn>
    </Layout>
  )
}

export default BlogPage
