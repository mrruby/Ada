import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MastermindPrice = (): JSX.Element => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight flex flex-col items-center mb-4"

  const pricingList: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">
        To co najmniej o połowę mniej niż zlecenie reklam agencji lub
        freelancerowi.{" "}
      </span>
      Dołączając do programu mentoringowego zyskasz nie tylko dochodowe
      kampanie, ale również wiedzę, jak ustawić je zgodnie ze sztuką! Gdy w
      przyszłości będziesz chciała oddelegować kampanie, dzięki wiedzy zdobytej
      podczas spotkań, wybierzesz do współpracy osobę, która naprawdę się na tym
      zna.
    </span>,
    <span key={1}>
      <span className="font-bold">
        To mniej niż konsultacje indywidualne, a dużo więcej wiedzy!{" "}
      </span>
      <br />
      Miesięczny pakiet konsultacji marketingowych (3 lub 4 godzinne spotkania)
      to 1300 zł netto. To >325 złotych za godzinę wiedzy.
    </span>,

    <span key={2}>
      <span className="font-bold">
        W programie godzina zdobywania wiedzy i wymiany doświadczeń kosztuje
        112,50 złotych.{" "}
      </span>
      <br />
      Konsultacje indywidualne masz w gratisie! Jestem pewna, że kampanie
      stworzone podczas programu pomogą Ci szybko pomnożyć zainwestowane
      pieniądze.
    </span>,
    <span key={3}>
      <span className="font-bold">
        Godzina programu to taki sam koszt jak jeden obiad na mieście i drink.
      </span>
      <br />
      Zamiast kolejnego wyjścia na miasto, możesz rozwinąć swój biznes tak, aby
      w przyszłości było Cię stać na przyjemności i spokojne życie. Na co dzień,
      nie tylko od święta ;)
    </span>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center text-center pb-8">
      <div className="pt-[60px] lg:pt-[140px]">
        <h2 className="font-bold text-adaSubtitle lg:text-adaTitle text-ada-grey">
          Ile to{" "}
        </h2>
        <h2 className="lg:mt-[-20px] text-adaSubtitle lg:text-adaTitle font-bold">kosztuje?</h2>
      </div>
      <p className="max-w-[710px] md:text-adaSubtitle pt-16">
        <span className="font-bold"> 497 złotych netto</span>
        (611.31 zł brutto) miesięcznie przy płatności w 3 ratach co miesiąc.{" "}
        <span className="font-bold">W sumie 1491 złotych.</span>
      </p>
      <div className="bg-ada-light-pink lg:w-[1016px] md:text-adaSubtitle my-7">
        <p className="max-w-[710px] mx-auto py-2">
          <span className="font-bold">Płacąc za całość, oszczędzasz:</span>{" "}
          wtedy kwota całościowa to {" "}
          <span className="font-bold">1350 złotych netto</span>
          (1 660,50 zł brutto)!
        </p>
      </div>
      <ul className="max-w-[960px]">
        {pricingList.map((item, index) => (
          <li key={index} className={listItemClass}>
            <span className="w-[50px] h-[50px] mb-2">
             <StaticImage src={"../../images/flower-blue.svg"} alt="Ada Promis" placeholder="none" width={50} height={50}  />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MastermindPrice
