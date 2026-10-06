/** Content of /ogarnij-swoje-adsy-2 (previous edition of "Ogarnij swoje adsy!"). */
import type { RichText } from "@/lib/content"
import { bonus } from "./bonuses"
import type { BonusItem, QaItem, StepItem, TimelineItem } from "./types"

/** "Prowadzisz własny biznes?" */
export const adsy2Questions: RichText[][] = [
  [
    "Budujesz markę osobistą i chcesz być bardziej widoczna w social mediach?",
    "Jesteś specjalistką w swojej dziedzinie i chcesz z lekkością pozyskiwać nowych klientów na swoje usługi?",
    "Przekopałaś już całego Facebooka w poszukiwaniu nowych klientów, ale zamiast spektakularnych efektów czujesz zmęczenie i rezygnację?",
    "Wiesz, że wiele osób chętnie skorzystałoby z Twojej oferty, ale nie wiesz, jak do nich dotrzeć?",
    "Chcesz wypromować swój e-book, webinar, kurs online?",
    "Planujesz kampanię sprzedażową i chcesz wreszcie przebić szklany sufit swoich przychodów?",
  ],
  [
    "Zrobiłaś już milion kursów, ale nie do końca wiesz, jak wdrożyć te wszystkie „genialne metody na sukces” w życie?",
    "Nie chcesz powierzać swojego marketingu agencji reklamowej, chcesz samodzielnie dotrzeć do swoich klientów?",
    "Masz dość walki z algorytmem Instagrama i Facebooka?",
    "Czujesz się sfrustrowana, gdy Twoje wartościowe treści są przykryte przez czyjeś wygłupy i tańce?",
    "A może prowadzisz własny sklep i ciągle sprzedajesz, a na spotkaniach z bliskimi czujesz się jak konsultantka z Avonu?",
  ],
]

/** "To bezpieczna przestrzeń, w której:" */
export const adsy2SafeSpace: RichText[] = [
  "<b>podkręcisz wyniki swojego biznesu </b>i nauczysz się docierać do osób zainteresowanych ofertą, którą reklamujesz,",
  "stworzysz <b>bardziej zaawansowane kampanie reklamowe</b>i dowiesz się, jak je optymalizować, aby zarabiać więcej,",
  "wybierzesz <b>najlepsze materiały do reklam</b>, stworzysz chwytliwe grafiki i błyskotliwe teksty reklamowe,",
  "<b>zrozumiesz ścieżkę Twojego klienta </b>i dowiesz się, co zrobić, jeśli kampanie nie działają,",
  "zderzysz swoje wątpliwości z osobami, które mają podobne problemy w zdobywaniu nowych klientów i przekonasz się, że rozwiązanie jest bliżej niż myślisz,<b> wystarczy wiedzieć, gdzie go szukać!</b>",
]

/** "W programie" timeline. */
export const adsy2Agenda: TimelineItem[] = [
  {
    side: "right",
    title: "15 godzin spotkań!",
    text: "Spotykamy się 6 razy na 2,5 godziny na Google Meets. Co tydzień przez 1,5 miesiąca. W tym czasie tworzysz, wdrażasz i obserwujesz wyniki swoich kampanii pod moim okiem.",
  },
  {
    side: "left",
    title: "temat przewodni",
    text: 'Każde spotkanie ma temat przewodni, który pomoże Ci ulepszyć Twoje kampanie reklamowe na całej ścieżce klienta, a nie tylko na poziomie Managera Reklam. Listę tematów spotkań sprawdzisz <a href="#steps" class="underline">tutaj.</a>',
  },
  {
    side: "right",
    title: "kameralna grupa",
    text: "Spotykamy się w kameralnym gronie 5-7 osób, aby każda z uczestniczek mogła swobodnie zabrać głos i omówić swoje zagwozdki reklamowo-biznesowe.",
  },
  {
    side: "left",
    title: "realne case’y",
    text: "Pracujemy na przykładach z życia wziętych: Twoich oraz innych uczestniczek. Dość teoretycznych przykładów, które nie mają nic wspólnego z rzeczywistością. Przyszedł czas na praktykę i efekty.",
  },
  {
    side: "right",
    title: "Q&amp;A",
    text: "Na każdym spotkaniu możesz wskoczyć na hot seat. Możesz pytać o kampanie, pokazać nam swoje konto reklamowe i dowiedzieć się, jakie rozwiązania możesz wdrożyć. To czas dla Ciebie!",
  },
  {
    side: "left",
    title: "nagrania ze spotkań",
    text: "Nagramy każde spotkanie. Zawsze możesz do niego wrócić lub nadrobić materiał później.",
  },
  {
    side: "right",
    title: "konsultacja indywidualna na start - 60 minut",
    text: "Gdy dołączysz do programu, umówimy się na konsultację 1:1, zajrzę do Twojego konta reklamowego i pokażę Ci, jak ogarnąć ustawienia. Dzięki temu gdy na 3 spotkaniu mentoringowym zaczniemy ustawiać reklamy, będziesz 100% gotowa do działania!",
  },
  {
    side: "left",
    title: "grupa na Facebooku",
    text: "Jesteśmy w bieżącym kontakcie. Nie musisz czekać z pytaniami do konsultacji, możesz odezwać się na wspólnej grupie na Facebooku. To miejsce na rozmowy marketingowe i biznesowe oraz networking!",
  },
  {
    side: "right",
    title: "6 godzin office hours",
    text: 'Co tydzień możesz wskoczyć na godzinne „okienko” i zadać dowolne pytanie. Dyżuruję ja i specjalistki z mojego zespołu ( <a href="#team" class="underline">poznasz je tutaj</a>). Dzięki office hours możesz skonsultować kampanie również pomiędzy spotkaniami tematycznymi. To czas kiedy możesz zadać pytanie na każdy temat.',
  },
]

