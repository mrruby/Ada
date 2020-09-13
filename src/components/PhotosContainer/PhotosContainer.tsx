import React from "react"
import { Container } from "./PhotosContainer.styled"
import "animate.css/animate.compat.css"

type Props = {
  children: React.ReactNode
}

const PhotosContainer = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>
}

export default PhotosContainer
