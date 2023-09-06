import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "components/Post"
import { DesktopRowMobileColumn } from "../shared.styled"
import { isFutureDate } from "../helpers"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import BlogPosts from "components/BlogPosts"
import NewsletterBanner from "components/NewsletterBanner"

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
    fields: {
      slug: string
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
        sort: { frontmatter: { date: DESC } }
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout
      flowerBlue={true}
      flowerBlue3={true}
    >
      <SEO title="Blog" />
      <MaxWithBgColorContainer >
      <CustomBanner
        title="Witaj na moim blogu!"
        paragraph1={<>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla b</>}
        btnText="Pokaż mi więcej"
        image={<StaticImage src={"../images/ada-blog.png"} alt="Ada Promis - hero" placeholder="none"  width={680} height={760} />}
        paragraphStyle="max-w-[532px]"
        imgStyle="lg:absolute top-0 right-0"
        btnUrl="#posty"
      />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear" extraStyle="z-20">
        <BlogPosts />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
          <NewsletterBanner 
            title3
            paragraph
            image
          />
        </MaxWithBgColorContainer>
      {/* <DesktopRowMobileColumn>
        {edges
          .filter(
            ({ node: { frontmatter } }) => !isFutureDate(frontmatter.date)
          )
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
      </DesktopRowMobileColumn> */}
    </Layout>
  )
}

export default BlogPage
