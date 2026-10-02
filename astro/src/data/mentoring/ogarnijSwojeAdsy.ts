/** Content of /ogarnij-swoje-adsy ("Ogarnij swoje adsy!" mentoring for business owners). */
import type { FaqItem, RichText } from "@/lib/content"
import type { EmojiItem, PerkItem, StepItem, TimelineItem } from "./types"

/** "Ten program jest idealny dla Ciebie, jeśli:" */
export const adsyAudience: EmojiItem[][] = [
  [
    {
      icon: "💼",
      text: "Masz swój biznes - sprzedajesz produkty cyfrowe, usługi lub produkty fizyczne",
    },
    {
      icon: "👀",
      text: "Jesteś specjalistką w swojej dziedzinie i chcesz z lekkością pozyskiwać nowych klientów na swoje usługi",
    },
    {
      icon: "💰",
      text: "Chcesz wypromować e-book, webinar lub kurs online i wreszcie przebić szklany sufit swoich przychodów",
    },
    {
      icon: "🤔",
      text: "Przerobiłaś już milion kursów o reklamach, ale dalej nie wiesz, jak je prowadzić i jak na nich zarabiać",
    },
  ],
  [
    { icon: "🤯", text: "Masz dość walki z algorytmem Instagrama i Facebooka" },
    {
      icon: "😡",
      text: "Czujesz się sfrustrowana, gdy Twoje wartościowe treści są przykryte przez czyjeś wygłupy i tańce",
    },
    {
      icon: "💎",
      text: "Wiesz, że wiele osób chętnie skorzystałoby z Twojej oferty i szukasz sposobu, aby do nich dotrzeć",
    },
    {
      icon: "😩",
      text: "Przekopałaś już całego Facebooka w poszukiwaniu nowych klientów, ale zamiast spektakularnych efektów czujesz zmęczenie i rezygnację…",
    },
  ],
]

/** "W programie" timeline. */
export const adsyAgenda: TimelineItem[] = [
  {
    side: "left",
    title: "6 szkoleń wideo!",
    text: "W tym czasie tworzysz, wdrażasz i obserwujesz wyniki swoich kampanii pod moim okiem.",
  },
  {
    side: "right",
    title: "8 spotkań „ustawianie kampanii” na żywo",
    text: "Spotykamy się na Google Meets w czwartki co 2 tygodnie, aby wspólnie ustawić kampanie reklamowe. Zobaczysz krok po kroku, co i gdzie kliknąć, aby Twoja kampania reklamowa była crème de la crème.",
  },
  {
    side: "left",
    title: "16 godzin office hours",
    text: 'Co tydzień możesz wskoczyć na godzinne „okienko" i zadać dowolne pytanie. Dyżuruję ja i specjalistki z mojego zespołu (poznasz je <a href="#team" class="underline">tutaj</a>). Dzięki office hours możesz skonsultować kampanie również pomiędzy spotkaniami tematycznymi. To czas kiedy możesz zadać pytanie na każdy temat.',
  },
  {
    side: "right",
    title: "temat przewodni",
    text: 'Każde spotkanie ma temat przewodni, który pomoże Ci ulepszyć Twoje kampanie reklamowe na całej ścieżce klienta, a nie tylko na poziomie Managera Reklam. Listę tematów spotkań sprawdzisz <a href="#steps" class="underline">tutaj</a>.',
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
    text: "Nagramy każde czwartkowe spotkanie, na którym ustawiamy kampanie. Zawsze możesz do niego wrócić lub nadrobić materiał później.",
  },
  {
    side: "right",
    title: "konsultacje indywidualne",
    text: "W zależności od wybranego pakietu dostajesz dostęp do konsultacji 1:1 ze mną lub specjalistkami z mojego zespołu. Omówimy Twoje reklamy, newsletter, komunikację, strategię reklamową… - temat zależy od Ciebie!",
  },
  {
    side: "left",
    title: "grupa na Facebooku <br />i dedykowany komunikator",
    text: "Jesteśmy w bieżącym kontakcie. Nie musisz czekać z pytaniami do office hours, odpowiadamy w każdy dzień roboczy. To miejsca na rozmowy marketingowe i biznesowe oraz networking!",
  },
]

/** "Nad czym będziemy pracować?" */
export const adsySteps: StepItem[] = [
  {
    number: "1",
    title: "Start!",
    text: "Układamy swój lejek, analizujemy ścieżkę swojego biznesu.",
  },
  {
    number: "2",
    title: "Grafiki & teksty:",
    text: "jak je przygotować? Spotkanie z copywriterką i graficzką!",
  },
  {
    number: "3",
    title: "Kampanie na obserwacje na IG/FB:",
    text: "jak pozyskiwać wartościowych odbiorców?",
  },
  {
    number: "4",
    title: "Lead magnet i newsletter:",
    text: "jak stworzyć kampanie reklamowe na zapis do newslettera?",
  },
  { number: "5", title: "Strona www:", text: "kampanie reklamowe na Twoją stronę internetową" },
  {
    number: "6",
    title: "Remarketing:",
    text: "wszystko, co musisz wiedzieć o najskuteczniejszych kampaniach reklamowych",
  },
]

/** "Program jest dla Ciebie, jeśli…" */
export const adsyForYou: RichText[][] = [
  [
    "<b>Twoje cele w kampaniach reklamowych to:</b> pozyskanie obserwujących, zbudowanie listy newsletterowej, sprzedaż produktów i usług",
    "zależy Ci na <b>osiąganiu lepszych wyników</b> dzięki kampaniom reklamowym",
    "chcesz <b>rozwijać swoją wiedzę, umiejętności i biznes</b>",
    "<b>skuteczny marketing to patrzenie na liczby + kreatywna głowa</b> i chcesz działać w ten sposób",
  ],
  [
    "<b>możesz regularnie przeznaczyć czas na kampanie</b>, zdajesz sobie sprawę, że tutaj nie wystarczy zerknięcie z doskoku",
    "<b>znasz podstawową obsługę Managera reklam</b>, nie musisz wyklikiwać kampanii z zamkniętymi oczami, ale wiedza, gdzie kliknąć, aby ustawić kampanię i stworzyć zestaw reklam to must have",
    "<b>jesteś gotowa na pracę, testowanie, analizę, modyfikacje, świętowanie</b> (tak, na to też przyjdzie czas, gdy zobaczysz rosnące wyniki)",
    "<b>nie chcesz lub nie masz budżetu,</b> aby zlecić kampanie reklamowe agencji lub freelancerowi",
  ],
]

/** "NIE jest dla Ciebie, jeśli…" */
export const adsyNotForYou: RichText[][] = [
  [
    'masz nadzieję, że<b> wyniki zrobią się „same" </b>w menadżerze reklam',
    "<b>nie masz czasu</b> na regularną pracę nad kampaniami, przygotowywanie materiałów i optymalizację",
    "<b>myślisz, że 100 zł wrzucone do Managera Reklam wystarczy</b> Niestety, to za mało. Minimalny budżet, przy którym zbudujesz lejek i Twoje możliwości finansowe omówimy na wirtualnej kawce",
  ],
  [
    "wiesz, że<b> Ty wszystko zrobisz najlepiej</b> j i nie interesują Cię inne perspektywy",
    "<b>nigdy nie widziałaś na oczy menadżera reklam,</b> albo słyszysz o nim pierwszy raz - w takim wypadku proponuję, abyś najbliższe miesiące spędziła na przeklikaniu się przez system i dołączyła do kolejnej edycji",
    "jesteś super wymiataczką, <b>tworzysz kampanie z ROAS-em 20 i wiesz, że ogarniasz. Brawo!</b>",
  ],
]

/** "Co dostajesz w ramach programu?" */
export const adsyPerks: PerkItem[][] = [
  [
    {
      label: "🎥 6 szkoleń:",
      text: "video dotyczących lejka reklamowego (1 szkolenie), kreacji reklamowych (1 szkolenie) oraz kampanii reklamowych (4 szkolenia)",
    },
    { label: "💻 8 spotkań:", text: "w czasie rzeczywistym na ustawianie reklamy + Q&A" },
    {
      label: "💼 16 spotkań office hours:",
      text: "na których możesz szybko rozwiązać problemy z reklamami lub zoptymalizować je pod czujnym okiem mojego zespołu",
    },
  ],
  [
    { label: "💪 bieżący kontakt", text: "i wsparcie na grupie na Facebooku" },
    { label: "👀 nagrania", text: "ze wszystkich spotkań na żywo dostępne bez ograniczeń" },
    {
      label: "🔥 nielimitowane konsultacje",
      text: "Twoich kampanii, tekstów, grafik i pomysłów na reklamy ze mną i całym zespołem",
    },
  ],
]

