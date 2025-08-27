import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import PodcastPostLayout from "components/PodcastPostLayout"
import { graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import React from "react"
import Audio from "../../components/Audio"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
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
      rawMarkdownBody: any
      fields: {
        slug: string
      }
    }
  }
}

const PodcastPage = ({ data }: PodcastData) => {
  const {
    frontmatter: { season, episodeNumber, description, title },
    rawMarkdownBody,
    fields: { slug },
  } = data.markdownRemark

  const disqusConfig = {
    url: `${siteName + slug.slice(0, -1)}`,
    identifier: slug,
    title: title,
  }

  return (
    <Layout>
      <MaxWithBgColorContainer extraStyle="pt-[70px] px-3 lg:px-5 flex flex-col w-6xl max-w-[920px] mx-auto">
        <Audio
          url={`https://podcastada.s3.eu-central-1.amazonaws.com/Podcast_${season}_${episodeNumber}.mp3`}
        />
        <PodcastPostLayout
          title={title}
          description={description}
          markdown={rawMarkdownBody}
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer extraStyle="px-2">
        <Disqus config={disqusConfig} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default PodcastPage

export const Head = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description },
    },
  },
}: PodcastData) => <SEO title={title} description={description} />

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        episodeNumber
        season
        description
      }
      rawMarkdownBody
      fields {
        slug
      }
    }
  }
`