/** "Nad czym będziemy pracować?" */
export const adsy2Steps: StepItem[] = [
  { number: "1", title: "Start! Układamy swój lejek, analizujemy ścieżkę swojego biznesu." },
  {
    number: "2",
    title: "Grafiki & teksty: jak je przygotować? Spotkanie z copywriterką i graficzką!",
  },
  {
    number: "3",
    title: "Kampanie na obserwacje na IG/FB: jak pozyskiwać wartościowych odbiorców?",
  },
  {
    number: "4",
    title: "Lead magnet i newsletter: jak stworzyć kampanie reklamowe na zapis do newslettera?",
  },
  { number: "5", title: "Strona www: kampanie reklamowe na Twoją stronę internetową" },
  {
    number: "6",
    title: "Remarketing: wszystko, co musisz wiedzieć o najskuteczniejszych kampaniach reklamowych",
  },
]

export const adsy2Bonuses: BonusItem[][] = [
  [bonus.hotjar, bonus.canva, bonus.instagram],
  [bonus.beauty, bonus.certificate],
]

/** "Program jest dla Ciebie, jeśli…" */
export const adsy2ForYou: RichText[] = [
  "Twoje cele w kampaniach reklamowych to: <b>pozyskanie obserwujących, zbudowanie listy newsletterowej, sprzedaż produktów i usług,</b>",
  "zależy Ci na osiąganiu lepszych wyników dzięki kampaniom reklamowym,",
  "chcesz <b>rozwijać swoją wiedzę, umiejętności i biznes, </b>",
  "skuteczny marketing to patrzenie na liczby + kreatywna głowa i chcesz działać w ten sposób,",
  "możesz regularnie przeznaczyć czas na kampanie, zdajesz sobie sprawę, że tutaj nie wystarczy zerknięcie z doskoku,",
  "<b>znasz podstawową obsługę </b>Managera reklam, nie musisz wyklikiwać kampanii z zamkniętymi oczami, ale wiedza, gdzie kliknąć, aby ustawić kampanię i stworzyć zestaw reklam to must have,",
  "jesteś gotowa na <b>pracę, testowanie, analizę, modyfikacje </b>świętowanie (tak, na to też przyjdzie czas, gdy zobaczysz rosnące wyniki).",
]

/** "Nie jest dla Ciebie, jeśli…" */
export const adsy2NotForYou: RichText[] = [
  "masz nadzieję, że <b>wyniki zrobią się „same”</b> w Managerze Reklam",
  "<b>nie masz czasu </b>na regularną pracę nad kampaniami, przygotowywanie materiałów i optymalizację,",
  "myślisz, że <b>że 100 zł wrzucone do Managera Reklam wystarczy.</b> Niestety, to za mało. Minimalny budżet, przy którym zbudujesz lejek i Twoje możliwości finansowe omówimy na wirtualnej kawce,",
  "wiesz, że <b>Ty wszystko zrobisz najlepiej </b>i nie interesują Cię inne perspektywy",
  "<b>nigdy nie widziałaś na oczy Managera Reklam, </b>albo słyszysz o nim pierwszy raz. W takim wypadku proponuję, abyś najbliższe miesiące spędziła na przeklikaniu się przez system i dołączyła do drugiej edycji.",
  "<b>jesteś super wymiataczką</b>, tworzysz kampanie z ROAS-em 20 i wiesz, że już nie może być lepiej. Brawo!",
]

/** "Pewnie teraz się zastanawiasz..." carousel. */
export const adsy2Doubts: QaItem[] = [
  {
    question: "Czy znajdę czas na udział w spotkaniach?",
    answer:
      "Według raportu Digital 2023: Poland przeciętny użytkownik Internetu spędza w nim 6 godzin i 42 minuty dziennie, w tym 2 godziny w mediach społecznościowych. Pewnie Tobie też raz na jakiś czas zdarza się zapomnieć i spędzić kilka godzin z telefonem w ręce? ;) W czasie programu spotykamy się na 2,5 godziny raz na 2 tygodnie. To prawie 19 razy mniej niż czas, który spędzasz w sieci. Przyznaj: czas na wspólnej pracy nad reklamami to dużo lepiej wykorzystany czas niż scrollowanie Instagrama?",
  },
  {
    question: "Kiedy odbywają się spotkania?",
    answer:
      "Spotykamy się raz na tydzień na 2,5 godziny na spotkania tematyczne. Do tego podczas trwania programu możesz wziąć udział w office hours, które trwają godzinkę oraz umówić się na konsultację indywidualną (termin ustalimy wspólnie).",
  },
  {
    question: "Czy wiem wystarczająco dużo o reklamach, aby wziąć udział w mentoringu?",
    answer:
      "Poziom wiedzy i doświadczenia uczestniczek jest różny i to jest dodatkowa wartość naszych spotkań! Dzięki temu uczestniczki mają swobodę dzielenia się wiedzą i zdobywania nowych umiejętności. Nie ukrywam, że program jest skierowany do osób, które mają już doświadczenie w ustawianiu reklam. Wystarczy, że wiesz, gdzie kliknąć, aby stworzyć kampanię i wiesz, gdzie szukać ustawień grupy docelowej. Jeśli możesz o sobie powiedzieć: „coś już wyklikałam w managerze reklam”, dołącz!",
  },
  {
    question: "Co jeśli nie będę mogła pojawić się na którymś spotkaniu?",
    answer:
      "Nasze spotkania będą nagrywane i udostępnione tylko dla osób uczestniczących w programie. Jeśli nie dotrzesz na któreś spotkanie, będziesz mogła nadrobić materiał. Z zadaniem pytań nie musisz czekać do kolejnego spotkania, będziesz mogła zadać je na dedykowanej grupie na Facebooku, gdzie będziemy w stałym kontakcie!",
  },
]

/** "Co dostajesz w ramach programu?" */
export const adsy2Program: RichText[] = [
  "6 spotkań w czasie rzeczywistym po <b>2,5 godziny,</b>",
  "na start: <b>konsultacja indywidualna</b> (60 minut) dotycząca kampanii reklamowych,",
  "bieżący kontakt i wsparcie na <b>grupie na Facebooku,</b>",
  "nagrania ze wszystkich spotkań na żywo dostępne <b>bez ograniczeń,</b>",
  "każde spotkanie to godzina tematu przewodniego + <b>Q&amp;A</b> i możliwość, wskoczenia na hot seat ze swoim problemem,",
  "co tydzień: <b>office hours</b>, podczas których możesz szybko rozwiązać bieżący problem z reklamami lub zoptymalizować je pod moim czujnym okiem",
]

/** FAQ shown as open question/answer pairs (two columns). */
export const adsy2Faq: QaItem[][] = [
  [
    {
      question: "Kiedy będą odbywać się spotkania?",
      answer:
        "Spotykamy się raz w tygodniu na 2,5-godzinne spotkania tematyczne. Ponadto, w trakcie programu możesz uczestniczyć w godzinnych sesjach office hours oraz umówić się na indywidualną konsultację, której termin ustalimy wspólnie.",
    },
    {
      question: "Czy spotkania będą nagrywane?",
      answer:
        "Tak, każde spotkanie będzie nagrane i udostępnione uczestniczkom spotkania. Jeśli nie możesz dołączyć na żywo, nadrobisz materiał później.",
    },
    {
      question: "Jaki jest minimalny budżet reklamowy?",
      answer:
        "Dobre pytanie! Oczywiście, aby prowadzić kampanie reklamowe, musimy wpłacić pieniądze na konto reklamowe. Wysokość budżetu zaczyna się od kilkuset złotych miesięcznie… ale na szczęście nie wszystko zależy od budżetu! Twoje możliwości finansowe przedyskutujemy na wirtualnej kawce.",
    },
    {
      question: "Kto weźmie udział w mentoringu?",
      answer:
        "Program to przestrzeń dla przedsiębiorczyń i solopreneurek. Dlatego to nie tylko szansa na omówienie kampanii, ale również wspólne rozwiązywanie problemów, które spotykamy, prowadząc własne biznesy.",
    },
  ],
  [
    {
      question: "Czy na pewno będzie czas dla mnie?",
      answer:
        "Tak, na każdym spotkaniu możesz wskoczyć na „gorące krzesełko” i przedstawić swój problem, zadać pytania. Spotykamy się w grupie maksymalnie 7 osób, aby każdy znalazł czas dla siebie. <br /> ❌ To NIE są spotkania, na których jedna osoba mówi, a druga słucha. <br /> ✅ To są spotkania, na których każdy może zabrać głos i znaleźć przestrzeń dla siebie.",
    },
    {
      question: "Nie umiem w techniczne rzeczy, czy dam sobie radę?",
      answer:
        "Na konsultacjach (jeszcze przed pierwszym spotkaniem w ramach mentoringu) poukładamy Twój menedżer reklam, piksel i ustawimy zabezpieczenia. Przekonasz się, że techniczne tematy nie są takie straszne, jak się wydają.",
    },
    {
      question:
        "Zapisz się na listę osób zainteresowanych! Dzięki temu pierwsza dowiesz się o kolejnej edycji programu.",
    },
  ],
]
