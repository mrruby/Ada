import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const WebinarAbout = ({ version }: { version: number }): JSX.Element => {
  return (
    <div className="flex flex-col text-ada-blue items-center px-3 pb-16 text-center">
      {version === 1 && (
        <div className="flex flex-col items-center max-w-[806px] gap-4">
          <StaticImage
            src={"../../images/hello2.webp"}
            alt="Ada Promis"
            placeholder="none"
            width={418}
            height={306}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <h2 className="text-adaSubtitle uppercase md:text-[80px] font-extrabold animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-[0px]">
            Cześć!
          </h2>
          <h3 className="md:text-adaSubtitleSecondary text-center pt-8 font-bold md:border-b-[20px] border-ada-light-pink md:leading-[0px]">
            Nazywam się Ada Promis
          </h3>
          <p className="pt-8 pb-4 md:text-adaBase tracking-wider leading-none">
            Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny:{" "}
            <span className="font-bold">praktykuję slow marketing, </span>
            przemyślany, wartościowy, zbudowany na relacjach. 
          </p>
          <p className="pt-8 pb-4 md:text-adaBase tracking-wider leading-none">
            <span className="font-bold">
              Prowadzę dochodowe kampanie Meta Ads dla klientów
            </span>{" "}
            z Europy, w tym z Polski i na moim liczniku wybiło już ponad{" "}
            <span className="font-bold">1 mln budżetów reklamowych </span>
            wydanych w ramach Meta Ads.
          </p>
          <p className="pt-8 pb-4 md:text-adaBase tracking-wider leading-none">
            <span className="font-bold">Tworzę programy mentoringowe</span> dla
            specjalistek od marketingu oraz właścicielek biznesów, w którychuczę
            jak, jak skutecznie zdobywać klientów dzięki kampaniom na Facebooku
            i Instagramie.
          </p>
          <p className="md:text-adaBase tracking-wider leading-none">
            Przeszłam drogę od stażu w agencji marketingowej przez freelance do
            swojej działalności. Teraz dzielę się z Tobą moimi doświadczeniami{" "}
            <span className="font-bold">
              z całego procesu kontaktu z klientem
            </span>
            : od pozyskania, przez ofertowanie i wycenę usług, po prowadzenie
            kampanii reklamowych i optymalizowanie dziań w taki sposób, aby
            przynosiły <span className="font-bold">oczekiwane wyniki! </span>
          </p>
        </div>
      )}
      {version === 2 && (
        <div className="flex flex-col items-center max-w-[806px] gap-4">
          <StaticImage
            src={"../../images/ada_wakacje.webp"}
            alt="Ada Promis"
            placeholder="none"
            width={757}
            height={601}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <h2 className="text-adaSubtitle uppercase md:text-[80px] font-extrabold animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-[0px]">
            Cześć!
          </h2>
          <h3 className="md:text-adaSubtitleSecondary text-center pt-8 font-bold md:border-b-[20px] border-ada-light-pink md:leading-[0px]">
            Nazywam się Ada Promis
          </h3>
          <p className="pt-8 pb-4 md:text-adaBase tracking-wider leading-none">
            Mam za sobą epizod pracy w audycie finansowym, ale moim powołaniem
            chyba od zawsze był <span className="font-bold">marketing!</span>
          </p>
          <p className="pt-8 pb-4 md:text-adaBase tracking-wider leading-none">
            I tak od stażu w agencji marketingowej do swojej działalności: dziś
            pod szyldem GetBold! obsługuję klientów z Europy, w tym z Polski i
            na moim liczniku wybiło już{" "}
            <span className="font-bold">ponad 1 mln budżetów reklamowych</span>
            wydanych w ramach Meta Ads.
          </p>
          <p className="pt-8 pb-4 md:text-adaBase tracking-wider leading-none">
            Zaczynałam na etacie.{" "}
            <span className="font-bold">
              Teraz prowadzę butikową agencję reklamową
            </span>{" "}
            i dzięki odpowiedniej strategii mogę pozwolić sobie na wakacje, bez
            obaw, że moja firma runie. Nawet więcej! Po ostatnim tygodniowym
            urlopie zastałam ją w lepszym stanie niż przed moją nieobecnością.
          </p>
          <p className="md:text-adaBase tracking-wider leading-none">
            Niech zgadnę:{" "}
            <span className="font-bold">
              czy Ty też marzysz, aby Twój biznes zarabiał, gdy Ty cieszysz się
              wakacjami?
            </span>{" "}
            Możesz zbliżyć się do tego już teraz!
          </p>
        </div>
      )}
    </div>
  )
}

export default WebinarAbout
