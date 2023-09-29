import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
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
    <Layout flowerBlue={true} flowerBlue3={true} flowerWhite={true}>
      <SEO title="Blog" />
      <MaxWithBgColorContainer>
        <CustomBanner
          title="Witaj na moim blogu!"
          paragraph1={
            <>
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla b
            </>
          }
          btnText="Pokaż mi więcej"
          image={
            <StaticImage
              src={"../images/ada_blog.webp"}
              alt="Ada Promis - hero"
              placeholder="none"
              width={680}
              height={740}
            />
          }
          paragraphStyle="max-w-[532px]"
          imgStyle="lg:absolute top-0 right-0"
          btnUrl="#posts"
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
        <BlogPosts postsData={edges} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <NewsletterBanner title3 paragraph image />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export default BlogPage
