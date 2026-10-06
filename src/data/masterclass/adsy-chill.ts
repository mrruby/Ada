/**
 * Content of /adsy-chill — the Adsy&Chill self-paced masterclass bundle.
 */
import type { ImageMetadata } from "astro"
import campaign1 from "@/assets/images/masterclass1Infov2.webp"
import campaign1Mobile from "@/assets/images/masterclass1M.webp"
import result1 from "@/assets/images/masterclass1Infov2-2.webp"
import result1Mobile from "@/assets/images/masterclass1Infov1-2M.webp"
import campaign2 from "@/assets/images/masterclass2Infov2.webp"
import campaign2Mobile from "@/assets/images/masterclass2M.webp"
import result2 from "@/assets/images/masterclass2Infov2-2.webp"
import result2Mobile from "@/assets/images/masterclass2Infov1-2M.webp"
import campaign3 from "@/assets/images/masterclass3Infov2.webp"
import result3 from "@/assets/images/masterclass3Infov2-2.webp"
import result3Mobile from "@/assets/images/masterclass3Infov1-2M.webp"
import protip1 from "@/assets/images/protip1.webp"
import protip1Mobile from "@/assets/images/protip1M.webp"
import protip2 from "@/assets/images/protip2.webp"
import protip2Mobile from "@/assets/images/protip2M.webp"
import protip3 from "@/assets/images/protip3.webp"
import protip3Mobile from "@/assets/images/protip3M.webp"
import type { FaqItem, RichText } from "@/lib/content"

export const adsyCheckoutUrl =
  "https://slowmarketing.mailingr.co/c/adsyandchill-2025-6nPc?priceId=price_SITaPYXmbvodQAaQDDTjXIkQ"

export type IconPoint = { icon: string; text: string }

/** "Czy Ty też..." — first half = left column, second half = right column. */
export const painPoints: IconPoint[] = [
  {
    icon: "🤔",
    text: "Wiesz, że reklamy mogłyby pomóc Twojemu biznesowi, ale nie chcesz wydawać fortuny na agencję?",
  },
  {
    icon: "👀",
    text: "Czujesz, że Twoja oferta jest wartościowa, ale nie dociera do właściwych osób?",
  },
  {
    icon: "😎",
    text: "Masz ochotę nauczyć się czegoś nowego, co realnie rozwinie Twój biznes?",
  },
  {
    icon: "🤔",
    text: "Widzisz, jak inne kobiety skutecznie promują swoje biznesy i zastanawiasz się, jak one to robią?",
  },
  {
    icon: "💪",
    text: "Chciałabyś w końcu zrozumieć, jak poruszać się po menedżerze reklam i dlaczego zadziała lepiej niż przycisk “promuj post”?",
  },
  {
    icon: "📊",
    text: "Szukasz sprawdzonego sposobu na dotarcie do swoich wymarzonych klientek - bez zgadywania i stresu?",
  },
]

export type CaseStat = { label: string; value: string }
type ResponsiveImage = { desktop: ImageMetadata; mobile: ImageMetadata }

/** One masterclass: pitch on the front panel, case study on the back panel. */
export type MasterclassCase = {
  id?: string
  title: string
  subtitle: RichText
  lead: RichText
  difficulty: string
  effects: string[]
  cta: string
  caseTitle: string
  story?: RichText
  stats: CaseStat[]
  /** Extra stats shown next to the result screenshot. */
  sideStats?: CaseStat[]
  protip: ResponsiveImage
  campaign: ResponsiveImage
  result: ResponsiveImage
}

