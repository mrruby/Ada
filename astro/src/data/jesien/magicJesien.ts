/**
 * MAGIC — jesienna strona sprzedażowa (/magic-jesien) i jej wariant z
 * nagraniem masterclassu (/jesien-nagranie2). Rich text = zaufany HTML.
 *
 * Elementy zależne od promocji: `<span data-when="active">` (do końca
 * promocji) i `<span data-when="expired">` (po niej) — przełącza je licznik
 * strony (patrz components/ui/Countdown.astro).
 */
import adaPortrait from "@/assets/images/ada_portrait.webp"
import dawidPortrait from "@/assets/images/dawid_portrait.webp"
import dorotaPortrait from "@/assets/images/dorota_portrait.webp"
import justynaPortrait from "@/assets/images/justyna_portrait.webp"
import op02 from "@/assets/images/magic-jesien/op02.webp"
import op03 from "@/assets/images/magic-jesien/op03.webp"
import op04 from "@/assets/images/magic-jesien/op04.webp"
import op05 from "@/assets/images/magic-jesien/op05.webp"
import op06 from "@/assets/images/magic-jesien/op06.webp"
import op07 from "@/assets/images/magic-jesien/op07.webp"
import op08 from "@/assets/images/magic-jesien/op08.webp"
import op09 from "@/assets/images/magic-jesien/op09.webp"
import op10 from "@/assets/images/magic-jesien/op10.webp"
import op11 from "@/assets/images/magic-jesien/op11.webp"
import op12 from "@/assets/images/magic-jesien/op12.webp"
import nicolaPortrait from "@/assets/images/nicola_portrait.webp"
import { caseStudyVideos } from "@/data/shared/caseStudyVideos"
import type { FaqItem, ImageItem, RichText, TeamMember, VideoItem } from "@/lib/content"

// ── Konfiguracja ────────────────────────────────────────────────────────

export const MAGIC_JESIEN_PROMOTION_END = new Date("2026-09-28T23:59:59+02:00")

export const MAGIC_JESIEN_TITLE = "MAGIC. Subskrypcja dla przedsiębiorczyń"
export const MAGIC_JESIEN_DESCRIPTION =
  "Skaluj swój biznes dzięki reklamom, AI i automatyzacjom. Dołącz do MAGIC: konsultuj reklamy, teksty i grafiki z całym zespołem. Wybierz 1, 3 lub 6 miesięcy."

export const MAGIC_JESIEN_INVITATION_VIDEO_ID = "1117395484"
/** Nagranie masterclassu na /jesien-nagranie2 (YouTube). */
export const MAGIC_JESIEN_NAGRANIE2_VIDEO_ID = "zD1wvQRif-Q"

// ── Dla kogo ────────────────────────────────────────────────────────────

export type MagicProfile = { emoji: string; title: string; pain: string; text: string }

export const magicProfiles: MagicProfile[] = [
  {
    emoji: "💼",
    title: "Przedsiębiorczyni z marką osobistą i usługami",
    pain: "„Konsultacje, dietetyka, coaching, fotografia. Klientki przychodzą z polecenia, a chcę, żeby zapytania były regularne.”",
    text: "Kampania na obserwujących, remarketing i reklama, która przyprowadza zapytania także wtedy, kiedy nie siedzisz w telefonie.",
  },
  {
    emoji: "🎓",
    title: "Ekspertka z produktem cyfrowym",
    pain: "„Sprzedaję na launchach albo z Instagrama 1:1. Wszystko stoi na mojej obecności i zrywach.”",
    text: "W MAGIC budujesz stały lejek: reklama na obserwujących, zapis na lead magnet, sekwencja mailowa i kampania sprzedażowa, która pracuje, gdy Ciebie nie ma.",
  },
  {
    emoji: "🔑",
    title: "Przedsiębiorczyni, która zlecała reklamy agencji",
    pain: "„Raporty, które otrzymywałam, były niejasne i nic z nich nie rozumiałam.”",
    text: "Spróbuj samodzielnie. Jasne, to zajmie nieco więcej czasu, ale zdejmie z głowy duże zobowiązanie finansowe i pomoże działać w Twoim tempie.",
  },
  {
    emoji: "🏥",
    title: "Lokalna usługa lub gabinet",
    pain: "„Nie wiem, jak wypromować mój biznes i czy to ma w ogóle sens?”",
    text: "Pokażemy Ci, jak wystartować i dotrzeć reklamami do osób w Twojej okolicy.",
  },
  {
    emoji: "🛍️",
    title: "Mikro e-commerce i rękodzieło",
    pain: "„Ustawiam kampanie, ale nie wiem, czy one działają dobrze.”",
    text: "Z nami przygotujesz się na wysoki sezon, a także zadbasz o regularne działania z kampaniami reklamowymi.",
  },
  {
    emoji: "🧑‍💻",
    title: "Freelancerka / social media managerka",
    pain: "„Wydaję pieniądze klientki, więc boję się cokolwiek testować.”",
    text: "Reklamy dopisujesz do oferty ze wsparciem przy pierwszej kampanii dla klientki: zaczynasz od własnego budżetu, konsultujesz konto klientki tak samo jak swoje.",
  },
]

