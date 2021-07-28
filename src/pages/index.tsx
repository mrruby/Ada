import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"
import SEO from "components/seo"
import Photo from "components/Photo"
import PhotosContainer from "components/PhotosContainer"
import MainPostList from "components/MainPostList"

type Image = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any
}

const IndexPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 3) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                gatsbyImageData(width: 200, height: 200, layout: FIXED)
              }
            }
          }
        }
      }
    }
  `)

  const listOfImages = data.allInstaNode.edges

  return (
    <Layout>
      <SEO title="Home" />
      <MainPostList />
      <PhotosContainer>
        {listOfImages.map(({ node }: Image) => (
          <Photo
            key={node.id}
            id={node.id}
            caption={node.caption}
            fixed={node.localFile.childImageSharp.gatsbyImageData}
          />
        ))}
      </PhotosContainer>
    </Layout>
  )
}

export default IndexPage
