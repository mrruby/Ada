import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AdaBanner = (): JSX.Element => {
  return (
    <div className="flex px-2 lg:pl-[120px] flex-col lg:flex-row text-ada-blue relative">
      <div className="lg:w-[736px] pt-[60px] lg:pt-[76px] z-0 pb-[60px]">
        <h2 className="text-[20px] lg:text-adaTitle font-bold w-[345px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce">
          Kim jestem?
        </h2>
        <p className="lg:text-adaBase lg:w-[530px] pt-[24px] font-medium leading-tight">
          Z zawodu tłumaczka j. francuskiego & angielskiego, a z zamiłowania —
          kreatywna dusza. Mam za sobą epizod pracy w audycie finansowym, ale
          moim powołaniem chyba od zawsze był marketing!
        </p>
        <p className="lg:text-adaBase py-4 lg:w-[530px] font-medium leading-tight ">
          I tak od stażu w agencji marketingowej do swojej działalności: dziś
          pod szyldem GetBold! obsługuję klientów z Europy, w tym z Polski i na
          moim liczniku wybiło już ponad 1 mln budżetów reklamowych wydanych w
          ramach Meta Ads.
        </p>
      </div>
      <div className="lg:pt-[120px] relative">
        <StaticImage
          src={"../../images/contact-ada.png"}
          alt="Ada Promis"
          placeholder="blurred"
          width={465}
          height={360}
        />
        <div className="absolute top-[-22px] lg:top-[130px] right-[-50px]">
          <StaticImage
            src={"../../images/three-flowers.svg"}
            alt="Ada Promis"
            placeholder="blurred"
            width={100}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default AdaBanner