// ── Rozpoznajesz te zdania? (bez MAGIC / z MAGIC) ───────────────────────

export type DiagnosisPoint = { title: string; text: string }
export type DiagnosisItem = { emoji: string; without: DiagnosisPoint; with: DiagnosisPoint }

export const magicDiagnosis: DiagnosisItem[] = [
  {
    emoji: "🫠",
    without: {
      title: "„Jak wchodzę do Menedżera Reklam, to dostaję zawału.”",
      text: "Nic dziwnego, sama chciałabym zobaczyć nagranie, na którym Mark Zuckerberg korzysta z konta reklamowego.",
    },
    with: {
      title: "Na LIVE klikamy razem, w Menedżerze, który widzisz dziś.",
      text: "Osoby, które bały się Menedżera jak ognia, wpadają na konsultacje grupowe i pokazują swój ekran.",
    },
  },
  {
    emoji: "📼",
    without: {
      title: "„Wszystko wyglądało inaczej niż na kursach, które kupiłam.”",
      text: "Wszystko w reklamach zmienia się bardzo dynamicznie, a w MAGIC o tym pamiętamy.",
    },
    with: {
      title: "Spotykamy się na żywo.",
      text: "Wspólnie wyklikasz reklamę razem z nami, pokażesz swój ekran lub skorzystasz z aktualnego nagrania.",
    },
  },
  {
    emoji: "📊",
    without: {
      title: "„Nie umiem czytać tych wyników. Wspomagam się czatem, ale nie wiem, na ile mu ufać.”",
      text: "AI nie zawsze pomoże, jeśli chodzi o analizę reklam. Warto polegać na doświadczeniu innych.",
    },
    with: {
      title: "Wrzucasz screen wyników na kanał „Zadaj pytanie” i dostajesz analizę TWOJEGO konta.",
      text: "Każdy przypadek jest inny, w MAGIC otrzymujesz rozwiązanie dla Ciebie.",
    },
  },
  {
    emoji: "🧩",
    without: {
      title: "„Piksel urósł mi w głowie do technicznego nie-wiadomo-czego.”",
      text: "Odkładany od miesięcy, bo brzmi jak coś dla programistek.",
    },
    with: {
      title: "Otrzymujesz wytyczne, jak zainstalować piksel.",
      text: "A jeśli coś nie działa? Sprawdzamy wspólnie na konsultacjach grupowych.",
    },
  },
  {
    emoji: "🔒",
    without: {
      title: "„Straciłam konto reklamowe na 3 miesiące, bo ktoś z zewnątrz je ustawiał.”",
      text: "Dobrze jest zrozumieć reklamy samodzielnie i wyskalować je do momentu, aby móc je przekazać dalej.",
    },
    with: {
      title: "Nie oddawaj nikomu konta, zanim sama nie zrozumiesz, co się w nim dzieje.",
      text: "Dzięki temu skalowanie Twoich reklam i każda współpraca, gdy przekażesz reklamy, będzie o wiele skuteczniejsza.",
    },
  },
  {
    emoji: "💳",
    without: {
      title: "„Wydaję pieniądze klientki, więc boję się cokolwiek testować.”",
      text: "Reklamy to usługa, której nie odważasz się wpisać do oferty.",
    },
    with: {
      title: "Boisz się cudzego budżetu? Zacznij od swojego.",
      text: "Freelancerki ustawiają pierwsze kampanie klientek z konsultacją krok po kroku i dopisują reklamy do oferty.",
    },
  },
  {
    emoji: "📥",
    without: {
      title: "„Mam dużo zapisów, ale zero klientów.”",
      text: "Co z tego, że mamy „tanie kontakty”, skoro dalej nie dzieje się nic?",
    },
    with: {
      title: "Patrzymy na jakość leadów, nie tylko na ich koszt.",
      text: "Zapis za 3–5 zł ma sens dopiero wtedy, gdy zamienia się w rozmowę, a nie tylko wtedy, gdy wygląda dobrze na raporcie :)",
    },
  },
]

export type PhoneNotification = { icon: string; app: string; text: string; time: string }

