import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Audio from "../components/Audio"
import SEO from "../components/seo"
import { Container } from "../shared.styled"

type PodcastData = {
  data: {
    markdownRemark: {
      frontmatter: {
        episodeNumber: number
        season: number
        description: string
      }
      html: string
    }
  }
}

const PodcastPage = ({ data }: PodcastData): JSX.Element => {
  const {
    frontmatter: { season, episodeNumber, description },
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title="Podcast" />
      <p>{description}</p>
      <Audio
        url={`https://podcastada.s3.eu-central-1.amazonaws.com/Podcast_${season}_${episodeNumber}.mp3`}
      />
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PodcastPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        episodeNumber
        season
        description
      }
    }
  }
`
