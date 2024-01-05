import React from "react"
import { Button } from "helpers/Button"

interface ListItem {
  question: string
  answer: string
}

const MasterclassFAQ = (): JSX.Element => {
  const listItemClass = "lg:w-[550px]"
  const listItemQuestionClass =
    "lg:text-adaDesc font-bold py-4 px-4 bg-ada-light-pink max-w-[360px] flex items-center justify-center text-center mx-auto"
  const listItemAnswerClass = "my-8 lg:text-adaDesc"

  const leftList: ListItem[] = [
    {
      question: "Czy te warsztaty są dla mnie?",
      answer:
        "Warsztaty są dla każdej osoby, która chce w 2024 podnieść wyniki sprzedażowe — czy to swoje, czy swoich klientów.  Nie rozdzielam warsztatów na osobne grupy dla przedsiębiorczyń, freelancerek i etatowców, bo podstawowe zasady planowania lejka sprzedażowego są takie same.  Ważne, aby mieć wybrane konto w mediach społecznościowych, które chcesz rozwijać!",
    },
    {
      question: "Kiedy dostanę dostęp?",
      answer: "Link do spotkania dostaniesz na maila 3 dni przed warsztatami.",
    },
    {
      question: "Kiedy odbędą się warsztaty?",
      answer:
        "17 stycznia o 18:00. Po warsztatach dostaniesz nagranie ze spotkania z zarejestrowaną sesją Q&A.",
    },
    {
      question: "Czy muszę mieć doświadczenie z reklamami?",
      answer:
        "Tak, ale może być niewielkie. Jeśli promowałaś posty na Instagramie — to wystarczy! Jeśli zlecasz reklamy, możesz wziąć udział w warsztatach, a potem przekazać gotowy plan działania do realizacji.",
    },
  ]

  const rightList: ListItem[] = [
    {
      question: "Czy na pewno będzie czas dla mnie?",
      answer:
        "Chcę, aby jak najwięcej osób poznało skuteczne sposoby konstruowania ścieżki klientów, bo wiem, że solidną bazę można przekuć w porządne wyniki. Meta Ads to nadal najtańszy system reklamowy, a ogromna szkoda, aby treści, nad którymi tak ciężko pracujesz, dotarły jedynie do garstki odbiorców. ",
    },
    {
      question: "Gdzie odbędą się warsztaty?",
      answer:
        "Warsztaty odbędą się na Google Meets. Przed spotkaniem dostaniesz maila z linkiem do dołączenia.",
    },
    {
      question: "Ile mam czasu na przerobienie warsztatów?",
      answer:
        "Dostęp do nagrania dostajesz na rok, ale mam nadzieję, że solidnie zapoznasz się z materiałem jeszcze w styczniu. Przeanalizuj statystyki swojego profilu i wdrażaj działania, które przyniosą Ci fajnie pieniądze w 2024 roku.",
    },
    {
      question: "Czy będziesz odpowiadać na pytania?",
      answer:
        "Na koniec warsztatów odbędzie się sesja Q&A, na której odpowiem na pytania. To główny powód, dla którego warto pojawić się na warsztatach na żywo.",
    },
  ]

  const renderList = (list: ListItem[]) => {
    return list.map((item, index) => (
      <li className={listItemClass} key={index}>
        <h3 className={listItemQuestionClass}>{item.question}</h3>
        <p className={listItemAnswerClass}> {item.answer}</p>
      </li>
    ))
  }

  return (
    <div className="flex flex-col text-ada-blue items-center px-3">
      <div className="relative flex flex-col md:flex-row gap-[90px] items-center w-full justify-center">
        <div className="pt-[60px] lg:pt-[76px] z-0">
          <div className="hidden md:flex w-full h-[200px] mb-[-10px] -z-10"></div>
          <h2 className="text-[20px] lg:text-adaTitle font-bold mx-auto lg:mb-2 animate-bounce text-center">
            FAQ
          </h2>
          <div className="pt-[30px] flex flex-col md:flex-row lg:gap-[60px]">
            <ul className="gap-10 md:gap-[120px] ">{renderList(leftList)}</ul>
            <ul className="gap-10 md:gap-[140px]">{renderList(rightList)}</ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-10 pt-[80px] pb-10 md:pb-[118px]">
        <Button
          type="button"
          text={
            <span className="font-extrabold">
              Chcę wziąć udział w warsztatach <br /> i w 2024 roku zdobyć nowych
              klientów!{" "}
            </span>
          }
          url="https://koalendar.com/e/ogarnij-swoje-adsy-konsultacja/"
          textSize="md:text-adaSubtitle"
          btnStyle="md:w-[1030px] bg-ada-pink2 py-8 px-8"
        />
      </div>
    </div>
  )
}

export default MasterclassFAQ
