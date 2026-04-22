import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MagicComments from "components/MagicComments"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicDateBanner from "components/MagicDateBanner"
import MagicFinalCTA from "components/MagicFinalCTA"
import MagicLogoHeader from "components/MagicLogoHeader"
import MagicSaleBanner from "components/MagicSaleBanner"
import MagicStickyBar from "components/MagicStickyBar"
import MagicVideo from "components/MagicVideo"
import MagicWhy from "components/MagicWhy"
import MasterclassFAQ from "components/MasterclassFAQ"
import SEO from "components/seo"
import React from "react"

const MagicSpecialPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MagicStickyBar />
      <div className="pt-12">
        <MagicLogoHeader variant="pink" />
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicSaleBanner version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicVideo />
      </MaxWithBgColorContainer>
      <div className="bg-ada-white3">
        <MagicBanner1 version={4} />
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicWhy part={9} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicDateBanner version={3} layout="magic-special" />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicDateBanner version={4} layout="magic-special" />
      </MaxWithBgColorContainer>
      <div id="magic-package"></div>
      <MaxWithBgColorContainer bgColor="bg-white">
        <MagicSaleBanner
          version={2}
          url="https://cart.easy.tools/checkout/81632369/magic-subskrypcja"
          column2BgColor="bg-[#F5CEE2]"
          column3BgColor="bg-[#E8F6CD]"
        />
        <div className="max-w-4xl mx-auto px-4 pb-12 pt-6">
          <p className="text-lg text-center text-ada-blue">
            🎁 <strong>Bonus tylko dla Was, uczestniczek wyzwania:</strong> Pierwszych{" "}
            <strong>5 osób</strong>, które dołączą do MAGIC, dostaje{" "}
            <strong>indywidualne spotkanie z analizą lejka reklamowego na start</strong>.
            Siadamy razem 1:1, patrzymy na Twój biznes, Twoją kampanię z wyzwania i
            układamy, co dalej: aby to, co szykujesz w trakcie wyzwania, działało jeszcze
            skuteczniej i przynosiło regularne efekty.
          </p>
        </div>
      </MaxWithBgColorContainer>
      <div className="bg-magic">
        <MaxWithBgColorContainer bgColor="bg-transparent">
          <MagicWhy part={12} />
        </MaxWithBgColorContainer>
      </div>
      <div className="bg-ada-pink8">
        <MagicComments version={1} />
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicBioBanner version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicBanner2 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicCommunityOpinions />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassFAQ version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicFinalCTA />
      </MaxWithBgColorContainer>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Magic: Marketing Ads Girls Inside Collective"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicSpecialPage
