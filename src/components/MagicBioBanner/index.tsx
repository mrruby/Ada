import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Carousel from "react-multi-carousel"
import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import PersonBox from "./PersonBox"

// Responsive config for bio slider (show 1 on mobile, all on desktop)
const bioResponsive = {
  desktop: { breakpoint: { max: 4000, min: 768 }, items: 4 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

// Static array moved outside component
const PEOPLE_CONTENT = [
  {
    name: "Adrianna Promis-Urbas",
    description:
      "Kreatywna dusza i mózg MAGIC. Specjalizuje się w kampaniach Meta Ads i marketingu zbudowanym na relacjach.",
    img: "ada",
  },
  {
    name: "Justyna Król",
    description:
      "Socjolożka i zaklinaczka słów. Tworzy teksty reklamowe budujące autentyczne relacje między marką a klientami.",
    img: "justyna",
  },
  {
    name: "Dorota Woźniak",
    description:
      "Architektka z pasją do projektowania. Zamienia nudne reklamy w przyciągające wzrok kreacje graficzne.",
    img: "dorota",
  },
  {
    name: "Nicola Kut",
    description:
      "Analityczka biznesu-to-be, dla której żadne liczby i raporty nie są straszne. Przeprowadza researche, tworzy kampanie i ogarnia kulisy pracy.",
    img: "nicola",
  },
]

// Responsive people display: flex row on desktop, carousel on mobile
const PeopleResponsive = ({ showStamp = false }: { showStamp?: boolean }) => (
  <>
    {/* Desktop: grid layout */}
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 justify-items-center">
      {PEOPLE_CONTENT.map((item) => (
        <PersonBox
          key={item.name}
          name={item.name}
          description={item.description}
          img={item.img}
          showStamp={showStamp}
        />
      ))}
    </div>

    {/* Mobile: carousel */}
    <div className="md:hidden pt-8">
      <Carousel
        responsive={bioResponsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        ssr={true}
      >
        {PEOPLE_CONTENT.map((item) => (
          <div key={item.name} className="px-2">
            <PersonBox
              name={item.name}
              description={item.description}
              img={item.img}
              showStamp={showStamp}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </>
)

const MagicBioBanner = ({ version }: { version: number }) => {
  return (
    <>
      <Section padding="py-8 md:py-12 px-6">
        {version === 1 && (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
            {/* Left column: Circular image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto md:mx-0">
                <div className="object-cover w-full h-full">
                  <StaticImage
                    src="../../images/ada_portrait.webp"
                    alt="Ada Promis-Urbas"
                    placeholder="blurred"
                    layout="fixed"
                    width={240}
                    height={240}
                  />
                </div>
              </div>
            </div>

            {/* Right column: Heading + paragraphs */}
            <div className="w-full md:w-2/3 text-left flex flex-col gap-3 relative">
              {/* Heading with small purple icon */}
              <div className="flex items-center gap-2">
                <div className="absolute top-1 -left-10">
                  <StaticImage
                    src={"../../images/flower-purple.svg"}
                    alt="Purple flower icon"
                    placeholder="blurred"
                    layout="fixed"
                    width={30}
                    height={30}
                  />
                </div>
                <Typography variant="h2" className="text-black">
                  Ada Promis-Urbas
                </Typography>
              </div>
              <Typography variant="body" className="text-black">
                Robię "brzydkie" reklamy, które generują ładne wyniki. Pracuję z
                biznesami, które dbają o dobrostan psychiczny i fizyczny:
                praktykuję slow marketing, przemyślany, skuteczny, zbudowany na
                relacjach.
              </Typography>
              <Typography variant="body" className="text-black">
                Z zawodu jestem tłumaczką j. francuskiego &amp; angielskiego, a
                z zamiłowania — kreatywną duszą. Ułatwiam i upraszczam ADSy na
                Facebooku i Instagramie. Ze mną zrobisz zdecydowanie więcej niż
                "promuj post"!
              </Typography>
            </div>
          </div>
        )}
        {version === 2 && (
          <div className="text-center">
            <Typography variant="h2" className="text-ada-black animate-bounce">
              Kogo spotkasz w <span className="text-ada-pink7">MAGIC?</span>
            </Typography>
            <PeopleResponsive />
            <Typography
              variant="h3"
              className="text-ada-black max-w-[800px] m-auto"
            >
              <span className="text-ada-pink7">
                Dołącz do społeczności kobiet,{" "}
              </span>
              <br />
              które wspólnie rozwijają swoje biznesy i wspierają się w drodze do
              sukcesu w reklamach Meta.
            </Typography>
            <div className="bg-ada-pink7 rounded-[40px] w-[40px] h-[40px] flex items-center justify-center mt-7 mx-auto animate-spin-slow">
              <StaticImage
                src="../../images/arrowMagic.svg"
                alt=""
                layout="fixed"
                width={16}
                height={15}
                placeholder="blurred"
                quality={90}
              />
            </div>
          </div>
        )}
        {version === 3 && (
          <div className="text-center">
            <Typography
              variant="h2"
              className="text-ada-magicPink4 animate-bounce"
            >
              <span className="text-ada-black"> Kogo spotkasz </span>w MAGIC?
            </Typography>
            <Typography
              variant="h3"
              className="mt-8 mb-4 text-ada-magicPink4 font-bold"
            >
              4 specjalistki pod jednym dachem:
            </Typography>
            <Typography variant="h3" className="mb-8 text-ada-black">
              Meta Ads | Copywriting | Grafika | Koordynacja kampanii
            </Typography>
            <PeopleResponsive />
            <Typography
              variant="h3"
              className="text-ada-black max-w-[800px] m-auto mt-12"
            >
              <span className="text-ada-magicPink4">
                Dołącz do społeczności kobiet,{" "}
              </span>
              <br />
              <span className="font-normal">
                które wspólnie rozwijają swoje biznesy i wspierają się w drodze
                do sukcesu w reklamach Meta.
              </span>
            </Typography>
            <a
              href="#magic-package"
              className="rounded-[40px] w-[70px] h-[70px] flex items-center justify-center mt-7 mx-auto cursor-pointer hover:opacity-80 transition-opacity block rotate-90"
            >
              <StaticImage
                src="../../images/magicArrowLeft.svg"
                alt="Przejdź do pakietu"
                layout="fixed"
                width={70}
                height={70}
                placeholder="blurred"
                quality={90}
              />
            </a>
          </div>
        )}
      </Section>
      {version === 4 && (
        <div className="bg-ada-sowaNavy py-16 px-6">
          <div className="container mx-auto">
            <h2 className="font-playfair font-normal text-[48px] md:text-[64px] leading-[130%] text-center text-white uppercase">
              Kto prowadzi{" "}
              <span className="text-ada-sowaGold">warsztaty?</span>
            </h2>
            <p className="text-center mt-6 text-white font-montserrat font-bold text-[24px] leading-[100%] max-w-2xl mx-auto">
              Nie jedna, nie dwie, nie trzy…{" "}
              <span className="text-ada-sowaGold">aż cztery specjalistki</span>{" "}
              przygotowały dla Ciebie magiczną formułę na reklamy sprzedażowe!
            </p>

            {/* Desktop: grid layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 justify-items-center">
              {PEOPLE_CONTENT.map((item) => (
                <PersonBox
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  img={item.img}
                  showStamp={true}
                  textColor="text-white"
                />
              ))}
            </div>

            {/* Mobile: carousel */}
            <div className="md:hidden pt-8">
              <Carousel
                responsive={bioResponsive}
                infinite={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                ssr={true}
              >
                {PEOPLE_CONTENT.map((item) => (
                  <div key={item.name} className="px-2">
                    <PersonBox
                      name={item.name}
                      description={item.description}
                      img={item.img}
                      showStamp={true}
                      textColor="text-white"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MagicBioBanner
