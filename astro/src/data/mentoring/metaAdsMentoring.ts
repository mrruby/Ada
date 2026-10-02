/** Content of /meta-ads-mentoring (Meta Ads Masters Mentoring, for specialists). */
import type { FaqItem, RichText } from "@/lib/content"
import { bonus } from "./bonuses"
import type { BonusItem, EmojiItem, StepItem, TimelineItem } from "./types"

/** "Zastanawiasz się czy Meta Ads Masters Mentoring jest dla Ciebie? A czy…" */
export const metaQuestions: EmojiItem[][] = [
  [
    {
      icon: "🔥",
      text: "słyszałaś, że teraz jest boom na reklamy i faktycznie dostajesz zapytania, ale zamiast podpisywać nowe umowy, odsyłasz do konkurencji?",
    },
    {
      icon: "👶",
      text: "ustawiasz już pierwsze kampanie dla swoich klientów, ale czujesz, że błądzisz jak dziecko we mgle?",
    },
    {
      icon: "💸",
      text: "ogarniasz podstawy, ale czujesz, że budżet reklamowy trochę przecieka Ci przez palce?",
    },
    {
      icon: "💎",
      text: "chciałabyś dotrzeć do nowych odbiorców i skutecznie przekonać ich do skorzystania z oferty, którą reklamujesz?",
    },
    {
      icon: "👀",
      text: "słyszysz narzekanie, że zasięgi powinny być większe? W głębi duszy czujesz, że sam zasięg nie wystarczy?",
    },
  ],
  [
    {
      icon: "🤯",
      text: "Twoi klienci wywierają presję na wyniki, a Ty już nie wiesz, co robić i jak spełnić oczekiwania?",
    },
    {
      icon: "👀",
      text: "potrzebujesz spojrzenia z zewnątrz i wyjścia z bańki marketingowej, do której trafiłaś?",
    },
    {
      icon: "👩‍🎓",
      text: "chcesz się rozwijać, ale kursy video i e-booki nie pozwalają Ci na konfrontowanie wiedzy z wynikami oraz przemyślaną praktyką?",
    },
    {
      icon: "💰",
      text: "chcesz tworzyć skuteczne i bardziej zaawansowane lejki reklamowe, za które Twoi klienci będą Cię świetnie wynagradzać?",
    },
    {
      icon: "👀",
      text: "chcesz wiedzieć, jak sprawić, aby oprócz dotarcia do klienta wywołać akcję?",
    },
  ],
]

/** Rotating words in the program intro. */
export const metaProgramPillars = [
  "praktyczną wiedzę",
  "indywidualne podejście",
  "realne doświadczenie",
  "wsparcie społeczności",
  "ciągły rozwój",
  "multidyscyplinarne podejście",
  "ponadprzeciętne wyniki",
]

/** "Meta Ads Masters Mentoring to bezpieczna przestrzeń, w której:" */
export const metaSafeSpace: RichText[][] = [
  [
    "<b>podkręcisz wyniki kampanii reklamowych </b>Twoich i Twoich klientów oraz nauczysz się skutecznie docierać do osób zainteresowanych ofertą, którą reklamujesz",
    "stworzysz<b> zaawansowane kampanie reklamowe </b>i dowiesz się, jak je optymalizować",
    "wybierzesz<b> najlepsze materiały do reklam </b>i - stworzysz chwytliwe grafiki i błyskotliwe teksty reklamowe",
  ],
  [
    "<b>zrozumiesz ścieżkę użytkownika </b>i dowiesz się, co zrobić, jeśli kampanie nie działają, wszystko po to, aby Twoi klienci wiedzieli, że mają w Tobie oparcie nawet w czasach kryzysu",
    "zderzysz swoje wątpliwości z osobami, które mają podobne problemy w zdobywaniu nowych klientów i przekonasz się, że <b>rozwiązanie jest bliżej niż myślisz,</b>wystarczy wiedzieć, gdzie go szukać!",
  ],
]

