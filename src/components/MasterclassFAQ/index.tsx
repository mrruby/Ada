import React from "react"
import { Button } from "helpers/Button"
import { Accordion } from "helpers/Accordion"
import CountdownTimer from "helpers/CountdownTimer"

interface ListItem {
  question: string
  answer: string | JSX.Element
}

const MasterclassFAQ = ({ version }: { version: number }): JSX.Element => {
  const leftList: ListItem[] = [
    {
      question: "Czy te warsztaty są dla mnie?",
      answer:
        "Warsztaty są dla każdej osoby, która chce w 2024 podnieść wyniki sprzedażowe — czy to swoje, czy swoich klientów. Nie rozdzielam warsztatów na osobne grupy dla przedsiębiorczyń, freelancerek i etatowców, bo podstawowe zasady planowania lejka sprzedażowego są takie same. Ważne, aby mieć wybrane konto w mediach społecznościowych, które chcesz rozwijać!",
    },
    {
      question: "Kiedy dostanę dostęp?",
      answer: "Link do spotkania dostaniesz na maila 3 dni przed warsztatami.",
    },
    {
      question: "Kiedy odbędą się warsztaty?",
      answer:
        "25 stycznia o 18:00. Po warsztatach dostaniesz nagranie ze spotkania z zarejestrowaną sesją Q&A.",
    },
    {
      question: "Czy muszę mieć doświadczenie z reklamami?",
      answer:
        "Tak, ale może być niewielkie. Jeśli promowałaś posty na Instagramie — to wystarczy! Jeśli zlecasz reklamy, możesz wziąć udział w warsztatach, a potem przekazać gotowy plan działania do realizacji.",
    },
  ]

  const rightList: ListItem[] = [
    {
      question: "Dlaczego tak tanio?",
      answer:
        "Bo nie będziesz mieć już więcej wymówek i dzięki temu zaczniesz działać z reklamami w 2024 roku! ;) Chcę, aby jak najwięcej osób poznało skuteczne sposoby konstruowania ścieżki klientów, bo wiem, że solidną bazę można przekuć w porządne wyniki. Meta Ads to nadal najtańszy system reklamowy, a ogromna szkoda, aby treści, nad którymi tak ciężko pracujesz, dotarły jedynie do garstki odbiorców.",
    },
    {
      question: "Gdzie odbędą się warsztaty?",
      answer:
        "Warsztaty odbędą się na YouTube. Przed spotkaniem dostaniesz maila z linkiem do dołączenia.",
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

  const leftList2: ListItem[] = [
    {
      question: "Kiedy będą odbywać się spotkania?",
      answer: (
        <>
          ✓ Spotkania tematycznie w ramach programu mentoringowego odbywają się
          co tydzień lub co 2 tygodnie. Terminy są elastyczne! Jeśli nie będzie
          pasował Ci któryś z nich, grupowo przedyskutujemy zmianę na inny :)
          <br />
          Raz w tygodniu widzimy się również na office hours, czyli grupowych
          konsultacjach, na których wspólnie zaglądamy do Waszych menadżerów
          reklam i odpowiadamy na pytania.
        </>
      ),
    },
    {
      question: "Czy spotkania będą nagrywane?",
      answer:
        "✓ Tak, każde spotkanie będzie nagrane i udostępnione uczestniczkom spotkania. Jeśli nie możesz dołączyć na żywo, nadrobisz materiał później.",
    },
    {
      question: "Kto weźmie udział w programie mentoringowym?",
      answer: (
        <>
          ✓Program to przestrzeń dla Social Media Managerek, Specjalistek ds.
          marketingu i Wirtualnych Asystentek. Jednym słowem: dla osób, które
          pracują online i chcą poszerzyć zakres swoich usług o prowadzenie
          kampanii reklamowych.
          <br />
          Podczas spotkań nie tylko nauczysz się prowadzić kampanie reklamowe!
          Uczestniczki poprzednich edycji chwalą możliwość rozmowy z osobami,
          które w codziennej pracy spotykają się z podobnymi wyzwaniami.
        </>
      ),
    },
  ]

  const rightList2: ListItem[] = [
    {
      question: "Czy na pewno będzie czas dla mnie?",
      answer: (
        <>
          ✓ Tak, na każdym spotkaniu możesz wskoczyć na „gorące krzesełko” i
          przedstawić swój problem, zadać pytania. Spotykamy się w grupie
          maksymalnie 7 osób, aby każdy znalazł czas dla siebie. <br /> ❌ To
          NIE są spotkania, na których jedna osoba mówi, a druga słucha. <br />{" "}
          ✅ To są spotkania, na których każdy może zabrać głos i znaleźć
          przestrzeń dla siebie.
        </>
      ),
    },
    {
      question: "Nie umiem w techniczne rzeczy, czy dam sobie radę?",
      answer: (
        <>
          ✓ Oczywiście! W czasie programu przekonasz się, że techniczne tematy
          nie są takie straszne, jak się wydają. Pierwsze spotkanie w całości
          poświęcimy tematom dotyczącym ustawień menadżera reklam oraz dobrym
          praktykom we współpracy z klientem. Dowiesz się, jak sprawnie ustawić
          kwestie techniczne i wytłumaczyć klientowi, czego od niego
          potrzebujesz.
          <br />
          <span className="font-bold">
            Zawsze możesz też wpaść na office hour,
          </span>{" "}
          czyli konsultacje grupowe, które odbywają się raz w tygodniu, aby
          rozwiać wątpliwości i zyskać wsparcie w technicznych tematach!
        </>
      ),
    },
    {
      question: "Jak mogę sfinansować udział w programie?",
      answer: (
        <>
          ✓ Jeśli pracujesz na etacie, Twój udział w programie może sfinansować
          pracodawca!{" "}
          <a
            href="https://drive.google.com/file/d/1WlAQAXhvwK5eS7hOqsJV1cOjAwpaMqRQ/view"
            className="underline"
          >
            Pobierz
          </a>{" "}
          gotowy wniosek z informacjami o programie i wynegocjuj pieniądze na
          swój rozwój.
        </>
      ),
    },
  ]

  const leftList3: ListItem[] = [
    {
      question: "Czy Adsy&chill są dla mnie?",
      answer: (
        <>
          Adsy&chill to wiedza dla osób, które chcą zautomatyzować i rozkręcić
          działania na swoim. Są idealne nawet dla osób, które mają niewielką
          (lub żadną) wiedzę o kampaniach reklamowych. Chcesz postawić pierwszą
          kampanię reklamową z prawdziwego zdarzenia? Adsy&chill są dla Ciebie!
        </>
      ),
    },
    {
      question: "Kiedy i jak dostanę dostęp?",
      answer: (
        <>
          Dostęp do masterclassów dostaniesz 10.07. na maila podanego przy
          zakupie.
        </>
      ),
    },

    {
      question: "Czy muszę mieć doświadczenie z reklamami?",
      answer: (
        <>
          Nie musisz 😊 Podczas masterclassów poprowadzę Cię za rękę przez
          menadżera reklam. Jedyne, co musisz mieć, aby w pełni skorzystać z
          masterclassów to menadżer firmy. Jeśli go nie masz, głowa do góry! Po
          dołączeniu do masterclassów dostaniesz możliwość zakupu mini-kursu
          „Przygotuj swój menedżer firmy”. Z nim ułożysz swojego menedżera firmy
          od zera 😊
        </>
      ),
    },
  ]

  const rightList3: ListItem[] = [
    {
      question: "Ile mam czasu na zapoznanie się z masterclassami?",
      answer: (
        <>
          12 miesięcy. Masterclassy będą dostępne na platformie z dostępem 24/7.
          Korzystaj, ile chcesz!
        </>
      ),
    },
    {
      question: "Dlaczego tak tanio?",
      answer: (
        <>
          Masz rację — kursy prowadzenia reklam potrafią kosztować od 1000 zł
          wzwyż. Masterclass dostajesz w niższej cenie, bo wiem, że wiele
          przedsiębiorczyń waha się nad rozpoczęciem działań reklamowych, ale
          powstrzymuje je wysoka cena, jaką musiałyby wydać na start.
          Masterclass to instrukcja ustawienia pełnoprawnych kampanii
          reklamowych od podstaw. Jeśli poczujesz, że to coś dla Ciebie,
          kampanie ustawione dzięki masterclassom będą działać, a Ty w tym
          czasie zdobędziesz wiedzę o strategii kampanii reklamowych.
        </>
      ),
    },
    {
      question: "Czy dostanę fakturę?",
      answer: (
        <>
          Tak, faktura trafi na maila podanego po zakupie chwilę po zakończeniu
          transakcji.
        </>
      ),
    },
  ]

  const renderList = (list: ListItem[]) => {
    return list.map((item, index) => (
      <Accordion key={index} question={item.question} answer={item.answer} />
    ))
  }

  return (
    <div className="flex flex-col text-ada-blue items-center px-3">
      {version === 1 && (
        <>
          <div className="relative flex flex-col md:flex-row gap-[90px] items-center w-full justify-center">
            <div className="pt-[60px] lg:pt-[76px] z-0">
              <h2 className="text-[20px] lg:text-adaTitle font-bold mx-auto lg:mb-2 animate-bounce text-center">
                FAQ
              </h2>
              <div className="pt-[30px] flex flex-col md:flex-row lg:gap-[60px]">
                <ul className="gap-10 md:gap-[120px] ">
                  {renderList(leftList)}
                </ul>
                <ul className="gap-10 md:gap-[140px]">
                  {renderList(rightList)}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-10 pt-[80px] pb-10 md:pb-[118px]">
            <Button
              type="button"
              text={
                <span className="font-extrabold">
                  Chcę wziąć udział w warsztatach <br /> i w 2024 roku zdobyć
                  nowych klientów!{" "}
                </span>
              }
              url="https://app.easycart.pl/checkout/62332176/masterclass-kevin-sam-w-menedzerze-reklam-zaplanuj-swoj-lejek-reklamowy"
              textSize="md:text-adaSubtitle"
              btnStyle="md:w-[1030px] bg-ada-pink2 py-8 px-8 border-b-4 border-ada-pink shadow-xl"
              iconCalender
            />
          </div>
        </>
      )}
      {version === 2 && (
        <>
          <div className="flex flex-col md:flex-row gap-[90px] items-center w-full justify-center">
            <div className="pt-[60px] lg:pt-[76px]">
              <h3 className="text-adaSubtitle lg:text-adaTitle text-ada-grey uppercase text-center font-bold">
                Masz pytania?
              </h3>
              <h2 className="text-[20px] lg:text-adaTitle font-bold w-[80px] md:w-[152px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce text-center mx-auto">
                FAQ
              </h2>
              <div className="pt-[30px] flex flex-col flex-wrap lg:flex-row lg:gap-[60px]">
                <ul className="gap-10 md:gap-[120px] ">
                  {renderList(leftList2)}
                </ul>
                <ul className="gap-10 md:gap-[140px]">
                  {renderList(rightList2)}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-10 pb-8">
            <h4 className="md:text-adaSubtitle max-w-[868px] mx-auto font-medium py-[90px]">
              To jak?{" "}
              <span className="font-bold">
                Dołączasz i szlifujesz kampanie,
              </span>{" "}
              aby przez kolejne miesiące widzieć systematyczny wzrost wyników,
              czy czekasz do kolejnej edycji?
            </h4>
            <Button
              type="button"
              text={
                <span className="font-bold uppercase">
                  Wyślij mi informacje o kolejnej edycji programu!
                </span>
              }
              sectionId="zostaw-maila"
              textSize="md:text-adaSubtitleSecondary"
              btnStyle="md:w-[810px] bg-ada-pink2"
              iconCalender
            />
          </div>
          <div className="flex flex-col items-center text-center gap-6 pb-10 md:pb-[118px]">
            <h3 className="md:text-adaSubtitle max-w-[1024px] mx-auto font-medium pt-[90px]">
              Chcesz, aby pracodawca sfinansował Twój udział w programie? Tutaj
              pobierzesz gotowy wniosek, który pomoże Ci zdobyć środki na
              rozwój.
            </h3>
            <Button
              type="button"
              text={<span className="font-bold">POBIERAM ❤️</span>}
              url="https://drive.google.com/file/d/1WlAQAXhvwK5eS7hOqsJV1cOjAwpaMqRQ/view"
              textSize="md:text-adaSubtitle"
              btnStyle="md:w-[340px] bg-ada-pink2"
            />
          </div>
        </>
      )}
      {version === 3 && (
        <>
          <div className="flex flex-col md:flex-row gap-[90px] items-center w-full justify-center">
            <div className="pt-[60px] lg:pt-[76px]">
              <h2 className="text-[20px] lg:text-adaTitle font-bold w-[80px] md:w-[152px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce text-center mx-auto">
                FAQ
              </h2>
              <div className="pt-[30px] flex flex-col flex-wrap lg:flex-row lg:gap-[60px]">
                <ul className="gap-10 md:gap-[120px] ">
                  {renderList(leftList3)}
                </ul>
                <ul className="gap-10 md:gap-[140px]">
                  {renderList(rightList3)}
                </ul>
              </div>
            </div>
          </div>
          <Button
            type="button"
            text={
              <span className="font-bold">
                Zwiększam sprzedaż <br />
                <span className="text-ada-yellow">Adsy&Chill!</span>
              </span>
            }
            sectionId="pricing"
            textSize="md:text-adaSubtitleSecondary"
            btnStyle="md:w-[500px] bg-ada-purple mb-10 lg:mb-[120px] text-white"
          />
        </>
      )}
    </div>
  )
}

export default MasterclassFAQ
