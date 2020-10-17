import React from "react"

import { getTitlePath } from "../../helpers"
import {
  Image,
  ImageContainer,
  Button,
  CategoryBloc,
  CategoryText,
  Title,
} from "./BlogElement.styled"

type Props = {
  title: string
  thumbnail: string
  category: string
}

const BlogElement = ({ title, thumbnail, category }: Props): JSX.Element => {
  return (
    <ImageContainer key={title}>
      <Image src={thumbnail} alt="A dog smiling in a party hat" />
      <CategoryBloc>
        <CategoryText>{category}</CategoryText>
      </CategoryBloc>
      <Title>{title}</Title>
      <Button to={`/blog/${getTitlePath(title)}`}>Czytaj więcej...</Button>
    </ImageContainer>
  )
}

export default BlogElement
