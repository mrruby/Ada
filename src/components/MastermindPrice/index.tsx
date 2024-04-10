import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"

const MastermindPrice = ({ version }: { version: number }): JSX.Element => {
  const listItemClass =
    "text-[15px] lg:text-adaDesc leading-tight font-medium py-2 leading-tight flex flex-col items-center mb-4"

  const pricingList: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">
        To tyle, ile zapłacisz za zlecenie reklam agencji lub freelancerowi na
        jeden miesiąc.{" "}
      </span>
      Dołączając do 3-miesięcznego programu mentoringowego zyskasz nie tylko
      dochodowe kampanie, ale również wiedzę, jak ustawić je zgodnie ze sztuką!
      Gdy w przyszłości będziesz chciała oddelegować kampanie, dzięki wiedzy
      zdobytej podczas spotkań, wybierzesz do współpracy osobę, która naprawdę
      się na tym zna.
    </span>,
    <span key={1}>
      <span className="font-bold">
        To mniej niż konsultacje indywidualne, a dużo więcej wiedzy!{" "}
      </span>
      <br />
      Miesięczny pakiet konsultacji marketingowych (3 lub 4 godzinne spotkania)
      to (cena w przygotowaniu) zł netto. To {">"}(cena w przygotowaniu) złotych
      za godzinę wiedzy.
    </span>,
    <span key={2}>
      <span className="font-bold">
        W programie godzina zdobywania wiedzy i wymiany doświadczeń kosztuje
        (cena w przygotowaniu) złotych.{" "}
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

  const pricingList2: JSX.Element[] = [
    <span key={0}>
      <span className="font-bold">
        Stawki za prowadzenie kampanii reklamowych zaczynają się od 1000 złotych
        miesięcznie.{" "}
      </span>
      Udział w programie mentoringowym zwróci Ci się już po 2/3 miesiącach
      prowadzenia kampanii reklamowych dla jednego klienta!
    </span>,
    <span key={1}>
      <span className="font-bold">
        To mniej niż konsultacje indywidualne, a dużo więcej wiedzy!{" "}
      </span>
      <br />
      Miesięczny pakiet konsultacji marketingowych (3 lub 4 godzinne spotkania)
      to 1300 zł netto. To 325 złotych netto za godzinę wiedzy.
    </span>,
    <span key={2}>
      <span className="font-bold">
        W programie godzina zdobywania wiedzy i wymiany doświadczeń kosztuje
        126,66 złotych netto.
      </span>
      <br />
      Konsultację indywidualną masz w gratisie! Jestem pewna, że kampanie
      stworzone podczas programu pomogą Ci szybko pomnożyć zainwestowane
      pieniądze.
    </span>,
    <span key={3}>
      <span className="font-bold">
        Godzina programu to taki sam koszt jak jeden obiad na mieście i drink.{" "}
      </span>
      <br />
      Zamiast kolejnego wyjścia na miasto, możesz rozwinąć swój biznes tak, aby
      w przyszłości było Cię stać na przyjemności i spokojne życie. Na co dzień,
      nie tylko od święta ;)
    </span>,
  ]

  return (
    <div className="w-full flex flex-col px-3 items-center text-center pb-8">
      {version === 1 && (
        <>
          <div className="pt-[60px] lg:pt-[140px]">
            <h2 className="font-bold text-adaSubtitle lg:text-adaTitle text-ada-grey -mb-4 lg:mb-[-40px]">
              Ile to{" "}
            </h2>
            <h2 className="lg:mt-[-20px] text-adaSubtitle lg:text-adaTitle font-bold animate-bounce">
              kosztuje?
            </h2>
          </div>
          <p className="max-w-[710px] md:text-adaSubtitle pt-16">
            <span className="font-bold"> (cena w przygotowaniu) netto </span>
            (cena w przygotowaniu) miesięcznie przy płatności w 3 ratach co
            miesiąc.{" "}
            <span className="font-bold">
              W sumie (cena w przygotowaniu) złotych.
            </span>
          </p>
          <div className="bg-ada-light-pink lg:w-[1016px] md:text-adaSubtitle my-7">
            <p className="max-w-[710px] mx-auto py-2">
              <span className="font-bold">Płacąc za całość, oszczędzasz:</span>{" "}
              wtedy kwota całościowa to{" "}
              <span className="font-bold">
                {" "}
                (cena w przygotowaniu) złotych netto{" "}
              </span>
              (cena w przygotowaniu){" "}
            </p>
          </div>
          <ul className="max-w-[960px] mb-8">
            {pricingList.map((item, index) => (
              <li key={index} className={listItemClass}>
                <span className="w-[50px] h-[50px] mb-2 animate-spin-slow">
                  <StaticImage
                    src={"../../images/flower-blue.svg"}
                    alt="Ada Promis"
                    placeholder="none"
                    width={50}
                    height={50}
                  />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button
            type="button"
            text={
              <span className="font-bold">
                Zapisuję się na listę osób zainteresowanych!
              </span>
            }
            sectionId="zostaw-maila"
            textSize="md:text-adaSubtitle"
            btnStyle="md:w-[480px] border-b-4 border-ada-pink"
            iconCalender
          />
        </>
      )}
      {version === 2 && (
        <>
          <div className="text-adaSubtitle lg:text-adaTitle font-bold animate-bounce uppercase pt-[60px] lg:pt-[40px]">
            <TypingAnimation
              text="...abyś lepiej niż kiedykolwiek zadbała"
              textStyle="text-ada-grey"
            />
            <TypingAnimation text="o biznesy swoich klientów!" textStyle="" />
          </div>
          <h2 className="pt-20 text-adaSubtitle lg:text-adaTitle font-bold animate-bounce uppercase">
            Ile to kosztuje?
          </h2>
          <p className="max-w-[780px] md:text-adaSubtitle pt-16">
            <span className="font-bold">
              {" "}
              Wartość wszystkich materiałów i spotkań,
            </span>{" "}
            do których zyskujesz dostęp dołączając do programu to
            <span className="font-bold">(cena w przygotowaniu)</span>
          </p>
          <p className="max-w-[780px] md:text-adaSubtitle pt-16">
            Wiem jednak, że może być Ci{" "}
            <span className="font-bold">
              trudno wygospodarować taką kwotę.{" "}
            </span>{" "}
            Zwłaszcza, jeśli dopiero zaczynasz i walczysz o każdego klienta.
          </p>
          <div className="bg-ada-pink2 lg:w-[928px] md:text-adaSubtitle my-7 p-6">
            <p className="mx-auto">
              Dlatego przygotowałam{" "}
              <span className="font-bold">
                dla Ciebie specjalną, niską cenę - (tu będzie cena netto)
              </span>{" "}
              (tu będzie cena brutto) przy płatności z góry!
            </p>
            <p className="mx-auto">
              Wybierając płatność comiesięczną,{" "}
              <span className="font-bold">
                opłata wynosi (cena w przygotowaniu) złotych netto
              </span>{" "}
              miesięcznie.
              <span className="font-bold">
                {" "}
                W sumie (cena w przygotowaniu) zł brutto.
              </span>{" "}
            </p>
          </div>
          <ul className="max-w-[900px] mb-8">
            {pricingList2.map((item, index) => (
              <li key={index} className={listItemClass}>
                <span className="w-[100px] h-[100px] mb-2 animate-spin-slow">
                  <StaticImage
                    src={"../../images/flower-blue.svg"}
                    alt="Ada Promis"
                    placeholder="none"
                    width={100}
                    height={100}
                  />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default MastermindPrice
