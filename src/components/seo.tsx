import React from "react"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  description?: string
  title: string
}

const SEO = ({ description, title }: Props): JSX.Element => {
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

  return (
    <>
      <html lang="pl-PL" />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={"https://adrianna.com.pl/img/og_mastermind.webp"}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="facebook-domain-verification"
        content="lghw23ob63nz7oal7ll1jo6ys8txt3"
      />
    </>
  )
}

export default SEO