export const masterclassCases: MasterclassCase[] = [
  {
    id: "masterclass-2",
    title: "Masterclass 1",
    subtitle: "Wartościowe follow na Instagramie",
    lead: "Z Tym masterclassem stworzysz reklamę, która zapewni Ci stały przypływ nowych obserwujących na Instagramie!",
    difficulty:
      "Prowadzisz profil na Instagramie? Wystarczy! To najprostsza kampania, która może zaskoczyć Cię efektami. O resztę się nie martw: razem z nagraniami i instrukcją przeprowadzę Cię krok po kroku przez ustawienie reklamy! ",
    effects: [
      "Zwiększasz liczbę obserwujących o zaangażowanych użytkowników (nie boty!)",
      "Budujesz społeczność prawdziwych fanów Twojej marki na Instagram",
      "Twój profil zyskuje na wiarygodności dzięki większej liczbie aktywnych obserwujących",
    ],
    cta: "Chcę ustawić taką kampanię dla siebie!",
    caseTitle: "Case study z kampanii kierującej na Instagrama",
    story:
      "Monice zależało, żeby jej konto na Instagramie regularnie się rozwijało. Dzięki dobrze zaplanowanej kampanii na pozyskanie obserwujących <b>w ciągu 6 miesięcy zyskała 9306 nowych obserwujących.<br />Dodatkowy efekt? 43 osoby przesłały zapytania</b> o możliwość wykupienia zajęć językowych.",
    stats: [
      { label: "Czas trwania kampanii:", value: "6 miesięcy (styczeń-czerwiec 2025)" },
      { label: "Liczba nowych obserwujących:", value: "9306" },
      { label: "Wydany budżet:", value: "5781,47 zł" },
      { label: "Liczba zapytań o zajęcia (dodatkowo):", value: "43" },
    ],
    protip: { desktop: protip1, mobile: protip1Mobile },
    campaign: { desktop: campaign1, mobile: campaign1Mobile },
    result: { desktop: result1, mobile: result1Mobile },
  },
  {
    title: "Masterclass 2",
    subtitle: "reklama, która buduje listę mailingową",
    lead: "Nauczysz się, jak ustawić kampanię, która będzie fundamentem Twojego biznesu",
    difficulty:
      "To może być Twoja pierwsza kampania Meta Ads. Zapraszam też osoby, które ustawiały już proste kampanie i chcą nauczyć się bardziej skomplikowanych działań reklamowych!",
    effects: [
      "Umiesz ustawić kampanię, która zarówno buduje społeczność gotową do zakupuUmiesz ustawić kampanię, która zarówno buduje społeczność gotową do zakupu",
      "Uniezależniasz się od reklam: zbierasz grupę osób poza Instagramem i Facebookiem, co w połączeniu z adsami daje świetne efekty!",
      "Tu powinnam napisać, że budujesz podstawy pod sprzedaż… ale sama zobacz obok: te kampanie potrafią już sprzedawać!",
    ],
    cta: "To jest to!",
    caseTitle: "Case study kampanii z listą mailową",
    stats: [
      {
        label: "Cel kampanii:",
        value:
          "kampania z celem zapis na listę mailową; po dołączeniu subskrybenci otrzymują one time offer na dostęp do platformy kursowej",
      },
      { label: "Wartość zakupów:", value: "69 972 zł" },
      { label: "Czas trwania kampanii:", value: "2 miesiące" },
      { label: "ROAS:", value: "10,15" },
    ],
    sideStats: [
      { label: "Liczba osób, która wypełniła formularz zapisu:", value: "1949" },
      { label: "Wydany budżet:", value: "6892,61 zł" },
      { label: "Ilość zakupów:", value: "28 x 2499 zł" },
    ],
    protip: { desktop: protip2, mobile: protip2Mobile },
    campaign: { desktop: campaign2, mobile: campaign2Mobile },
    result: { desktop: result2, mobile: result2Mobile },
  },
  {
    id: "masterclass-3",
    title: "Masterclass 3",
    subtitle: "reklamy, które sprzedają",
    lead: "Nauczysz się: jak ustawić <b>kampanię sprzedażową od A do Z</b>",
    difficulty:
      "Kampanie sprzedażowe to wisienka na torcie. Zadziałają najlepiej, jeśli prowadzisz już kampanie na wcześniejszych etapach lejka. Moja rada: zacznij od masterclassów o Instaramie i liście mailowej, a potem wróć do tego masterclassu.",
    effects: [
      "Umiesz ustawić kampanię sprzedażową do ciepłych i zimnych grup odbiorców,",
      "Trafiasz do osób, które najchętniej kupią Twój produkt",
      "Zarabiasz! Twoje zarobki przestają być uzależnione od czasu",
    ],
    cta: "Sprzedaję skutecznie!",
    caseTitle: "Case study z kampanii sprzedażowej",
    story:
      "Ani zależało na zdobyciu nowych klientów i powiększeniu swojej społeczności. <b>Promocja webinaru ze ścieżką sprzedażową dała podwójny efekt: 10 376 osób zapisało się na webinar, a 172 osoby kupiły kurs.</b> Sprzedaż nadal trwa, mimo że kampania została już zakończona.",
    stats: [
      {
        label: "Cel kampanii:",
        value: "Sprzedaż kursu dla właścicieli lokalnych firm, nie podajemy nazwy",
      },
      { label: "Wydany budżet:", value: "55 858 zł" },
      { label: "Czas trwania kampanii:", value: "14 miesięcy (lipiec 2024 - wrzesień 2025)" },
      { label: "Liczba osób, które zapisały się na webinar:", value: "10 376" },
      {
        label: "Grupy docelowe:",
        value: "osoby zainteresowane marketingiem, właściciele lokalnych biznesów",
      },
      { label: "Liczba sprzedanych kursów:", value: "172, około 120 000 złotych" },
    ],
    protip: { desktop: protip3, mobile: protip3Mobile },
    // The previous site reused the masterclass 2 mobile graphic here.
    campaign: { desktop: campaign3, mobile: campaign2Mobile },
    result: { desktop: result3, mobile: result3Mobile },
  },
]

