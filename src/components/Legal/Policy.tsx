import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "./Legal.styled"

const Policy = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/legal/policy/" } }) {
        html
      }
    }
  `)

  return (
    <Container dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  )
}

export default Policy
