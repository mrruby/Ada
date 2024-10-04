import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import CountdownTimer from "helpers/CountdownTimer"

interface NextStepsProps {
  koalendarLink: string
}

const NextSteps: React.FC<NextStepsProps> = ({ koalendarLink }) => {
  return (
    <div className="lg:mt-[-80px] px-2 xl:px-6 text-ada-blue mx-auto gap-8 md:pt-2">
      <div className="flex flex-col md:flex-row justify-between xl:max-w-[1350px] mx-auto">
        <div className="flex flex-col justify-center max-w-[900px] gap-4 md:mt-8 xl:-mt-60 mb-3 text-ada-black">
          <div className="max-w-[650px] pt-6 md:text-adaBase font-medium">
            <p className="md:pt-40 pb-5 font-bold">
              Jakie są następne kroki, jeśli myślisz o dołączeniu?
            </p>
            <p className="pb-5 font-bold">
              Jak możesz się upewnić, że program jest dla Ciebie?
            </p>
            <p className="pb-5">
              Spotkaj się ze mną na wirtualną kawkę, czyli 20-30 minutowe,
              totalnie niezobowiązujące spotkanie online, na którym porozmawiamy
              o Twoim udziale w programie mentoringowym.
            </p>
            <p className="pb-5">
              To spotkanie jest obowiązkowe i bezpłatne - chcę poznać Twój
              biznes i mieć pewność, że ja i mój zespół pomożemy Ci ogarnąć
              skuteczne, strategiczne i działające reklamy!
            </p>
            <p className="pb-5">
              Wystarczy, że wybierzesz termin z kalendarza poniżej!
            </p>
          </div>
          <div className="mt-10">
            <CountdownTimer
              text="DOŁĄCZ PRZED STARTEM 4 EDYCJI"
              targetDate={new Date("2024-09-30T10:00:00")}
            />
          </div>
          <iframe
            src={`${koalendarLink}?embed=true`}
            width="100%"
            height="800"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="mr-[-10vw] xl:mr-[-300px] md:mt-[-250px] lg:max-w-none md:max-w-[500px]">
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
  )
}

export default NextSteps
