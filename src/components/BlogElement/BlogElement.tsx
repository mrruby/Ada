import React from "react"

import { getTitlePath } from "../../helpers"
import {
  Image,
  ImageContainer,
  Button,
  TagsBloc,
  TagsText,
  Title,
} from "./BlogElement.styled"

type Props = {
  title: string
  thumbnail: string
  tags: string[]
}

const BlogElement = ({ title, thumbnail, tags }: Props): JSX.Element => {
  return (
    <ImageContainer key={title}>
      <Image src={thumbnail} alt="A dog smiling in a party hat" />
      <TagsBloc>
        <TagsText>{tags.join(", ")}</TagsText>
      </TagsBloc>
      <Title>{title}</Title>
      <Button to={`/blog/${getTitlePath(title)}`}>Czytaj więcej...</Button>
    </ImageContainer>
  )
}

export default BlogElement
