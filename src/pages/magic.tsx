import React, { lazy, Suspense } from "react"
import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicStickyBar from "components/MagicStickyBar"
import MagicSaleBanner from "components/MagicSaleBanner"
import DeferUntilVisible from "components/shared/DeferUntilVisible"
import SEO from "components/seo"

// Lazy load below-fold component bundles (3 instead of 12)
const MainContent = lazy(() => import("components/MagicBelowFold/MainContent"))
const Conversion = lazy(() => import("components/MagicBelowFold/Conversion"))

// Skeleton fallbacks with proper heights and background colors to prevent CLS
const MainContentSkeleton = () => (
  <>
    <div className="bg-ada-pink8 min-h-[400px]" />
    <div className="bg-ada-pink8 min-h-[560px]" />
    <div className="bg-ada-white3 min-h-[300px]" />
    <div className="bg-ada-pink8 min-h-[400px]" />
    <div className="bg-ada-white3 min-h-[250px]" />
    <div className="bg-ada-pink8 min-h-[250px]" />
    <div className="bg-magic min-h-[600px]" />
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
      <MagicStickyBar />
      <div className="pt-12">
        <MaxWithBgColorContainer bgColor="bg-ada-white3">
          <MagicSaleBanner version={1} />
        </MaxWithBgColorContainer>

        <DeferUntilVisible
          fallback={<MainContentSkeleton />}
          rootMargin="800px"
        >
          <Suspense fallback={<MainContentSkeleton />}>
            <MainContent />
          </Suspense>
        </DeferUntilVisible>

        <div id="magic-package" className="scroll-mt-14"></div>

        <DeferUntilVisible fallback={<ConversionSkeleton />} rootMargin="400px">
          <Suspense fallback={<ConversionSkeleton />}>
            <Conversion />
          </Suspense>
        </DeferUntilVisible>
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

export default MagicSalePage
