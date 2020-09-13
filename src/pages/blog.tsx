import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { getTitlePath } from "../helpers"

type Blog = {
  node: {
    frontmatter: {
      title: string
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
      {edges.map(({ node: { frontmatter: { title } } }) => (
        <p key={title}>
          <Link to={`/blog/${getTitlePath(title)}`}>{title}</Link>
        </p>
      ))}
    </Layout>
  )
}

export default BlogPage