/** "W programie" timeline. */
export const metaAgenda: TimelineItem[] = [
  {
    side: "left",
    title: "11 szkoleń wideo",
    text: "W tym czasie tworzysz, wdrażasz i obserwujesz wyniki swoich kampanii pod moim okiem.",
  },
  {
    side: "right",
    title: "12 godzin spotkań grupowych z ustawiania reklam",
    text: "Spotykamy się 12 razy na 1,5 godziny na Google Meets.",
  },
  {
    side: "left",
    title: "warsztaty z pisania tekstów reklamowych i warsztaty z tworzenia grafik",
    text: "Specjalne spotkania z copywriterką Justyną i graficzką Dorotą, na których przećwiczysz swoje skille tworzenia kreacji reklamowych i dostaniesz bezcenny feedback.",
  },
  {
    side: "right",
    title: "21 godzin office hours",
    text: 'Co tydzień możesz wskoczyć grupowe konsultacje i zadać dowolne pytanie. Dyżuruję ja i specjalistki z mojego zespołu (poznasz je <a href="#team" class="underline">tutaj</a>). Dzięki office hours możesz skonsultować kampanie również pomiędzy spotkaniami tematycznymi. To czas kiedy możesz zadać pytanie na każdy temat około reklamowy.',
  },
  {
    side: "left",
    title: "temat przewodni",
    text: 'Każde spotkanie ma temat przewodni, który pomoże Ci stworzyć kampanie reklamowe na całej ścieżce klienta, a nie tylko na poziomie menadżera reklam. Listę tematów spotkań sprawdzisz <a href="#steps" class="underline">tutaj.</a>',
  },
  {
    side: "right",
    title: "realne case’y",
    text: "Pracujemy na przykładach z życia wziętych: Twoich oraz innych uczestniczek. ❌ Dość teoretycznych przykładów, które nie mają nic wspólnego z rzeczywistością. ✅ Poznajesz różne branże i zdobywasz doświadczenie, które przekłada się na wyniki.",
  },
  {
    side: "left",
    title: "Q&amp;A",
    text: "Na każdym spotkaniu jest czas na pytania! Możesz pytać o kampanie, pokazać nam swoje konto reklamowe i dowiedzieć się, jakie rozwiązania możesz wdrożyć.",
  },
  {
    side: "right",
    title: "nagrania ze spotkań",
    text: "Nagramy każde spotkanie. Zawsze możesz do niego wrócić lub nadrobić materiał później.",
  },
  {
    side: "left",
    title: "konsultacje indywidualne",
    text: "W zależności od wybranego pakietu dostajesz dostęp do konsultacji 1:1 ze mną lub specjalistkami z mojego zespołu. Omówimy Twoje reklamy, newsletter, komunikację, strategię reklamową… - temat zależy od Ciebie!",
  },
  {
    side: "right",
    title: "grupa na Facebooku i dedykowany komunikator",
    text: "Jesteśmy w bieżącym kontakcie. Nie musisz czekać z pytaniami do office hours, odpowiadamy w każdy dzień roboczy. To miejsca na rozmowy marketingowe i biznesowe oraz networking!",
  },
]

/** "Nad czym będziemy pracować?" */
export const metaSteps: StepItem[] = [
  { number: "1", title: "Menedżer reklam+ skuteczna współpraca z klientem" },
  {
    number: "2",
    title: "Lejek marketingowy:",
    text: "układanie i planowanie. Przeanalizuj swoją relację z odbiorcami w kampaniach reklamowych, przejdź przez ścieżkę i załataj dziury!",
  },
  {
    number: "3",
    title: "Grupa docelowa:",
    text: "jak ją wybrać, jak segmentować, jak poszukiwać?",
  },
  {
    number: "4",
    title: "Kampanie na budowanie społeczności (IG&FB):",
    text: "jak pozyskiwać wartościowych odbiorców?",
  },
  { number: "5", title: "Teksty:", text: "jak pozyskiwać wartościowych odbiorców?" },
  {
    number: "6",
    title: "Grafiki do kampanii reklamowych:",
    text: "tips &amp; tricks + Q&amp;A z graficzką",
  },
  { number: "7", title: "Bonus:", text: "jak tworzyć video reklamowe, które przyciąga uwagę?" },
  {
    number: "8",
    title: "Lead magnet i newsletter:",
    text: "jak stworzyć kampanie reklamowe na zapis do newslettera?",
  },
  { number: "9", title: "Konwersje:", text: "kampanie na www i kampanie sprzedażowe" },
  {
    number: "10",
    title: "Kampanie reklamowe z celem kontakt",
    text: "- pozyskanie numerów telefonów/wiadomości/leadów",
  },
  {
    number: "11",
    title: "Optymalizacja:",
    text: "co robić, gdy kampania nie działa i na jakie wskaźniki zwrócić uwagę?",
  },
  { number: "12", title: "Automatyzacje", text: "w kampaniach reklamowych" },
]

export const metaBonuses: BonusItem[][] = [
  [bonus.hotjar, bonus.report, bonus.portfolio, bonus.canva],
  [bonus.instagram, bonus.beauty, bonus.community],
]

