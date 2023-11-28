import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <MaxWithBgColorContainer extraStyle="h-[450px] md:h-[820px] pt-[60px] flex flex-col justify-center text-center">
      <h1 className="px-4 text-adaTitle font-bold pb-8">NOT FOUND</h1>
      <p className="lg:text-adaBase pt-[24px] font-medium leading-tight">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </MaxWithBgColorContainer>
  </Layout>
)

export const Head = () => <SEO title="404: Not found" />

export default NotFoundPage
