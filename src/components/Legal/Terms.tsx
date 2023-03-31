import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "./Legal.styled"

const Terms = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "/legal/terms/" } }) {
        html
      }
    }
  `)

  console.log(data)
  return (
    <Container dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  )
}

export default Terms
