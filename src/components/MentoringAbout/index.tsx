import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

const MentoringAbout = (): JSX.Element => {
  return (
    <section className="mb-20 px-3">
      <div className="mx-auto md:py-20">
        <div className="px-3">
          <h2 className="text-adaSubtitleThird md:text-[96px] font-bold animate-bounce md:border-b-[50px] border-ada-pink2 md:leading-4 uppercase max-w-[410px]">
            Cześć!
          </h2>
          <h3 className="md:text-adaSubtitleThird leading-3 font-bold md:border-b-[30px] border-ada-pink2 max-w-[806px] mt-6">
            Nazywam się Adrianna Promis-Urbas
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row md:pt-[40px] px-3">
          <div className="hidden xl:block">
            <StaticImage
              loading="eager"
              src={"../../images/mentoring.webp"}
              alt="Ada Promis - hero"
              placeholder="blurred"
              width={766}
              height={900}
              formats={["auto", "webp", "avif"]}
              quality={100}
              className="w-full h-auto"
            />
          </div>
          <div className="max-w-[400px] lg:max-w-[810px] pt-6">
            <p className="pb-16 md:text-adaBase">
              Z zawodu jestem tłumaczką j. francuskiego & angielskiego, a z
              zamiłowania — kreatywną duszą. Mam za sobą epizod pracy w audycie
              finansowym, ale moim powołaniem chyba od zawsze był marketing!
            </p>
            <p className="pb-8 md:text-adaBase">
              I tak od stażu w agencji marketingowej do swojej działalności:
              dziś <span className="font-bold">pod szyldem GetBold! </span>
              obsługuję klientów z Europy, w tym z Polski i na moim liczniku
              wybiło już ponad 1 mln budżetów reklamowych wydanych w ramach Meta
              Ads. Pracuję z biznesami, które dbają o
              <span className="font-bold">
                {" "}
                dobrostan psychiczny i fizyczny
              </span>{" "}
              : praktykuję <span className="font-bold">
                slow marketing,
              </span>{" "}
              przemyślany, wartościowy, zbudowany na relacjach.
            </p>
            <p className="pb-8 md:text-adaBase">
              W programie{" "}
              <span className="font-bold">Meta Ads Masters Mentoring</span>{" "}
              skupimy się kontach reklamowych Twoich klientów! Zdradzę Ci{" "}
              <span className="font-bold">moje tipy</span> i zaoszczędzę dobre
              kilka lat samodzielnego klikania w menedżerze reklam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentoringAbout
