import CountdownTimer from "helpers/CountdownTimer"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBanner5 from "components/MagicBanner5"
import MagicBioBanner from "components/MagicBioBanner"
import MagicCaseStudies from "components/MagicCaseStudies"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicDateBanner from "components/MagicDateBanner"
import MagicFinalCTA from "components/MagicFinalCTA"
import MagicLogoHeader from "components/MagicLogoHeader"
import MagicSaleBanner from "components/MagicSaleBanner"
import MagicVideo from "components/MagicVideo"
import MagicWhy from "components/MagicWhy"
import SEO from "components/seo"
import React, { useEffect } from "react"
import { navigate } from "gatsby"

const MAGIC_WYZWANIE_DEADLINE = new Date("2026-07-10T23:59:00+02:00")
const MAGIC_CLASSIC_PATH = "/magic/"

const MagicWyzwanieCountdown = () => {
  useEffect(() => {
    const redirectToClassicMagic = () => {
      navigate(MAGIC_CLASSIC_PATH)
    }

    // The delay for window.setTimeout is stored as a 32-bit int and overflows
    // past ~24.8 days, which would fire the redirect immediately. Poll the
    // deadline once a second instead so it stays correct for any deadline.
    if (Date.now() >= +MAGIC_WYZWANIE_DEADLINE) {
      redirectToClassicMagic()
      return
    }

    const deadlineCheck = window.setInterval(() => {
      if (Date.now() >= +MAGIC_WYZWANIE_DEADLINE) {
        redirectToClassicMagic()
      }
    }, 1000)

    return () => window.clearInterval(deadlineCheck)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-40 bg-black px-4 py-3 text-white shadow-xl">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-5">
        <p className="text-center text-sm font-bold uppercase leading-tight md:text-lg">
          Specjalna oferta kończy się za:
        </p>
        <div className="w-full max-w-[520px]">
          <CountdownTimer
            targetDate={MAGIC_WYZWANIE_DEADLINE}
            color="bg-black"
            textColor="text-white"
          />
        </div>
        <a
          href="#magic-package"
          className="rounded-full bg-ada-magicPink4 px-5 py-2 text-sm font-bold uppercase text-black transition hover:opacity-90 md:text-base"
        >
          Dołączam
        </a>
      </div>
    </div>
  )
}

const MagicWyzwaniePage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MagicWyzwanieCountdown />
      <div className="pt-24 md:pt-28">
        <MagicLogoHeader variant="pink" />
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicSaleBanner version={1} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-pink8">
          <MagicCaseStudies />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicPurple4">
          <MagicBanner5 version={1} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicPink4">
          <MagicBanner5 version={2} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-pink8">
          <MagicVideo />
        </MaxWithBgColorContainer>
        <div className="bg-ada-white3">
          <MagicBanner1 version={4} />
        </div>
        <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
          <MagicWhy part={9} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
          <MagicDateBanner version={5} layout="magic-special" />
        </MaxWithBgColorContainer>
        <div id="magic-package" className="scroll-mt-36"></div>
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicSaleBanner
            version={2}
            url="https://cart.easy.tools/checkout/81632369/magic-subskrypcja"
            column2BgColor="bg-[#F5CEE2]"
            column3BgColor="bg-[#E8F6CD]"
          />
        </MaxWithBgColorContainer>
        <div className="bg-magic">
          <MaxWithBgColorContainer bgColor="bg-transparent">
            <MagicWhy part={12} />
          </MaxWithBgColorContainer>
        </div>
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicBioBanner version={3} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-pink8">
          <MagicBanner2 version={2} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-magicYellow">
          <MagicCommunityOpinions />
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

export default MagicWyzwaniePage
