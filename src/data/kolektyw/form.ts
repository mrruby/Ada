/**
 * Application form of the Magic collective (CollectiveForm). Answers are
 * posted to a Google Form (`formResponse`, no-cors) — the entry ids below map
 * each field to its Google Form question and must not change.
 */

export type BudgetValue = "Do 2000" | "2000-5000" | "5000-10000" | "10000 i więcej"

export const collectiveForm = {
  /** Extra metadata for external automation tooling. */
  source: "magic-zaproszenie",
  endpoint:
    "https://docs.google.com/forms/d/e/1FAIpQLScWWFTLKbI4z7gIHU7-6gDcBcKLmlDP1QgB3EfODdomkHmpYw/formResponse",
  /** Field name → Google Form entry, in the order they are sent. */
  entries: {
    name: "entry.847981100",
    email: "entry.936258867",
    phone: "entry.1194124057",
    howToContact: "entry.1818554089",
    metaAdsExperience: "entry.1285326409",
    selfSetup: "entry.58511280",
    results: "entry.901101836",
    instagram: "entry.1617673006",
    emailList: "entry.1253582086",
    budget: "entry.551668663",
  },
  /** Validation order and the names used in "Uzupełnij pole: …" messages. */
  required: [
    { field: "name", label: "Imię" },
    { field: "email", label: "Email" },
    { field: "phone", label: "Telefon" },
    { field: "howToContact", label: "Jak najlepiej się do Ciebie zwracać" },
    { field: "metaAdsExperience", label: "Czy korzystałaś już z reklam w Meta" },
    { field: "selfSetup", label: "Czy ustawiałaś reklamy samodzielnie" },
    { field: "results", label: "Jak oceniasz wyniki" },
    { field: "instagram", label: "Nick na IG" },
    { field: "emailList", label: "Baza mailowa" },
    { field: "budget", label: "Budżet marketingowy" },
  ],
  budgetOptions: [
    { label: "DO 2000", value: "Do 2000" },
    { label: "2000-5000", value: "2000-5000" },
    { label: "5000-10000", value: "5000-10000" },
    { label: "10000 I WIĘCEJ", value: "10000 i więcej" },
  ] satisfies { label: string; value: BudgetValue }[],
  messages: {
    invalidEmail: "Podaj poprawny adres email.",
    network: "Wystąpił błąd podczas wysyłania formularza. Sprawdź połączenie i spróbuj ponownie.",
  },
} as const

/** Budgets up to 2000 zł are better served by the Magic club. */
export const leadSegment = (budget: string): "MAGIC" | "KOLEKTYW" =>
  budget === "Do 2000" ? "MAGIC" : "KOLEKTYW"