/** "Program jest dla Ciebie, jeśli…" */
export const metaForYou: RichText[][] = [
  [
    "pracujesz w marketingu lub jesteś Wirtualną Asystentką i chcesz poszerzyć wachlarz swoich usług o kampanie reklamowe z celami:<b> pozyskanie obserwujących, zbudowanie listy newsletterowej, sprzedaż produktów i usług</b>",
    "prowadzisz już pierwsze proste kampanie reklamowe lub promujesz posty na IG i <b> chcesz wykorzystać potencjał</b> tego sposobu zdobywania klientów na 110%",
    "chcesz <b> rozwijać swoją wiedzę, umiejętności i biznesy swoich klientów,</b> a dzięki temu zarabiać więcej",
    "wiesz, że<b> skuteczny marketing </b>to patrzenie na liczby + kreatywna głowa i chcesz działać w ten sposób",
  ],
  [
    "możesz<b> regularnie przeznaczyć czas na kampanie, </b>zdajesz sobie sprawę, że tutaj nie wystarczy zerknięcie z doskoku",
    "<b> znasz podstawową obsługę menadżera reklam</b>, nie musisz wyklikiwać kampanii z zamkniętymi oczami, ale wiedza, gdzie kliknąć, aby ustawić kampanię i stworzyć zestaw reklam to must have",
    "<b>jesteś gotowa </b> na pracę, testowanie, analizę, modyfikacje i świętowanie (tak, na to też przyjdzie czas, gdy zobaczysz rosnące wyniki)",
  ],
]

/** "NIE jest dla Ciebie, jeśli…" */
export const metaNotForYou: RichText[][] = [
  [
    "masz nadzieję, że<b> wyniki zrobią się „same” </b>w menadżerze reklam",
    "nie masz czasu na regularną pracę nad kampaniami, przygotowywanie materiałów i optymalizację",
    "<b>wiesz, że </b>Ty wszystko zrobisz najlepiej <b> i nie interesują Cię inne perspektywy</b>",
  ],
  [
    "nigdy nie widziałaś na oczy menadżerze reklam, albo słyszysz o nim pierwszy raz. W takim wypadku proponuję, abyś najbliższe miesiące spędziła na przeklikaniu się przez system i dołączyła do drugiej edycji.",
    "jesteś super wymiataczką, <b>tworzysz kampanie z ROAS-em 20 i wiesz, że ogarniasz. </b>Brawo!",
  ],
]

/** Program summary ("W programie"). */
export const metaProgram: RichText[][] = [
  [
    "<b>12 praktycznych spotkań grupowych</b> z ustawiania kampanii na żywo",
    "konsultacje indywidualne do wykorzystania w dowolnym momencie trwania programu (w zależności od pakietu)",
    "bieżący kontakt i wsparcie na grupie na Facebooku oraz dedykowanym komunikatorze",
  ],
  [
    "21 godzin office hour, czyli grupowych konsultacji reklamowych",
    "7 bonusów o łącznej wartości ponad 1000 zł złotych",
    "<b>nagrania ze wszystkich spotkań na żywo </b>dostępne bez ograniczeń. Każde spotkanie to<b> godzina tematu przewodniego + Q&amp;A </b>i możliwość, wskoczenia na hot seat ze swoim problemem – bezcenne 😊",
  ],
]

/** "Co zyskasz, uczestnicząc w Meta Ads Masters Mentoring?" */
export const metaGains: RichText[][] = [
  [
    "<b>Zdobędziesz wiedzę i umiejętności,</b> które zwrócą Ci się wielokrotnie, gdy weźmiesz pod swoje skrzydła nowych, dochodowych klientów.",
    "Nauczysz się<b> przyciągać klientów</b> na Twoje social media, webinary i listy e-mail na zawołanie.",
    "Wreszcie <b>napełnisz swoje lejki marketingowe</b> odpowiednimi klientami.",
    "Przestaniesz się frustrować <b>przepalonym budżetem</b>",
  ],
  [
    "<b>Dodatkowo: </b>nauczysz się jak prowadzić działania reklamowe dla własnej marki osobistej i pozyskasz dla siebie nowych klientów",
    "Twoje świetnie ustawione reklamy będą docierać do<b> nowych potencjalnych klientów.</b>",
    "Będziesz spokojna, że pieniądze, które Twoi klienci zainwestowali w reklamy <b> pracują na siebie, nawet gdy śpisz.</b>",
    "<b>Wyćwiczysz swoją intuicję w prowadzeniu reklam: </b> będziesz wiedzieć, jaki podjąć następny krok, aby wyszlifować wyniki",
  ],
]

