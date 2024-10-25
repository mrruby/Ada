import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import Podcasts from "components/Podcasts"

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

type PodcastsType = {
  allMarkdownRemark: { edges: Podcast[] }
}

const PodcastsPage = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: PodcastsType = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/podcast/" } } }
        sort: { frontmatter: { date: DESC } }
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
      <MaxWithBgColorContainer>
        <Podcasts postsData={edges} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Podcast" />

export default PodcastsPage
