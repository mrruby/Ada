import React from "react"

const MastermindAgenda = (): JSX.Element => {
  const listItemClass = "leading-tight max-w-[410px]"
  const listItemTitleClass = "text-[15px] lg:text-adaDesc font-bold"
  const listItemDesClass = "text-[15px] lg:text-adaDesc "

  return (
    <div className="flex flex-col items-center relative w-full pt-[30px] pb-[60px] px-3">
      <h2 className="text-adaSubtitle lg:text-adaBig font-bold text-center text-ada-white40">
        W programie
      </h2>
      <div className="pt-[30px] flex flex-col md:flex-row gap-10">
        <ul className="md:text-right gap-10 md:gap-[120px] flex flex-col md:pt-[140px]">
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>temat przewodni</h3>
            <p className={listItemDesClass}>
              Każde spotkanie ma temat przewodni, który pomoże Ci ulepszyć Twoje
              kampanie reklamowe na całej ścieżce klienta, a nie tylko na
              poziomie Managera Reklam. Listę tematów spotkań sprawdzisz tutaj.
            </p>
          </li>
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>realne case’y</h3>
            <p className={listItemDesClass}>
              Pracujemy na przykładach z życia wziętych: Twoich oraz innych
              uczestniczek. Dość teoretycznych przykładów, które nie mają nic
              wspólnego z rzeczywistością. Przyszedł czas na praktykę i efekty.
            </p>
          </li>
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>nagrania ze spotkań</h3>
            <p className={listItemDesClass}>
              Nagramy każde spotkanie. Zawsze możesz do niego wrócić lub
              nadrobić materiał później.
            </p>
          </li>
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>grupa na Facebooku</h3>
            <p className={listItemDesClass}>
              Jesteśmy w bieżącym kontakcie — nie musisz czekać z pytaniami do
              konsultacji, możesz odezwać się na wspólnej grupie na Facebooku.
              To miejsce na rozmowy marketingowe i biznesowe oraz networking!
            </p>
          </li>
        </ul>
        <span className="hidden md:flex w-[3px] h-[1366px] bg-ada-blue"></span>
        <ul className="gap-10 md:gap-[140px] flex flex-col">
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>15 godzin spotkań!</h3>
            <p className={listItemDesClass}>
              Spotykamy się 6 razy na 2,5 godziny na Google Meets. Co dwa
              tygodnie przez 3 miesiące w najgorętszym okresie reklamowym: od
              października do grudnia.
            </p>
          </li>
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>kameralna grupa</h3>
            <p className={listItemDesClass}>
              Spotykamy się w kameralnym gronie 5-7 osób, aby każda z
              uczestniczek mogła swobodnie zabrać głos i omówić swoje zagwozdki
              reklamowo-biznesowe.
            </p>
          </li>
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}> Q&A</h3>
            <p className={listItemDesClass}>
              Na każdym spotkaniu możesz wskoczyć na hot seat. Możesz pytać o
              kampanie, pokazać nam swoje konto reklamowe i dowiedzieć się,
              jakie rozwiązania możesz wdrożyć. To czas dla Ciebie!
            </p>
          </li>
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>
              konsultacja indywidualna na start - 60 minut
            </h3>
            <p className={listItemDesClass}>
              Gdy dołączysz do programu, umówimy się na konsultację 1:1 — zajrzę
              do Twojego konta reklamowego i pokażę Ci, jak ogarnąć ustawienia.
              Dzięki temu na pierwszym spotkaniu będziesz gotowa do działania z
              reklamami.
            </p>
          </li>
          <li className={listItemClass}>
            <h3 className={listItemTitleClass}>sesja skupienia</h3>
            <p className={listItemDesClass}>
              Raz z tygodniu - wspólna praca w ciszy nad optymalizacją kampanii
              oraz zamknięty czat na Messengerze lub Instagramie, na którym
              możesz zadać pytanie i szybko zyskać odpowiedź.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MastermindAgenda
