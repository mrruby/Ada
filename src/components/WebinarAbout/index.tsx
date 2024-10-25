import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import TypingAnimation from "helpers/TypingAnimation"

const WebinarAbout = ({ version }: { version: number }): JSX.Element => {
  return (
    <div className="flex flex-col text-ada-blue items-center px-3 pb-16 text-center">
      {version === 1 && (
        <div className="flex flex-col items-center max-w-[806px] gap-4">
          <StaticImage
            src={"../../images/hello2.webp"}
            alt="Ada Promis"
            placeholder="blurred"
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
              Prowadzę dochodowe kampanie Meta Ads dla klientów<span> </span>
            </span>
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
        <div className="flex flex-col items-center max-w-[806px] gap-4 pt-10">
          <StaticImage
            src={"../../images/ada_wakacje.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            width={428}
            height={340}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <h2 className="text-adaSubtitle uppercase md:text-[80px] font-extrabold animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-[0px]">
            Cześć!
          </h2>
          <h3 className="md:text-adaSubtitleSecondary text-center pt-8 font-bold md:border-b-[20px] border-ada-light-pink md:leading-[0px]">
            Nazywam się Ada Promis
          </h3>
          <p className="pt-2 pb-2 md:text-adaBase tracking-wider leading-none">
            Mam za sobą epizod pracy w audycie finansowym, ale moim powołaniem
            chyba od zawsze był <span className="font-bold">marketing!</span>
          </p>
          <p className="pt-2 pb-2 md:text-adaBase tracking-wider leading-none">
            I tak od stażu w agencji marketingowej do swojej działalności: dziś
            pod szyldem GetBold! obsługuję klientów z Europy, w tym z Polski i
            na moim liczniku wybiło już{" "}
            <span className="font-bold">ponad 1 mln budżetów reklamowych </span>
            wydanych w ramach Meta Ads.
          </p>
          <p className="pt-2 pb-2 md:text-adaBase tracking-wider leading-none">
            Zaczynałam na etacie.{" "}
            <span className="font-bold">
              Teraz prowadzę butikową agencję reklamową
            </span>{" "}
            i dzięki odpowiedniej strategii mogę pozwolić sobie na wakacje, bez
            obaw, że moja firma runie. Nawet więcej! Po ostatnim tygodniowym
            urlopie zastałam ją w lepszym stanie niż przed moją nieobecnością.
          </p>
          <p className="pt-2 pb-2 md:text-adaBase tracking-wider leading-none">
            Niech zgadnę:{" "}
            <span className="font-bold">
              czy Ty też marzysz, aby Twój biznes zarabiał, gdy Ty cieszysz się
              wakacjami?
            </span>{" "}
            Możesz zbliżyć się do tego już teraz!
          </p>
        </div>
      )}
      {version === 3 && (
        <div className="flex flex-col items-center max-w-[806px] gap-4">
          <StaticImage
            src={"../../images/chill3.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            width={584}
            height={427}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <TypingAnimation
            text="     Cześć!"
            textStyle="text-adaSubtitle uppercase md:text-[80px] font-extrabold animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-[0px]"
          />
          <h3 className="text-adaMin md:text-adaSubtitleSecondary pt-8 font-bold md:border-b-[20px] border-ada-light-pink md:leading-[0px]">
            Nazywam się Adrianna Promis-Urbas
          </h3>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            Mam za sobą epizod pracy w audycie finansowym, ale moim powołaniem
            chyba od zawsze był <span className="font-bold">marketing!</span>
          </p>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            I tak{" "}
            <span className="font-bold">
              od stażu w agencji marketingowej do swojej działalności:
            </span>{" "}
            dziś pod szyldem GetBold! obsługuję klientów z Europy, w tym z
            Polski i na moim liczniku wybiło już{" "}
            <span className="font-bold">ponad 1 mln budżetów reklamowych </span>
            wydanych w ramach Meta Ads.
          </p>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            W czasie mojej kariery marketingowej przeszłam od osoby, która
            pracuje na etacie i szuka możliwości rozwoju do{" "}
            <span className="font-bold">przedsiębiorczyni,</span>
            która szuka sposobów na skuteczną promocję swojego biznesu.
          </p>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            Gdy zaczynałam przygodę z marketingiem, szukałam{" "}
            <span className="font-bold">sprawdzonych</span> źródeł wiedzy o
            reklamach. Byłam w miejscu, w którym{" "}
            <span className="font-bold">praca na swoim</span> wciąż oznaczała
            pracę dla klientów i walkę o każde nowe zlecenie. Teraz{" "}
            <span className="font-bold">pewnie</span> rozmawiam z każdym
            potencjalnym klientem, bo wiem, jaką
            <span className="font-bold"> wartość</span> oferuję i co można
            zyskać, pracując ze mną.
          </p>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            Dzięki temu wiem, czego możesz potrzebować{" "}
            <span className="font-bold">
              Ty — marketerko, pracowniczko, freelancerko, przedsiębiorczynio!
            </span>{" "}
            Moja droga <span className="font-bold">nie była</span> usłana
            różami, ale wiedziałam, że muszę postawić na jedno:{" "}
            <span className="font-bold">twarde kompetencje.</span> Zrobiłam to i
            teraz nauczę <span className="font-bold">tego również Ciebie.</span>
          </p>
        </div>
      )}
      {version === 4 && (
        <div className="flex flex-col items-center max-w-[806px] gap-4 text-ada-black mt-[100px]">
          <TypingAnimation
            text="Cześć!"
            textStyle="text-adaSubtitle uppercase md:text-[80px] font-extrabold animate-bounce text-ada-purple md:leading-[0px]"
          />
          <h3 className="text-adaMin md:text-adaSubtitleSecondary pt-8 mt-4 font-bold md:leading-[0px] pb-6">
            Nazywam się Adrianna Promis-Urbas
          </h3>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            Z zawodu jestem tłumaczką j. francuskiego & angielskiego, a z
            zamiłowania — kreatywną duszą. Mam za sobą epizod pracy w audycie
            finansowym, ale<> </>
            <span className="font-bold">
              moim powołaniem chyba od zawsze był marketing!
            </span>
          </p>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            I tak od stażu w agencji marketingowej do swojej działalności: dziś
            pod szyldem GetBold! obsługuję klientów z Europy, w tym z Polski i
            na moim liczniku wybiło{" "}
            <span className="font-bold">
              już ponad 2 000 000 złotych budżetów reklamowych wydanych w ramach
              Meta Ads.{" "}
            </span>
          </p>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny:
            praktykuję slow marketing, przemyślany, wartościowy, zbudowany na
            relacjach.
          </p>
          <p className="pt-2 pb-2 text-adaMin md:text-adaBase tracking-wider leading-none">
            <span className="font-bold">W programie „Ogarnij swoje adsy!”</span>{" "}
            skupimy się Twoim koncie reklamowym! Zdradzę Ci moje tipy i
            zaoszczędzę dobre kilka lat samodzielnego klikania w menedżerze
            reklam.
          </p>
        </div>
      )}
    </div>
  )
}

export default WebinarAbout
