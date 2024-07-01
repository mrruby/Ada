import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"
import CountdownTimer from "helpers/CountdownTimer"

const WebinarBanner = ({ version }: { version: number }): JSX.Element => {
  return (
    <>
      {version === 1 && (
        <div className="px-2 xl:px-6 text-ada-blue mx-auto gap-8 pb-4 md:py-16">
          <div className="flex flex-col md:flex-row justify-between max-w-[1350px] mx-auto">
            <StaticImage
              loading="eager"
              src={"../../images/contact.webp"}
              alt="Ada Promis - hero"
              placeholder="none"
              width={540}
              height={540}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
            <div className="flex flex-col justify-center text-center max-w-[600px] gap-4">
              <h1 className="text-ada-purple text-adaSubtitle md:text-adaSubtitleThird font-bold tracking-wider leading-none">
                Social media marketerko! <br /> Wirtualna Asystentko!
                Freelancerko!
              </h1>
              <h2 className="md:text-adaSubtitle pb-3 pt-2">
                Dodaj do swojej oferty prowadzenie{" "}
                <span className="font-bold">
                  skutecznych kampanii reklamowych{" "}
                </span>
                i zarabiaj więcej
              </h2>
              <Button
                type="button"
                text={
                  <span className="font-bold">
                    Chcę tworzyć skuteczne <br /> kampanie reklamowe!
                  </span>
                }
                sectionId="webinar-form"
                textSize="md:text-adaSubtitle"
                btnStyle="uppercase md:w-[480px] bg-ada-pink2 tracking-[2.90px] h-[100px] shadow-xl mx-auto"
              />
            </div>
          </div>
          <div className="pt-[40px] md:pt-[140px] text-center flex flex-col items-center">
            <h2 className="text-adaSubtitle md:text-[96px] font-extrabold animate-bounce md:border-b-[55px]  border-ada-light-pink md:leading-[0px] max-w-[660px]">
              WEBINAR
            </h2>
            <div className="max-w-[1015px] pt-10">
              <p className="md:text-adaSubtitle font-bold pb-10">
                3 kampanie, których zapragną Twoi klienci. <br /> Zostań
                specjalistką od reklam na Facebooku i Instagramie.{" "}
              </p>
              <p className="md:text-adaSubtitleThird font-bold tracking-wider">
                Już <span className="text-ada-purple"> 19 marca o 18:00!</span>
              </p>
              <p className="pt-[64px] md:text-adaSubtitle">
                Dołącz i <span className="font-bold">dowiedz się,</span> jak
                prowadzić kampanie reklamowe, dzięki którym przyciągniesz uwagę
                i
                <span className="font-bold">
                  {" "}
                  zbudujesz zaufanie odbiorców.{" "}
                </span>
              </p>
              <p className="pt-4 md:text-adaSubtitle">
                Twoi <span className="font-bold">klienci będą zadowoleni </span>
                z Twoich działań, <br /> a
                <span className="font-bold"> Ty zarobisz więcej </span>ze
                spokojną głową! 😊
              </p>
            </div>
          </div>
        </div>
      )}
      {version === 2 && (
        <div className="mt-[80px] mb-[50px] px-2 xl:px-6 text-ada-blue mx-auto gap-8 pb-4 md:py-16">
          <div className="flex flex-col md:flex-row justify-between max-w-[1350px] mx-auto">
            <div className="flex flex-col justify-center max-w-[600px] gap-4">
              <h1 className="text-adaSubtitle md:text-adaTitle2 font-bold tracking-wider leading-none">
                Niech kampanie <br /> pracują na <br />
                <span className="text-ada-yellow">moje wakacje!</span>
              </h1>
              <h2 className="md:text-adaSubtitle pt-2">
                <span className="font-bold">Warsztat kreatywny za 0 zł:</span>{" "}
                <br />5 reklam, które musisz przetestować w to lato{" "}
              </h2>
            </div>
          </div>
        </div>
      )}
      {version === 3 && (
        <div className="mt-[70px] px-2 xl:px-6 text-ada-blue mx-auto gap-8 md:pt-2 md:min-h-[800px]">
          {/* timer na ostatnie 48h promocji */}
          {/* <div className="flex flex-col gap-4 items-center">
            <h2 className="text-adaBase font-bold text-center animate-bounce uppercase">
              Na dołączenie do warsztatów zostało:{" "}
            </h2>
            <CountdownTimer targetDate={new Date("2024-07-05T10:00:00")} />
          </div> */}
          <div className="flex flex-col xl:flex-row justify-between xl:max-w-[1350px] mx-auto">
            <div className="ml-[-10vw] xl:ml-[-300px] -mt-10 md:-mt-6">
              <StaticImage
                loading="eager"
                src={"../../images/chill.webp"}
                alt="Ada Promis - hero"
                placeholder="none"
                width={754}
                height={782}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-center max-w-[800px] gap-4 mt-8 xl:-mt-60 mb-3">
              <h2 className="text-adaSubtitle md:text-adaBig">MASTERCLASSY</h2>
              <h1 className="text-adaTitle md:text-adaBig font-bold tracking-wider leading-none font-lemon text-ada-purple">
                ADSY<span className="text-ada-orange">&</span>
                <span className="text-ada-yellow">CHILL</span>
              </h1>
              <h2 className="md:text-adaSubtitle pt-2">
                Przygotuj się na sprzedaż{" "}
                <span className="font-bold">jeszcze w to lato!</span> Ustawiaj,
                automatyzuj kampanie reklamowe{" "}
                <span className="font-bold">i przyciągaj klientów.</span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WebinarBanner