export const magicPhoneWithout: PhoneNotification[] = [
  { icon: "🚫", app: "Menedżer Reklam", text: "Konto reklamowe zablokowane.", time: "teraz" },
  { icon: "💸", app: "Menedżer Reklam", text: "Budżet dzienny wydany. Zakupy: 0.", time: "1 min" },
  { icon: "📊", app: "Raport tygodniowy", text: "Zasięg 40 000. Nowe klientki: 0.", time: "8 min" },
  { icon: "📣", app: "Instagram", text: "„Promuj post”: 14 polubień, 0 zapytań.", time: "wczoraj" },
  { icon: "📩", app: "Agencja", text: "Faktura za reklamy: do zapłaty.", time: "pon." },
]

export const magicPhoneWith: PhoneNotification[] = [
  {
    icon: "✅",
    app: "Circle · Ada",
    text: "Kampania gotowa do startu. Ruszaj w czwartek.",
    time: "teraz",
  },
  {
    icon: "📈",
    app: "Menedżer Reklam",
    text: "Zakupy: 31, koszt zakupu spadł o 38%.",
    time: "3 min",
  },
  {
    icon: "✍️",
    app: "Circle · Justyna",
    text: "Poprawiłam nagłówek, sprawdź wersję B.",
    time: "12 min",
  },
  {
    icon: "🐾",
    app: "Kapibara Barbara",
    text: "Odpowiedź na Twoje pytanie jest gotowa.",
    time: "wczoraj",
  },
  { icon: "🗓️", app: "Rozkład jazdy", text: "Konsultacje grupowe: czwartek, 11:00.", time: "pon." },
]

// ── Co sprawia, że MAGIC jest wyjątkowy? ────────────────────────────────

export type MagicFeature = {
  eyebrow: string
  title: string
  text?: RichText
  /** Which illustrative UI mock-up sits next to the copy. */
  mock: "plan" | "thread" | "schedule" | "assistant"
  /** Panel color behind the mock-up. */
  panel: "yellow" | "pink"
}

export const magicFeatures: MagicFeature[] = [
  {
    eyebrow: "MAGIC Plan na start",
    title: "Zaczynasz od spotkania 1:1 z Nicolą i własnego planu reklam",
    text: "Pierwsze 20 osób otrzyma MAGIC Plan: spotkanie 1:1 i personalizowany plan reklam, propozycje budżetu oraz wskazówki, które nagrania warto zobaczyć i jakie cele reklamowe ustawić.",
    mock: "plan",
    panel: "yellow",
  },
  {
    eyebrow: "Konsultacje pisemne na Circle",
    title: "Zadajesz pytanie o SWOJĄ reklamę, kiedy Ci wygodnie",
    text: "Dwa kanały, o których klubowiczki mówią najczęściej: <strong>„Zadaj pytanie”</strong>, gdzie wrzucasz screen wyników i dostajesz analizę swojego konta, oraz <strong>„Skonsultuj materiały”</strong>, gdzie Justyna sprawdza copy, a Dorota grafiki i identyfikację wizualną, zanim wydasz budżet. Do tego dwie 1,5-godzinne sesje konsultacji grupowych miesięcznie, na których możesz pokazać swój ekran i zadać pytanie!",
    mock: "thread",
    panel: "pink",
  },
  {
    eyebrow: "5 spotkań na żywo miesięcznie",
    title: "Konsultacje grupowe, warsztaty i LIVE z ustawianiem reklam",
    mock: "schedule",
    panel: "yellow",
  },
  {
    eyebrow: "Nasza asystentka",
    title: "„Barbara, tu masz wyniki reklamy…”",
    text: "Kapibara Barbara to nasza sympatyczna asystentka AI, która nie korzysta z wiedzy ogólnodostępnej, a jest zasilana naszymi nagraniami, tekstami i skryptami: możesz przesłać jej screen, nagrać głosówkę (serio!) i potraktować jak koleżankę od reklam. Podpowie też, gdzie znaleźć nagranie na odpowiedni temat, jeśli zgubisz się w naszych poziomach!",
    mock: "assistant",
    panel: "pink",
  },
]

export const magicPlanSteps = [
  { title: "Porządki na koncie", detail: "piksel, zdarzenia, struktura konta", week: "tydzień 1" },
  {
    title: "Kampania na grupę ciepłą",
    detail: "obserwujący, reakcje, odwiedziny profilu",
    week: "tydzień 2",
  },
  {
    title: "Landing i tekst do konsultacji",
    detail: "Justyna i Dorota sprawdzają przed startem",
    week: "tydzień 3",
  },
  {
    title: "Start kampanii sprzedażowej",
    detail: "omawiamy na konsultacjach grupowych",
    week: "tydzień 4",
  },
]

