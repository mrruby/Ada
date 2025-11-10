import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const ThankBanner = ({ version }: { version: number }) => {
  return (
    <>
      {version == 1 && (
        <div className="mt-20 px-2 xl:px-6 mx-auto gap-8 md:pt-10">
          <div className="flex justify-between xl:max-w-[1350px] mx-auto">
            <div className="flex flex-col justify-center max-w-[600px] gap-4 md:mt-8 xl:-mt-60 mb-3">
              <h2 className="text-adaMin md:text-adaSubtitle md:pt-2 md:mb-8 text-black">
                <b>Dziękuję</b> za zapis!
              </h2>
              <h1 className="text-adaSubtitle md:text-adaBig tracking-wider leading-none font-anton text-ada-orange uppercase">
                Jeszcze <span className="text-ada-pink"> tylko</span> jedna
                sprawa!
              </h1>
            </div>
            <div className="ml-[-10vw] xl:ml-[-300px] -mt-10 md:-mt-6 lg:max-w-none md:max-w-[500px] max-w-[170px]">
              <StaticImage
                loading="eager"
                src={"../../images/magic_adsy.webp"}
                alt="Ada Promis - hero"
                placeholder="blurred"
                width={460}
                height={600}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
      {version == 2 && (
        <div className="flex py-12 flex-col items-center relative text-center text-adaMin md:text-adaSubtitle uppercase">
          <div className="flex flex-col items-center mb-6 relative w-[300px] -mt-[48px]">
            <div className="absolute inset-0 flex items-center justify-center z-10 text-ada-orange text-adaSubtitle md:text-adaTitle font-anton">
              1
            </div>
            <div className="w-full h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-t-[100px] border-white"></div>
          </div>
          <h2 className="mb-2 text-black">
            <b>Sprawdź skrzynkę mailową</b> <br /> podaną przy zapisie:
          </h2>
          <ul className="list-inside pl-6 mt-1 md:flex gap-12 text-black">
            <div>
              <li className="py-1">
                <a href="https://mail.google.com" className="underline">
                  Gmail
                </a>
              </li>
              <li className="py-1">
                <a href="https://poczta.onet.pl" className="underline">
                  Onet
                </a>
              </li>
              <li className="py-1">
                <a href="https://poczta.wp.pl" className="underline">
                  WP.pl
                </a>
              </li>
              <li className="py-1">
                <a href="https://poczta.o2.pl" className="underline">
                  O2.pl
                </a>
              </li>
            </div>
            <div>
              <li className="py-1">
                <a href="https://poczta.interia.pl" className="underline">
                  Interia.pl
                </a>
              </li>
              <li className="py-1">
                <a href="https://poczta.gazeta.pl" className="underline">
                  Gazeta.pl
                </a>
              </li>
              <li className="py-1">
                <a href="https://mail.yahoo.com" className="underline">
                  Yahoo.com
                </a>
              </li>
            </div>
          </ul>
        </div>
      )}

      {version == 3 && (
        <div className="flex py-12 flex-col items-center text-black relative text-center text-adaMin md:text-adaSubtitle px-2">
          <div className="flex flex-col items-center mb-6 relative w-[300px] -mt-[48px]">
            <div className="absolute inset-0 flex items-center justify-center z-10 text-ada-orange text-adaSubtitle md:text-adaTitle font-anton">
              2
            </div>
            <div className="w-full h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-t-[100px] border-ada-magicGreen"></div>
          </div>
          <div className="mb-2 text-black lg:min-w-[700px]">
            <div className="border border-black font-bold p-4 mb-2">
              Dodaj adres “adrianna@getbold.agency”
            </div>
            do listy zaufanych kontaktów – dzięki temu maile nie będą wpadać do
            folderu SPAM!
          </div>
        </div>
      )}

      {version == 4 && (
        <div className="flex py-12 flex-col items-center text-black relative text-center text-adaMin md:text-adaSubtitle  px-2">
          <div className="flex flex-col items-center mb-6 relative w-[300px] -mt-[48px]">
            <div className="absolute inset-0 flex items-center justify-center z-10 text-black text-adaSubtitle md:text-adaTitle font-anton">
              3
            </div>
            <div className="w-full h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-t-[100px] border-ada-magicPurple5"></div>
          </div>
          <div className="mb-2 text-black lg:min-w-[700px]">
            <div className="border border-black font-bold p-4 mb-2 bg-white">
              Otwórz maila od adrianna@getbold.agency
            </div>
            – mógł trafić do folderu SPAM – koniecznie sprawdź, czy gdzieś się
            nie zapodział.
          </div>
        </div>
      )}

      {version == 5 && (
        <div className="flex py-12 flex-col items-center text-black relative text-center text-adaMin md:text-adaSubtitle font-bold">
          <div className="flex flex-col items-center mb-6 relative w-[300px] -mt-[48px]">
            <div className="absolute inset-0 flex items-center justify-center z-10 text-ada-orange text-adaSubtitle md:text-adaTitle font-anton">
              4
            </div>
            <div className="w-full h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-t-[100px] border-ada-white2"></div>
          </div>
          Kliknij przycisk potwierdzający zapis w mailu.
        </div>
      )}

      {version == 6 && (
        <div className="lg:mt-20 px-2 xl:px-6 mx-auto gap-8 md:pt-10">
          <div className="flex flex-col-reverse lg:flex-row justify-center xl:max-w-[850px] mx-auto">
            <div className="ml-[-10vw] xl:ml-[-300px] -mt-10 md:-mt-6 lg:max-w-none md:max-w-[500px] max-w-[170px]">
              <StaticImage
                loading="eager"
                src={"../../images/magic_adsy2.webp"}
                alt="Ada Promis - hero"
                placeholder="blurred"
                width={600}
                height={782}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-center items-center max-w-[620px] gap-4 p-4 lg:p-12 text-ada border border-black rounded-[60px] text-center lg:h-[400px]">
              <h2 className="text-adaSubtitle md:text-adaBig tracking-wider leading-none font-anton text-ada-orange">
                <span className="text-ada-pink">Widzimy </span>
                <br />
                się niedługo!
              </h2>
              <p className="text-adaMin md:text-adaSubtitle text-black">
                Ada Promis
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ThankBanner
