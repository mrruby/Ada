import React from "react"
import { Button } from "helpers/Button"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  title1?: boolean;
  title2?: boolean;
  title3?: boolean;
  paragraph?: boolean;
  twoParagraphs?: boolean; 
  btnText?: string
  image?: boolean;
}

const NewsletterBanner = ({
  title1,
  title2,
  title3,
  paragraph,
  twoParagraphs,
  btnText = "Zapisuję się, zanim wyjdzie kolejny mail!",
  image
}: Props): JSX.Element => {
  const h2ClassName = "text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[60px]";

  return (
    <div className="flex items-left flex-col pt-10 pb-14 relative min-h-[500px] max-w-7xl mx-auto px-2">
      { title1 && (
        <>
          <h2 className={`lg:max-w-[780px] ${h2ClassName}`}>Chcesz wiedzieć więcej o slow</h2>
          <h2 className={`lg:max-w-[650px] ${h2ClassName}`}>marketingu i reklamach?</h2>
        </>
      )
      }
      { title2 && (
        <>
          <h2 className={`lg:max-w-[1050px] ${h2ClassName}`}>Praktykuję slow marketing: przemyślany,</h2>
          <h2 className={`lg:max-w-[980px] ${h2ClassName}`}> wartościowy, zbudowany na relacjach</h2>
        </>
      )
      }
      { title3 && (
        <>
          <h2 className={`lg:max-w-[590px] ${h2ClassName}`}>Zostańmy w kontakcie</h2>
          <h2 className={`lg:max-w-[740px] ${h2ClassName}`}>nie przegap żadnego wpisu!</h2>
        </>
      )
      }
      {paragraph && (
        <p className="lg:text-adaBase mt-[30px]">
          Zapisz się do newslettera i odbieraj maile z wiedzą.
        </p>
      )}
    {twoParagraphs && (
    <div>
      <p className="lg:text-adaBase mt-[30px]">
      W kampaniach reklamowych buduję świadomość, wzbudzam zainteresowanie i sprawiam, aby klient Cię polubił.          
      </p>
      <p className="lg:text-adaBase mt-[30px]">
      Zgaduję, że Ty też chętniej kupujesz od marek, do których czujesz 
      <span className="font-bold"> sympatię</span>
      ? :)
      </p>
    </div>
    )}
      <div className="mt-[28px]">
        <Button type="button" text={btnText} border={true} url="https://metanewsletter.adrianna.com.pl" textSize="lg:text-adaBase"/>
      </div>
      {image && (
        <div className="md:absolute top-[290px] lg:top-[-40px] right-[-150px]">
        <StaticImage src={"../../images/ada_homepage.png"} alt="Ada Promis" placeholder="none" width={700} height={700}  />
        </div>
      )}
    </div>
  );
};

export default NewsletterBanner;
