import React from "react"

import { Paragraph, Border } from "./CustomBanner.styled"
import { Center, Container, Column, Title } from "../../shared.styled"

type Props = {
  title: string
  reverse?: boolean
  paragraph1: string
  paragraph2?: string
  paragraph3?: string
  actionButton?: JSX.Element
  image: JSX.Element
}

const CustomBanner = ({
  title,
  reverse = false,
  actionButton,
  paragraph1,
  paragraph2,
  paragraph3,
  image,
}: Props): JSX.Element => {
  return (
    <>
      <Container
        reverse={reverse}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <Column reverse={reverse}>
          <Title>{title}</Title>
          <Border width={70} height={0.4} />
          <Paragraph isParagraph2={!!paragraph2}>{paragraph1}</Paragraph>
          {paragraph2 && <Paragraph>{paragraph2}</Paragraph>}
          {paragraph3 && <Paragraph>{paragraph3}</Paragraph>}
          {actionButton}
          <Border width={100} height={0.6} />
        </Column>
        <Column reverse={reverse}>
          <Center>{image}</Center>
        </Column>
      </Container>
    </>
  )
}

export default CustomBanner
