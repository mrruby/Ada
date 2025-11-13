import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

const transitionClass = `
  transition-transform transition-opacity duration-700 ease-out
  origin-left
`

const CommentBlock1 = () => {
  const [animated, setAnimated] = useState(false)

  return (
    <div
      className="flex flex-col items-start w-screen justify-center gap-4 mb-12"
      onMouseEnter={() => setAnimated(true)}
    >
      <div className="mx-auto">
        <div
          className={`
    flex justify-start ${transitionClass}
    ${animated ? "opacity-100 scale-100" : "lg:opacity-0 scale-75"}
  `}
        >
          <div className="flex items-center lg:gap-12">
            <StaticImage
              loading="eager"
              src="../../images/comment1a.webp"
              alt="Komentarz 1a"
              placeholder="blurred"
              width={580}
              height={333}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
            <StaticImage
              src="../../images/commentIcon1a.png"
              alt="Ikona 1a"
              placeholder="none"
              width={50}
              height={50}
              className="flex-shrink-0 opacity-0 lg:opacity-100"
            />
          </div>
        </div>
        <div
          className={`
    flex justify-end ${transitionClass} delay-200 lg:-mt-12
    ${animated ? "opacity-100 scale-100" : "lg:opacity-0 scale-75"}
    origin-right
  `}
        >
          <div className="flex items-center gap-24">
            <StaticImage
              src="../../images/commentIcon1b.png"
              alt="Ikona 1b"
              placeholder="none"
              width={50}
              height={50}
              className="flex-shrink-0 opacity-0 lg:opacity-100"
            />
            <StaticImage
              loading="eager"
              src="../../images/comment1ba.webp"
              alt="Komentarz 1b"
              placeholder="blurred"
              width={600}
              height={356}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const CommentBlock2 = () => {
  const [animated, setAnimated] = useState(false)

  return (
    <div
      className="flex flex-col items-start w-screen justify-center gap-4 mb-12"
      onMouseEnter={() => setAnimated(true)}
    >
      <div className="mx-auto">
        <div
          className={`
    flex justify-start ${transitionClass}
    ${animated ? "opacity-100 scale-100" : "lg:opacity-0 scale-75"}
  `}
        >
          <div className="flex items-center lg:gap-12">
            <StaticImage
              loading="eager"
              src="../../images/comment2a.webp"
              alt="Komentarz 2a"
              placeholder="blurred"
              width={565}
              height={178}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
            <StaticImage
              src="../../images/commentIcon2a.png"
              alt="Ikona 2a"
              placeholder="none"
              width={50}
              height={50}
              className="flex-shrink-0 opacity-0 lg:opacity-100"
            />
          </div>
        </div>
        <div
          className={`
    flex justify-end ${transitionClass} delay-200 lg:-mt-12
    ${animated ? "opacity-100 scale-100" : "lg:opacity-0 scale-75"}
    origin-right
  `}
        >
          <div className="flex items-center gap-24">
            <StaticImage
              src="../../images/commentIcon2b.png"
              alt="Ikona 2b"
              placeholder="none"
              width={50}
              height={50}
              className="flex-shrink-0 opacity-0 lg:opacity-100"
            />
            <StaticImage
              loading="eager"
              src="../../images/comment2b.webp"
              alt="Komentarz 2b"
              placeholder="blurred"
              width={574}
              height={195}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const CommentBlock3 = () => {
  const [animated, setAnimated] = useState(false)

  return (
    <div
      className="flex flex-col items-start w-screen justify-center gap-4 mb-12"
      onMouseEnter={() => setAnimated(true)}
    >
      <div className="mx-auto">
        <div
          className={`
    flex justify-start ${transitionClass}
    ${animated ? "opacity-100 scale-100" : "lg:opacity-0 scale-75"}
  `}
        >
          <div className="flex items-center lg:gap-12">
            <StaticImage
              loading="eager"
              src="../../images/comment3a.webp"
              alt="Komentarz 3a"
              placeholder="blurred"
              width={620}
              height={223}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
            <StaticImage
              src="../../images/commentIcon3a.png"
              alt="Ikona 3a"
              placeholder="none"
              width={50}
              height={50}
              className="flex-shrink-0 opacity-0 lg:opacity-100"
            />
          </div>
        </div>
        <div
          className={`
    flex justify-end ${transitionClass} delay-200 lg:-mt-12
    ${animated ? "opacity-100 scale-100" : "lg:opacity-0 scale-75"}
    origin-right
  `}
        >
          <div className="flex items-center gap-24">
            <StaticImage
              src="../../images/commentIcon3b.png"
              alt="Ikona 3b"
              placeholder="none"
              width={50}
              height={50}
              className="flex-shrink-0 opacity-0 lg:opacity-100"
            />
            <StaticImage
              loading="eager"
              src="../../images/comment3b.webp"
              alt="Komentarz 3b"
              placeholder="blurred"
              width={568}
              height={328}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const MagicComments = ({ version }: { version: number }) => {
  return (
    <div className="my-20 w-screen">
      {version === 1 && (
        <div className="flex flex-col items-center text-ada-black">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            Zobacz przykładowe pytania i odpowiedzi!
          </Typography>

          <CommentBlock1 />
          <CommentBlock2 />
          <CommentBlock3 />
        </div>
      )}
    </div>
  )
}

export default MagicComments
