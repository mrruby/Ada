import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "components/Layout"
import SEO from "components/seo"
import Photo from "components/Photo"
import PhotosContainer from "components/PhotosContainer"
import MainBlogList from "components/MainBlogList"
import MainAbout from "components/MainAbout"

type Image = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any
}

const IndexPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 3) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "main_banner.png" }) {
        childImageSharp {
          fixed(width: 800, height: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const listOfImages = data.allInstaNode.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Img alt={"banner"} fixed={data.placeholderImage.childImageSharp.fixed} />
      <MainAbout />
      <PhotosContainer>
        {listOfImages.map(({ node }: Image) => (
          <Photo
            key={node.id}
            id={node.id}
            caption={node.caption}
            fixed={node.localFile.childImageSharp.fixed}
          />
        ))}
      </PhotosContainer>
      <MainBlogList />
    </Layout>
  )
}

export default IndexPage
