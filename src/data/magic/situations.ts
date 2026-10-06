import type { RichText } from "@/lib/content"

export type Situation = {
  emoji: string
  title: string
  text: RichText
  /** Card background + text color classes. */
  tone: string
}

/** "Rozpoznajesz te sytuacje?" — first three fill the left column, the rest the right. */
export const situations: Situation[] = [
  {
    emoji: "📊",
    title: "Twoje wyniki rozczarowują, zamiast zachwycać?",
    text: "Dostaniesz plan, co poprawić w pierwszej kolejności - i sprawdzisz każdą zmianę ze specjalistką, zanim wydasz kolejną złotówkę.",
    tone: "bg-marigold",
  },
  {
    emoji: "🤝",
    title: "Tworzysz samodzielnie teksty, maile, landingi?",
    text: "W Magic otrzymasz audyt swoich treści oraz grafik - przygotowany przez specjalistki",
    tone: "bg-periwinkle text-white",
  },
  {
    emoji: "😮‍💨",
    title: "Czujesz, że przepalasz budżet reklamowy?",
    text: 'Zobaczysz, którędy pieniądze uciekają (spoiler: często przez „promuj post") i jak ustawić budżet do Twojego etapu.',
    tone: "bg-blush",
  },
  {
    emoji: "🤨",
    title: 'Ustawiasz reklamy „na czuja" i trzymasz kciuki?',
    text: "Skonsultujesz swój plan z dziewczynami, które spędzają w Managerze Reklam 5+ godzin dziennie. Zawodowo, nie z nudów. 🤭",
    tone: "bg-blush",
  },
  {
    emoji: "💻",
    title: "Twoje konto reklamowe zostało zablokowane?",
    text: "Dostaniesz instrukcję krok po kroku, co robić - nawet gdy support Mety rozkłada ręce.",
    tone: "bg-marigold",
  },
  {
    emoji: "🤷‍♀️",
    title: "Godziny na rolkach, a sprzedaży brak?",
    text: "Dobrze ustawiona reklama sprzedaje też wtedy, kiedy Ty nie siedzisz w telefonie.",
    tone: "bg-periwinkle text-white",
  },
]
