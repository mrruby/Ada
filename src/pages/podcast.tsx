import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "components/Post"
import { DesktopRowMobileColumn } from "../shared.styled"
import { isFutureDate } from "../helpers"

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
    fields: {
      slug: string
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
      <DesktopRowMobileColumn>
        {edges
          .filter(
            ({ node: { frontmatter } }) => !isFutureDate(frontmatter.date)
          )
          .map(
            (
              {
                node: {
                  frontmatter,
                  fields: { slug },
                },
              },
              index
            ) => (
              <Post
                reverse={index % 2 == 0}
                key={frontmatter.title}
                slug={slug}
                {...frontmatter}
              />
            )
          )}
      </DesktopRowMobileColumn>
    </Layout>
  )
}

export default PodcastsPage
