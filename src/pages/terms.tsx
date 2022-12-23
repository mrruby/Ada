import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"
import Terms from "components/Legal/Terms"

const TermsPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Regulamin" />
      <Terms />
    </Layout>
  )
}

export default TermsPage
