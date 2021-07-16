import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "components/Post"
import { DesktopRowMobileColumn } from "../shared.styled"
import { isFutureDate } from "../helpers"

type Blog = {
  node: {
    frontmatter: {
      title: string
      description: string
      date: string
      thumbnail: string
      episodeNumber: number
      tags: string[]
    }
  }
}

type Blogs = {
  allMarkdownRemark: { edges: Blog[] }
}

const BlogPage = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  }: Blogs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blog/" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
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
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Lista moich blogów</h1>
      <DesktopRowMobileColumn>
        {edges
          .filter(
            ({ node: { frontmatter } }) => !isFutureDate(frontmatter.date)
          )
          .map(({ node: { frontmatter } }, index) => (
            <Post
              reverse={index % 2 == 0}
              key={frontmatter.title}
              {...frontmatter}
            />
          ))}
      </DesktopRowMobileColumn>
    </Layout>
  )
}

export default BlogPage
