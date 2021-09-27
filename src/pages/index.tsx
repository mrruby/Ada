import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"
import SEO from "components/seo"
import Photo from "components/Photo"
import PhotosContainer from "components/PhotosContainer"
import MainPostList from "components/MainPostList"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"

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
      <CustomBanner
        title="Cześć!"
        paragraph1="Nazywam się Ada i zajmuję się strategią marketingową, mediami społecznościowymi i płatnymi reklamami.
        Podpowiem Ci, jak prowadzić świadomy, kreatywny marketing dla Twojego biznesu."
        image={
          <StaticImage
            imgStyle={{ margin: "0 auto", display: "block" }}
            width={400}
            src={"../images/banner.webp"}
            alt="banner"
          />
        }
      />
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
