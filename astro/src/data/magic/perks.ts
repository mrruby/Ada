export type Perk = {
  title: string
  text: string
  /** Tile background class. */
  tone: string
}

/**
 * "Dostajesz:" tiles on the kurs-* pages, in three columns. Copy is kept
 * verbatim from the previous site (including its typos).
 */
export const perkColumns: Perk[][] = [
  [
    {
      title: "👩‍💻 WARSZTATY TEMATYCZNE",
      text: "2 specjalistyczne sesje miesięcznie - głęboko merytoryczne, zawsze na czasie!",
      tone: "bg-marigold",
    },
    {
      title: "👩 Wsparcie I MOTYWACJA",
      text: "Ekspresowa pomoc w problemach reklamowych, technicznych i nie tylko2 specjalistyczne sesje miesięcznie - głęboko merytoryczne, zawsze na czasie!",
      tone: "bg-bubblegum",
    },
    {
      title: "📝 Prasówki: NIE TYLKO O REKLAMACH",
      text: "najświeższe nowinki ze świata marketingu wprost z raportów i od ekspertów z branży",
      tone: "bg-periwinkle",
    },
  ],
  [
    {
      title: "🤝 KONSULTACJE GRUPOWE",
      text: "spotkania, na których problemy marketingowe  stają się dziecinnie prostą zabawą",
      tone: "bg-periwinkle",
    },
    {
      title: "👥 dostęp do zespołu 5 specjalistów",
      text: "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, AI i automatyzacjach.",
      tone: "bg-marigold",
    },
  ],
  [
    {
      title: "🛠️ Wsparcie techniczne",
      text: "konsultacje pisemne przy wdrażaniu konkretnych rozwiązań reklamowych",
      tone: "bg-bubblegum",
    },
    {
      title: "🤗 SPOŁECZNOŚĆ I ZROZUMIENIE",
      text: "Społeczność przedsiębiorczych kobiet zorientowanych na sukces",
      tone: "bg-periwinkle",
    },
    {
      title: "💎 Ekskluzywny dostęp",
      text: "Najnowsze autorskie szkolenia i materiały dostępne w tylko w MAGICwieższe nowinki ze świata marketingu wprost z raportów i od ekspertów z branży",
      tone: "bg-bubblegum",
    },
  ],
]
