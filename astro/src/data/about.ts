import { shopUrl } from "@/config/site"

export const features = [
  { title: "ODKRYWCZOŚĆ", text: "odkrywam potencjał reklamowy biznesów" },
  { title: "STRATEG", text: "tworzę kreatywne koncepty reklamowe dla marek" },
  { title: "INDYWIDUALIZACJA", text: "sprzedaję baz nachalnej sprzedaży" },
  { title: "ZBIERANIE", text: "zbieram wiele pomysłów w spójną komunikację" },
  { title: "NAPRAWIANIE", text: "znajduję rozwiązania na problemy reklamowe" },
]

export const services = [
  {
    title: "Produkty",
    description: "Skorzystaj z produktów o reklamach i samodzielnie prowadź kampanie.",
    cta: { label: "Korzystam!", href: "/contact" },
  },
  {
    title: "Kampanie",
    description: "Zleć mi prowadzenie kampanii i skup się na pracy, którą lubisz najbardziej.",
    cta: { label: "Sprawdzam!", href: "https://sklep.adrianna.com.pl/search?q=konsultacja" },
  },
  {
    title: "Szkolenia",
    description: "Szukasz ekspertki od Meta Ads? Prowadzę szkolenia indywidualne i grupowe.",
    cta: { label: "Chcę szkolenie!", href: shopUrl },
  },
]

/** "Lubię… / Nie lubię…" facts — trusted HTML. */
export const personalFacts = [
  "<strong>Lubię…</strong> jeździć na rowerze, podróżować z plecakiem, rozkminiać reklamy i jeść azjatyckie żarcie.",
  "<strong>Nie lubię…</strong> pora & cebuli, parków z szybkimi karuzelami, horrorów i chaosu.",
  "<strong>Zawsze…</strong> muszę rozpisać sobie plan dnia i mam w kieszeni jakiś głupi żart na wypadek, gdyby zrobiło się zbyt niezręcznie.",
  "<strong>Nigdy…</strong> nie odmówię spróbowania czegoś dobrego w nieznanej knajpie, nigdy nie przestałam scrollować TikToka, więc w obawie o swoje zdrowie: odinstalowałam go.",
]

/** "O mnie" bullet list — trusted HTML. */
export const aboutMe = [
  "Pochodzę z wielkopolski, mieszkałam w Raciborzu, <strong>teraz spotkacie w Katowicach lub w podróży.</strong>",
  'Prowadzę agencję marketingową <a href="https://getbold.pl/" class="font-bold no-underline">GetBold!</a> Zanim to zrobiłam, przez 4 lata pracowałam na marketingowych etatach.',
  "<strong>Jestem osobą wysokowrażliwą</strong>, codzienne chodzenie do biura przyprawiało mnie o ból głowy.",
  "<strong>Jako pierwsza wywalczyłam pracę zdalną</strong> w mojej ostatniej etatowej pracy. Jeszcze przed pandemią.",
  "Teraz na spotkania online mogę łączyć się z kuchni, przedpokoju lub z sypialni i bardzo to lubię.",
  "<strong>Wierzę, że skuteczny marketing wypływa z zaangażowania, dlatego jestem w bieżącym kontakcie z moimi klientami</strong>",
]

export const resources = [
  {
    text: "Darmowe materiały o slow marketingu i kampaniach reklamowych.",
    cta: { label: "Korzystam!", href: "/materials" },
  },
  {
    text: "Sklep z produktami, dzięki którym nauczysz się robić reklamy w rytmie slow.",
    cta: { label: "Sprawdzam!", href: shopUrl },
  },
]
