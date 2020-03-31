import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
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
        <p>{title}</p>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