export const magicScheduleEvents = [
  {
    day: "6",
    title: "Tworzenie asystenta do generowania raportów reklamowych z pomocą Excela i Canvy",
    hours: "11:00 – 12:00",
  },
  { day: "15", title: "Konsultacje grupowe", hours: "11:00 – 12:30" },
  { day: "20", title: "Dopasuj tekst AI do głosu marki", hours: "17:00 – 18:00" },
  { day: "27", title: "LIVE: ustawianie reklam na żywo", hours: "18:00 – 19:00" },
  {
    day: "29",
    title: "Konsultacje grupowe z Nicolą",
    hours: "17:00 – 18:30, termin dla pracujących w dzień",
  },
]

// ── Zanim wybierzesz ────────────────────────────────────────────────────

export const magicChecklist = [
  {
    need: "Plan na start pod Twój biznes, nie tylko dostęp do materiałów",
    inMagic: "W MAGIC: spotkanie 1:1 i MAGIC Plan",
  },
  {
    need: "Ktoś, kto na żywo spojrzy na Twój ekran lub sprawdzi screeny",
    inMagic: "W MAGIC: 2 sesje w miesiącu",
  },
  {
    need: "Możliwość konsultacji screenów i zadania pytania pomiędzy spotkaniami",
    inMagic: "W MAGIC: kontakt na Circle oraz rozmowy z Kapibarą",
  },
  {
    need: "Wsparcie w pisaniu i grafikach, nie tylko przy ustawieniu reklamy",
    inMagic: "W MAGIC: w cenie",
  },
  { need: "Ścieżka nauki, nie lista tysiąca i jednego nagrania", inMagic: "W MAGIC: poziomy 0→5" },
]

// ── Pakiety ─────────────────────────────────────────────────────────────

export const MAGIC_REGULAR_PRICE = 557
/** Monthly fee charged by an agency/freelancer in the calculator. */
export const MAGIC_AGENCY_MONTHLY = 2000

export type MagicPlan = {
  label: string
  months: number
  monthsLabel: string
  promoPrice: number
  /** Suffix after the crossed-out regular price. */
  wasSuffix?: string
  save?: string
  when: string
  renew?: string
  badge?: { text: string; tone: "orange" | "lilac" }
  featured?: boolean
}

export const magicPlans: MagicPlan[] = [
  {
    label: "Subskrypcja elastyczna",
    months: 1,
    monthsLabel: "miesiąc",
    promoPrice: 509,
    when: "Sprawdzasz, jak to działa, bez długiego zobowiązania.",
    renew: "🔁 Odnawia się co miesiąc. Możesz anulować w każdym momencie.",
  },
  {
    label: "3 miesiące w MAGIC",
    months: 3,
    monthsLabel: "miesiące",
    promoPrice: 409,
    wasSuffix: " / miesiąc",
    save: "oszczędzasz 300 zł względem pakietu miesięcznego",
    when: "Tyle trwa zbudowanie pierwszego lejka, przetestowanie kampanii i zobaczenie realnych wyników.",
    badge: { text: "⚡ Top wybór!", tone: "orange" },
    featured: true,
  },
  {
    label: "6 miesięcy w MAGIC",
    months: 6,
    monthsLabel: "miesięcy",
    promoPrice: 379,
    wasSuffix: " / miesiąc",
    save: "oszczędzasz 780 zł względem pakietu miesięcznego",
    when: "Dla tych, które wiedzą, że reklamy to nie sprint, tylko maraton.",
    badge: { text: "💜 Najtaniej!", tone: "lilac" },
  },
]

export const magicPlanIncludes: RichText[] = [
  "<strong>MAGIC Plan na start dla pierwszych 20 osób:</strong>&nbsp;spotkanie 1:1 z Nicolą i personalizowany plan reklam",
  "<strong>5 spotkań na żywo miesięcznie:</strong>&nbsp;2 konsultacje grupowe (1,5 h), 2 warsztaty, LIVE, wszystkie nagrywane",
  "<strong>Konsultacje pisemne</strong>&nbsp;z ekspertkami na Circle, bez limitu",
  "<strong>Materiały szkoleniowe wideo</strong>&nbsp;i wewnętrzna baza wiedzy",
  "<strong>Nielimitowany dostęp do nagrań</strong>&nbsp;i Kapibara Barbara między spotkaniami",
]

// ── Postępy po 1, 3 i 6 miesiącach ──────────────────────────────────────

