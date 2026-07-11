import type { ProblemSolutionSectionInput } from "./schema"

export const problemSolutionFixtures = [
  {
    type: "problem-solution",
    presentation: "comparison",
    heading: "Zamień przypadkowe działania na plan",
    problems: ["Marketing bez priorytetów", "Kampanie bez wniosków"],
    outcomes: ["Jasny kierunek", "Decyzje oparte na danych"],
  },
  {
    type: "problem-solution",
    presentation: "situations",
    heading: "Jeśli znasz te sytuacje, jesteś w dobrym miejscu",
    problems: ["Nie wiesz, od czego zacząć", "Działasz bez wsparcia"],
    outcomes: ["Masz konkretny następny krok", "Uczysz się w społeczności"],
  },
] satisfies ProblemSolutionSectionInput[]
