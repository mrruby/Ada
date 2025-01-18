import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import Card from "../shared/Card"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"
import MagicTile from "./MagicTile"

const TimeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-lg p-4 text-3xl font-bold min-w-[60px] text-center">
    {children}
  </div>
)

const magicTilesContent1 = [
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "Inspirujące warsztaty tematyczne",
    description: "co miesiąc - zawsze na czasie!",
  },
  {
    colors: "bg-ada-purple2 text-ada-white",
    title: "Stały dostęp do zespołu ekspertów",
    description: "copywriter, grafik, strateg",
  },
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "Wsparcie techniczne",
    description: "przy wdrażaniu rozwiązań",
  },
  {
    colors: "bg-ada-purple2 text-ada-white",
    title: "Comiesięczne wyzwania",
    description: "motywujące do działania",
  },
]

const magicTilesContent2 = [
  {
    colors: "bg-ada-purple2 text-ada-white",
    title: "3 godziny konsultacji",
    description: "grupowych każdego miesiąca, na których rozwiążesz swoje największe wyzwania",
  },
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "Regularne sesje Q&A",
    description: "gdzie rozwiejemy wszystkie Twoje wątpliwości",
  },
  {
    colors: "bg-ada-purple2 text-ada-white",
    title: "Możliwość konsultacji",
    description: "jeden na jeden z ekspertami",
  },
  {
    colors: "bg-ada-pink8 text-ada-purple2",
    title: "Pierwszeństwo w dostępie",
    description: "do nowych szkoleń i materiałów",
  },
]

const MagicDateBanner = ({ version }: { version: number }): JSX.Element => {

  return (
    <Section className="mb-12">
      {version == 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column */}
          <div className="max-w-[260px] text-black">
            <Typography variant="h2" className="mb-2">
              <span className="text-ada-yellow3">ROZWIJAJ</span>{" "}
              <span>SWÓJ BIZNES</span>
            </Typography>
            <Typography variant="body">
              <span className="font-bold">dzięki reklamom.</span>
              <br />I nawet z budżetem 10 zł dziennie. Bez natarczywego krzyczenia
              "KUP!" na stories. Bez frustracji, bo zasięg organiczny znowu
              spada...
            </Typography>
          </div>

          {/* Right column */}
          <Card
            bgColor="bg-ada-yellow3"
            className="flex flex-col items-center justify-center"
          >
            {/* Date/time row */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <TimeBox>19</TimeBox>
              <span className="text-3xl font-bold">.</span>
              <TimeBox>01</TimeBox>
              <TimeBox>12</TimeBox>
              <span className="text-3xl font-bold">:</span>
              <TimeBox>00</TimeBox>
            </div>

            <Button
              type="button"
              text="Zapisuję się!"
              sectionId="webinar-form"
              textSize="text-sm md:text-base"
              btnStyle="uppercase bg-ada-pink2 text-ada-black 
                        font-semibold tracking-wide h-[48px] md:h-[60px] 
                        px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
            />
          </Card>
        </div>
      )}
      {version == 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          {/* Left column */}
          <div className="text-black">
            <Typography variant="h2" className="mb-2">
              Co sprawia, że <span className="text-ada-pink7">MAGIC</span> jest wyjątkowy?
            </Typography>
            <Typography variant="body" className="pt-4">
              Tutaj nie znajdziesz kolejnego kursu online. <br />
              <span className="font-bold">
                Dostajesz:
              </span>
            </Typography>
            <div className="flex flex-col md:flex-row gap-4 md:min-w-[580px]">
              <div className="grid grid-cols-1 gap-6 md:gap-2 pt-8">
                {magicTilesContent1.map((item, i) => (
                  <MagicTile
                    key={i}
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6 md:gap-2 md:pt-8">
                {magicTilesContent2.map((item, i) => (
                  <MagicTile
                    key={i}
                    colors={item.colors}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:absolute -right-[200px]">
            <StaticImage
              loading="eager"
              src="../../images/ada_questions.webp"
              alt="Ada w telefonie"
              placeholder="blurred"
              width={600}
              height={1000}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        </div>
      )
      }
    </Section >
  )
}

export default MagicDateBanner