export const magicStages = [
  {
    emoji: "🛟",
    title: "Po 1 miesiącu",
    levels: "Poziomy 0–1: ADS Starter i ADS Beginner",
    points: [
      "spotkanie 1:1 z Nicolą za Tobą i MAGIC Plan w ręku",
      "piksel podpięty (na żywo, w 15 minut) i konto zabezpieczone",
      "ustawisz Twoją pierwszą kampanię!",
    ],
    tally: "5 spotkań na żywo za Tobą",
  },
  {
    emoji: "📈",
    title: "Po 3 miesiącach",
    levels: "Poziomy 2–3: ADS Analyst i ADS Strategist",
    points: [
      "zaczynasz tworzyć konkretny lejek i analizować wyniki reklam",
      "poprawiasz kreacje z pomocą graficzki i copywriterki",
      "Twoje reklamy nabierają rumieńców!",
    ],
    tally: "15 spotkań, Black Friday i święta z planem",
  },
  {
    emoji: "🚀",
    title: "Po 6 miesiącach",
    levels: "Poziomy 4–5: ADS Specialist oraz AI i automatyzacje",
    points: [
      "kampanie sezonowe planujesz z wyprzedzeniem, a reklamy działają w tle",
      "skalujesz to, co działa, wyłączasz to, co nie działa",
      "możesz także podziałać z automatyzacjami i asystentem AI podczas spotkań z Dawidem!",
    ],
    tally: "30 spotkań i pół roku nagrań",
  },
]

// ── Case study Magdy ────────────────────────────────────────────────────

export const magdaRoles = [
  "👩‍💻 obsługa klienta",
  "📣 marketing",
  "💰 finanse",
  "🛒 sprzedaż",
  "🇸🇪 nauka szwedzkiego",
  "👶 mama",
]

export const magdaValues = [
  {
    emoji: "⛏️",
    title: "Kopalnia wiedzy i źródło inspiracji",
    text: "Miejsce, gdzie we własnym tempie rozwija kompetencje reklamowe i czerpie z doświadczeń innych przedsiębiorczyń i marketerek.",
  },
  {
    emoji: "📝",
    title: "Warsztaty na żywo",
    text: "Z każdego wychodzi z notesem pełnym nowych pomysłów do wdrożenia.",
  },
  {
    emoji: "💬",
    title: "Społeczność na Circle",
    text: "Idealna grupa do testowania pomysłów: sprawdza założenia z ekspertkami i członkiniami przed uruchomieniem kampanii. Koniec z samotnością w biznesie.",
  },
  {
    emoji: "🧘‍♀️",
    title: "Uporządkowanie reklamowej części biznesu",
    text: "Reklamy przestały być źródłem stresu, a stały się naturalną częścią prowadzenia biznesu.",
  },
]

// ── Wideo opinie ────────────────────────────────────────────────────────

/** Full portrait frames from Vimeo; the default thumbnail service crops these videos. */
const magicVideoPosters: Record<string, string> = {
  "1155918940":
    "https://i.vimeocdn.com/video/2108799956-af00863ecf8d67d4c3e0c1f040a20ac0e73da5d2a0ba7be86e8ca5df9ca31b5d-d_540x960?region=us",
  "1155051959":
    "https://i.vimeocdn.com/video/2107595642-487cec860ab702cbed125613e0cbc2e6028f2fe8a1176a414ac92aa6f3394863-d_540x960?region=us",
  "1155053529":
    "https://i.vimeocdn.com/video/2107599290-ca0d3feecb633533daf733aa8e28b8daaff1f7f9af43a8fa75211af512027aec-d_540x960?region=us",
  "1156039661":
    "https://i.vimeocdn.com/video/2108984338-1cd73114c12c00925e2b3808ae30426ab4a52a189c63e742514555c680ac9fdb-d_540x960?region=us",
  "1158468977":
    "https://i.vimeocdn.com/video/2112511166-6a63c0a1b86e57f164f24fed1d584396d8d764d7f83901f18a684af7af29dd43-d_540x960?region=us",
}

/** The Magic case-study videos with full-frame posters and page-specific titles. */
export const magicVideoOpinions: VideoItem[] = caseStudyVideos.map((video, index) => ({
  ...video,
  title: `Opinia klubowiczki MAGIC, nagranie ${index + 1}`,
  poster: magicVideoPosters[video.id],
}))

// ── Przykładowy miesiąc (październik) ───────────────────────────────────

export type CalendarNoteTone = "orange" | "lilac" | "yellow" | "pink" | "live"

