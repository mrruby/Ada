import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Reference from "../../helpers/Reference"
import ArrowLeft from "../../images/arrow-left.svg"
import ArrowRight from "../../images/arrow-right.svg"

type IReferencesList = {
  reference: string
  name: string
  company?: string
}

type IReferences = {
  title1?: boolean
  title2?: boolean
  title3?: boolean
  title4?: boolean
}

const referencesList: IReferencesList[] = [
  {
    reference:
      "Serdecznie polecam współpracę z Adą! Dzięki konsultacjom swobodnie poruszam się po menedżerze reklam, ustawiam kampanie na różne grupy docelowe i sprawdzam ich skuteczność. Ada jest kompendium wiedzy w sprawach meta adsów, zna i rozumie wszystkie zmiany. Zawsze sugeruje najlepsze możliwe rozwiązania, pozwalając rozwinąć skrzydła jednocześnie!",
    name: "Natalia Plewniok",
  },
  {
    reference:
      "„Naprawdę polecam współpracę z Adrianną. Konkretnie i z dużym sukcesem rozwinęłam sprzedaż swoich produktów on-line, dzięki odpowiedniej strategii, którą zaproponowała Ada. Ada kontroluje reklamy, wprowadza poprawki i dba o to, żeby maszyna ruszyła, gdy ja mogłam się zająć spokojnym opowiadaniem o moich produktach w sieci. Dużym plusem jest też stały kontakt i podsumowywanie na koniec kampanii, dzięki czemu wiedziałyśmy, co zadziałało, a co nie.”",
    name: "Katarzyna Skórska, ",
    company: "Dietetyk kliniczny",
  },
  {
    reference:
      "„Bardzo dobrze prowadzone i jakościowe kampanie, które pomogły nam dotrzeć do dużej grupy nowych odbiorców. Koncepcja slow marketingu bardzo się wpasowała w nasze potrzeby. Polecamy z całego serca współpracę z Adą.”",
    name: "Stan Skupienia",
  },
  {
    reference:
      "„Bardzo długo szukałam specjalisty od reklam, któremu mogłabym w 100% zaufać i mieć pewność, że naprawdę wie, co robi i zna się na swojej pracy. Miałam sporo doświadczeń z marketerami, ale dopiero współpraca z Adą przyniosła mi prawdziwe, mierzalne efekty. Bardzo cenię to, że Ada podpowiada kreatywne rozwiązania i sugeruje jakie treści, produkty czy materiały warto by było stworzyć, aby poprawić wyniki. Jest to naprawdę niespotykane podejście, które wspiera nie tylko skuteczność reklam, ale i rozwój całej firmy! Ada dba też o to, bym była ze wszystkim na bieżąco i cierpliwie tłumaczy zagadnienia, których nie rozumiem. Nawet kiedy pytam trzeci raz o to samo! ;) Bardzo się cieszę, że nawiązałyśmy współpracę. :)”",
    name: "Julia Boryczka, ",
    company: "Creatownia",
  },
  {
    reference:
      "„Pracowałyśmy z Adą w jednej z agencji reklamowych i przyznam, że nie wiem, czy była druga taka osoba, która tak szybko awansowała co Ada. Dlaczego? Bo każda jej kampania reklamowa przynosiła świetne wyniki i tym samym każdy z jej klientów uwielbiał z nią współpracować. Wspaniała kobieta, która nie dość, że najtrudniejszą kwestię wytłumaczy Ci w prosty sposób, to jeszcze wyniki jej kampanii zwiększą przychody Twojej firmie.”",
    name: "Aleksandra Adamczyk, ",
    company: "@ola.ad",
  },
  {
    reference:
      "„Czuć, że Ada przepracowała już masę kampanii. Jesteśmy bardzo zadowolone, bo ma podobne do nas podejście do marketingu — w rytmie slow. Bez nagabywania, sztucznych promocji, na rzecz poznania marki i przedstawienia jej wartości.”",
    name: "Ziołowa Wyspa",
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[-100px] bottom-0 left-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="Left Arrow" width={16} height={25} />
    </div>
  )
}

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[-100px] bottom-0 right-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="Right Arrow" width={16} height={25} />
    </div>
  )
}

const References = ({
  title1,
  title2,
  title3,
  title4,
}: IReferences): JSX.Element => {
  return (
    <div className="pt-[120px]">
      {title1 && (
        <>
          <h3 className="mx-auto max-w-[500px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            Co mówią osoby,
          </h3>
          <h3 className="mx-auto max-w-[780px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            z którymi współpracowałam?
          </h3>
        </>
      )}
      {title2 && (
        <>
          <h3 className="mx-auto max-w-[778px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            Opinie właścicielek biznesów,
          </h3>
          <h3 className="mx-auto max-w-[500px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-light-pink h-[24px] lg:h-[68px] animate-bounce">
            które mi zaufały
          </h3>
        </>
      )}
      {title3 && (
        <h3 className="mx-auto max-w-[850px] text-center text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[34px] border-ada-light-pink h-[24px] lg:h-[68px]">
          Co mówią Ci, którzy przeczytali?
        </h3>
      )}
      {title4 && (
        <>
          <h3 className="mx-auto md:max-w-[941px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-light-pink md:h-[24px] lg:h-[40px] animate-bounce uppercase">
            TAK mówią osoby, z którymi współpracowałam
          </h3>
          <h3 className="mx-auto md:max-w-[680px] text-center text-adaBase lg:text-3xl font-bold lg:mb-2 md:border-b-[16px] lg:border-b-[28px] border-ada-light-pink md:h-[24px] lg:h-[40px] animate-bounce uppercase">
            przy kampaniach reklamowych:
          </h3>
        </>
      )}
      {referencesList && (
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          ssr={true}
        >
          {referencesList.map((reference, index) => (
            <Reference
              key={index}
              reference={reference.reference}
              name={reference.name}
              company={reference.company}
            />
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default References
