import React from "react"
import { StaticImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

type Props = {
  alt: string
}

const Logo = ({ alt }: Props): JSX.Element => {
  return <StaticImage width={150} src="../../../images/logo.webp" alt={alt} />
}

export default Logo