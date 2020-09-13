import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { getTitlePath } from "../helpers"

type Podcast = {
  node: {
    frontmatter: {
      title: string
    }
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
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Lista moich podcastów</h1>
      {edges.map(({ node: { frontmatter: { title } } }) => (
        <p key={title}>
          <Link to={`/podcast/${getTitlePath(title)}`}>{title}</Link>
        </p>
      ))}
    </Layout>
  )
}

export default PodcastsPage
