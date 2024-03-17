import React from "react"
import { Button } from "helpers/Button"

const MentoringBanner = ({ version }: { version: number }): JSX.Element => {
  return (
    <div className="mx-auto px-3 py-10 flex flex-col text-center">
      {version === 1 && (
        <>
          <h3 className="md:text-adaTitle3 text-ada-white uppercase font-bold">
            Wiesz, jak to działa, prawda?
          </h3>
          <ul className="md:pt-6 max-w-[600px] mx-auto md:text-adaBase font-medium">
            <li>
              {"\u00b7"} Pracujesz jako marketerka na etacie lub freelance i
              chcesz, aby Twoi klienci byli zadowoleni?
            </li>
            <li>
              {"\u00b7"} Chcą pozyskać dla siebie nowych klientów, bo oni
              oznaczają dla nich dodatkowy zysk, a dla Ciebie premię?
            </li>
            <li>
              {"\u00b7"} Możesz zapewnić im rozgłos i konwersje dzięki
              przemyślanym reklamom!
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
                Przekonałaś mnie, chcę <br /> ogarnąć moje adsy!
              </span>
            }
            url="/"
            textSize="md:text-adaSubtitleThird"
            btnStyle="md:w-[840px] md:h-[170px] bg-ada-pink2 my-20"
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
            url="/"
            textSize="md:text-adaSubtitleThird"
            btnStyle="md:w-[840px] md:h-[170px] bg-ada-pink2 mt-20"
          />
        </>
      )}
    </div>
  )
}

export default MentoringBanner
