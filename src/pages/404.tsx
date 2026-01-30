import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import { Button } from "helpers/Button"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Ta strona nie istnieje" />
    <MaxWithBgColorContainer extraStyle="h-[450px] md:h-[900px] pt-[60px] flex flex-col justify-center text-center">
      <h1 className="px-4 text-adaTitle font-bold pb-8">
        Ta strona nie istnieje, błąd 404.
      </h1>
      <Button
        type="button"
        text="Przejdź na stronę główną"
        url="/"
        btnStyle="md:w-[440px]"
      />
    </MaxWithBgColorContainer>
  </Layout>
)

export default NotFoundPage
