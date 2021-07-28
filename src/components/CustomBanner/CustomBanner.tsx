import React from "react"

import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import {
  Container,
  Column,
  Title,
  Paragraph,
  Border,
  MainBox,
} from "./CustomBanner.styled"
import { Center } from "../../shared.styled"

type Props = {
  title: string
  reverse?: boolean
  paragraph1: string
  paragraph2?: string
  actionButton?: JSX.Element
  image: JSX.Element
}

const CustomBanner = ({
  title,
  reverse = false,
  actionButton,
  paragraph1,
  paragraph2,
  image,
}: Props): JSX.Element => {
  return (
    <>
      <MainBox reverse={reverse} left={false} />
      <Container reverse={reverse}>
        <Column reverse={reverse}>
          <Title>{title}</Title>
          <Border width={70} height={0.4} />
          <Paragraph isParagraph2={!!paragraph2}>{paragraph1}</Paragraph>
          {paragraph2 && <Paragraph>{paragraph2}</Paragraph>}
          {actionButton}
          <Border width={100} height={0.6} />
        </Column>
        <Column reverse={reverse}>
          <Center>{image}</Center>
        </Column>
      </Container>
      <MainBox reverse={reverse} left={true} />
    </>
  )
}

export default CustomBanner
