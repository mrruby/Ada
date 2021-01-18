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
} from "./Post.styled"

type Props = {
  title: string
  thumbnail: string
  episodeNumber: number
  tags: string[]
  reverse: boolean
  description: string
}

const Post = ({
  title,
  thumbnail,
  episodeNumber,
  tags = [],
  reverse,
  description,
}: Props): JSX.Element => {
  const isBlog = episodeNumber === null
  const formattedTags = isBlog ? tags : ["podcast"]
  return (
    <Container reverse={reverse}>
      <Column reverse={reverse}>
        <Title>{title}</Title>
        <TagsText>{formattedTags.map((el) => `#${el} `).join("")}</TagsText>
        <p>{description}</p>
        <PrimaryButton
          href={`/${isBlog ? "blog" : "podcast"}/${getTitlePath(title)}`}
        >
          {episodeNumber == null ? "Czytaj więcej..." : "Posłuchaj..."}
        </PrimaryButton>
      </Column>
      <Column reverse={reverse} isImage>
        <Link to={`/${isBlog ? "blog" : "podcast"}/${getTitlePath(title)}`}>
          <ImageContainer>
            <Image src={thumbnail} alt="A dog smiling in a party hat" />
          </ImageContainer>
        </Link>
      </Column>
    </Container>
  )
}

export default Post
