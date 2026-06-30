import CountdownTimer from "helpers/CountdownTimer"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MagicCaseStudies from "components/MagicCaseStudies"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicDateBanner from "components/MagicDateBanner"
import MagicFinalCTA from "components/MagicFinalCTA"
import MagicLogoHeader from "components/MagicLogoHeader"
import MagicSaleBanner from "components/MagicSaleBanner"
import MagicSpecialJoin from "components/MagicSpecialJoin"
import MagicStickyBar from "components/MagicStickyBar"
import MagicVideo from "components/MagicVideo"
import MagicWhy from "components/MagicWhy"
import SEO from "components/seo"
import React, { useEffect } from "react"

const MAGIC_WYZWANIE_DEADLINE = new Date("2026-07-10T23:59:00+02:00")
const MAGIC_CLASSIC_PATH = "/magic/"

const MagicWyzwanieCountdown = () => {
  useEffect(() => {
    const redirectToClassicMagic = () => {
      window.location.assign(MAGIC_CLASSIC_PATH)
    }

    const millisecondsToDeadline = +MAGIC_WYZWANIE_DEADLINE - Date.now()

    if (millisecondsToDeadline <= 0) {
      redirectToClassicMagic()
      return
    }

    const redirectTimeout = window.setTimeout(
      redirectToClassicMagic,
      millisecondsToDeadline
    )

    return () => window.clearTimeout(redirectTimeout)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-12 z-40 bg-black px-4 py-3 text-white shadow-xl">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-5">
        <p className="text-center text-sm font-bold uppercase leading-tight md:text-lg">
          Okienko zapisów zamyka się 10 lipca o 23:59
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
      <MagicStickyBar />
      <MagicWyzwanieCountdown />
      <div className="pt-36 md:pt-40">
        <MagicLogoHeader variant="pink" />
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicSaleBanner version={1} />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-ada-pink8">
          <MagicCaseStudies />
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
          <MagicSpecialJoin />
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
