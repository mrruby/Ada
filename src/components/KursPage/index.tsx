import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner1 from "components/MagicBanner"
import MagicBanner2 from "components/MagicBanner2"
import MagicBioBanner from "components/MagicBioBanner"
import MagicComments from "components/MagicComments"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicDateBanner from "components/MagicDateBanner"
import MagicFinalCTA from "components/MagicFinalCTA"
import MagicJoinClosed from "components/MagicJoinClosed"
import MagicVideo from "components/MagicVideo"
import MagicWhy from "components/MagicWhy"
import MasterclassFAQ from "components/MasterclassFAQ"
import CountdownTimer from "helpers/CountdownTimer"
import React, { useEffect, useState } from "react"

type KursPageProps = {
  storageKey: string
}

const KursPage = ({ storageKey }: KursPageProps) => {
  const [timeExpired, setTimeExpired] = useState(false)
  const [endTime, setEndTime] = useState<Date | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const stored = localStorage.getItem(storageKey)
    if (stored) {
      setEndTime(new Date(stored))
    } else {
      const newEnd = new Date(Date.now() + 3 * 60 * 60 * 1000)
      localStorage.setItem(storageKey, newEnd.toISOString())
      setEndTime(newEnd)
    }
  }, [storageKey])

  useEffect(() => {
    if (!endTime) return
    const check = () => setTimeExpired(new Date() >= endTime)
    check()
    const interval = setInterval(check, 1000)
    return () => clearInterval(interval)
  }, [endTime])

  if (!isClient || !endTime) {
    return (
      <Layout showHeaderAndFooter={false}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout showHeaderAndFooter={false}>
      {!timeExpired ? (
        <>
          <div className="sticky top-0 z-50 bg-ada-purple text-white py-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg font-bold mb-2">
                Dostep do kursu znika za:
              </p>
              <CountdownTimer targetDate={endTime} color="bg-ada-purple" />
            </div>
          </div>

          <MaxWithBgColorContainer bgColor="bg-ada-white3">
            <div className="py-8 px-4">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400">
                  <div className="text-center text-gray-500">
                    <p className="text-2xl font-bold mb-2">Video Placeholder</p>
                    <p className="text-sm">
                      Tutaj pojawi sie nagranie szkolenia
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            <MagicDateBanner version={3} />
          </MaxWithBgColorContainer>

          <MaxWithBgColorContainer bgColor="bg-ada-pink8">
            <MagicDateBanner version={4} />
          </MaxWithBgColorContainer>

          <div id="magic-package"></div>
          <MaxWithBgColorContainer bgColor="bg-ada-magicOrange2">
            <MagicJoinClosed />
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
        </>
      ) : (
        <>
          <MaxWithBgColorContainer bgColor="bg-ada-pink8">
            <div className="py-12 px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ada-purple mb-4">
                Dostep do kursu zniknal!
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Ale nadal mozesz zapisac sie na liste oczekujacych Magic
              </p>
            </div>
          </MaxWithBgColorContainer>

          <MaxWithBgColorContainer bgColor="bg-ada-magicOrange2">
            <MagicJoinClosed />
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
            <MagicDateBanner version={3} />
          </MaxWithBgColorContainer>

          <MaxWithBgColorContainer bgColor="bg-ada-pink8">
            <MagicDateBanner version={4} />
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
        </>
      )}
    </Layout>
  )
}

export default KursPage
