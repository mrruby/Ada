import PuzzleForm from "components/PuzzleForm"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const PuzzleEnd = (): JSX.Element => {
  return (
    <div
      id="puzzle-end"
      className="mb-10 flex flex-col max-w-3xl items-center text-center mx-auto"
    >
      <PuzzleForm />

      <h2 className="text-adaSubtitleThird font-bold text-ada-blue mb-6">
        Nie mogę się doczekać Twoich efektów!
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <StaticImage
          src="../../images/puzzle-opinion-1.webp"
          alt="Ada Promis - opinion 1"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={100}
          className="w-full md:w-1/3"
        />
        <StaticImage
          src="../../images/puzzle-opinion-2.webp"
          alt="Ada Promis - opinion 2"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={100}
          className="w-full md:w-1/3"
        />
        <StaticImage
          src="../../images/puzzle-opinion-3.webp"
          alt="Ada Promis - opinion 3"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          quality={100}
          className="w-full md:w-1/3"
        />
      </div>
    </div>
  )
}

export default PuzzleEnd