export const beforeAdsy: RichText[] = [
  "❌ Korzystasz z <b>“promuj post”</b> na Instagramie",
  "❌ Być może <b>ustawiasz już reklamy w menedżerze,</b> ale nie jesteś zadowolona z wyników",
  "❌ Nie wiesz, <b>jak działać skutecznie z reklamami,</b> i jak je ustawić",
  "❌ <b>Twoje działania organiczne już nie przynoszą efektu, </b>lub działają jedynie wtedy, gdy bez przerwy publikujesz i działasz na Instagramie",
  "❌ Nie wiesz,<b> jak ustawić kampanię sprzedażową, </b>która przynosi efekty",
  "❌ Obawiasz się<b> przepalenia budżetu reklamowego</b>",
]

export const afterAdsy: RichText[] = [
  "✅ <b>Korzystasz z gotowych nagrań i instrukcji,</b> które w ekspresowy i skuteczny sposób przeprowadzą Cię przez ustawienie reklam",
  "✅ <b>Masz dostęp do pełnego, eksperckiego pakietu nagrań i wytycznych do kampanii</b> na pozyskanie obserwujących, budowanie listy mailowej i sprzedaży remarketingowej",
  "✅ Otrzymujeszb <b>sprawdzony i gotowy</b> proces od ekspertek",
  "✅ <b>Potrafisz analizować wyniki swoich reklam i wdrażać poprawki,</b>aby działały lepiej",
  "✅ <b> Twoje kampanie reklamowe pracują:</b>na urlopie, w weekend, w święta, po południu…",
  "✅<b> Uśmiechasz się na widok nowych obserwacji,</b> zamówień, zapytań i rosnącej liczby mailowej!",
]

/** "Adsy&chill to świetny wybór, bo..." — two items per column. */
export const adsyReasons: string[] = [
  "Otrzymasz konkretną instrukcję ustawienia trzech kampanii reklamowych krok po kroku",
  "Masz dostęp do nagrań przez 12 miesięcy - oglądasz kiedy chcesz, ile razy potrzebujesz",
  "W godzinę ustawisz profesjonalną kampanię reklamową - nawet jeśli to Twój pierwszy raz",
  "W trzy godziny stworzysz lejek reklamowy dla swojego biznesu",
]

