import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { OutersContainer, Title } from "./MainBlogList.styled"
import BlogElement from "components/BlogElement"
import { DesktopRowMobileColumn } from "../../shared.styled"

type Blog = {
  node: {
    frontmatter: {
      title: string
      thumbnail: string
      category: string
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
              category
            }
          }
        }
      }
    }
  `)

  return (
    <OutersContainer>
      <Title>Ostatnie wpisy na blogu</Title>
      <DesktopRowMobileColumn>
        {edges.map(({ node: { frontmatter } }) => (
          <BlogElement key={frontmatter.title} {...frontmatter} />
        ))}
      </DesktopRowMobileColumn>
    </OutersContainer>
  )
}

export default MainBlogList
