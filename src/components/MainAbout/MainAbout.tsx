import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import { Container, Column } from "./MainAbout.styled"

const MainAbout = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fixed(height: 600, width: 400) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Column>
        <h1>Cześć</h1>
        <p>To ja Ada</p>
        <p>Moja stronka</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Column>
      <Column>
        <Img
          alt={"banner"}
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      </Column>
    </Container>
  )
}

export default MainAbout
