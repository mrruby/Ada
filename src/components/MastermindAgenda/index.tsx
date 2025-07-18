import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import React from "react"

const scrollToSection = (section: Element | null): void => {
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

const listItemClass = "leading-tight bg-transparent"
const listItemTitleClass = "text-[15px] lg:text-adaDesc font-bold -mb-2"
const listItemDesClass = "text-[15px] lg:text-adaDesc"
const listItemTitleClass2 =
  "text-[15px] lg:text-adaSubtitle uppercase text-ada-purple font-bold"
const listItemTitleClass3 =
  "text-[15px] lg:text-adaSubtitle uppercase text-ada-purple font-bold"

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
                  Spotykamy się 6 razy na 2,5 godziny na Google Meets. Co
                  tydzień przez 1,5 miesiąca. W tym czasie tworzysz, wdrażasz i
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
                  uczestniczek. Dość teoretycznych przykładów, które nie mają
                  nic wspólnego z rzeczywistością. Przyszedł czas na praktykę i
                  efekty.
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
                  ustawienia. Dzięki temu gdy na 3 spotkaniu mentoringowym
                  zaczniemy ustawiać reklamy, będziesz 100% gotowa do działania!
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
                <h3 className={listItemTitleClass}>6 godzin office hours</h3>
                <p className={listItemDesClass}>
                  Co tydzień możesz wskoczyć na godzinne „okienko” i zadać
                  dowolne pytanie. Dyżuruję ja i specjalistki z mojego zespołu ({" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() =>
                      scrollToSection(document.getElementById("team"))
                    }
                  >
                    poznasz je tutaj
                  </span>
                  ). Dzięki office hours możesz skonsultować kampanie również
                  pomiędzy spotkaniami tematycznymi. To czas kiedy możesz zadać
                  pytanie na każdy temat.
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
                <h3 className={listItemTitleClass2}>11 szkoleń wideo</h3>
                <p className={listItemDesClass}>
                  W tym czasie tworzysz, wdrażasz i obserwujesz wyniki swoich
                  kampanii pod moim okiem.
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
                  12 godzin spotkań grupowych z ustawiania reklam
                </h3>
                <p className={listItemDesClass}>
                  Spotykamy się 12 razy na 1,5 godziny na Google Meets.
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
                  warsztaty z pisania tekstów reklamowych i warsztaty z
                  tworzenia grafik
                </h3>
                <p className={listItemDesClass}>
                  Specjalne spotkania z copywriterką Justyną i graficzką Dorotą,
                  na których przećwiczysz swoje skille tworzenia kreacji
                  reklamowych i dostaniesz bezcenny feedback.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass2}>21 godzin office hours</h3>
                <p className={listItemDesClass}>
                  Co tydzień możesz wskoczyć grupowe konsultacje i zadać dowolne
                  pytanie. Dyżuruję ja i specjalistki z mojego zespołu (poznasz
                  je{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() =>
                      scrollToSection(document.getElementById("team"))
                    }
                  >
                    tutaj
                  </span>
                  ). Dzięki office hours możesz skonsultować kampanie również
                  pomiędzy spotkaniami tematycznymi. To czas kiedy możesz zadać
                  pytanie na każdy temat około reklamowy.
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
                <h3 className={listItemTitleClass2}>temat przewodni</h3>
                <p className={listItemDesClass}>
                  Każde spotkanie ma temat przewodni, który pomoże Ci stworzyć
                  kampanie reklamowe na całej ścieżce klienta, a nie tylko na
                  poziomie menadżera reklam. Listę tematów spotkań sprawdzisz{" "}
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
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="left"
              >
                <h3 className={listItemTitleClass2}>
                  konsultacje indywidualne
                </h3>
                <p className={listItemDesClass}>
                  W zależności od wybranego pakietu dostajesz dostęp do
                  konsultacji 1:1 ze mną lub specjalistkami z mojego zespołu.
                  Omówimy Twoje reklamy, newsletter, komunikację, strategię
                  reklamową… - temat zależy od Ciebie!
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
                position="right"
              >
                <h3 className={listItemTitleClass2}>
                  grupa na Facebooku i dedykowany komunikator
                </h3>
                <p className={listItemDesClass}>
                  Jesteśmy w bieżącym kontakcie — nie musisz czekać z pytaniami
                  do office hours, odpowiadamy w każdy dzień roboczy. To miejsca
                  na rozmowy marketingowe i biznesowe oraz networking!
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>
      )}
      {version === 3 && (
        <section>
          <h2 className="text-adaSubtitle lg:text-adaTitle2 font-bold text-center uppercase text-ada-black">
            W programie
          </h2>
          <div className="pt-[30px] px-3 text-ada-black">
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
                <h3 className={listItemTitleClass3}>6 szkoleń wideo!</h3>
                <p className={listItemDesClass}>
                  W tym czasie tworzysz, wdrażasz i obserwujesz wyniki swoich
                  kampanii pod moim okiem.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass3}>
                  8 spotkań „ustawianie kampanii” na żywo
                </h3>
                <p className={listItemDesClass}>
                  Spotykamy się na Google Meets w czwartki co 2 tygodnie, aby
                  wspólnie ustawić kampanie reklamowe. Zobaczysz krok po kroku,
                  co i gdzie kliknąć, aby Twoja kampania reklamowa była crème de
                  la crème.
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
                <h3 className={listItemTitleClass3}>16 godzin office hours</h3>
                <p className={listItemDesClass}>
                  Co tydzień możesz wskoczyć na godzinne „okienko" i zadać
                  dowolne pytanie. Dyżuruję ja i specjalistki z mojego zespołu
                  (poznasz je{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() =>
                      scrollToSection(document.getElementById("team"))
                    }
                  >
                    tutaj
                  </span>
                  ). Dzięki office hours możesz skonsultować kampanie również
                  pomiędzy spotkaniami tematycznymi. To czas kiedy możesz zadać
                  pytanie na każdy temat.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass3}>temat przewodni</h3>
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
                    tutaj
                  </span>
                  .
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
                <h3 className={listItemTitleClass3}>realne case’y</h3>
                <p className={listItemDesClass}>
                  Pracujemy na przykładach z życia wziętych: Twoich oraz innych
                  uczestniczek. Dość teoretycznych przykładów, które nie mają
                  nic wspólnego z rzeczywistością. Przyszedł czas na praktykę i
                  efekty.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass3}>Q&A</h3>
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
                <h3 className={listItemTitleClass3}>nagrania ze spotkań</h3>
                <p className={listItemDesClass}>
                  Nagramy każde czwartkowe spotkanie, na którym ustawiamy
                  kampanie. Zawsze możesz do niego wrócić lub nadrobić materiał
                  później.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={listItemClass}
                iconStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", boxShadow: "none" }}
                contentArrowStyle={{ display: "none" }}
                position="right"
              >
                <h3 className={listItemTitleClass3}>
                  konsultacje indywidualne
                </h3>
                <p className={listItemDesClass}>
                  W zależności od wybranego pakietu dostajesz dostęp do
                  konsultacji 1:1 ze mną lub specjalistkami z mojego zespołu.
                  Omówimy Twoje reklamy, newsletter, komunikację, strategię
                  reklamową… - temat zależy od Ciebie!
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
                <h3 className={listItemTitleClass3}>
                  grupa na Facebooku <br />i dedykowany komunikator
                </h3>
                <p className={listItemDesClass}>
                  Jesteśmy w bieżącym kontakcie — nie musisz czekać z pytaniami
                  do office hours, odpowiadamy w każdy dzień roboczy. To miejsca
                  na rozmowy marketingowe i biznesowe oraz networking!
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
