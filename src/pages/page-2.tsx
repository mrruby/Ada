import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

type BlogPost = {
  node: {
    frontmatter: {
      title: string
    }
  }
}

type BlogPosts = {
  allMarkdownRemark: { edges: BlogPost[] }
}

const SecondPage = () => {
  const {
    allMarkdownRemark: { edges },
  }: BlogPosts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)

  console.log(edges)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      {edges.map(({ node: { frontmatter: { title } } }) => (
        <p key={title}>{title}</p>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
