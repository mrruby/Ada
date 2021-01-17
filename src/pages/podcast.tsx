import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "components/Post"

type Podcast = {
  node: {
    frontmatter: {
      title: string
      description: string
      thumbnail: string
      episodeNumber: number
      tags: string[]
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
              thumbnail
              tags
              description
              episodeNumber
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
      {edges.map(({ node: { frontmatter } }, index) => (
        <Post
          reverse={index % 2 == 0}
          key={frontmatter.title}
          {...frontmatter}
        />
      ))}
    </Layout>
  )
}

export default PodcastsPage
