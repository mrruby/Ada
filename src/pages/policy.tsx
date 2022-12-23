import React from "react"
import Layout from "components/Layout"
import CustomBanner from "components/CustomBanner"
import SEO from "components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Policy } from "components/Legal"

const PolicyPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Polityka prywatności & plików cookies" />
      <Policy />
    </Layout>
  )
}

export default PolicyPage
