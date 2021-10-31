import React from "react"
import { graphql } from "gatsby"
// @ts-ignore
import { Disqus } from "gatsby-plugin-disqus"

import Layout from "../../components/Layout"
import Audio from "../../components/Audio"
import SEO from "../../components/seo"
import { Description, Title } from "./podcast.styled"
import { DesktopRowMobileColumn } from "../../shared.styled"
import { siteName } from "../../helpers"

type PodcastData = {
  data: {
    markdownRemark: {
      frontmatter: {
        episodeNumber: number
        season: number
        description: string
        title: string
        slug: string
      }
      html: string
      id: string
      fields: {
        slug: string
      }
    }
  }
}

const PodcastPage = ({ data }: PodcastData): JSX.Element => {
  const {
    frontmatter: { season, episodeNumber, description, title },
    html,
    id,
    fields: { slug },
  } = data.markdownRemark

  const disqusConfig = {
    url: `${siteName + slug.slice(0, -1)}`,
    identifier: id,
    title: title,
  }

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Audio
        url={`https://podcastada.s3.eu-central-1.amazonaws.com/Podcast_${season}_${episodeNumber}.mp3`}
      />
      <div>
        <DesktopRowMobileColumn dangerouslySetInnerHTML={{ __html: html }} />
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}

export default PodcastPage

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        episodeNumber
        season
        description
      }
      id
      fields {
        slug
      }
    }
  }
`
