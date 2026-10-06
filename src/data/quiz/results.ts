/**
 * Personality types by total points (checked in order: ≤17, ≤34, rest).
 * Each type has its own MailerLite form (and follow-up e-mails).
 */
import dzielnaPoszukiwaczka from "@/forms/form-dzielna-poszukiwaczka.html?raw"
import freelanceNinja from "@/forms/form-freelance-ninja.html?raw"
import zosiaSamosia from "@/forms/form-zosia-samosia.html?raw"

export type QuizResult = {
  id: string
  type: string
  /** Highest total that still yields this type. */
  maxPoints: number
  formHtml: string
}

export const results: QuizResult[] = [
  {
    id: "dzielna-poszukiwaczka",
    type: "Dzielna poszukiwaczka",
    maxPoints: 17,
    formHtml: dzielnaPoszukiwaczka,
  },
  {
    id: "zosia-samosia",
    type: "Zosia Samosia",
    maxPoints: 34,
    formHtml: zosiaSamosia,
  },
  {
    id: "freelance-ninja",
    type: "Freelance Ninja",
    maxPoints: Number.POSITIVE_INFINITY,
    formHtml: freelanceNinja,
  },
]

export const resultIntro =
  "Podaj swojego maila, aby otrzymać wyniki i sprawdzić nie tylko swoją adsową osobowość, ale też Twoje wyzwania i supermoce w prowadzeniu reklam. No i… co możesz z tym zrobić! 🔮"
