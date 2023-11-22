import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

type BlogPostProps = {
  tags: string[]
  title: string
  date: string
  thumbnail: string
  slug: string
}

export const BlogPost: React.FC<BlogPostProps> = ({
  tags,
  title,
  date,
  thumbnail,
  slug,
}) => {
  function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
    const dateObject = new Date(date)
    const formattedDate = dateObject
      .toLocaleDateString("en-UK", options)
      .toUpperCase()
    return formattedDate.replace(/\//g, ".")
  }
  const formattedDate = formatDate(date)

  return (
    <div className="bg-white mx-6 lg:w-[320px] min-h-[400px] flex flex-col items-center justify-between relative mt-[24px] pt-[58px] lg:pb-[40px] mb-[60px] animate-fadeIn hover:shadow-xl">
      <div className="text-center lg:w-[274px]">
        <p className="font-bold text-adaNav text-ada-dark-pink">
          {tags.map((tag) => `#${tag} `).join("")}
        </p>
        <h3 className="font-semibold text-adaDesc py-[24px] min-h-[130px]">
          {title}
        </h3>
        <div className="flex justify-center">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover max-h-[200px] w-auto"
          />
        </div>
        <p className="font-bold text-[10px] pb-[24px]">{formattedDate}</p>
      </div>
      <Button
        type="button"
        text="Czytaj dalej..."
        url={slug}
        border={true}
        textSize="lg:text-adaBase"
        btnStyle="md:w-[245px]"
      />
    </div>
  )
}
