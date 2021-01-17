import { Link } from "gatsby"
import React from "react"
import { PrimaryButton } from "../../shared.styled"

import { getTitlePath } from "../../helpers"
import {
  Image,
  Column,
  TagsText,
  Title,
  Container,
  ImageContainer,
} from "./BlogElement.styled"

type Props = {
  title: string
  thumbnail: string
  tags: string[]
  reverse: boolean
  description: string
}

const BlogElement = ({
  title,
  thumbnail,
  tags,
  reverse,
  description,
}: Props): JSX.Element => {
  return (
    <Container reverse={reverse}>
      <Column reverse={reverse}>
        <Title>{title}</Title>
        <TagsText>{tags.map((el) => `#${el} `).join("")}</TagsText>
        <p>{description}</p>
        <PrimaryButton href={`/blog/${getTitlePath(title)}`}>
          Czytaj więcej...
        </PrimaryButton>
      </Column>
      <Column reverse={reverse} isImage>
        <Link to={`/blog/${getTitlePath(title)}`}>
          <ImageContainer>
            <Image src={thumbnail} alt="A dog smiling in a party hat" />
          </ImageContainer>
        </Link>
      </Column>
    </Container>
  )
}

export default BlogElement
