import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const listItems = [
  {
    title: "Budowanie długotrwałych relacji z klientami",
    description:
      "Poznasz 3 typy kampanii do wdrożenia na każdym etapie lejka marketingowego",
  },
  {
    title: "Konkretne wskazówki do wdrożenia od zaraz",
    description:
      "Dowiesz się, jak przełożyć cele biznesowe klienta na cele w menadżerze reklam",
  },
  {
    title: "Skuteczna strategia prowadzenia kampanii",
    description:
      "Nauczysz się układać strukturę kampanii na koncie reklamowym w zgrabną całość",
  },
]

const listItems2 = [
  "Wiedza od ekspertki z 6-letnim doświadczeniem w branży reklamowej",
  "Dostęp do nagrania przez 12 dni (tylko dla zapisanych!)",
  "Koszt udziału: 0 zł",
  "Q&A na żywo — pytaj o wszystko, co dotyczy kampanii na Facebooku i Instagramie",
]

const WebinarAgenda = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col px-3 pb-2 items-center py-10 md:py-[140px]">
      <h3 className="text-adaSubtitle md:text-adaTitle2 font-bold uppercase mb-10 max-w-[1085px] text-center animate-bounce md:border-b-[50px] border-ada-light-pink md:leading-[0px]">
        Czego się nauczysz?
      </h3>
      <ul>
        {listItems.map((item, index) => (
          <li key={index} className="flex flex-col md:flex-row gap-6 pb-6">
            <div>
              <StaticImage
                src={"../../images/check.svg"}
                alt="Ada Promis"
                placeholder="none"
                width={44}
                height={46}
                style={{ width: "44px", height: "46px" }}
              />
            </div>
            <span className="max-w-[627px]">
              <h4 className="font-bold md:text-adaSubtitle tracking-wider">
                {item.title}
              </h4>
              <p className="md:text-adaDesc">{item.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <h3 className="text-adaSubtitle md:text-adaTitle font-bold uppercase pb-16 max-w-[960px] text-center mt-10 md:mt-[100px] tracking-wider">
        Dlaczego jeszcze warto wziąć udział w webinarze?{" "}
      </h3>
      <div className="flex flex-wrap justify-center mb-20 gap-5">
        {listItems2.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 items-center px-2 xl:w-[620px] md:text-adaSubtitle font-bold tracking-wider leading-none"
          >
            <div>
              <StaticImage
                src={"../../images/check.svg"}
                alt="Ada Promis"
                placeholder="none"
                width={44}
                height={46}
                style={{ width: "44px", height: "46px" }}
              />
            </div>
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-8 pb-2 md:pb-8">
        <div className="text-[64px] mt-[-20px]">🎁</div>
        <p className="md:text-adaSubtitle font-bold uppercase tracking-wider max-w-[570px]">
          <span className="text-ada-purple">BONUS:</span> Specjalna
          niespodzianka dla wszystkich uczestniczek!
        </p>
      </div>
    </div>
  )
}

export default WebinarAgenda
