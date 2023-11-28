import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import KnowledgeBanner from "components/KnowledgeBanner"
import Knowledge from "components/Knowledge"
import NewsletterBanner from "components/NewsletterBanner"
import TextBanner from "components/TextBanner"

const MaterialsPage = (): JSX.Element => {
  return (
    <Layout
      flowerBlue={true}
      starPink={true}
      flowerWhite={true}
      flowerBlue3={true}
    >
      <MaxWithBgColorContainer bgColor="bg-transparent">
        <KnowledgeBanner />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <TextBanner
          title="Co tu znajdziesz?"
          title2="Same dobroci!"
          paragraph1={
            <>
              <span className="font-bold">bezpłatne</span> checklisty i mini{" "}
              <span className="font-bold">e-booki</span>{" "}
            </>
          }
          paragraph2={
            <>
              zapisy na <span className="font-bold">darmowe </span>szkolenia i
              webinary
            </>
          }
          paragraph3={
            <>
              informacje o <span className="font-bold">nowych produktach</span>{" "}
              edukacyjnych
            </>
          }
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <Knowledge />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-linear3">
        <TextBanner
          title="A tak w ogóle..."
          title2="Cześć!"
          paragraph1={
            <>
              Nazywam się Adrianna Promis-Urbas, na co dzień tworzę slow
              marketing. Co robię? Skąd się wzięłam? Co mogę dla Ciebie zrobić?
              Przeczytasz o tym tutaj.{" "}
            </>
          }
          paragraph2={
            <>
              W razie pytań napisz do mnie maila:{" "}
              <a
                href="mailto:adrianna@getbold.agency"
                className="hover:text-ada-pink font-bold"
              >
                adrianna@getbold.agency
              </a>
              . Zawsze chętnie odpowiem i umówię się na wirtualną kawkę! ☕
            </>
          }
          socials
        />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <NewsletterBanner
          title4
          paragraph2
          btnText="Zapisuję się i zdobywam wiedzę!"
          image
        />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Materiały" />

export default MaterialsPage
