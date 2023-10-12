import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  title1?: boolean
  title2?: boolean
  title3?: boolean
  title4?: boolean
  paragraph?: boolean
  paragraph2?: boolean
  twoParagraphs?: boolean
  btnText?: string
  image?: boolean
}

const NewsletterBanner = ({
  title1,
  title2,
  title3,
  title4,
  paragraph,
  paragraph2,
  twoParagraphs,
  btnText = "Zapisuję się, zanim wyjdzie kolejny mail!",
  image,
}: Props): JSX.Element => {
  const h2ClassName =
    "text-adaDesc lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[68px]"

  return (
    <div className="flex items-left flex-col pt-10 relative min-h-[500px] max-w-7xl mx-auto px-2">
      {title1 && (
        <>
          <h2 className={`lg:max-w-[780px] ${h2ClassName}`}>
            Chcesz wiedzieć więcej o slow
          </h2>
          <h2 className={`lg:max-w-[650px] ${h2ClassName}`}>
            marketingu i reklamach?
          </h2>
        </>
      )}
      {title2 && (
        <>
          <h2 className={`lg:max-w-[1050px] ${h2ClassName}`}>
            Praktykuję slow marketing: przemyślany,
          </h2>
          <h2 className={`lg:max-w-[980px] ${h2ClassName}`}>
            {" "}
            wartościowy, zbudowany na relacjach
          </h2>
        </>
      )}
      {title3 && (
        <>
          <h2 className={`lg:max-w-[590px] ${h2ClassName}`}>
            Zostańmy w kontakcie
          </h2>
          <h2 className={`lg:max-w-[740px] ${h2ClassName}`}>
            nie przegap żadnego wpisu!
          </h2>
        </>
      )}
      {title4 && (
        <>
          <h2 className={`lg:max-w-[566px] ${h2ClassName}`}>
            Zaglądaj tutaj często
          </h2>
          <h2 className={`lg:max-w-[335px] ${h2ClassName}`}>po nowości!</h2>
        </>
      )}
      {paragraph && (
        <p className="lg:text-adaBase mt-[30px]">
          Zapisz się do newslettera i odbieraj maile z wiedzą.
        </p>
      )}
      {paragraph2 && (
        <p className="lg:text-adaSubtitle mt-[30px] lg:max-w-[641px]">
          Chcesz być na bieżąco? Zapisz się na slowmarketingowy newsletter i
          zdobądź wiedzę o robieniu marketingu w zgodzie ze sobą!
        </p>
      )}
      {twoParagraphs && (
        <div>
          <p className="lg:text-adaBase mt-[30px]">
            W kampaniach reklamowych buduję świadomość, wzbudzam zainteresowanie
            i sprawiam, aby klient Cię polubił.
          </p>
          <p className="lg:text-adaBase mt-[30px]">
            Zgaduję, że Ty też chętniej kupujesz od marek, do których czujesz
            <span className="font-bold"> sympatię</span>? :)
          </p>
        </div>
      )}
      <div className="mt-[28px]">
        <Button
          type="button"
          text={btnText}
          border={true}
          url="https://metanewsletter.adrianna.com.pl"
          textSize="lg:text-adaBase"
        />
      </div>
      {image && (
        <div className="md:absolute bottom-[-30px] right-0 xl:right-[50px]">
          <StaticImage
            src={"../../images/ada_homepage.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            width={500}
            height={540}
            quality={95}
          />
        </div>
      )}
    </div>
  )
}

export default NewsletterBanner
