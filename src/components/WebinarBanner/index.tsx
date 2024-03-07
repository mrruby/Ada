import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

const WebinarBanner = (): JSX.Element => {
  return (
    <div className="px-2 xl:px-6 text-ada-blue mx-auto gap-8 md:py-20">
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
        <div className="flex flex-col justify-center text-center max-w-[713px] gap-4">
          <h1 className="text-ada-purple text-adaSubtitle md:text-adaSubtitleThird font-bold font-leagueSpartan tracking-wider leading-tight">
            Social media marketerko! <br /> Wirtualna Asystentko! Freelancerko!
          </h1>
          <h2 className="md:text-adaSubtitle pb-3">
            Dodaj do swojej oferty prowadzenie{" "}
            <span className="font-bold">skutecznych kampanii reklamowych </span>
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
        <h2 className="text-adaSubtitle md:text-[107px] font-extrabold animate-bounce md:border-b-[78px]  border-ada-light-pink md:leading-[0px] max-w-[660px]">
          WEBINAR
        </h2>
        <div className="mt-10 pb-[85px] max-w-[1015px]">
          <p className="md:text-adaSubtitleSecondary font-bold">
            3 kampanie, których zapragną Twoi klienci. Zostań specjalistką od
            reklam na Facebooku i Instagramie.{" "}
          </p>
          <p className="md:text-adaSubtitleThird font-bold tracking-wider">
            Już <span className="text-ada-purple"> 14 marca o 18:00!</span>
          </p>
          <p className="pt-[80px] md:text-adaSubtitle">
            Dołącz i <span className="font-bold">dowiedz się,</span> jak
            prowadzić kampanie reklamowe, dzięki którym przyciągniesz uwagę i
            <span className="font-bold"> zbudujesz zaufanie odbiorców. </span>
          </p>
          <p className="pt-4 md:text-adaSubtitle">
            Twoi <span className="font-bold">klienci będą zadowoleni </span>z
            Twoich działań, <br /> a
            <span className="font-bold"> Ty zarobisz więcej </span>ze spokojną
            głową! 😊
          </p>
        </div>
      </div>
    </div>
  )
}

export default WebinarBanner