export const metaFaq: FaqItem[] = [
  {
    question: "Czy znajdę czas na udział w spotkaniach?",
    answer:
      "✓ Według raportu Digital 2023: Poland przeciętny użytkownik Internetu spędza w nim 6 godzin i 42 minuty dziennie, w tym 2 godziny w mediach społecznościowych. Pewnie Tobie też raz na jakiś czas zdarza się zapomnieć i spędzić kilka godzin z telefonem w ręce? ;)<br />W czasie programu spotykamy się na 1,5 godziny raz na 2 tygodnie. To 30 razy mniej niż czas, który spędzasz w sieci. Przyznaj: czas na wspólnej pracy nad reklamami jest dużo lepiej wykorzystany niż godziny przeznaczone na scrollowanie Instagrama?",
  },
  {
    question: "Kiedy odbywają się spotkania?",
    answer:
      "✓ Co 2 wtorek w godzinach 12:00-13:00 odbywają się spotkania na ustawianie kampanii, na których wspólnie przechodzimy przez wszystkie ustawienia w menadżerze reklam. Spotykamy się też w każdy czwartek o 12:00-13:00 na office hour, na których omawiamy bieżące pytania i aktualne kampanie.<br />W zależności od pakietu masz do dyspozycji konsultacje indywidualne - termin ustalimy wspólnie.",
  },
  {
    question: "Czy spotkania będą nagrywane?",
    answer:
      "✓ Tak, każde spotkanie będzie nagrane i udostępnione uczestniczkom spotkania. Jeśli nie możesz dołączyć na żywo, nadrobisz materiał później.",
  },
  {
    question: "Dla kogo jest ten program mentoringowy?",
    answer:
      "✓ Program to przestrzeń dla social media managerek, specjalistek ds. marketingu i wirtualnych asystentek. Jednym słowem: dla osób, które pracują online i chcą poszerzyć zakres swoich usług o prowadzenie kampanii reklamowych.<br />Podczas spotkań nie tylko nauczysz się prowadzić kampanie reklamowe! Uczestniczki poprzednich edycji chwalą możliwość rozmowy z osobami, które w codziennej pracy spotykają się z podobnymi wyzwaniami.",
  },
  {
    question: "Czy na pewno będzie czas dla mnie?",
    answer:
      '✓ Tak, na każdym spotkaniu możesz wskoczyć na "gorące krzesełko" i przedstawić swój problem, zadać pytania. Spotykamy się w kameralnych grupach, aby każdy znalazł czas na swoje pytania i pokazanie swojego konta reklamowego.<br /> ❌ To NIE są spotkania, na których jedna osoba mówi, a druga słucha. <br />✅ To są spotkania, na których każdy może zabrać głos i znaleźć przestrzeń dla siebie.',
  },
  {
    question: "Nie umiem w rzeczy techniczne, czy dam sobie radę?",
    answer:
      "✓ Oczywiście! W czasie programu przekonasz się, że techniczne tematy nie są takie straszne, jak się wydają. Pierwsze spotkanie w całości poświęcimy tematom dotyczącym ustawień menadżera reklam oraz dobrym praktykom we współpracy z klientem. Dowiesz się, jak sprawnie ustawić kwestie techniczne i wytłumaczyć klientowi, czego od niego potrzebujesz.<br />Zawsze możesz też wpaść na office hour, czyli konsultacje grupowe, które odbywają się raz w tygodniu, aby rozwiać wątpliwości i zyskać wsparcie w technicznych tematach!",
  },
  {
    question: "Jak mogę sfinansować udział w programie?",
    answer:
      '✓ Jeśli pracujesz na etacie, Twój udział w programie może sfinansować pracodawca! <a href="https://drive.google.com/file/d/1WlAQAXhvwK5eS7hOqsJV1cOjAwpaMqRQ/view" class="underline">Pobierz</a> gotowy wniosek z informacjami o programie i wynegocjuj pieniądze na swój rozwój.',
  },
  {
    question: "Mam inne pytanie, gdzie mogę je zadać?",
    answer:
      '✓ Idealną okazją do zadawania pytań i rozmowy o Twoich potrzebach i oczekiwaniach są wirtualne kawki! Możesz też napisać do mnie na maila:<a href="mailto:adrianna@getbold.agency" class="underline">adrianna@getbold.agency</a> lub na Instagramie <a href="https://www.instagram.com/adapromis/" class="underline">@adapromis</a> .',
  },
]
