import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AdaBanner = (): JSX.Element => {
  return (
    <div className="flex px-2 lg:pl-[120px] flex-col lg:flex-row text-ada-blue relative">
        <div className="lg:w-[736px] pt-[60px] lg:pt-[76px] z-0 pb-[60px]">
          <h2 className="text-[15px] lg:text-adaTitle font-bold w-[345px] border-b-[12px] lg:mb-2 lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[52px]">Kim jestem?</h2>
          <p className="lg:text-adaBase lg:w-[530px] pt-[24px] font-medium leading-tight">Z zawodu tłumaczka j. francuskiego & angielskiego, a z zamiłowania - kreatywna dusza. Mam za sobą epizod pracy w audycie finansowym, ale moim powołaniem chyba od zawsze był marketing!I tak od stażu w agencji marketingowej do swojej działalności: dziś pod szyldem GetBold! obsługuję klientów z Europy, w tym z Polski i na moim liczniku wybiło już ponad 1 mln budżetów reklamych wydanych w ramach Meta Ads. </p>
          <p className="lg:text-adaBase py-4 lg:w-[530px] font-medium leading-tight ">Pracuję z biznesami, które dbają o <span className="font-bold">dobrostan psychiczny i fizyczny: </span>praktykuję slow marketing, przemyślany, wartościowy, zbudowany na relacjach.</p>
        </div>
        <div className="lg:pt-[120px] relative">
        <StaticImage src={"../../images/contact-ada.png"} alt="Ada Promis" placeholder="none" width={465} height={360}  />
        <div className="absolute top-[-22px] lg:top-[130px] right-[-50px]">
          <StaticImage src={"../../images/three-flowers.svg"} alt="Ada Promis" placeholder="none" width={100} height={300}  />
        </div>
        </div>
    </div>
  )
}

export default AdaBanner

