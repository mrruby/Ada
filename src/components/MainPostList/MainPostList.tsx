import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Post from "components/Post"
import { DesktopRowMobileColumn } from "../../shared.styled"

type PostEntry = {
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

type Posts = {
  allMarkdownRemark: { edges: PostEntry[] }
}

const MainBlogList = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: Posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              episodeNumber
              title
              thumbnail
              tags
              description
            }
          }
        }
      }
    }
  `)

  return (
    <DesktopRowMobileColumn>
      {edges.map(({ node: { frontmatter } }, index) => (
        <Post
          reverse={index % 2 == 0}
          key={frontmatter.title}
          {...frontmatter}
        />
      ))}
    </DesktopRowMobileColumn>
  )
}

export default MainBlogList
