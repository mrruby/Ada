import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Audio from "../../components/Audio"
import SEO from "../../components/seo"
import { Description, Title } from "./podcast.styled"
import { DesktopRowMobileColumn } from "../../shared.styled"

type PodcastData = {
  data: {
    markdownRemark: {
      frontmatter: {
        episodeNumber: number
        season: number
        description: string
        title: string
      }
      html: string
    }
  }
}

const PodcastPage = ({ data }: PodcastData): JSX.Element => {
  const {
    frontmatter: { season, episodeNumber, description, title },
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title="Podcast" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Audio
        url={`https://podcastada.s3.eu-central-1.amazonaws.com/Podcast_${season}_${episodeNumber}.mp3`}
      />
      <DesktopRowMobileColumn dangerouslySetInnerHTML={{ __html: html }} />
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
