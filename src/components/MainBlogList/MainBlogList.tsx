import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogElement from "components/BlogElement"
import { DesktopRowMobileColumn } from "../../shared.styled"

type Blog = {
  node: {
    frontmatter: {
      title: string
      description: string
      thumbnail: string
      tags: string[]
    }
  }
}

type Blogs = {
  allMarkdownRemark: { edges: Blog[] }
}

const MainBlogList = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: Blogs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blog/" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
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

  const listOfEdges = [...edges, ...edges, ...edges, ...edges, ...edges]

  return (
    <DesktopRowMobileColumn>
      {listOfEdges.map(({ node: { frontmatter } }, index) => (
        <BlogElement
          reverse={index % 2 == 0}
          key={frontmatter.title}
          {...frontmatter}
        />
      ))}
    </DesktopRowMobileColumn>
  )
}

export default MainBlogList