export const adsyFaq: FaqItem[] = [
  {
    question: "Pewnie teraz zastanawiasz się...",
    answer:
      "Według raportu Digital 2023: Poland przeciętny użytkownik Internetu spędza w nim 6 godzin i 42 minuty dziennie, w tym 2 godziny w mediach społecznościowych. Pewnie Tobie też raz na jakiś czas zdarza się zapomnieć i spędzić kilka godzin z telefonem w ręce? ;) W czasie programu spotykamy się na 2,5 godziny raz na 2 tygodnie. To prawie 19 razy mniej niż czas, który spędzasz w sieci. Przyznaj: czas na wspólnej pracy nad reklamami to dużo lepiej wykorzystany czas niż scrollowanie Instagrama?",
  },
  {
    question: "Kiedy odbywają się spotkania?",
    answer:
      "Co 2 czwartek o 10:00 odbywają się spotkania na ustawianie kampanii, na których wspólnie przechodzimy przez wszystkie ustawienia kampanii. Spotykamy się w każdy wtorek o 10:30 na office hour, na których omawiamy bieżące pytania i aktualne kampanie.<br />W zależności od pakietu masz do dyspozycji konsultacje indywidualne - termin ustalimy wspólnie.",
  },
  {
    question: "Czy wiem wystarczająco dużo o reklamach, aby wziąć udział w mentoringu?",
    answer:
      'Poziom wiedzy i doświadczenia uczestniczek jest różny i to jest dodatkowa wartość naszych spotkań! Dzięki temu uczestniczki mają swobodę dzielenia się wiedzą i zdobywania nowych umiejętności. Nie ukrywam, że program jest skierowany do osób, które mają już doświadczenie w ustawianiu reklam. Wystarczy, że wiesz, gdzie kliknąć, aby stworzyć kampanię i wiesz, gdzie szukać ustawień grupy docelowej. Jeśli możesz o sobie powiedzieć: "coś już wyklikałam w managerze reklam", dołącz!',
  },
  {
    question: "Co jeśli nie będę mogła pojawić się na którymś spotkaniu?",
    answer:
      "Spotkania, na których ustawiamy kampanie reklamowe, będą nagrywane i udostępnione tylko dla osób uczestniczących w programie. Jeśli nie dotrzesz na któreś spotkanie, będziesz mogła nadrobić materiał. Z zadaniem pytań nie musisz czekać do kolejnego spotkania, będziesz mogła zadać je na dedykowanej grupie na Facebooku, gdzie będziemy w stałym kontakcie!",
  },
  {
    question: "Jaki budżet muszę przygotować na reklamy?",
    answer:
      'Dobre pytanie! Oczywiście, aby prowadzić kampanie reklamowe, musimy wpłacić pieniądze na konto reklamowe. Wysokość budżetu zaczyna się od kilkuset złotych miesięcznie… ale na szczęście nie wszystko zależy od budżetu! Twoje możliwości finansowe przedyskutujemy na wirtualnej kawce. Możesz się na nią umówić <a href="https://koalendar.com/e/ogarnij-swoje-adsy" target="_blank" rel="noreferrer" class="underline">tutaj.</a>',
  },
  {
    question: "Dla kogo jest program mentoringowy 'Ogarnij swoje adsy'?",
    answer:
      "Program to przestrzeń dla przedsiębiorczyń i solopreneurek. Dlatego to nie tylko szansa na omówienie kampanii, ale również wspólne rozwiązywanie problemów, które spotykamy, prowadząc własne biznesy.",
  },
  {
    question: "Czy na pewno będzie czas dla mnie?",
    answer:
      'Tak, na każdym office hour możesz wskoczyć na "gorące krzesełko" i przedstawić swój problem, zadać pytania.<br />❌ To NIE są spotkania, na których jedna osoba mówi, a druga słucha.<br />✅ To są spotkania, na których każdy może zabrać głos i znaleźć przestrzeń dla siebie.',
  },
  {
    question: "Nie umiem w techniczne rzeczy, czy dam sobie radę?",
    answer:
      "Oczywiście! Jeśli wolisz wsparcie 1:1, wybierz pakiet z konsultacjami, na których pokażemy Ci jak poukładać menedżer reklam, piksel i ustawimy zabezpieczenia. Przekonasz się, że techniczne tematy nie są takie straszne, jak się wydają.",
  },
  {
    question: "Dlaczego warto uczyć się prowadzić kampanie reklamowe samodzielnie?",
    answer:
      "Nie oszukujmy się. Zlecenie kampanii specjalistom jest super, ale nie każdy ma taki budżet. Zlecenie reklam kosztuje od 1500 zł netto wzwyż, a do tego jeszcze budżet reklamowy. Na szczęście z odpowiednim wsparciem na start możesz prowadzić kampanie reklamowe samodzielnie! A jeśli któregoś dnia zdecydujesz, że chcesz zlecić reklamy, będziesz miała wiedzę, aby wybrać najlepszych specjalistów.",
  },
]
