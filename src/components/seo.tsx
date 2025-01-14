import React from "react"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  description?: string
  script?: string
  title: string
  image?: string
}

const SEO = ({ description, title, script, image }: Props): JSX.Element => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultImage = "https://adrianna.com.pl/img/og_mastermind.webp"
  const ogImage = image || defaultImage
  const absoluteImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `https://adrianna.com.pl${ogImage}`
  const instagramOptimizedUrl = absoluteImageUrl.replace(/\?.*$/, "")

  return (
    <>
      <html lang="pl-PL" />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={instagramOptimizedUrl} />
      <meta property="og:image:secure_url" content={instagramOptimizedUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="adrianna.com.pl" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={instagramOptimizedUrl} />
      <meta
        name="facebook-domain-verification"
        content="lghw23ob63nz7oal7ll1jo6ys8txt3"
      />
      {script && <script>{script}</script>}
    </>
  )
}

export default SEO
