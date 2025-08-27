import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

type Props = {
  title: string
  title2: string
  paragraph1: React.JSX.Element
  paragraph2?: React.JSX.Element
  paragraph3?: React.JSX.Element
  socials?: boolean
}

const TextBanner = ({
  title,
  title2,
  paragraph1,
  paragraph2,
  paragraph3,
  socials,
}: Props) => {
  return (
    <div className="py-6 px-4 lg:pt-[68px] lg:pb-[40px] abu" id="blog-posts">
      <div className="text-ada-blue flex flex-col items-center ">
        <div className="flex flex-col items-center text-center max-w-[864px]">
          <p className="font-bold h-[110px] lg:h-[58px] text-adaTitle lg:text-adaBig text-ada-grey">
            {title}
          </p>
          <h2 className="px-6 text-adaTitle font-bold animate-bounce">
            {title2}
          </h2>
          <p className="text-adaBase pt-8">{paragraph1}</p>
          <p className="text-adaBase pt-4">{paragraph2}</p>
          <p className="text-adaBase pt-4">{paragraph3}</p>
        </div>
      </div>
      {socials && (
        <div className="flex w-full justify-center items-center gap-3 mb-[80px]">
          <Link to="https://www.instagram.com/adapromis/">
            <StaticImage
              src={"../../images/instagram.svg"}
              alt="Ada Promis"
              placeholder="blurred"
              width={29}
              height={29}
            />
          </Link>
          <Link to="https://www.facebook.com/WypadaNieWypada" className="ml-2">
            <StaticImage
              src={"../../images/facebook.svg"}
              alt="Ada Promis"
              placeholder="blurred"
              width={29}
              height={29}
            />
          </Link>
          <Link to="https://adrianna.com.pl/">
            <StaticImage
              src={"../../images/website.svg"}
              alt="Ada Promis"
              placeholder="blurred"
              width={39}
              height={32}
            />
          </Link>
        </div>
      )}
    </div>
  )
}

export default TextBanner
