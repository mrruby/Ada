import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

type Podcast = {
  node: {
    frontmatter: {
      title: string
    }
    fields: { slug: string }
  }
}

type Podcasts = {
  allMarkdownRemark: { edges: Podcast[] }
}

const PodcastsPage = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: Podcasts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/podcast/" } } }) {
        edges {
          node {
            frontmatter {
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Podcast" />
      <h1>Lista moich podcastów</h1>
      {edges.map(({ node: { frontmatter: { title }, fields: { slug } } }) => (
        <p key={title}>
          <Link to={slug}>{title}</Link>
        </p>
      ))}
    </Layout>
  )
}

export default PodcastsPage
