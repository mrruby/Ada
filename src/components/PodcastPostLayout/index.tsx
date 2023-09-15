import React from "react"
import Markdown from "markdown-to-jsx"

type Props = {
  title: string
  description: string
  markdown: string
}

const PodcastPostLayout = ({
  title,
  description,
  markdown,
}: Props): JSX.Element => {
  const overrides = {
    h2: {
      props: {
        className: "font-bold md:text-adaSubtitle py-3",
      },
    },
    h3: {
      props: {
        className: "font-bold py-3",
      },
    },
    h4: {
      props: {
        className: "font-bold py-3",
      },
    },
    ul: {
      props: {
        className: "list-disc pl-6 pb-4",
      },
    },
    ol: {
      props: {
        className: "list-decimal pl-6 pb-4",
      },
    },
    p: {
      props: {
        className: "pb-4",
      },
    },
  }

  return (
    <div className="pt-4  pb-10">
      <h1 className="font-bold text-adaSubtitle md:text-adaSubtitleSecondary pb-4 pt-6">
        {title}
      </h1>
      <p className="font-bold py-4">{description}</p>
      <h2 className="font-bold py-3 md:text-adaSubtitle">Transkrypcja: </h2>
      <Markdown options={{ overrides }}>{markdown}</Markdown>
    </div>
  )
}

export default PodcastPostLayout
