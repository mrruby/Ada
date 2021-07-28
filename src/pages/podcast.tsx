import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "components/Post"
import { isFutureDate } from "../helpers"
import { DesktopRowMobileColumn } from "shared.styled"

type Podcast = {
  node: {
    frontmatter: {
      title: string
      description: string
      date: string
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
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/podcast/" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              thumbnail
              tags
              description
              episodeNumber
              date
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
      <DesktopRowMobileColumn>
        {edges
          .filter(
            ({ node: { frontmatter } }) => !isFutureDate(frontmatter.date)
          )
          .map(({ node: { frontmatter } }, index) => (
            <Post
              reverse={index % 2 == 0}
              key={frontmatter.title}
              {...frontmatter}
            />
          ))}
      </DesktopRowMobileColumn>
    </Layout>
  )
}

export default PodcastsPage
