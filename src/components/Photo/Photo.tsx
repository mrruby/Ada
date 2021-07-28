import React from "react"

import { Container, AnimationOutside, AnimationInside } from "./Photo.styled"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type Props = {
  id: string
  caption: string
  fixed: IGatsbyImageData
}

const Photo = ({ id, fixed, caption }: Props): JSX.Element => {
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
          <GatsbyImage image={fixed} alt={caption} />
        </Container>
      </AnimationInside>
    </AnimationOutside>
  )
}

export default Photo
