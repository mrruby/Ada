import TrainingLandingPage from "components/TrainingLandingPage"
import SEO from "components/seo"
import React from "react"
import formHTML from "../values/forms/form-marketerki.html"

const MarketerkiPage = () => {
  return (
    <TrainingLandingPage
      heroBgColor="bg-ada-magicYellow"
      formHTML={formHTML}
      heroLeft={
        <h1 className="text-[48px] lg:text-[64px] font-anton font-normal leading-[125%] text-black">
          Jak prowadzić{" "}
          <span className="text-ada-magicPurple4">reklamy dla klientów</span> i
          nie zwariować
        </h1>
      }
    />
  )
}

export const Head = () => <SEO title="Marketerki" />

export default MarketerkiPage