/** Notes pinned to October days; `live` = meeting on Zoom. */
export const magicCalendarNotes: Record<number, { tone: CalendarNoteTone; html: RichText }> = {
  1: { tone: "orange", html: "👩‍💻 czas na skonsultowanie <b>strony www</b>" },
  5: { tone: "lilac", html: "💌 ustawiasz <b>automatyzację w reklamie</b> na kontakty" },
  6: { tone: "live", html: "💡 warsztat: raporty reklamowe z AI" },
  8: { tone: "yellow", html: "🖌️ czas na skonsultowanie <b>tekstów</b>" },
  12: { tone: "pink", html: "🔮 poznajesz <b>aktualne trendy</b>" },
  14: {
    tone: "orange",
    html: "📰 krok po kroku ustawiasz kampanię z <b>zapisem na newsletter</b>",
  },
  15: { tone: "live", html: "🗓️ konsultacje grupowe, 1,5 h" },
  19: { tone: "pink", html: "🎨 skonsultujesz <b>grafiki</b>" },
  20: { tone: "live", html: "💡 warsztat: tekst AI w głosie marki" },
  21: { tone: "yellow", html: "🛎️ dodajesz do kampanii <b>remarketing</b>" },
  26: { tone: "lilac", html: "📬 <b>ścieżka mailowa</b> po zapisie na lead magnet" },
  27: { tone: "live", html: "🔴 LIVE: ustawianie reklam na żywo" },
  28: { tone: "yellow", html: "📊 rozwiązujesz <b>problemy z analityką</b>" },
  29: { tone: "live", html: "🗓️ konsultacje grupowe z Nicolą, 17:00" },
  30: { tone: "orange", html: "🎥 czas na skonsultowanie <b>reklamowej rolki</b>" },
}

/** Calendar grid: 3 days of September, October 1–31, 1 day of November. */
export const magicCalendarDays: { day: number; outside?: boolean }[] = [
  ...[28, 29, 30].map((day) => ({ day, outside: true })),
  ...Array.from({ length: 31 }, (_, index) => ({ day: index + 1 })),
  { day: 1, outside: true },
]

// ── Zespół ──────────────────────────────────────────────────────────────

export const magicTeam: TeamMember[] = [
  {
    photo: adaPortrait,
    alt: "Ada",
    name: "Adrianna Promis-Urbas",
    role: "Meta Ads",
    bio: "Kreatywna dusza i mózg MAGIC. Specjalizuje się w kampaniach Meta Ads i marketingu zbudowanym na relacjach. Z Adą skonsultujesz strukturę i wyniki swoich kampanii.",
  },
  {
    photo: nicolaPortrait,
    alt: "Nicola",
    name: "Nicola Kut",
    role: "Koordynacja kampanii",
    bio: "Analityczka, dla której żadne liczby i raporty nie są straszne. Z Nicolą zaczniesz i skonsultujesz reklamy: to ona poprowadzi Twoje spotkanie startowe i przygotuje Twój MAGIC Plan.",
  },
  {
    photo: justynaPortrait,
    alt: "Justyna",
    name: "Justyna Król",
    role: "Copywriting",
    bio: "Socjolożka i zaklinaczka słów. Justynie wyślesz tekst reklamy do sprawdzenia, zanim odpalisz reklamę.",
  },
  {
    photo: dorotaPortrait,
    alt: "Dorota",
    name: "Dorota Woźniak",
    role: "Grafika",
    bio: "Architektka z pasją do projektowania. Dorota powie, co poprawić w grafikach i pokaże, jakie materiały ustawić w reklamie.",
  },
  {
    photo: dawidPortrait,
    alt: "Dawid",
    name: "Dawid Urbas",
    role: "AI i automatyzacje",
    bio: "Pasjonat AI i automatyzacji. Z Dawidem ustawisz automatyzacje i stworzysz swojego asystenta AI, który pracuje dla Ciebie.",
  },
]

// ── Wyniki członkiń ─────────────────────────────────────────────────────

export type MagicResult = {
  campaign: string
  value: string
  unit: string
  rows: [label: string, value: string][]
}

export const magicResults: MagicResult[] = [
  {
    campaign: "Kampania sprzedażowa",
    value: "18",
    unit: "zakupów",
    rows: [
      ["wartość konwersji", "6 832,20 zł"],
      ["wydana kwota", "989,92 zł"],
    ],
  },
  {
    campaign: "Kampania na zgłoszenia",
    value: "128",
    unit: "przesłanych zgłoszeń",
    rows: [
      ["koszt wyniku", "17,61 zł"],
      ["cel", "pozyskanie kontaktów sprzedażowych"],
    ],
  },
  {
    campaign: "Kampania sprzedażowa",
    value: "68",
    unit: "zakupów w witrynie",
    rows: [
      ["wartość konwersji", "9 461,00 zł"],
      ["wydana kwota", "236,99 zł"],
    ],
  },
  {
    campaign: "Kampania sprzedażowa",
    value: "40",
    unit: "zakupów",
    rows: [
      ["wartość konwersji", "36 224 zł"],
      ["wydana kwota", "2185,20 zł"],
    ],
  },
  {
    campaign: "Kampania sprzedażowa",
    value: "103",
    unit: "zakupy",
    rows: [
      ["koszt wyniku", "4,33 zł"],
      ["wydana kwota", "446,46 zł"],
    ],
  },
  {
    campaign: "Kampania sprzedażowa",
    value: "7",
    unit: "zakupów",
    rows: [
      ["wartość konwersji", "5940 zł"],
      ["wydana kwota", "96,04 zł"],
    ],
  },
]

