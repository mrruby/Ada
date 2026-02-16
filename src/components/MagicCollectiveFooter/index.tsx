import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const MagicCollectiveFooter = ({ version }: { version: number }) => {
  return (
    <div className="flex justify-center py-8">
      {version === 1 && (
        <a href="https://www.instagram.com/adapromis/" target="_blank">
          <StaticImage
            src={"../../images/instagramBtn.svg"}
            alt=""
            placeholder="blurred"
            width={48}
            height={48}
          />
        </a>
      )}
    </div>
  )
}

export default MagicCollectiveFooter
