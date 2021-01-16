import { Link } from "gatsby"
import React from "react"

import { getTitlePath } from "../../helpers"
import {
  Image,
  Column,
  Button,
  TagsBloc,
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
        <TagsBloc>
          <TagsText>{tags.join(", ")}</TagsText>
        </TagsBloc>
        <Title>{title}</Title>
        <p>{description}</p>
        <Button to={`/blog/${getTitlePath(title)}`}>Czytaj więcej...</Button>
      </Column>
      <Column reverse={reverse}>
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
