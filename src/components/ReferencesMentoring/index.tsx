import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Carousel from "react-multi-carousel"
import { responsive } from "values/const"
import Reference from "../../helpers/Reference"

type IReferencesList = {
  image: React.JSX.Element
}

type IReferences = {
  title1?: boolean
  title2?: boolean
  title3?: boolean
  title4?: boolean
  title5?: boolean
  title6?: boolean
  title7?: boolean
}

// const referencesList: IReferencesList[] = [
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opinia1typ2.webp"}
//         alt="Opinia o programie mentoringowym Meta Ads - Martyna Baran"
//         placeholder="blurred"
//         height={800}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opinia2typ2.webp"}
//         alt="Opinia o programie mentoringowym Meta Ads - Ania Stobnicka"
//         placeholder="blurred"
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opinia3typ2.webp"}
//         alt="Opinia o programie mentoringowym Meta Ads - Kasia Szust"
//         placeholder="blurred"
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opinia4typ2.webp"}
//         alt="Opinia o programie mentoringowym Meta Ads - Agnieszka Sosik-Grzyb"
//         placeholder="blurred"
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opinia5typ2.webp"}
//         alt="Opinia o programie mentoringowym Meta Ads - Martyna Sitarz"
//         placeholder="blurred"
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opinia6typ2.webp"}
//         alt="Opinia o programie mentoringowym Meta Ads - Magda Kostrzewska"
//         placeholder="blurred"
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
// ]

// const referencesList2: IReferencesList[] = [
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opiniaAdsy1.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={387}
//         height={387}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opiniaAdsy2.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={387}
//         height={387}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/opiniaAdsy3.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={387}
//         height={387}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
// ]

// const referencesList3: IReferencesList[] = [
//   {
//     image: (
//       <StaticImage
//         src={"../../images/slider1.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={463}
//         height={296}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/slider2.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={464}
//         height={85}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/slider3.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={456}
//         height={119}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/slider4.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={577}
//         height={89}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/slider5.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={577}
//         height={89}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/slider6.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={577}
//         height={140}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
//   {
//     image: (
//       <StaticImage
//         src={"../../images/slider7.webp"}
//         alt="Opinia o programie mentoringowym"
//         placeholder="blurred"
//         width={577}
//         height={89}
//         formats={["auto", "webp", "avif"]}
//         quality={100}
//       />
//     ),
//   },
// ]

const referencesAdsyList: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy1.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Monika Gajek"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy2.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Juila Boryczka"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy3.webp"}
        alt="Opinia o programie mentoringowym Meta Ads - Martyna Sitarz"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy4.webp"}
        alt="Opinia o programie mentoringowym Meta Ads"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/opiniaAdsy5.webp"}
        alt="Opinia o programie mentoringowym Meta Ads"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const referencesMagicList: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinion1.webp"}
        alt="Opinia o Magic"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinion2.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinion3.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinion4.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinion5.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinion6.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinion7.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const referencesMagicList2: IReferencesList[] = [
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinionNew1.webp"}
        alt="Opinia o Magic"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinionNew2.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinionNew3.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinionNew4.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinionNew5.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src={"../../images/magicOpinionNew6.webp"}
        alt="Opinia o programie mentoringowym"
        placeholder="blurred"
        width={680}
        height={680}
        formats={["auto", "webp", "avif"]}
        quality={100}
      />
    ),
  },
]

const ReferencesMentoring = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
}: IReferences) => {
  return (
    <div className="pt-[40px]">
      {title1 && (
        <>
          <h3 className="mx-auto md:max-w-[900px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            TAK mówią osoby, które uczyłam
          </h3>
          <h3 className="mx-auto md:max-w-[600px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            prowadzenia reklam:
          </h3>
        </>
      )}
      {title2 && (
        <>
          <h3 className="mx-auto md:max-w-[1000px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            Dzięki niemu docieranie do nowych klientów{" "}
          </h3>
          <h3 className="mx-auto md:max-w-[500px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            może wyglądać tak:
          </h3>
        </>
      )}
      {title3 && (
        <>
          <h3 className="mx-auto md:max-w-[1200px] text-center text-adaStandard md:text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            Tak mówią osoby, którym pomogłam rozkręcić
          </h3>
          <h3 className="mx-auto md:max-w-[800px] text-center text-adaStandard md:text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-pink2 md:h-[24px] lg:h-[40px] animate-bounce uppercase tracking-[0.12em]">
            biznes dzięki reklamom!
          </h3>
          <div className="max-h-[600px] mx-auto mt-5 pb-4">
            <Carousel
              responsive={responsive}
              infinite={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              ssr={true}
              autoPlay
              autoPlaySpeed={2000}
            >
              {referencesAdsyList.map((reference, index) => (
                <Reference key={index} image={reference.image} />
              ))}
            </Carousel>
          </div>
        </>
      )}
      {title4 && (
        <>
          <h2 className="text-adaSubtitle md:text-adaSubtitleSecondary font-bold text-center text-purple-800 pb-4">
            A przecież Twoja nauka reklam może wyglądać tak:
          </h2>
        </>
      )}
      {title5 && (
        <>
          <div className="text-adaSubtitle md:text-adaSubtitleSecondary font-bold text-center text-ada-black pb-4">
            Zobacz, co mówią o współpracy ze mną:
          </div>
        </>
      )}
      {title6 && (
        <>
          <Typography
            variant="h2"
            className="p-2 font-anton font-normal text-center uppercase text-ada-orange"
          >
            Co o współpracy z nami mówią <br /> zadowolone klientki?
          </Typography>
          <div className="max-h-[600px] mx-auto mt-5 pb-4">
            <Carousel
              responsive={responsive}
              infinite={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              ssr={true}
              autoPlay
              autoPlaySpeed={2000}
            >
              {referencesMagicList.map((reference, index) => (
                <Reference key={index} image={reference.image} />
              ))}
            </Carousel>
          </div>
        </>
      )}
      {title6 && (
        <div className="max-h-[600px] mx-auto mt-5 pb-4">
          <Carousel
            responsive={responsive}
            infinite={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            ssr={true}
            autoPlay
            autoPlaySpeed={2000}
          >
            {referencesMagicList2.map((reference, index) => (
              <Reference key={index} image={reference.image} />
            ))}
          </Carousel>
        </div>
      )}
      {title7 && (
        <>
          <Typography
            variant="h2"
            className="p-2 font-anton font-normal text-center uppercase text-ada-orange"
          >
            Tak mówią osoby, które korzystały <br /> z mojego wsparcia w
            reklamach:
          </Typography>
          <div className="max-h-[600px] mx-auto mt-5 pb-4" id="opinie">
            <Carousel
              responsive={responsive}
              infinite={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              ssr={true}
              autoPlay
              autoPlaySpeed={2000}
            >
              {referencesMagicList.map((reference, index) => (
                <Reference key={index} image={reference.image} />
              ))}
            </Carousel>
          </div>
        </>
      )}
    </div>
  )
}

export default ReferencesMentoring
