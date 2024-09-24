import React from "react"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"

const MentoringBanner = ({ version }: { version: number }): JSX.Element => {
  return (
    <div className="mx-auto px-3 py-10 flex flex-col text-center">
      {version === 1 && (
        <>
          <TypingAnimation
            text="Wiesz, jak to działa, prawda?"
            textStyle="md:text-adaTitle3 text-ada-white uppercase font-bold"
          />
          <ul className="md:pt-6 max-w-[800px] mx-auto md:text-adaBase font-medium">
            <li className="pb-4">
              🙃 Pracujesz jako marketerka na etacie lub freelance i chcesz, aby
              Twoi klienci byli zadowoleni?
            </li>
            <li className="pb-4">
              💸 Chcą pozyskać dla siebie nowych klientów, bo oni oznaczają dla
              nich dodatkowy zysk, a dla Ciebie premię?
            </li>
            <li>
              🚀 Możesz zapewnić im rozgłos i konwersje dzięki przemyślanym
              reklamom!
            </li>
          </ul>
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
            sectionId="zostaw-maila"
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
            sectionId="zostaw-maila"
          />
        </>
      )}
      {version === 4 && (
        <>
          <h2 className="md:text-adaSubtitle font-bold">
            Przyjdź na <span className="text-ada-pink3">bezpłatny </span>
            warsztat kreatywny
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
