import type { LearningPathSectionInput } from "./schema"

export const learningPathFixtures = [
  {
    type: "learning-path",
    presentation: "curriculum",
    heading: "Ścieżka nauki w MAGIC",
    stages: [{ title: "Fundamenty", body: "Zacznij od strategii i celu." }],
  },
  {
    type: "learning-path",
    presentation: "monthly-plan",
    heading: "Przykładowy miesiąc",
    stages: [{ title: "Tydzień pierwszy", body: "Wybierasz najważniejszy eksperyment." }],
  },
] satisfies LearningPathSectionInput[]