export const fullPackage = {
  title: "🚀 PAKIET FULL",
  price: "547 zł",
  oldPrice: "729 zł",
  cta: { label: "KUPUJĘ DOSTĘP!", href: adsyCheckoutUrl },
  items: [
    '<b>Masterclass "Wartościowe follow na Instagramie": <br /></b>przystępne omówienie teorii i przygotowania strategicznego <br />+ nagranie krok po kroku w menedżerze reklam',
    '<b>Masterclass "Kampania, która buduje listę mailingową": <br /></b>przystępne omówienie teorii i przygotowania strategicznego <br />+ nagranie krok po kroku w menedżerze reklam',
    '<b>Masterclass "Reklamy remarketingowe, które sprzedają": <br /></b>przystępne omówienie teorii i przygotowania strategicznego <br />+ nagranie krok po kroku w menedżerze reklam',
    "<b>BONUS: gotowe szablony graficzne reklam </b>do kampanii na pozyskanie obserwujących, budowanie listy mailowej i sprzedaż remarketingową ",
    "<b>BONUS: lejek na urlop, wakacje i święta </b>dla e-commerce, usług i produktów cyfrowych ",
    "<b>BONUS: słowniczek pojęć w menedżerze reklam, </b>które ułatwią Ci życie z reklamami ",
  ] satisfies RichText[],
}

/** First four = left column, last four = right column. */
export const adsyFaq: FaqItem[] = [
  {
    question: "Czy Adsy&chill są dla mnie?",
    answer:
      "Adsy&amp;chill to masterclassy dla kobiet, które chcą docierać do nowych osób na większą skalę niż do tej pory. Poprowadzą Cię przez przygotowanie trzech najważniejszych kampanii reklamowych.",
  },
  {
    question: "Co będzie się działo po zakupie?",
    answer:
      "Na Twojego maila trafi wiadomość z danymi do logowania do Adsy&amp;chill. Masterclassy są dostępne na intuicyjnej platformie, w formie wygodnych lekcji video.",
  },
  {
    question: "Czy muszę mieć doświadczenie z reklamami?",
    answer:
      "Nie musisz 😊 Jeśli kliknęłaś kiedyś ‘promuj post’ lub pomyślałaś, że możesz ustawić pierwszą kampanię reklamową z prawdziwego zdarzenia - Adsy&amp;chill są dla Ciebie.",
  },
  {
    question: "Jakie wyniki osiągnę dzięki masterclassom?",
    answer:
      "Osoby, które zdecydowały się na dołączenie do Adsy&amp;chill, mówią tak:<br /><br />- „moje konto na Instagramie rośnie w oczach”<br />- „ROAS w okolicy 5 przy sprzedaży taniego produktu”<br />- „wczoraj odpaliłam reklamę na warsztaty online i już rozeszły się prawie wszystkie miejsca”<br /><br />Czy obiecam Ci, że w 3 dni sprzedasz 578 produktów? Nie. Czy jestem pewna, że przygotowanie reklam zgodnie ze wskazówkami z Adsy&amp;Chill przyniesie Ci regularna sprzedaż? Tak :)",
  },
  { question: "Na jak długo dostanę dostęp?", answer: "Na 12 miesięcy." },
  {
    question: "Skąd ta cena?",
    answer:
      "Masz rację - kursy prowadzenia reklam potrafią kosztować od 1000 zł wzwyż. Masterclass dostajesz w niższej cenie, bo wiem, że wiele przedsiębiorczyń zastanawia się nad rozpoczęciem działań reklamowych, ale powstrzymuje je wysoka cena, jaką musiałyby wydać na start. Adsy&amp;chill to instrukcja ustawienia kampanii reklamowych od podstaw.",
  },
  {
    question: "Czy dostanę fakturę?",
    answer: "Tak, faktura trafi na maila podanego w koszyku chwilę po zakończeniu transakcji.",
  },
  {
    question: "Czy mogę przeczytać opinie o Adsy&chill?",
    answer:
      'Oczywiście! Zerknij też do sekcji <b><a href="#opinie">“Tak mówią osoby, które korzystały z mojego wsparcia w reklamach”</a></b>',
  },
]
