import React from "react"

import { Container, AnimationOutside, AnimationInside } from "./Photo.styled"
import Img, { FixedObject } from "gatsby-image"

type Props = {
  id: string
  caption: string
  fixed: FixedObject
}

const Photo = ({ id, fixed, caption }: Props) => {
  const rotate = Math.random() * 50 - 25
  return (
    <AnimationOutside>
      <AnimationInside>
        <Container
          href={`https://www.instagram.com/p/${id}/`}
          target="_blank"
          rel="noopener noreferrer"
          rotate={rotate}
        >
          <Img alt={caption} fixed={fixed} />
        </Container>
      </AnimationInside>
    </AnimationOutside>
  )
}

export default Photo
