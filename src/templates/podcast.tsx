import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

type Podcast = {
  data: {
    markdownRemark: {
      frontmatter: {
        number: number
        description: string
      }
    }
  }
}

const PodcastPage = ({ data }: Podcast) => {
  const { number, description } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Podcast" />
      <audio controls>
        <source
          src={`https://podcastada.s3.eu-central-1.amazonaws.com/Podcast${number}.mp3`}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <p>{description}</p>
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
        number
        description
      }
    }
  }
`
