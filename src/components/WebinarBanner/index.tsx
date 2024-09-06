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
              placeholder="blurred"
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
          <div className="flex justify-between xl:max-w-[1350px] mx-auto">
            <div className="ml-[-10vw] xl:ml-[-300px] -mt-10 md:-mt-6 lg:max-w-none md:max-w-[500px] max-w-[170px]">
              <StaticImage
                loading="eager"
                src={"../../images/chill.webp"}
                alt="Ada Promis - hero"
                placeholder="blurred"
                width={754}
                height={782}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-center max-w-[800px] gap-4 md:mt-8 xl:-mt-60 mb-3">
              <h2 className="hidden md:block text-adaSubtitle md:text-adaBig">MASTERCLASSY</h2>
              <h1 className="text-adaSubtitle md:text-adaBig font-bold tracking-wider leading-none font-lemon text-ada-purple">
                ADSY<span className="text-ada-orange">&</span>
                <span className="text-ada-yellow">CHILL</span>
              </h1>
              <h2 className="text-adaMin md:text-adaSubtitle md:pt-2 md:mb-8">
                Przygotuj się na sprzedaż{" "}
                <span className="font-bold">w to lato!</span> Ustawiaj,
                automatyzuj kampanie reklamowe{" "}
                <span className="font-bold">i zdobywaj klientów.</span>
              </h2>
              <Button
                type="button"
                text={
                  <span className="font-bold">
                    Sprawdzam Adsy&Chill
                  </span>
                }
                sectionId="masterclasses"
                textSize="text-adaMin md:text-adaSubtitle"
                btnStyle="uppercase w-[187px] md:w-[480px] bg-ada-pink2 md:tracking-[2.90px] md:h-[100px] shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
      {version === 4 && (
        <div className="mt-[70px] px-2 xl:px-6 text-ada-blue mx-auto gap-8 md:pt-2 md:min-h-[800px]">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-adaBase font-bold text-center animate-bounce uppercase">
              Na dołączenie do warsztatów zostało:{" "}
            </h2>
            <CountdownTimer targetDate={new Date("2024-08-05T10:00:00")} />
          </div>
          <div className="flex flex-col xl:flex-row justify-between xl:max-w-[1350px] mx-auto">
            <div className="ml-[-10vw] xl:ml-[-300px] -mt-10 md:-mt-6 lg:max-w-none md:max-w-[500px] max-w-[300px]">
              <StaticImage
                loading="eager"
                src={"../../images/chill.webp"}
                alt="Ada Promis - hero"
                placeholder="blurred"
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
              <h2 className="md:text-adaSubtitle pt-2 mb-8">
                Przygotuj się na sprzedaż{" "}
                <span className="font-bold">w to lato!</span> Ustawiaj,
                automatyzuj kampanie reklamowe{" "}
                <span className="font-bold">i zdobywaj klientów.</span>
              </h2>
              <Button
                type="button"
                text={
                  <span className="font-bold">
                    Sprawdzam <br /> Adsy&Chill
                  </span>
                }
                sectionId="masterclasses"
                textSize="md:text-adaSubtitle"
                btnStyle="uppercase md:w-[480px] bg-ada-pink2 tracking-[2.90px] h-[100px] shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
      {version === 5 && (
        <div className="mt-[70px] px-2 xl:px-6 text-ada-blue mx-auto gap-8 md:pt-2 md:min-h-[800px]">
          <div className="flex flex-col md:flex-row justify-between xl:max-w-[1350px] mx-auto">
            <div className="flex flex-col justify-center max-w-[900px] gap-4 md:mt-8 xl:-mt-60 mb-3 text-ada-black">
              <h2 className="uppercase text-adaSubtitle md:text-adaTitle3 text-ada-yellow2 font-extrabold">              
                <span className="text-ada-orange">Ogarnij </span>
                 swoje adsy!
              </h2>
              <h2 className="text-adaDesc md:text-adaSubtitle tracking-wider leading-none">
              Program mentoringowy dla przedsiębiorczych kobiet
              </h2>
              <div className="max-w-[650px] pt-6 md:text-adaBase">
              <p className="pb-10">
              Uwolnij potencjał swojego biznesu dzięki skutecznym reklamom na Facebooku i Instagramie!
              </p>
              <p className="pb-2">
              Czy marzysz o tym, by Twoje produkty i usługi trafiały do większej liczby klientów?              
              </p>
              <p className="pb-10">
                <span className="font-bold">Dołącz do programu „Ogarnij swoje adsy!” </span>
                i osiągaj wyniki, które przekroczą Twoje najśmielsze oczekiwania!              
              </p>
            </div>
              <Button
                type="button"
                text={
                  <span className="font-bold">
                  Sprawdzam, bo chcę zarabiać więcej dzięki reklamom!
                  </span>
                }
                sectionId="offert"
                textSize="text-adaMin md:text-adaBase"
                btnStyle="uppercase w-[187px] md:w-[490px] bg-ada-orange text-ada-white md:tracking-[2.90px] md:h-[100px] shadow-xl"
              />
            </div>
            <div className="mr-[-10vw] xl:mr-[-300px] -mt-10 md:-mt-6 lg:max-w-none md:max-w-[500px]">
              <StaticImage
                loading="eager"
                src={"../../images/autumn.webp"}
                alt="Ada Promis - hero"
                placeholder="blurred"
                width={801}
                height={856}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
      {version === 6 && (
        <div className="mt-[70px] px-2 xl:px-6 text-ada-blue mx-auto gap-8 md:pt-2">
          <div className="flex flex-col md:flex-row justify-between xl:max-w-[1350px] mx-auto">
            <div className="flex flex-col justify-center max-w-[900px] gap-4 md:mt-8 xl:-mt-60 mb-3 text-ada-black">
            <div className="max-w-[650px] pt-6 md:text-adaBase font-medium">
              <p className="md:pt-40 pb-5 font-bold">
              Chcesz upewnić się, że ten program jest dla Ciebie? Potrzebujesz potwierdzić, czy reklamy w Twoim biznesie zadziałają? 
              </p>
              <p className="pb-5 font-bold">
                 Masz jeszcze inne pytania?
              </p>
              <p className="pb-5">
                 Spotkaj się ze mną na wirtualną kawkę, czyli 20-30 minutowe spotkanie na Google Meets, na którym porozmawiamy o Twoim udziale w programie mentoringowym.             
              </p>
              <p className="pb-5">
                Wirtualne kawki są obowiązkowe - chcę poznać Wasze biznesy i mieć pewność, że każda uczestniczka skorzysta podczas programu mentoringowego.      
              </p>
            </div>
              <Button
                type="button"
                text={
                  <span className="font-bold">
                  Umawiam wirtualną kawkę!                  
                </span>
                }
                url="https://koalendar.com/e/ogarnij-swoje-adsy"
                textSize="text-adaMin md:text-adaBase"
                btnStyle="uppercase w-[187px] md:w-[490px] bg-ada-orange text-ada-white md:tracking-[2.90px] md:h-[100px] shadow-xl"
              />
            </div>
            <div className="mr-[-10vw] xl:mr-[-300px] md:mt-[-300px] lg:max-w-none md:max-w-[500px]">
              <StaticImage
                loading="eager"
                src={"../../images/ada-autumn.webp"}
                alt="Ada Promis - hero"
                placeholder="blurred"
                width={621}
                height={827}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WebinarBanner
