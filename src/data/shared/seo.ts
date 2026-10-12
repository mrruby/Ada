/**
 * <title> and meta description of pages whose family has no SEO copy of its
 * own (jesień, training and legal pages keep theirs next to their content).
 * Seo.astro appends " | <site name>" to every title, so keep titles short;
 * descriptions 80–160 characters (120–160 ideally). Every route needs its own pair
 * (enforced by tests/e2e/seo.spec.ts).
 */
export type PageSeo = { title: string; description: string }

export const pageSeo = {
  home: {
    title: "Strategia marketingowa i reklamy Meta Ads",
    description:
      "Ada Promis-Urbas: strategia marketingowa, social media i reklamy Meta Ads w duchu slow marketingu. Mentoring, kursy i kolektyw MAGIC dla Twojego biznesu.",
  },
  about: {
    title: "O mnie: slow marketing i reklamy Meta Ads",
    description:
      "Poznaj Adę Promis-Urbas: strategiczkę marketingu i specjalistkę od reklam Meta Ads. Zobacz, jak pracuję, gdzie występuję i w czym mogę Ci pomóc.",
  },
  contact: {
    title: "Kontakt i współpraca",
    description:
      "Kampanie, strategia, szkolenia, konsultacje? Napisz do Ady Promis-Urbas przez formularz kontaktowy i porozmawiajmy o marketingu Twojego biznesu.",
  },
  thank: {
    title: "Dziękuję za zapis! Potwierdź swój adres e-mail",
    description:
      "Jeszcze tylko jedna sprawa: sprawdź skrzynkę, dodaj adrianna@getbold.agency do zaufanych kontaktów i kliknij link potwierdzający zapis w mailu.",
  },
  notFound: {
    title: "Nie znaleziono strony (błąd 404)",
    description:
      "Ta strona nie istnieje albo zmieniła adres. Wróć na stronę główną i sprawdź aktualne szkolenia, kursy i mentoring z reklam Meta Ads.",
  },
  styleguide: {
    title: "Styleguide: komponenty strony",
    description:
      "Wewnętrzny podgląd kolorów, typografii, komponentów i sekcji strony adrianna.com.pl. Strona robocza, niewidoczna w wyszukiwarkach.",
  },
  metaAdsMentoring: {
    title: "Meta Ads Masters Mentoring dla specjalistek",
    description:
      "Mentoring dla specjalistek i freelancerek: naucz się samodzielnie prowadzić skuteczne kampanie Meta Ads dla klientek i zarabiaj więcej, pracując mądrzej.",
  },
  ogarnijSwojeAdsy: {
    title: "Ogarnij swoje adsy: mentoring Meta Ads dla biznesu",
    description:
      "Program mentoringowy dla właścicielek firm: zaplanuj i prowadź kampanie Meta Ads, które przyciągają klientów nawet wtedy, gdy odpoczywasz.",
  },
  ogarnijSwojeAdsy2: {
    title: "Ogarnij swoje adsy: lista chętnych na mentoring",
    description:
      "Chcesz, żeby więcej osób kupowało Twoje produkty i usługi? Zapisz się na listę zainteresowanych mentoringiem „Ogarnij swoje adsy!” i poznaj program.",
  },
  warsztatLejek: {
    title: "Kevin sam w menedżerze reklam: warsztat o lejku",
    description:
      "Masterclass o lejku reklamowym w Menedżerze Reklam Meta: zaplanuj ścieżkę klientów od pierwszego kontaktu do zakupu, bez ciągłej obecności w social mediach.",
  },
  adsyChill: {
    title: "Adsy&Chill: 3 masterclassy o reklamach Meta",
    description:
      "Trzy nagrane masterclassy z instrukcjami krok po kroku: reklama na obserwujących na Instagramie, kampania budująca listę mailingową i reklamy, które sprzedają.",
  },
  magic: {
    title: "MAGIC: klub reklam Meta, AI i automatyzacji",
    description:
      "Skaluj swój biznes dzięki reklamom, AI i automatyzacjom z konkretnym planem wdrożeniowym. Konsultuj kampanie, teksty i grafiki z zespołem specjalistek MAGIC.",
  },
  magicSpecial: {
    title: "MAGIC: subskrypcja na 1, 3 lub 6 miesięcy",
    description:
      "Wybierz swój plan w MAGIC: subskrypcja elastyczna albo 3 lub 6 miesięcy w niższej cenie. Audyty reklam, tekstów i grafik oraz wsparcie zespołu specjalistek.",
  },
  magicKolektyw: {
    title: "Kolektyw MAGIC: zespół od reklam Meta Ads",
    description:
      "Stały przypływ klientów bez zespołu in-house: kolektyw MAGIC prowadzi kampanie Meta Ads dla twórczyń kursów online, mentoringów i usług cyfrowych.",
  },
  magicZaproszenie: {
    title: "Zaproszenie do współpracy z kolektywem MAGIC",
    description:
      "Dwa kroki do współpracy z kolektywem MAGIC: sprawdź, jak mądrze inwestować w marketing do 5 tys. zł miesięcznie, i umów niezobowiązującą rozmowę.",
  },
  kolektywRozmowa: {
    title: "Bezpłatna konsultacja z kolektywem MAGIC",
    description:
      "Umów bezpłatną konsultację z kolektywem MAGIC i zobacz, jak przedsiębiorczynie sprzedające produkty cyfrowe zwiększyły przychody dzięki reklamom Meta Ads.",
  },
  kursMeta2026: {
    title: "Kurs Meta 2026: nagranie szkolenia (24 h)",
    description:
      "Nagranie kursu o reklamach Meta w 2026 roku, dostępne przez 24 godziny od pierwszej wizyty. Potem możesz zapisać się na listę oczekujących do MAGIC.",
  },
  kursAndromeda2026: {
    title: "Kurs Andromeda 2026: nagranie szkolenia (24 h)",
    description:
      "Nagranie kursu o kampaniach Meta w erze algorytmu Andromeda, dostępne przez 24 godziny od pierwszej wizyty. Potem zapisz się na listę oczekujących do MAGIC.",
  },
  quiz: {
    title: "Quiz: jaka jest Twoja adsowa osobowość?",
    description:
      "12 pytań, 3 minuty: sprawdź, jaką masz adsową osobowość, i dowiedz się, jak prowadzić reklamy Meta i marketing swojej marki w zgodzie ze sobą.",
  },
} satisfies Record<string, PageSeo>
