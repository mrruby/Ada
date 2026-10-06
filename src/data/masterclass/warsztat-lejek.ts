/**
 * Content of /warsztat-lejek — the "Kevin sam w menedżerze reklam" funnel
 * workshop (January 2024, sales closed; countdowns show zeros).
 */
import opinion1 from "@/assets/images/opinia1.webp"
import opinion2 from "@/assets/images/opinia2.webp"
import opinion3 from "@/assets/images/opinia3.webp"
import opinion4 from "@/assets/images/opinia4.webp"
import opinion5 from "@/assets/images/opinia5.webp"
import type { FaqItem, ImageItem, RichText } from "@/lib/content"

export const workshopCheckoutUrl =
  "https://app.easycart.pl/checkout/62332176/masterclass-kevin-sam-w-menedzerze-reklam-zaplanuj-swoj-lejek-reklamowy"

/** Sign-up deadline (Warsaw time). */
export const workshopDeadline = "2024-01-25T18:00:00+01:00"

export const businessOwnerQuestions: string[] = [
  "Podsumowałaś 2023 rok, myślisz o planach na 2024 i zastanawiasz się, jak to wszystko ogarnąć bez ciągłej obecności w mediach społecznościowych?",
  "Przygotowałaś świetne posty, merytoryczne treści, a zobaczyła je zaledwie garstka Twoich obserwujących?",
  "Twoja firma żyje w chaosie, w którym dotychczas nie było przestrzeni na przemyślane reklamy?",
  "Szukasz systemu, który działa w tle, kiedy Ty spędzasz czas z rodziną, odpoczywasz lub oglądasz serial?",
]

export const businessOwnerCases: string[] = [
  "Już prowadzisz kampanie reklamowe i w 2024 roku chcesz wycisnąć je jak cytrynkę 🍋",
  "Jeszcze nigdy nie inwestowałaś w płatne reklamy, ale zastanawiasz się, jakie działania mogłabyś wdrożyć, aby zobaczyć wzrost sprzedaży w swoim biznesie 📈",
  "Nie prowadzisz reklam samodzielnie, a je zlecasz 🚀",
]

export const marketerQuestions: string[] = [
  "Słyszałaś, że teraz jest boom na reklamy i faktycznie dostajesz zapytania, ale zamiast podpisywać nowe umowy, odsyłasz do konkurencji?",
  "Chcesz zarabiać więcej, ale prześladuje Cię uczucie, że „umiesz za mało”?",
  "Słyszysz narzekanie, że zasięgi powinny być większe, ale w głębi duszy czujesz, że sam zasięg nie wystarczy i chcesz wiedzieć, jak sprawić, aby oprócz dotarcia do klienta wywołać akcję?",
  "Chciałabyś oferować swoim klientom szerszy zakres usług, aby móc podnosić stawki i dyktować warunki?",
]

/** Doubts heard during the previous mentoring recruitment. */
export const mentoringDoubts: string[] = [
  "Ada, ile czasu muszę przeznaczyć na udział w 3-miesięcznym programie?",
  "Chciałabym wziąć udział, ale na razie mnie nie stać?",
  "Nie wiem, czy wiem wystarczająco dużo o reklamach?",
  "Nie wiem, czy dam sobie radę?",
  "Czy to się zwróci?",
  "Gdy zamknęłam drzwi do programu, pojawiały się głosy: już koniec zapisów? Czy mogę jeszcze dołączyć?",
]

export const workshopOutcomes: string[] = [
  "przeanalizowanymi statystykami z Twojego profilu/menedżera reklam (jeśli z nich korzystałaś w 2023 roku) - nawet jesli myślisz, że jesteś nietechniczna 👩‍💻",
  "poczuciem, że wiesz co działało, rozwijasz to i skalujesz w 2024 🎆",
  "zaplanowanym lejkiem reklam na 2024 rok ✨",
  "co najmniej 10 pomysłami na kreacje do przetestowania w reklamach! 😎",
]

export const joinNowReasons: RichText[] = [
  "po warsztatach nagranie będzie dostępne <b>w ponad 2 razy wyższej cenie</b> - 129 złotych",
  "decydując się teraz, <b>weźmiesz udział w Q&amp;A na żywo.</b> Oglądając nagranie, oczywiście dostajesz dostęp również do nagrania sesji Q&amp;A, ale nie odpowiem na Twoje pytania. To bonus zarezerwowany tylko dla osób obecnych na żywo",
  "rezerwując miejsce teraz, otrzymasz <b>nagranie spotkania!</b> Więc bez obaw: jeśli coś Ci wypadnie, możesz przerobić materiał w innym terminie, w przedpremierowej, niskiej cenie.",
]

export const preparingSteps: string[] = [
  "Kliknij w link, który dostaniesz w mailu i upewnij się, że jesteś zalogowana na Youtube, aby móc zadawać pytania na spotkaniu!",
  "Przygotuj coś do pisania, notatnik lub otwarty dokument w Wordzie.",
  "Jeśli prowadzisz kampanie, otwórz swoje konto reklamowe.",
]

/** Client testimonials (screenshots), shown in a carousel. */
export const clientReferences: ImageItem[] = [
  { src: opinion1, alt: "Opinia o współpracy z Adą Promis - Ziołowa Wyspa" },
  { src: opinion2, alt: "Opinia o współpracy z Adą Promis - Natalia Plewniok" },
  { src: opinion3, alt: "Opinia o współpracy z Adą Promis - Aleksandra Adamczyk" },
  { src: opinion4, alt: "Opinia o współpracy z Adą Promis - Stan Skupienia" },
  { src: opinion5, alt: "Opinia o współpracy z Adą Promis - Creatownia Studio" },
]

/** First four = left column, last four = right column. */
export const workshopFaq: FaqItem[] = [
  {
    question: "Czy te warsztaty są dla mnie?",
    answer:
      "Warsztaty są dla każdej osoby, która chce w 2024 podnieść wyniki sprzedażowe, czy to swoje, czy swoich klientów. Nie rozdzielam warsztatów na osobne grupy dla przedsiębiorczyń, freelancerek i etatowców, bo podstawowe zasady planowania lejka sprzedażowego są takie same. Ważne, aby mieć wybrane konto w mediach społecznościowych, które chcesz rozwijać!",
  },
  {
    question: "Kiedy dostanę dostęp?",
    answer: "Link do spotkania dostaniesz na maila 3 dni przed warsztatami.",
  },
  {
    question: "Kiedy odbędą się warsztaty?",
    answer:
      "25 stycznia o 18:00. Po warsztatach dostaniesz nagranie ze spotkania z zarejestrowaną sesją Q&amp;A.",
  },
  {
    question: "Czy muszę mieć doświadczenie z reklamami?",
    answer:
      "Tak, ale może być niewielkie. Jeśli promowałaś posty na Instagramie, to wystarczy! Jeśli zlecasz reklamy, możesz wziąć udział w warsztatach, a potem przekazać gotowy plan działania do realizacji.",
  },
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
      "Na koniec warsztatów odbędzie się sesja Q&amp;A, na której odpowiem na pytania. To główny powód, dla którego warto pojawić się na warsztatach na żywo.",
  },
]
