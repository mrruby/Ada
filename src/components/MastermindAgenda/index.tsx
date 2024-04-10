import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import React from "react"
import "react-vertical-timeline-component/style.min.css"

const scrollToSection = (section: Element | null): void => {
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

const listItemClass = "leading-tight bg-transparent"
const listItemTitleClass = "text-[15px] lg:text-adaDesc font-bold -mb-2"
const listItemDesClass = "text-[15px] lg:text-adaDesc"
const listItemTitleClass2 =
  "text-[15px] lg:text-adaSubtitle uppercase text-ada-pink3 font-bold"

const MastermindAgenda = ({ version }: { version: number }): JSX.Element => {
  return (
    <>
      {version === 1 && (
        <section>
          <h2 className="text-adaSubtitle lg:text-adaBig font-bold text-center text-ada-white40">
            W programie
          </h2>
          <div className="pt-[30px] pb-[60px] px-3">
            <VerticalTimeline>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  padding: "0px",
                }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass}>15 godzin spotkań!</h3>
                <p className={listItemDesClass}>
                  Spotykamy się 6 razy na 2,5 godziny na Google Meets. Co dwa
                  tygodnie przez 3 miesiące! W tym czasie tworzysz, wdrażasz i
                  obserwujesz wyniki swoich kampanii pod moim okiem.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                  "@media (max-width: 600px)": {
                    // Styles for screens smaller than 600px
                    textAlign: "left",
                    // other styles for small screens
                  },
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass}>temat przewodni</h3>
                <p className={listItemDesClass}>
                  Każde spotkanie ma temat przewodni, który pomoże Ci ulepszyć
                  Twoje kampanie reklamowe na całej ścieżce klienta, a nie tylko
                  na poziomie Managera Reklam. Listę tematów spotkań sprawdzisz{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() =>
                      scrollToSection(document.getElementById("steps"))
                    }
                  >
                    tutaj.
                  </span>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass}>kameralna grupa</h3>
                <p className={listItemDesClass}>
                  Spotykamy się w kameralnym gronie 5-7 osób, aby każda z
                  uczestniczek mogła swobodnie zabrać głos i omówić swoje
                  zagwozdki reklamowo-biznesowe.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass}>realne case’y</h3>
                <p className={listItemDesClass}>
                  Pracujemy na przykładach z życia wziętych: Twoich oraz innych
                  uczestniczek.{" "}
                  <span className="underline">
                    Dość teoretycznych przykładów, które nie mają nic wspólnego
                    z rzeczywistością. Przyszedł czas na praktykę i efekty.{" "}
                  </span>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass}>Q&A</h3>
                <p className={listItemDesClass}>
                  Na każdym spotkaniu możesz wskoczyć na hot seat. Możesz pytać
                  o kampanie, pokazać nam swoje konto reklamowe i dowiedzieć
                  się, jakie rozwiązania możesz wdrożyć. To czas dla Ciebie!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass}>nagrania ze spotkań</h3>
                <p className={listItemDesClass}>
                  Nagramy każde spotkanie. Zawsze możesz do niego wrócić lub
                  nadrobić materiał później.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass}>
                  konsultacja indywidualna na start - 60 minut
                </h3>
                <p className={listItemDesClass}>
                  Gdy dołączysz do programu, umówimy się na konsultację 1:1 —
                  zajrzę do Twojego konta reklamowego i pokażę Ci, jak ogarnąć
                  ustawienia. Dzięki temu na pierwszym spotkaniu będziesz gotowa
                  do działania z reklamami.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass}>grupa na Facebooku</h3>
                <p className={listItemDesClass}>
                  Jesteśmy w bieżącym kontakcie — nie musisz czekać z pytaniami
                  do konsultacji, możesz odezwać się na wspólnej grupie na
                  Facebooku. To miejsce na rozmowy marketingowe i biznesowe oraz
                  networking!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass}>office hours</h3>
                <p className={listItemDesClass}>
                  Raz w tygodniu możesz wskoczyć na moje “okienko” i zadać mi
                  dowolne pytanie. Dzięki office hours również między
                  spotkaniami jest szansa na to, aby obgadać kampanie wspólnie
                  na żywo i szybko uzyskać odpowiedź!
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>
      )}
      {version === 2 && (
        <section>
          <h2 className="text-adaSubtitle lg:text-adaTitle2 font-bold text-center uppercase">
            W programie
          </h2>
          <div className="pt-[30px] pb-[60px] px-3">
            <VerticalTimeline>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                  "@media (max-width: 600px)": {
                    textAlign: "left",
                  },
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass2}>22,5 godziny spotkań!</h3>
                <p className={listItemDesClass}>
                  Spotykamy się 9 razy na 2,5 godziny na Google Meets. Co
                  tydzień przez 3 miesiące od kwietnia do czerwca, czyli w
                  jednym z najgorętszych sezonów reklamowych roku 🔥 Teraz
                  uczysz się prowadzić skuteczne kampanie reklamowe, a od
                  września pełną parą startujesz z przygotowaniami do Black
                  Friday oraz promocji przedświątecznych i wykorzystujesz
                  zdobytą wiedzę.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass2}>temat przewodni</h3>
                <p className={listItemDesClass}>
                  Każde spotkanie ma temat przewodni, który pomoże Ci stworzyć
                  kampanie reklamowe na całej ścieżce klienta, a nie tylko na
                  poziomie menadżera reklam. Listę tematów spotkań sprawdzisz
                  tutaj.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass2}>kameralna grupa</h3>
                <p className={listItemDesClass}>
                  Spotykamy się w gronie 7-10 osób, aby każda z uczestniczek
                  mogła swobodnie zabrać głos i omówić swoje case’y.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass2}>realne case’y</h3>
                <p className={listItemDesClass}>
                  Pracujemy na przykładach z życia wziętych: Twoich oraz innych
                  uczestniczek. ❌ Dość teoretycznych przykładów, które nie mają
                  nic wspólnego z rzeczywistością. ✅ Poznajesz różne branże i
                  zdobywasz doświadczenie, które przekłada się na wyniki.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass2}>Q&A</h3>
                <p className={listItemDesClass}>
                  Na każdym spotkaniu jest czas na pytania! Możesz pytać o
                  kampanie, pokazać nam swoje konto reklamowe i dowiedzieć się,
                  jakie rozwiązania możesz wdrożyć.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass2}>nagrania ze spotkań</h3>
                <p className={listItemDesClass}>
                  Nagramy każde spotkanie. Zawsze możesz do niego wrócić lub
                  nadrobić materiał później.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass2}>audyt konta reklamowego</h3>
                <p className={listItemDesClass}>
                  W ramach programu czeka na Ciebie spotkanie indywidualne, na
                  którym zrobimy audyt konta reklamowego! Możesz udostępnić
                  ekran lub nadać mi czasowe dostępy reklamowe, a po spotkaniu
                  dostaniesz listę zmian do wdrożenia + sugestie grup
                  docelowych, do których warto kierować reklamy.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass2}>
                  grupa na Facebooku <br />z czatem grupowym
                </h3>
                <p className={listItemDesClass}>
                  Jesteśmy w bieżącym kontakcie — nie musisz czekać z pytaniami
                  do konsultacji, możesz odezwać się na wspólnej grupie na
                  Facebooku. To miejsce na rozmowy marketingowe i biznesowe oraz
                  networking!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  textAlign: "right",
                }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass2}>
                  konsultacja indywidualnA – 60 minut
                </h3>
                <p className={listItemDesClass}>
                  Do wykorzystania w dowolnym momencie trwania programu, na
                  której omówimy wybrany przez Ciebie temat. Możemy wspólnie
                  zajrzeć w ustawienia menadżera reklam, przygotować konto
                  reklamowe do prowadzenia reklam, ustawić pierwszą kampanię czy
                  przeanalizować wskaźniki uruchomionych kampanii. Opcji jest
                  mnóstwo – Ty wybierasz!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass2}>12 godzin office hour </h3>
                <p className={listItemDesClass}>
                  W każdy roboczy poniedziałek podczas trwania programu w
                  godzinach 10:00-11:00 odbywa się office hour, czyli godzina
                  wspólnych rozkmin reklamowych. Podczas office hour odpowiadamy
                  na pytania, z którymi nie chcesz czekać do spotkania, wspólnie
                  analizujemy kampanie, grafiki czy teksty reklamowe.
                  <br />
                  Na office hour zamiennie dyżurują: specjalistka od Meta adsów
                  (czyli ja, Ada, twórczyni całego zamieszania), copywriterka
                  Justyna i graficzka Dorota.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>
      )}
    </>
  )
}

export default MastermindAgenda
