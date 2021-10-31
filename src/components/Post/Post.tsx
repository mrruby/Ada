import { Link } from "gatsby"
import React from "react"
import { PrimaryButton } from "../../shared.styled"
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
  slug: string
}

const Post = ({
  title,
  thumbnail,
  episodeNumber,
  tags = [],
  reverse,
  description,
  slug,
}: Props): JSX.Element => {
  const isBlog = episodeNumber === null
  const formattedTags = isBlog ? tags.filter((e) => e) : ["podcast"]
  return (
    <Container
      reverse={reverse}
      data-sal="fade-in"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <Column reverse={reverse}>
        <Title>{title}</Title>
        <TagsText>{formattedTags.map((el) => `#${el} `).join("")}</TagsText>
        <p>{description}</p>
        <PrimaryButton href={slug.slice(0, -1)}>
          {episodeNumber == null ? "Czytaj więcej..." : "Posłuchaj..."}
        </PrimaryButton>
      </Column>
      <Column reverse={reverse} isImage>
        <Link to={slug.slice(0, -1)}>
          <ImageContainer>
            <Image src={thumbnail} alt="A dog smiling in a party hat" />
          </ImageContainer>
        </Link>
      </Column>
    </Container>
  )
}

export default Post