// ── Opinie (screeny) ────────────────────────────────────────────────────

/** The first five are always visible; the rest show after "Pokaż więcej opinii". */
export const magicOpinions: ImageItem[] = [
  {
    src: op09,
    alt: "Opinia Angeliki Woźniak: nie czuję się zostawiona sama sobie z masą informacji, tylko zaopiekowana i pokierowana",
  },
  {
    src: op05,
    alt: "Opinia Pauliny Leopold: zarówno szkolenia na platformie, jak i konsultacje są świetne",
  },
  {
    src: op02,
    alt: "Opinia Aleksandry Ziober: otrzymałam wsparcie w tych najtrudniejszych chwilach",
  },
  {
    src: op06,
    alt: "Opinia Agnieszki: uporządkowane treści, spotkania online i możliwość stałego kontaktu",
  },
  {
    src: op10,
    alt: "Opinia Martyny Żmudy: dostajemy potężną dawkę wiedzy i możemy zadać pytania",
  },
  { src: op03, alt: "Opinia Pauliny: przekazywana wiedza jest na czasie" },
  { src: op07, alt: "Opinia Agnieszki Sosik-Grzyb: dziewczyny, przybywajcie na Magic" },
  {
    src: op11,
    alt: "Opinia Darii Cichorackiej: gorąco polecam tę przestrzeń każdej osobie, która chce działać z reklamami",
  },
  { src: op04, alt: "Opinia Jadzi Lenart: uporządkowałam dawną wiedzę i nadrobiłam zaległości" },
  {
    src: op08,
    alt: "Opinia Izy: bezcenne, kiedy pracujesz samotnie i nie masz z kim przegadać tematów reklamowych",
  },
  { src: op12, alt: "Opinia Zuzy Rygielskiej: tutaj dbamy o kampanie kompleksowo" },
]

export const MAGIC_OPINIONS_VISIBLE = 5

// ── FAQ ─────────────────────────────────────────────────────────────────

export const magicFaqAds: FaqItem[] = [
  {
    question: "Ile budżetu potrzebuję na start?",
    answer:
      "Nasze członkinie pracują na budżetach między 20 a 80 zł dziennie. W ramach MAGIC Planu otrzymujesz rozpiskę tego, w jaki sposób warto rozłożyć Twój budżet.",
  },
  {
    question: "Mam ChatGPT. Po co mi MAGIC?",
    answer:
      "ChatGPT i Claude to świetni asystenci, ale musisz ich naprawdę dobrze spromptować i wpisać mnóstwo danych, aby nie przytakiwali na wszystko, co im zaproponujesz. W MAGIC łączymy naszą Kapibarę Barbarę z wiedzą i doświadczeniem specjalistów.",
  },
  {
    question: "Kupiłam już kursy i nie pomogły. Czym to się różni?",
    answer:
      "W MAGIC trzymamy rękę na pulsie. Ustawiamy reklamy na żywo, spotykamy się na bieżąco, przesyłamy sobie screeny, gdy nie możemy się spotkać lub do konsultacji zostało sporo czasu.",
  },
  {
    question: "„Promuj post” a reklama w Menedżerze Reklam?",
    answer:
      "„Promuj post” to świetna opcja, ale w Menedżerze Reklam masz o wiele więcej dokładniejszych danych, celów reklamowych i możliwości. Od „promuj posta” sama zaczynałam, ale prawdziwe lejki ustawiamy na profesjonalnym koncie reklamowym :)",
  },
  {
    question: "Dużo zapisów, zero klientów. Co jest nie tak?",
    answer:
      "Cały w tym ambaras, że dobra i słaba reklama na pierwszy rzut oka wyglądają tak samo. Grafika, wideo, tekst, strona www: to wszystko ma wpływ na sukces reklamy i to wspólnie analizujemy.",
  },
  {
    question: "Advantage+ targetuje mi „klub geriatryczny”. Da się to ogarnąć?",
    answer:
      "Da się. Wyłączanie udoskonaleń Advantage+ to jedno, ale ważniejsze są grupy odbiorców, kreacje dopasowane do grupy i test 2–3 zestawów z tymi samymi kreacjami. Mamy dedykowane szkolenie na temat Advantage+, a jeżeli napotkasz trudności, pomożemy Ci na żywo!",
  },
]

