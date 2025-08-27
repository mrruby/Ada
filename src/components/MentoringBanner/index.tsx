import { Button } from "helpers/Button"
import React from "react"
import Slider from "../Slider"

const MentoringBanner = ({ version }: { version: number }) => {
  const sliderItems = [
    "praktyczną wiedzę",
    "indywidualne podejście",
    "realne doświadczenie",
    "wsparcie społeczności",
    "ciągły rozwój",
    "multidyscyplinarne podejście",
    "ponadprzeciętne wyniki",
  ]

  return (
    <div className="mx-auto px-3 py-10 flex flex-col text-center">
      {version === 1 && (
        <>
          <h2 className="md:text-adaTitle text-ada-white uppercase font-bold">
            Jeśli odpowiedziałaś „TAK" na którekolwiek z tych pytań, Meta Ads
            Masters Mentoring jest właśnie dla Ciebie!
          </h2>
          <p className="md:pt-6 max-w-[1000px] mx-auto md:text-adaBase font-medium">
            Meta Ads Masters Mentoring to intensywny, 6-miesięczny program
            transformacyjny, stworzony z myślą o marketerkach i wirtualnych
            asystentkach, które chcą wznieść swoje umiejętności reklamowe na
            nowy poziom. To nie jest zwykły kurs online - to kompleksowe
            doświadczenie edukacyjne, które łączy w sobie:
          </p>
          <Slider items={sliderItems} />
          <p className="md:pt-6 max-w-[1000px] mx-auto md:text-adaBase font-medium">
            Po ukończeniu programu będziesz gotowa, aby projektować i prowadzić
            skuteczne kampanie reklamowe oparte na solidnych fundamentach i
            sprawdzonych technikach.
          </p>
        </>
      )}
      {version === 2 && (
        <>
          <Button
            type="button"
            text={
              <span className="font-bold uppercase">
                Przekonałaś mnie, chcę <br /> dołączyć do programu
              </span>
            }
            textSize="md:text-adaSubtitleThird"
            btnStyle="md:w-[840px] md:h-[170px] bg-ada-pink2 my-20 mx-auto"
            sectionId="offert"
          />
        </>
      )}
      {version === 3 && (
        <>
          <Button
            type="button"
            text={
              <span className="font-bold uppercase">
                Też chcę osiągać świetne
                <br /> wyniki w reklamach!
              </span>
            }
            textSize="md:text-adaSubtitleThird"
            btnStyle="md:w-[840px] md:h-[170px] bg-ada-pink2 mt-20 mx-auto"
            sectionId="offert"
          />
        </>
      )}
      {version === 4 && (
        <>
          <h2 className="md:text-adaSubtitle font-bold">
            Odbierz dostęp do szkolenia za 0 zł
          </h2>
        </>
      )}
      {version === 5 && (
        <div className="my-[-50px]">
          <Button
            type="button"
            text={
              <span className="font-bold uppercase">
                Chcę zarabiać nawet <br /> na wakacjach!
              </span>
            }
            textSize="md:text-adaSubtitleSecondary"
            btnStyle="md:w-[600px] md:h-[130px] bg-ada-pink2 my-20 mx-auto"
            sectionId="zostaw-maila"
          />
        </div>
      )}
      {version === 6 && (
        <>
          <Button
            type="button"
            text={
              <span className="font-bold">
                To o Tobie? <br /> Sprawdź szczegóły 👇
              </span>
            }
            textSize="md:text-adaSubtitleSecondary"
            btnStyle="md:w-[504px] md:h-[120px] bg-ada-pink2 my-20 mx-auto"
            sectionId="pricing"
          />
        </>
      )}
      {version === 7 && (
        <>
          <h2 className="text-adaSubtitle md:text-adaTitle font-bold uppercase text-center">
            Co będzie się działo
            <br />
            po zakupie?
          </h2>
        </>
      )}
      {version === 8 && (
        <>
          <h2 className="text-adaSubtitle md:text-adaSubtitleSecondary font-bold text-center text-ada-purple">
            Na spotkaniach będziesz <br />
            miała okazję poznać też:
          </h2>
        </>
      )}
      {version === 9 && (
        <>
          <h2 className="text-adaSubtitle md:text-adaSubtitleSecondary font-bold text-center text-ada-purple">
            TAK mówią osoby, które uczestniczyły w programie:
          </h2>
        </>
      )}
      {version === 10 && (
        <>
          <h2 className="text-adaSubtitle md:text-adaTitle font-bold uppercase text-center text-ada-black">
            Co zmieni się w Twoim <br />
            biznesie po mentoringu?
          </h2>
        </>
      )}
    </div>
  )
}

export default MentoringBanner
