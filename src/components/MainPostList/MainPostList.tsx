import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Post from "components/Post"
import { DesktopRowMobileColumn } from "../../shared.styled"
import { isFutureDate } from "../../helpers"

type PostEntry = {
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

type Posts = {
  allMarkdownRemark: { edges: PostEntry[] }
}

const MainBlogList = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: Posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 20
        filter: { fileAbsolutePath: { regex: "/^(?!.*/(terms|policy).md$)/" } }
      ) {
        edges {
          node {
            frontmatter {
              episodeNumber
              title
              thumbnail
              tags
              description
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
    <DesktopRowMobileColumn>
      {edges
        .filter(({ node: { frontmatter } }) => !isFutureDate(frontmatter.date))
        .slice(0, 6)
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
  )
}

export default MainBlogList
