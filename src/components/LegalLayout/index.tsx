import React from "react"
import Markdown from "markdown-to-jsx"

type Props = {
  markdown: string
}

const LegalLayout = ({
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
    <div className="pt-[70px] w-6xl max-w-[920px] mx-auto px-3 lg:px-5 pb-10">
      <Markdown options={{ overrides }}>{markdown}</Markdown>
    </div>
  )
}

export default LegalLayout
