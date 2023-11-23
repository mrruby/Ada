import React from "react"

interface ListItem {
  title: string
  description: string | JSX.Element
}

const scrollToSection = (section: Element | null): void => {
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

const MastermindAgenda = (): JSX.Element => {
  const listItemClass = "leading-tight max-w-[406px]"
  const listItemTitleClass = "text-[15px] lg:text-adaDesc font-bold"
  const listItemDesClass = "text-[15px] lg:text-adaDesc"

  const leftList: ListItem[] = [
    {
      title: "temat przewodni",
      description: (
        <>
          Każde spotkanie ma temat przewodni, który pomoże Ci ulepszyć Twoje
          kampanie reklamowe na całej ścieżce klienta, a nie tylko na poziomie
          Managera Reklam. Listę tematów spotkań sprawdzisz{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => scrollToSection(document.getElementById("steps"))}
          >
            tutaj.
          </span>
        </>
      ),
    },
    {
      title: "realne case’y",
      description: (
        <>
          Pracujemy na przykładach z życia wziętych: Twoich oraz innych
          uczestniczek.{" "}
          <span className="underline">
            Dość teoretycznych przykładów, które nie mają nic wspólnego z
            rzeczywistością. Przyszedł czas na praktykę i efekty.
          </span>
        </>
      ),
    },
    {
      title: "nagrania ze spotkań",
      description:
        "Nagramy każde spotkanie. Zawsze możesz do niego wrócić lub nadrobić materiał później.",
    },
    {
      title: "grupa na Facebooku",
      description:
        "Jesteśmy w bieżącym kontakcie — nie musisz czekać z pytaniami do konsultacji, możesz odezwać się na wspólnej grupie na Facebooku. To miejsce na rozmowy marketingowe i biznesowe oraz networking!",
    },
  ]

  const rightList: ListItem[] = [
    {
      title: "15 godzin spotkań!",
      description:
        "Spotykamy się 6 razy na 2,5 godziny na Google Meets. Co dwa tygodnie przez 3 miesiące! W tym czasie tworzysz, wdrażasz i obserwujesz wyniki swoich kampanii pod moim okiem.",
    },
    {
      title: "kameralna grupa",
      description:
        "Spotykamy się w kameralnym gronie 5-7 osób, aby każda z uczestniczek mogła swobodnie zabrać głos i omówić swoje zagwozdki reklamowo-biznesowe.",
    },
    {
      title: "Q&A",
      description:
        "Na każdym spotkaniu możesz wskoczyć na hot seat. Możesz pytać o kampanie, pokazać nam swoje konto reklamowe i dowiedzieć się, jakie rozwiązania możesz wdrożyć. To czas dla Ciebie!",
    },
    {
      title: "konsultacja indywidualna na start - 60 minut",
      description:
        "Gdy dołączysz do programu, umówimy się na konsultację 1:1 — zajrzę do Twojego konta reklamowego i pokażę Ci, jak ogarnąć ustawienia. Dzięki temu na pierwszym spotkaniu będziesz gotowa do działania z reklamami.",
    },
    {
      title: "office hours",
      description:
        "Raz w tygodniu możesz wskoczyć na moje “okienko” i zadać mi dowolne pytanie. Dzięki office hours również między spotkaniami jest szansa na to, aby obgadać kampanie wspólnie na żywo i szybko uzyskać odpowiedź!",
    },
  ]

  const renderList = (list: ListItem[]) => {
    return list.map((item, index) => (
      <li className={listItemClass} key={index}>
        <h3 className={listItemTitleClass}>{item.title}</h3>
        <p className={listItemDesClass}>{item.description}</p>
      </li>
    ))
  }

  return (
    <div className="flex flex-col items-center relative w-full pt-[30px] pb-[60px] px-3">
      <h2 className="text-adaSubtitle lg:text-adaBig font-bold text-center text-ada-white40">
        W programie
      </h2>
      <div className="pt-[30px] flex flex-col md:flex-row gap-10">
        <ul className="md:text-right gap-10 md:gap-[120px] flex flex-col md:pt-[140px]">
          {renderList(leftList)}
        </ul>
        <span className="hidden md:flex w-[3px] h-[1366px] bg-ada-blue"></span>
        <ul className="gap-10 md:gap-[140px] flex flex-col">
          {renderList(rightList)}
        </ul>
      </div>
    </div>
  )
}

export default MastermindAgenda
