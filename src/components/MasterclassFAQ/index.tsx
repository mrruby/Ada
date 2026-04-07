import ReferencesSmall from "components/ReferencesSmall"
import { Accordion } from "helpers/Accordion"
import { Button } from "helpers/Button"
import React from "react"

interface ListItem {
  question: string
  answer: string | React.JSX.Element
}

interface MasterclassFAQProps {
  version: number
}

const MasterclassFAQ = ({ version }: MasterclassFAQProps) => {
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
      question: "Czy znajdę czas na udział w spotkaniach?",
      answer: (
        <>
          ✓ Według raportu Digital 2023: Poland przeciętny użytkownik Internetu
          spędza w nim 6 godzin i 42 minuty dziennie, w tym 2 godziny w mediach
          społecznościowych. Pewnie Tobie też raz na jakiś czas zdarza się
          zapomnieć i spędzić kilka godzin z telefonem w ręce? ;)
          <br />W czasie programu spotykamy się na 1,5 godziny raz na 2
          tygodnie. To 30 razy mniej niż czas, który spędzasz w sieci. Przyznaj:
          czas na wspólnej pracy nad reklamami jest dużo lepiej wykorzystany niż
          godziny przeznaczone na scrollowanie Instagrama?
        </>
      ),
    },
    {
      question: "Kiedy odbywają się spotkania?",
      answer: (
        <>
          ✓ Co 2 wtorek w godzinach 12:00-13:00 odbywają się spotkania na
          ustawianie kampanii, na których wspólnie przechodzimy przez wszystkie
          ustawienia w menadżerze reklam. Spotykamy się też w każdy czwartek o
          12:00-13:00 na office hour, na których omawiamy bieżące pytania i
          aktualne kampanie.
          <br />W zależności od pakietu masz do dyspozycji konsultacje
          indywidualne - termin ustalimy wspólnie.
        </>
      ),
    },
    {
      question: "Czy spotkania będą nagrywane?",
      answer: (
        <>
          ✓ Tak, każde spotkanie będzie nagrane i udostępnione uczestniczkom
          spotkania. Jeśli nie możesz dołączyć na żywo, nadrobisz materiał
          później.
        </>
      ),
    },
    {
      question: "Dla kogo jest ten program mentoringowy?",
      answer: (
        <>
          ✓ Program to przestrzeń dla social media managerek, specjalistek ds.
          marketingu i wirtualnych asystentek. Jednym słowem: dla osób, które
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
          ✓ Tak, na każdym spotkaniu możesz wskoczyć na "gorące krzesełko" i
          przedstawić swój problem, zadać pytania. Spotykamy się w kameralnych
          grupach, aby każdy znalazł czas na swoje pytania i pokazanie swojego
          konta reklamowego.
          <br /> ❌ To NIE są spotkania, na których jedna osoba mówi, a druga
          słucha. <br />✅ To są spotkania, na których każdy może zabrać głos i
          znaleźć przestrzeń dla siebie.
        </>
      ),
    },
    {
      question: "Nie umiem w rzeczy techniczne, czy dam sobie radę?",
      answer: (
        <>
          ✓ Oczywiście! W czasie programu przekonasz się, że techniczne tematy
          nie są takie straszne, jak się wydają. Pierwsze spotkanie w całości
          poświęcimy tematom dotyczącym ustawień menadżera reklam oraz dobrym
          praktykom we współpracy z klientem. Dowiesz się, jak sprawnie ustawić
          kwestie techniczne i wytłumaczyć klientowi, czego od niego
          potrzebujesz.
          <br />
          Zawsze możesz też wpaść na office hour, czyli konsultacje grupowe,
          które odbywają się raz w tygodniu, aby rozwiać wątpliwości i zyskać
          wsparcie w technicznych tematach!
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
    {
      question: "Mam inne pytanie, gdzie mogę je zadać?",
      answer: (
        <>
          ✓ Idealną okazją do zadawania pytań i rozmowy o Twoich potrzebach i
          oczekiwaniach są wirtualne kawki! Możesz też napisać do mnie na maila:
          <a href="mailto:adrianna@getbold.agency" className="underline">
            adrianna@getbold.agency
          </a>{" "}
          lub na Instagramie{" "}
          <a href="https://www.instagram.com/adapromis/" className="underline">
            @adapromis
          </a>{" "}
          .
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
      question: "Co będzie się działopo zakupie?",
      answer: (
        <>
          Od razu po zakupie otrzymujesz dostęp do masterclassów na platformie
          kursowej. Możesz przerabiać materiały do woli przez następne 12
          miesięcy - kiedy chcesz i ile razy chcesz!
        </>
      ),
    },
    {
      question: "Czy muszę mieć doświadczenie z reklamami?",
      answer: (
        <>
          Nie musisz 😊 Podczas masterclassów poprowadzę Cię za rękę przez
          menadżera reklam. Jedyne, co musisz mieć, aby w pełni skorzystać z
          masterclassów, to menadżer firmy.
        </>
      ),
    },
    {
      question: "Jakie wyniki osiągnę dzięki masterclassom?",
      answer: (
        <>
          Cóż będę dużo mówić… osoby, które zdecydowały się na adsy&chill w
          przedsprzedaży, mówią tak:
          <br />
          <br />- "moje konto na Instagramie rośnie w oczach" <br />
          - "ROAS w okolicy 5 przy sprzedaży taniego produktu" <br />
          - "wczoraj odpaliłam reklamę na warsztaty online i już rozeszły się
          prawie wszystkie miejsca" <br />
          <br />
          Tak, Ty też możesz tak powiedzieć za kilka dni. Wystarczy, że solidnie
          zapoznasz się z materiałem Adsy&Chill i wdrożysz kampanie na swoim
          koncie reklamowym 🤩
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
    {
      question: "Co mówią osoby, które już przerobiły masterclassy?",
      answer: (
        <>
          <ReferencesSmall />
        </>
      ),
    },
  ]

  const leftList4: ListItem[] = [
    {
      question: "Czy Adsy&chill są dla mnie?",
      answer: (
        <>
          Adsy&chill to masterclassy dla kobiet, które chcą docierać do nowych
          osób na większą skalę niż do tej pory. Poprowadzą Cię przez
          przygotowanie trzech najważniejszych kampanii reklamowych.
        </>
      ),
    },
    {
      question: "Co będzie się działo po zakupie?",
      answer: (
        <>
          Na Twojego maila trafi wiadomość z danymi do logowania do Adsy&chill.
          Masterclassy są dostępne na intuicyjnej platformie, w formie wygodnych
          lekcji video.
        </>
      ),
    },
    {
      question: "Czy muszę mieć doświadczenie z reklamami?",
      answer: (
        <>
          Nie musisz 😊 Jeśli kliknęłaś kiedyś ‘promuj post’ lub pomyślałaś, że
          możesz ustawić pierwszą kampanię reklamową z prawdziwego zdarzenia -
          Adsy&chill są dla Ciebie.
        </>
      ),
    },
    {
      question: "Jakie wyniki osiągnę dzięki masterclassom?",
      answer: (
        <>
          Osoby, które zdecydowały się na dołączenie do Adsy&chill, mówią tak:
          <br />
          <br />- „moje konto na Instagramie rośnie w oczach”
          <br />
          - „ROAS w okolicy 5 przy sprzedaży taniego produktu”
          <br />
          - „wczoraj odpaliłam reklamę na warsztaty online i już rozeszły się
          prawie wszystkie miejsca”
          <br />
          <br />
          Czy obiecam Ci, że w 3 dni sprzedasz 578 produktów? Nie. Czy jestem
          pewna, że przygotowanie reklam zgodnie ze wskazówkami z Adsy&Chill
          przyniesie Ci regularna sprzedaż? Tak :)
        </>
      ),
    },
  ]

  const rightList4: ListItem[] = [
    {
      question: "Na jak długo dostanę dostęp?",
      answer: <>Na 12 miesięcy.</>,
    },
    {
      question: "Skąd ta cena?",
      answer: (
        <>
          Masz rację - kursy prowadzenia reklam potrafią kosztować od 1000 zł
          wzwyż. Masterclass dostajesz w niższej cenie, bo wiem, że wiele
          przedsiębiorczyń zastanawia się nad rozpoczęciem działań reklamowych,
          ale powstrzymuje je wysoka cena, jaką musiałyby wydać na start.
          Adsy&chill to instrukcja ustawienia kampanii reklamowych od podstaw.
        </>
      ),
    },
    {
      question: "Czy dostanę fakturę?",
      answer: (
        <>
          Tak, faktura trafi na maila podanego w koszyku chwilę po zakończeniu
          transakcji.
        </>
      ),
    },
    {
      question: "Czy mogę przeczytać opinie o Adsy&chill?",
      answer: (
        <>
          Oczywiście! Zerknij też do sekcji{" "}
          <b>
            <a href="#opinie">
              “Tak mówią osoby, które korzystały z mojego wsparcia w reklamach”
            </a>
          </b>
        </>
      ),
    },
  ]

  const autumnList: ListItem[] = [
    {
      question: "Pewnie teraz zastanawiasz się...",
      answer: (
        <>
          Według raportu Digital 2023: Poland przeciętny użytkownik Internetu
          spędza w nim 6 godzin i 42 minuty dziennie, w tym 2 godziny w mediach
          społecznościowych. Pewnie Tobie też raz na jakiś czas zdarza się
          zapomnieć i spędzić kilka godzin z telefonem w ręce? ;) W czasie
          programu spotykamy się na 2,5 godziny raz na 2 tygodnie. To prawie 19
          razy mniej niż czas, który spędzasz w sieci. Przyznaj: czas na
          wspólnej pracy nad reklamami to dużo lepiej wykorzystany czas niż
          scrollowanie Instagrama?
        </>
      ),
    },
    {
      question: "Kiedy odbywają się spotkania?",
      answer: (
        <>
          Co 2 czwartek o 10:00 odbywają się spotkania na ustawianie kampanii,
          na których wspólnie przechodzimy przez wszystkie ustawienia kampanii.
          Spotykamy się w każdy wtorek o 10:30 na office hour, na których
          omawiamy bieżące pytania i aktualne kampanie.
          <br />W zależności od pakietu masz do dyspozycji konsultacje
          indywidualne - termin ustalimy wspólnie.
        </>
      ),
    },
    {
      question:
        "Czy wiem wystarczająco dużo o reklamach, aby wziąć udział w mentoringu?",
      answer: (
        <>
          Poziom wiedzy i doświadczenia uczestniczek jest różny i to jest
          dodatkowa wartość naszych spotkań! Dzięki temu uczestniczki mają
          swobodę dzielenia się wiedzą i zdobywania nowych umiejętności. Nie
          ukrywam, że program jest skierowany do osób, które mają już
          doświadczenie w ustawianiu reklam. Wystarczy, że wiesz, gdzie kliknąć,
          aby stworzyć kampanię i wiesz, gdzie szukać ustawień grupy docelowej.
          Jeśli możesz o sobie powiedzieć: "coś już wyklikałam w managerze
          reklam", dołącz!
        </>
      ),
    },
    {
      question: "Co jeśli nie będę mogła pojawić się na którymś spotkaniu?",
      answer: (
        <>
          Spotkania, na których ustawiamy kampanie reklamowe, będą nagrywane i
          udostępnione tylko dla osób uczestniczących w programie. Jeśli nie
          dotrzesz na któreś spotkanie, będziesz mogła nadrobić materiał. Z
          zadaniem pytań nie musisz czekać do kolejnego spotkania — będziesz
          mogła zadać je na dedykowanej grupie na Facebooku, gdzie będziemy w
          stałym kontakcie!
        </>
      ),
    },
    {
      question: "Jaki budżet muszę przygotować na reklamy?",
      answer: (
        <>
          Dobre pytanie! Oczywiście, aby prowadzić kampanie reklamowe, musimy
          wpłacić pieniądze na konto reklamowe. Wysokość budżetu zaczyna się od
          kilkuset złotych miesięcznie… ale na szczęście nie wszystko zależy od
          budżetu! Twoje możliwości finansowe przedyskutujemy na wirtualnej
          kawce. Możesz się na nią umówić{" "}
          <a
            href="https://koalendar.com/e/ogarnij-swoje-adsy"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            tutaj.
          </a>
        </>
      ),
    },
    {
      question: "Dla kogo jest program mentoringowy 'Ogarnij swoje adsy'?",
      answer: (
        <>
          Program to przestrzeń dla przedsiębiorczyń i solopreneurek. Dlatego to
          nie tylko szansa na omówienie kampanii, ale również wspólne
          rozwiązywanie problemów, które spotykamy, prowadząc własne biznesy.
        </>
      ),
    },
    {
      question: "Czy na pewno będzie czas dla mnie?",
      answer: (
        <>
          Tak, na każdym office hour możesz wskoczyć na "gorące krzesełko" i
          przedstawić swój problem, zadać pytania.
          <br />
          ❌ To NIE są spotkania, na których jedna osoba mówi, a druga słucha.
          <br />✅ To są spotkania, na których każdy może zabrać głos i znaleźć
          przestrzeń dla siebie.
        </>
      ),
    },
    {
      question: "Nie umiem w techniczne rzeczy, czy dam sobie radę?",
      answer: (
        <>
          Oczywiście! Jeśli wolisz wsparcie 1:1, wybierz pakiet z konsultacjami,
          na których pokażemy Ci jak poukładać menedżer reklam, piksel i
          ustawimy zabezpieczenia. Przekonasz się, że techniczne tematy nie są
          takie straszne, jak się wydają.
        </>
      ),
    },
    {
      question:
        "Dlaczego warto uczyć się prowadzić kampanie reklamowe samodzielnie?",
      answer: (
        <>
          Nie oszukujmy się — zlecenie kampanii specjalistom jest super, ale nie
          każdy ma taki budżet. Zlecenie reklam kosztuje od 1500 zł netto wzwyż,
          a do tego jeszcze budżet reklamowy. Na szczęście z odpowiednim
          wsparciem na start możesz prowadzić kampanie reklamowe samodzielnie! A
          jeśli któregoś dnia zdecydujesz, że chcesz zlecić reklamy, będziesz
          miała wiedzę, aby wybrać najlepszych specjalistów.
        </>
      ),
    },
  ]

  const magicFAQList: ListItem[] = [
    {
      question: "🔍 Na jakiej platformie funkcjonuje MAGIC? ",
      answer: (
        <>
          MAGIC działa na platformie Circle. Tajna informacja: kod ALOHOMORA
          działa cuda w koszyku! 🪄
        </>
      ),
    },
    {
      question: "💎 Co sprawia, że MAGIC jest wyjątkowy?",
      answer: (
        <>
          To tętniąca życiem, interaktywna społeczność! Uczestniczysz w
          spotkaniach na żywo, masz dostęp do nagrań, a program elastycznie
          dopasowujemy do Twoich potrzeb. W zależności od wybranego pakietu
          korzystasz z konsultacji grupowych i indywidualnych. To nie jest
          kolejny statyczny kurs - to przestrzeń ciągłego rozwoju!
          <br />
          <br />
        </>
      ),
    },
    {
      question: "🎯 Co czeka na mnie w MAGIC?",
      answer: (
        <>
          <ul>
            <li>
              - 4 intensywne sesje (konsultacje grupowe, warsztaty, ustawianie
              reklamy na żywo, 60-90 min) miesięcznie
            </li>
            <li>- Nielimitowane konsultacje pisemne</li>
            <li>- Regularne inspiracje i praktyczne wskazówki</li>
            <li>
              - Aktualne informacje branżowe w formie przystępnych prasówek
            </li>
          </ul>
          <p>A to wszystko w cenie niższej niż pojedyncza konsultacja 1:1!</p>
        </>
      ),
    },
    {
      question: "📚 Czego się nauczę?",
      answer: (
        <>
          Skupiamy się na digital marketingu, ze szczególnym naciskiem na
          kampanie w Meta Ads. Dodatkowo poznasz skuteczne techniki copywritingu
          i zasady tworzenia przyciągających grafik. Dowiesz się, jak stworzyć
          własny newsletter oraz jakie narzędzia AI warto wykorzystać w swojej
          pracy, aby działać szybciej i skuteczniej! Wszystko, czego
          potrzebujesz do skutecznego marketingu online!
        </>
      ),
    },
    {
      question: "Ile czasu zajmuje MAGIC?",
      answer: (
        <>
          2-3 godziny tygodniowo, jeśli chcesz skorzystać z bieżących spotkań.
          Jak dużo czasu spędzisz na konsultowaniu swoich treści czy czytaniu
          materiałów - to zależy od Ciebie! Uspokajamy: MAGIC został stworzony z
          myślą o zabieganych przedsiębiorczyniach. Wszystkie spotkania są
          nagrywane, więc możesz z nich skorzystać w dowolnym momencie. Wiemy,
          że biznes to nie 9-17. Działamy dokładnie tak samo - bez sztywnych ram
          czasowych!
        </>
      ),
    },
  ]

  const renderList = (list: ListItem[]) => {
    return list.map((item) => (
      <li key={item.question} className="list-none">
        <Accordion question={item.question} answer={item.answer} />
      </li>
    ))
  }

  return (
    <div className="flex flex-col text-ada-blue items-center px-6">
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
                Masz pytania? My mamy odpowiedzi!
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
              url="https://drive.google.com/file/d/1mz4jmKlaDr_fI5Qrsn_XRWX8lZJnjRnI/view"
              textSize="md:text-adaSubtitle"
              btnStyle="md:w-[340px] bg-ada-pink2"
            />
            <h3 className="md:text-adaSubtitle max-w-[1024px] mx-auto font-medium pt-[90px]">
              PS Pamiętaj, że inwestycja w siebie to najlepsza inwestycja. Twoi
              przyszli klienci już na Ciebie czekają!
            </h3>
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
                <ul className="gap-10 md:gap-[120px] text-adaMin md:text-adaStandard">
                  {renderList(leftList3)}
                </ul>
                <ul className="gap-10 md:gap-[140px] text-adaMin md:text-adaStandard">
                  {renderList(rightList3)}
                </ul>
              </div>
            </div>
          </div>
          <Button
            type="button"
            text={
              <span className=" font-extrabold">
                Zwiększam zyski z{" "}
                <span className="text-ada-orange">Adsy&Chill!</span>
              </span>
            }
            sectionId="pricing"
            textSize="md:text-adaSubtitleSecondary"
            btnStyle="md:w-[500px] bg-ada-light-pink mb-10 lg:mb-[120px] md:leading-[36px] md:h-[120px]"
          />
        </>
      )}
      {version === 4 && (
        <>
          <div className="flex flex-col md:flex-row gap-[90px] items-center w-full justify-center text-ada-black">
            <div className="pt-[60px] lg:pt-[76px]">
              <h2 className="text-[20px] lg:text-adaTitle font-bold lg:mb-2 animate-bounce text-center mx-auto">
                FAQ
              </h2>
              <ul className="gap-10 md:gap-[120px] text-adaMin md:text-adaStandard">
                {renderList(autumnList)}
              </ul>
            </div>
          </div>
        </>
      )}
      {version === 5 && (
        <>
          <div className="flex flex-col md:flex-row gap-[90px] items-center w-full justify-center text-ada-black">
            <div className="pt-[60px] lg:pt-[76px]">
              <h2 className="text-[20px] lg:text-adaTitle font-bold lg:mb-2 animate-bounce text-center mx-auto">
                FAQ
              </h2>
              <ul className="gap-10 md:gap-[120px] text-adaMin md:text-adaStandard">
                {renderList(magicFAQList)}
              </ul>
            </div>
          </div>
        </>
      )}
      {version === 6 && (
        <>
          <div className="flex flex-col md:flex-row gap-[90px] items-center w-[300px] md:w-full justify-center">
            <div className="pt-[60px] lg:pt-[76px]">
              <h2 className="text-[20px] lg:text-adaTitle font-bold w-[80px] md:w-[152px] border-b-[11px] lg:mb-2 lg:border-b-[22px] border-ada-light-pink h-[24px] lg:h-[60px] animate-bounce text-center mx-auto">
                FAQ
              </h2>
              <div className="pt-[30px] flex flex-col flex-wrap lg:flex-row lg:gap-[60px]">
                <ul className="maw-w-[300px] gap-10 md:gap-[120px] text-adaMin md:text-adaStandard">
                  {renderList(leftList3)}
                </ul>
                <ul className="gap-10 md:gap-[140px] text-adaMin md:text-adaStandard">
                  {renderList(rightList3)}
                </ul>
              </div>
            </div>
          </div>
          <Button
            type="button"
            text={
              <span className=" font-extrabold">
                Zwiększam zyski z{" "}
                <span className="text-ada-orange">Adsy&Chill!</span>
              </span>
            }
            sectionId="pricing"
            textSize="md:text-adaSubtitleSecondary"
            btnStyle="md:w-[500px] bg-ada-light-pink mb-10 lg:mb-[120px] md:leading-[36px] md:h-[120px] rounded-[100px]"
          />
        </>
      )}
      {version === 7 && (
        <>
          <div
            className="flex flex-col md:flex-row gap-[90px] items-center w-full justify-center text-black"
            id="faq"
          >
            <div className="pt-[60px] lg:pt-[76px]">
              <h2 className="text-[20px] lg:text-adaTitle font-bold w-[80px] md:w-[152px] lg:mb-2 animate-bounce text-center mx-auto">
                FAQ
              </h2>
              <div className="pt-[30px] flex flex-col flex-wrap lg:flex-row lg:gap-[60px]">
                <ul className="gap-10 md:gap-[120px] text-adaMin md:text-adaStandard">
                  {renderList(leftList4)}
                </ul>
                <ul className="gap-10 md:gap-[140px] text-adaMin md:text-adaStandard">
                  {renderList(rightList4)}
                </ul>
              </div>
            </div>
          </div>
          <Button
            type="button"
            text={
              <span className="!font-extrabold uppercase">
                Tworzę reklamy z Adsy&Chill!
              </span>
            }
            sectionId="pricing"
            textSize="md:text-adaSubtitle text-white"
            btnStyle="md:w-[440px] bg-ada-magicOrange mb-10 lg:mb-[120px] md:leading-[36px] md:h-[100px] rounded-full border border-black"
          />
        </>
      )}
    </div>
  )
}

export default MasterclassFAQ
