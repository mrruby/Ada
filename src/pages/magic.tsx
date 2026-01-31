import React, { lazy, Suspense } from "react"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicStickyBar from "components/MagicStickyBar"
import MagicLogoHeader from "components/MagicLogoHeader"
import MagicSaleBanner from "components/MagicSaleBanner"
import SEO from "components/seo"

// Lazy load below-fold component bundles (3 instead of 12)
const MainContent = lazy(() => import("components/MagicBelowFold/MainContent"))
const SocialProof = lazy(() => import("components/MagicBelowFold/SocialProof"))
const Conversion = lazy(() => import("components/MagicBelowFold/Conversion"))

// Skeleton fallbacks with proper heights and background colors to prevent CLS
const MainContentSkeleton = () => (
  <>
    <div className="bg-ada-pink8 min-h-[400px]" />
    <div className="bg-ada-white3 min-h-[300px]" />
    <div className="bg-ada-pink8 min-h-[400px]" />
    <div className="bg-ada-white3 min-h-[250px]" />
    <div className="bg-ada-pink8 min-h-[250px]" />
    <div className="bg-magic min-h-[600px]" />
  </>
)

const SocialProofSkeleton = () => (
  <>
    <div className="bg-ada-pink8 min-h-[500px]" />
    <div className="bg-ada-white3 min-h-[400px]" />
    <div className="bg-ada-pink8 min-h-[500px]" />
    <div className="bg-ada-white3 min-h-[400px]" />
    <div className="bg-ada-magicPurple4 min-h-[600px]" />
    <div className="bg-ada-magicPink4 min-h-[600px]" />
  </>
)

const ConversionSkeleton = () => (
  <>
    <div className="bg-ada-pink8 min-h-[400px]" />
    <div className="bg-ada-light-pink min-h-[400px]" />
    <div className="bg-ada-white3 min-h-[300px]" />
  </>
)

const MagicSalePage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <SEO
        title="Magic: Marketing Ads Girls Inside Collective"
        image="https://adrianna.com.pl/img/ada_purple.webp"
      />
      <MagicStickyBar />
      <div className="pt-16">
        <MagicLogoHeader variant="pink" />
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicSaleBanner version={1} />
        </MaxWithBgColorContainer>

        <Suspense fallback={<MainContentSkeleton />}>
          <MainContent />
        </Suspense>

        <div id="magic-package" className="scroll-mt-14"></div>
        <MaxWithBgColorContainer bgColor="bg-ada-magicOrange2">
          <MagicSaleBanner version={2} />
        </MaxWithBgColorContainer>

        <Suspense fallback={<SocialProofSkeleton />}>
          <SocialProof />
        </Suspense>

        <Suspense fallback={<ConversionSkeleton />}>
          <Conversion />
        </Suspense>
      </div>
    </Layout>
  )
}

export default MagicSalePage
