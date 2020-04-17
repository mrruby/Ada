import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "components/Layout"
import SEO from "components/seo"
import Photo from "components/Photo"
import PhotosContainer from "components/PhotosContainer"

type Image = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 3) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
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
      <h1>HI PEOPLE</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <PhotosContainer>
        {listOfImages.map(({ node }: Image) => (
          <Photo
            key={node.id}
            caption={node.caption}
            fixed={node.localFile.childImageSharp.fixed}
          />
        ))}
      </PhotosContainer>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
