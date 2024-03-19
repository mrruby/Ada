import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

const MastermindBanner = ({ version }: { version: number }): JSX.Element => {
  return (
    <>
      {version === 1 && (
        <div className="grid relative md:h-[690px]">
          <StaticImage
            className="row-start-1 col-start-1"
            layout="fullWidth"
            alt=""
            src={"../../images/bg-mastermind.png"}
            formats={["auto", "webp", "avif"]}
          />
          <div className="row-start-1 col-start-1 grid relative justify-center pt-20 md:pt-40">
            <div className="max-w-[1072px] flex flex-col items-center z-20">
              <h1 className="text-adaBase lg:text-adaTitle font-bold text-center leading-tight animate-bounce pb-8">
                Chcesz, aby więcej osób kupowało Twoje produkty i korzystało z
                Twoich usług?
              </h1>
              <p className="max-w-[980px] mx-auto text-center font-medium text-[14px] md:text-adaSubtitle leading-tight">
                Dołącz do programu mentoringowego „Ogarnij swoje adsy!” i
                osiągaj w kampaniach reklamowych wyniki, na widok których aż
                przetrzesz oczy! Dobrze zaplanowane kampanie reklamowe pracują
                „same”. Przyciągną do Ciebie nowych klientów nawet wtedy, gdy
                śpisz, jesteś na urlopie czy gdy spędzasz czas z rodziną.
              </p>
              <p className="p-[30px] max-w-[980px] mx-auto text-center font-medium text-[14px] md:text-adaSubtitle leading-tight">
                Świetne wyniki reklamowe = lepsze pieniądze = lepsze życie,
                prawda? ;)
              </p>
              <Button
                type="button"
                text={
                  <>
                    Chcę
                    <span className="font-bold"> ulepszyć </span>
                    moje kampanie!
                  </>
                }
                sectionId="mastermind-info"
                textSize="md:text-adaSubtitle"
                btnStyle="md:w-[425px] scroll-smooth mb-8"
              />
            </div>
          </div>
        </div>
      )}

      {version === 2 && (
        <div className="grid relative md:h-[580px]">
          <StaticImage
            className="row-start-1 col-start-1"
            layout="fullWidth"
            alt=""
            src={"../../images/bg-mentoring.png"}
            formats={["auto", "webp", "avif"]}
          />
          <div className="row-start-1 col-start-1 grid relative pt-20 md:pt-40 tracking-[0.05em]">
            <div className="mx-auto flex flex-col items-start px-3">
              <h1 className="text-adaBase lg:text-adaTitle font-bold leading-tight animate-bounce pb-6">
                Prowadzisz solo-biznes marketingowy? <br /> Jesteś wirtualną
                asystentką?
              </h1>
              <p className="max-w-[680px] font-medium text-[14px] md:text-adaBase leading-tight">
                Chcesz zdobyć bardziej dochodowych klientów i{" "}
                <span className="font-bold">pracować ze spokojem o jutro</span>?
                Zarabiać więcej pracując tyle samo lub mniej, bo masz
                <span className="font-bold"> nowe, poszukiwane skille</span>?
              </p>
              <p className="py-[30px] max-w-[661px] font-medium text-[14px] md:text-adaBase leading-tight">
                <span className="font-bold">
                  Dołącz do programu mentoringowego „Meta Ads Masters
                  Mentoring!”,
                </span>{" "}
                prowadź samodzielnie kampanie reklamowe na Facebooku oraz
                Instagramie i zarabiaj.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MastermindBanner
