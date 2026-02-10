import BlogPosts from "components/BlogPosts"
import CustomBanner from "components/CustomBanner"
import InfoBanner from "components/InfoBanner"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import NewsletterBanner from "components/NewsletterBanner"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

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

const BlogPage = () => {
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
      <MaxWithBgColorContainer>
        <CustomBanner
          title="Hej, tu Ada!"
          paragraph1={
            <>
              Gdy w 2018 roku zaczęłam pracę w marketingu, poczułam, że da się
              robić marketing inaczej: baz nachalnej sprzedaży i krzyczenia
              „kup, kup, kup!”.
            </>
          }
          paragraph2={
            <>
              Dlatego na co dzień praktykuję slow marketing: przemyślany,
              wartościowy, zbudowany na relacjach.
              <br />
              Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny
              oraz uczę, jak robić skuteczny marketing w zgodzie ze sobą.
            </>
          }
          btnText="Pokaż mi więcej"
          image={
            <StaticImage
              src={"../images/ada_blog.webp"}
              alt="Ada Promis - hero"
              placeholder="blurred"
              width={680}
              height={740}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          }
          paragraphStyle="max-w-[532px] h-[740px] pt-[160px] text-adaBase"
          paragraphTextStyle="text-adaBase"
          imgStyle="lg:absolute top-0 right-[-200px]"
          btnUrl="posts"
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear">
        <BlogPosts postsData={edges} />
        <InfoBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <NewsletterBanner title3 paragraph image />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Blog" />

export default BlogPage
