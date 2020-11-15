import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import {
  Container,
  Column,
  Title,
  Paragraph,
  Border,
  MainBox,
} from "./About.styled"
import { theme } from "components/Layout/theme"
import { Center } from "../../shared.styled"

const About = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      imageDesktop: file(relativePath: { eq: "about-me.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageMobile: file(relativePath: { eq: "about-me.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <MainBox left={false} />
      <Container>
        <Column>
          <Title>KIM JESTEM?</Title>
          <Border width={70} height={0.4} />
          <Paragraph>
            Jako małe dziecko pochłaniałam stosy książek, aby następnie zacząć
            pisać swoje. Jako że niewiele z nich ujrzało światło dzienne, jako
            28-latka postanowiłam nadrobić stracony czas i podzielić się ze
            światem tym co czuję i myślę.
          </Paragraph>
          <Paragraph>
            pracuję w marketingu (wiecie, te fejsbuki i inne...), uwielbiam
            gotować i uczę się uważności w życiu codziennym.
          </Paragraph>
          <Border width={100} height={0.6} />
        </Column>
        <Column>
          <Center>
            <Img
              alt={"banner"}
              imgStyle={{ margin: "0 auto", display: "block" }}
              fixed={[
                data.imageMobile.childImageSharp.fixed,
                {
                  ...data.imageDesktop.childImageSharp.fixed,
                  media: `(min-width: ${theme.dimensions.desktop})`,
                },
              ]}
            />
          </Center>
        </Column>
      </Container>
      <MainBox left={true} />
    </>
  )
}

export default About
