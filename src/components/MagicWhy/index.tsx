import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import { StaticImage } from "gatsby-plugin-image"

const MagicWhy = ({ part }: { part: number }): JSX.Element => {
  return (
    <Section bgColor="bg-transparent">
      {part == 1 && (
        <div className="w-full text-white -mb-8">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            <span className="text-ada-yellow3">MAGIC </span>
            jest dla Ciebie, jeśli:
          </Typography>
        </div>
      )}
      {part == 2 && (
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="w-full text-black">
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="max-w-md">
                <Typography variant="h2" className="mb-8 text-center animate-bounce">
                  🧑‍🎓 Początkujących:
                </Typography>
                <li className="mb-3">
                  ✅ dla osób, które
                  <span className="font-bold">{" "}jeszcze nie prowadziły reklam</span>{" "}i potrzebują pewnego startu w świecie płatnej promocji
                </li>
                <li className="mb-3">
                  ✅ dla tych, którzy <span className="font-bold">boją się, że źle klikną i stracą budżet reklamowy</span>{" "}na nieefektywnych kampaniach
                </li>
                <li className="mb-3">
                  ✅ <span className="font-bold">dla przedsiębiorczyń,</span>{" "}które chcą przestać działać po omacku i poznać sprawdzone fundamenty reklam
                </li>
                <li className="mb-3">
                  ✅ <span className="font-bold"> dla właścicielek biznesów,</span>{" "} które do tej pory polegały głównie na działaniach organicznych i chcą bezpiecznie wejść w reklamy
                </li>
                <li>
                  ✅ <span className="font-bold"> dla osób, które zlecały reklamy na zewnątrz,</span>{" "} ale chcą przejąć kontrolę nad swoim budżetem reklamowym
                </li>
              </ul>
              <ul className="max-w-md">
                <Typography variant="h2" className="mb-8 text-center animate-bounce">
                  🧑‍🎓 Zaawansowanych:
                </Typography>
                <li className="mb-3">
                  ✅ dla tych,<span className="font-bold"> którzy zastanawiają się, jak przeskalować swój biznes</span>{" "}na następny poziom i potrzebują sprawdzonych strategii reklamowych
                </li>
                <li className="mb-3">
                  ✅ dla tych, którzy<span className="font-bold"> już prowadzą reklamy i chcą robić to lepiej,</span>{" "}osiągając wyższe ROAS
                </li>
                <li className="mb-3">
                  ✅ dla tych, którzy<span className="font-bold"> chcą nauczyć się lepiej gospodarować budżetem</span>{" "} i optymalizować koszty pozyskania klienta
                </li>
                <li className="mb-3">
                  ✅<span className="font-bold"> dla właścicielek biznesów,</span>{" "}które są gotowe na pracę z zaawansowanymi strategiami i skalowanie swoich wyników
                </li>
                <li className="mb-3">
                  ✅<span className="font-bold"> dla marketerek,</span>{" "}które chcą poznać najnowsze trendy i narzędzia reklamowe, wyprzedzając konkurencję
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {part == 3 && (
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-white -mb-8">
            <Typography variant="h1" className="mb-8 text-center animate-bounce">
              Jak wygląda luty w
              <span className="text-ada-pinkk8"> MAGIC </span>
              ?
            </Typography>
          </div>
          <StaticImage
            loading="eager"
            src="../../images/calendarMagic.png"
            alt=""
            placeholder="blurred"
            width={1460}
            height={800}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
      )}
      {part == 4 && (
        <div className="flex flex-col items-center gap-8 text-ada-black">
          <Typography variant="h1" className="mb-8 text-center animate-bounce ">
            Zobacz przykładowe pytania i odpowiedzi!
            <span className="text-ada-pinkk8"> MAGIC </span>
            ?
          </Typography>
          <div className="flex flex-col items-center gap-8 mb-8">
            <div className="md:-ml-40">
              <StaticImage
                loading="eager"
                src="../../images/AgnieszkaPyt.webp"
                alt=""
                placeholder="blurred"
                width={568}
                height={252}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="-mt-8 md:ml-40">
              <StaticImage
                loading="eager"
                src="../../images/AgnieszkaOdp.webp"
                alt=""
                placeholder="blurred"
                width={582}
                height={187}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 mb-2">
            <StaticImage
              loading="eager"
              src="../../images/Magdalena-pytanie.webp"
              alt=""
              placeholder="blurred"
              width={645}
              height={129}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
            <div className="-mt-10 md:ml-60">
              <StaticImage
                loading="eager"
                src="../../images/MagdalenaOdp1.webp"
                alt=""
                placeholder="blurred"
                width={496}
                height={171}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="-mt-6 md:ml-60">
              <StaticImage
                loading="eager"
                src="../../images/MagdalenaOdp2.webp"
                alt=""
                placeholder="blurred"
                width={496}
                height={361}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <StaticImage
              loading="eager"
              src="../../images/MagdalenaPytIOdp.webp"
              alt=""
              placeholder="blurred"
              width={605}
              height={326}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
          <div className="flex flex-col items-center gap-8 mb-2">
            <div className="md:-ml-40">
              <StaticImage
                loading="eager"
                src="../../images/MonikaPyt.webp"
                alt=""
                placeholder="blurred"
                width={679}
                height={197}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="-mt-10 md:ml-60">
              <StaticImage
                loading="eager"
                src="../../images/MonikaOdp.webp"
                alt=""
                placeholder="blurred"
                width={709}
                height={274}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default MagicWhy
