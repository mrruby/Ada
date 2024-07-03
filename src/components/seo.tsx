import React from "react"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  description?: string
  script?: string
  title: string
}

const SEO = ({ description, title, script }: Props): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = "https://adrianna.com.pl/img/og_mastermind.webp"

  return (
    <>
      <html lang="pl-PL" />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="adrianna.com.pl" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta
        name="facebook-domain-verification"
        content="lghw23ob63nz7oal7ll1jo6ys8txt3"
      />
      {script && <script>{script}</script>}
    </>
  )
}

export default SEO
