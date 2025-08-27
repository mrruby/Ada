import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const MasterclassAbout = () => {
  return (
    <div className="flex flex-col text-ada-blue items-center px-3 pb-16">
      <div className="flex flex-col items-center max-w-[806px] md:pb-[40px] gap-4">
        <StaticImage
          src={"../../images/hello.webp"}
          alt="Ada Promis"
          placeholder="blurred"
          width={522}
          height={383}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <h2 className="text-adaSubtitle uppercase md:text-[80px] font-extrabold animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-[0px]">
          Cześć!
        </h2>
        <h3 className="md:text-adaSubtitleSecondary text-center pt-8 font-extrabold md:border-b-[20px] border-ada-light-pink md:leading-[0px]">
          Nazywam się Adrianna Promis-Urbas
        </h3>
        <p className="py-4 md:text-adaDesc">
          Mam za sobą epizod pracy w audycie finansowym, ale moim powołaniem
          chyba od zawsze był <span className="font-bold">marketing! </span>
        </p>
        <p className="pb-4 md:text-adaDesc">
          I tak{" "}
          <span className="font-bold">
            od stażu w agencji marketingowej do swojej działalności:
          </span>{" "}
          dziś pod szyldem GetBold! obsługuję klientów z Europy, w tym z Polski
          i na moim liczniku wybiło już ponad{" "}
          <span className="font-bold">1 mln budżetów reklamowych</span> wydanych
          w ramach Meta Ads. 
        </p>
        <p className="md:text-adaDesc">
          W czasie mojej kariery marketingowej przeszłam od osoby, która pracuje
          na etacie i szuka możliwości rozwoju do{" "}
          <span className="font-bold">przedsiębiorczyni,</span> która szuka
          sposobów na skuteczną promocję swojego biznesu.  
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:pb-[20px] gap-6">
        <StaticImage
          src={"../../images/ada.webp"}
          alt="Ada Promis"
          placeholder="blurred"
          width={383}
          height={376}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <div className="max-w-[628px]">
          <p className="md:text-adaDesc">
            Gdy zaczynałam przygodę z marketingiem, szukałam{" "}
            <span className="font-bold">sprawdzonych</span> źródeł wiedzy o
            reklamach.
          </p>
          <p className="py-4 md:text-adaDesc">
            Byłam w miejscu, w którym{" "}
            <span className="font-bold">praca na swoim</span> wciąż oznaczała
            pracę dla klientów i walkę o każde nowe zlecenie.
          </p>
          <p className="pb-4 md:text-adaDesc">
            Teraz <span className="font-bold">pewnie</span> rozmawiam z każdym
            potencjalnym klientem, bo wiem, jaką{" "}
            <span className="font-bold"> wartość</span> oferuję i co można
            zyskać, pracując ze mną.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:gap-[100px]">
        <StaticImage
          src={"../../images/diagram.webp"}
          alt="Ada Promis"
          placeholder="blurred"
          width={266}
          height={196}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
        <div className="max-w-[654px]">
          <p className="pb-4 md:text-adaDesc">
            Dzięki temu wiem, czego możesz potrzebować{" "}
            <span className="font-bold">
              Ty — marketerko, pracowniczko, freelancerko, przedsiębiorczynio!
            </span>
          </p>
          <p className="pb-4 md:text-adaDesc">
            Ta droga <span className="font-bold">nie była</span> usłana różami,
            ale wiedziałam, że muszę postawić na jedno:{" "}
            <span className="font-bold">twarde kompetencje.</span>
          </p>
          <p className="md:text-adaDesc">
            Zrobiłam to i teraz{" "}
            <span className="font-bold">
              śmiało polecam swoje usługi mentoringowe{" "}
            </span>
            dotyczące projektowania i prowadzenia kampanii reklamowych Meta Ads
          </p>
        </div>
      </div>
    </div>
  )
}

export default MasterclassAbout
