import type { RichText } from "@/lib/content"

/** Single "Pakiet miesięczny" offer on /magic — two columns of features. */
export const monthlyPackage = {
  name: "Pakiet miesięczny",
  price: "557 zł",
  cta: "Tak, dołączam!",
  features: [
    [
      "👩‍💻 <b>konsultacje pisemne</b> z ekspertkami",
      "🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii reklamowych i nie tylko",
      "🚀 dostęp do <b>wewnętrznej bazy wiedzy </b>",
    ],
    [
      "🗓️ udział w dwóch <b>1,5-godzinnych sesjach konsultacji grupowych</b>miesięcznie",
      "💡 udział w dwóch <b> autorskich warsztatach tematycznych</b> w miesiącu",
      "👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań",
    ],
  ] satisfies RichText[][],
}

export type MagicPlan = {
  period: string
  name: string
  /** Monthly price in PLN. */
  price: string
  note: string
  /** Card background class. */
  tone: string
  badge?: { label: string; variant: "yellow" | "pink" }
}

/** Every subscription includes the same features — only length and price differ. */
export const planFeatures: RichText[] = [
  "🎯 <b>MAGIC Plan na start</b>: spotkanie 1:1 z Nicolą + indywidualny plan reklam",
  "👩‍💻 <b>konsultacje pisemne</b> z ekspertkami",
  "🎥 <b>materiały szkoleniowe video</b> z ustawiania kampanii reklamowych i nie tylko",
  "🚀 dostęp do <b>wewnętrznej bazy wiedzy</b>",
  "🗓️ udział w dwóch <b>1,5-godzinnych sesjach konsultacji grupowych</b> miesięcznie",
  "💡 udział w dwóch <b>autorskich warsztatach tematycznych</b> w miesiącu",
  "👀 <b>nielimitowany dostęp do nagrań</b> ze wszystkich spotkań",
  "🗓️ <b>5 spotkań na żywo miesięcznie</b> (konsultacje grupowe, warsztaty, LIVE - wszystkie nagrywane)",
]

/** Subscription plans on /magic-special. */
export const magicPlans: MagicPlan[] = [
  {
    period: "subskrypcja miesięczna",
    name: "Subskrypcja elastyczna",
    price: "509",
    note: "Sprawdzasz, jak to działa, bez długiego zobowiązania.",
    tone: "bg-neutral-100",
  },
  {
    period: "subskrypcja 3-miesięczna",
    name: "3 miesiące w Magic",
    price: "409",
    note: "Tyle trwa zbudowanie pierwszego lejka, przetestowanie kampanii i zobaczenie realnych wyników.",
    tone: "bg-petal-light",
    badge: { label: "top\nwybór!", variant: "yellow" },
  },
  {
    period: "subskrypcja 6-miesięczna",
    name: "6 miesięcy w Magic",
    price: "379",
    note: "Dla tych, które wiedzą, że reklamy to nie sprint, tylko maraton.",
    tone: "bg-mint",
    badge: { label: "najtaniej!", variant: "pink" },
  },
]
