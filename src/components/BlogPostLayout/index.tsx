import Markdown from "markdown-to-jsx"
import React from "react"

type Props = {
  title: string
  markdown: string
  date: string
  tags: string[]
}

const BlogPostLayout = ({ title, markdown, date, tags }: Props) => {
  const formattedDate = new Date(date)
    .toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .toUpperCase()
    .replace(/\//g, ".")

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
    <div className="w-6xl max-w-[920px] mx-auto px-3 lg:px-5 pb-10">
      <h1 className="font-bold text-adaSubtitle md:text-adaSubtitleSecondary pb-4 pt-6">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="font-bold text-adaNav text-ada-dark-pink pb-4">
          {tags.map((tag) => `#${tag} `).join("")}
        </p>
        <p className="font-bold text-adaNav pb-[24px]">{formattedDate}</p>
      </div>
      <Markdown options={{ overrides }}>{markdown}</Markdown>
    </div>
  )
}

export default BlogPostLayout
