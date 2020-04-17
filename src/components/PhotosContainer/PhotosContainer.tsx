import React from "react"
import { Container } from "./PhotosContainer.styled"
import "animate.css/animate.min.css"

type Props = {
  children: React.ReactNode
}

const PhotosContainer = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default PhotosContainer