export const magicFaqSubscription: FaqItem[] = [
  {
    question: "🔍 Na jakiej platformie funkcjonuje MAGIC?",
    answer:
      "MAGIC działa na platformie Circle i ma wygodną aplikację! Możesz więc korzystać z platformy nawet w podróży.",
  },
  {
    question: "💎 Co sprawia, że MAGIC jest wyjątkowy?",
    answer:
      "Dostajesz cały zespół, nie jedną specjalistkę od adsów: reklamy, teksty, grafiki, strategię i automatyzacje w jednej subskrypcji. Masz 5 spotkań na żywo miesięcznie (wszystkie nagrywane), pytania zadajesz pisemnie, kiedy Ci wygodnie, a każda nowa członkini zaczyna od spotkania 1:1 z Nicolą i własnego MAGIC Planu. Każdy pakiet zawiera dokładnie to samo; różni się tylko długością i ceną za miesiąc.",
  },
  {
    question: "🚀 Jak wygląda MAGIC Plan na start?",
    answer:
      "Pierwsze 20 osób otrzyma MAGIC Plan. Po dołączeniu wypełniasz krótki formularz (10 minut) i umawiasz spotkanie 1:1 z Nicolą: rozmowę o Twoim biznesie i reklamach. Do 5 dni po spotkaniu w MAGIC czeka na Ciebie personalizowany plan reklam: propozycje budżetu, cele reklamowe i wskazówki, które nagrania warto zobaczyć.",
  },
  {
    question: "🎯 Co czeka na mnie w MAGIC?",
    answer:
      "Na start: spotkanie 1:1 z Nicolą i Twój MAGIC Plan. 5 spotkań na żywo miesięcznie (konsultacje grupowe, warsztaty, ustawianie reklam na żywo: 60–90 min). Nielimitowane konsultacje pisemne, regularne inspiracje i praktyczne wskazówki oraz aktualne informacje branżowe w formie przystępnych prasówek. A to wszystko w cenie niższej niż pojedyncza konsultacja 1:1!",
  },
  {
    question: "📚 Czego się nauczę?",
    answer:
      "Skupiamy się na digital marketingu, ze szczególnym naciskiem na kampanie w Meta Ads. Dodatkowo poznasz skuteczne techniki copywritingu i zasady tworzenia przyciągających grafik. Dowiesz się, jak stworzyć własny newsletter oraz jakie narzędzia AI warto wykorzystać w swojej pracy, aby działać szybciej i skuteczniej. Jak sprawić, żeby reklamy sprzedawały, a AI i automatyzacje robiły część roboty za Ciebie.",
  },
  {
    question: "⏰ Ile czasu zajmuje MAGIC?",
    answer:
      "2–3 godziny tygodniowo, jeśli chcesz skorzystać z bieżących spotkań. Jak dużo czasu spędzisz na konsultowaniu swoich treści czy czytaniu materiałów, zależy od Ciebie. MAGIC został stworzony z myślą o zabieganych przedsiębiorczyniach: wszystkie spotkania są nagrywane, więc możesz z nich skorzystać w dowolnym momencie. Biznes to nie 9–17, działamy tak samo, bez sztywnych ram czasowych.",
  },
  {
    question: "🦫 Kim jest Kapibara Barbara?",
    answer:
      "Kapibara Barbara jest naszą Asystentką AI napędzaną całą wiedzą z MAGIC. Możesz z nią skonsultować swoje zagwozdki związane z reklamami, pokazać wyniki, nagrać głosówkę i traktować jak swoją adsową koleżankę.",
  },
  {
    question: "💜 Czym różnią się pakiety 1, 3 i 6?",
    answer:
      'Tylko długością i ceną za miesiąc. Zakres jest identyczny.<span data-when="active"> Promocja trwa do 28.09.2026, do końca dnia, dla wszystkich.</span>',
  },
  {
    question: "💳 Jak wygląda płatność za pakiet 3- i 6-miesięczny?",
    answer:
      "Płacisz co miesiąc przez wybrany okres: 3 lub 6 miesięcy. W tym czasie nie możesz anulować pakietu wcześniej. Po zakończeniu tego okresu pakiet przechodzi w subskrypcję miesięczną z zachowaniem Twojej ceny. Wariant subskrypcji wybierasz w koszyku.",
  },
]

// ── Finał ───────────────────────────────────────────────────────────────

export const magicFinalChecks = [
  "Nawet jeśli teraz trochę się boisz.",
  "Nawet jeśli do tej pory uważałaś, że nie jesteś techniczna.",
  "Nawet jeśli myślisz, że z małym budżetem nie dasz rady.",
]
