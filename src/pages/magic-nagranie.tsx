import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MagicDateBanner from "components/MagicDateBanner"
import MagicLastSection from "components/MagicLastSection"
import MagicWhy from "components/MagicWhy"
import MasterclassFAQ from "components/MasterclassFAQ"
import ReferencesMentoring from "components/ReferencesMentoring"
import SEO from "components/seo"
import { Button } from "helpers/Button"
import React from "react"

const MagicNagraniePage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MaxWithBgColorContainer bgColor="bg-ada-newPurple">
        <div className="flex flex-col items-center text-center text-white py-16">
          <h1 className="text-adaSubtitle md:text-adaTitle font-bold mb-8 px-4">
            Nagranie z warsztatu nie jest już dostępne.
          </h1>
          <p className="mb-8 text-lg md:text-xl px-4">
            Nadal możesz dołączyć do <span className="font-bold">MAGIC</span>!
          </p>
          <Button
            type="button"
            text={
              <span className="font-bold text-ada-pink7 uppercase">
                Dołącz do MAGIC
              </span>
            }
            url="/magic"
            textSize="text-sm md:text-base"
            btnStyle="uppercase bg-ada-pink2 text-ada-black font-semibold tracking-wide h-[48px] md:h-[60px] px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
          />
        </div>
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink7">
        <MagicWhy part={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="">
        <MagicWhy part={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicDateBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink7">
        <MagicWhy part={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicWhy part={6} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicWhy part={7} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer>
        <MagicBanner1 version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3">
        <MagicWhy part={3} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink7">
        <MagicWhy part={4} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3 z-2 relative">
        <MagicBioBanner version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-pink8">
        <MagicBanner2 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-yellow3 z-2 relative">
        <ReferencesMentoring title5 />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-purple2">
        <MagicLastSection version={2} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassFAQ version={5} />
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Magic: Poznaj… Meta Ads Girls Inside Club"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicNagraniePage
