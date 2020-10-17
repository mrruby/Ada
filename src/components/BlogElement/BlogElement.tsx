import React from "react"

import { getTitlePath } from "../../helpers"
import { Image, ImageContainer, Button } from "./BlogElement.styled"

type Props = {
  title: string
  thumbnail: string
}

const BlogElement = ({ title, thumbnail }: Props): JSX.Element => {
  return (
    <ImageContainer key={title}>
      <Image src={thumbnail} alt="A dog smiling in a party hat" />
      <p>{title}</p>
      <Button to={`/blog/${getTitlePath(title)}`}>Czytaj więcej...</Button>
    </ImageContainer>
  )
}

export default BlogElement
