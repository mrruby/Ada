import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutBanner2 = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row relative w-full justify-end min-h-[610px]">
      <div className="lg:absolute lg:left-[-150px] xl:left-[20px] top-[-30px]">
        <StaticImage
          src={"../../images/ada_about.webp"}
          alt="Ada Promis - hero"
          placeholder="none"
          width={521}
          height={644}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <div className="pt-[10px] px-3 xl:pr-[100px]">
        <h3 className="text-adaTitle lg:text-adaBig text-ada-grey font-bold -mb-10 lg:mb-[-60px]">
          O mnie
        </h3>
        <h2 className="text-adaTitle font-bold">Cześć</h2>
        <div className="max-w-[610px] text-adaDesc">
          <p className="pb-8">
            Z zawodu jestem tłumaczką j. francuskiego & angielskiego, a z
            zamiłowania — kreatywną duszą. Mam za sobą epizod pracy w audycie
            finansowym, ale moim powołaniem chyba od zawsze był marketing!
          </p>
          <p className="pb-8">
            I tak od stażu w agencji marketingowej do swojej działalności: dziś{" "}
            <span className="font-bold">pod szyldem GetBold! </span>
            obsługuję klientów z Europy, w tym z Polski i na moim liczniku
            wybiło już ponad 1 mln budżetów reklamowych wydanych w ramach Meta
            Ads. Pracuję z biznesami, które dbają o
            <span className="font-bold">
              {" "}
              dobrostan psychiczny i fizyczny
            </span>{" "}
            : praktykuję <span className="font-bold">slow marketing,</span>{" "}
            przemyślany, wartościowy, zbudowany na relacjach.
          </p>
          <p>
            W programie <span className="font-bold">„Ogarnij swoje adsy!”</span>{" "}
            skupimy się Twoim koncie reklamowym! Zdradzę Ci{" "}
            <span className="font-bold">moje tipy</span> i zaoszczędzę dobre
            kilka lat samodzielnego klikania w menedżerze reklam.
          </p>
        </div>
        <p></p>
      </div>
    </div>
  )
}

export default AboutBanner2
