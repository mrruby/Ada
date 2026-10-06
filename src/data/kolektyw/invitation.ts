/** Copy for /magic-zaproszenie — two-step invitation to the Magic collective. */
import type { StepContent } from "./types"

/** Survey the round arrows on the page link to (opens in a new tab). */
export const SURVEY_URL = "https://forms.gle/VQHwrGBqMuSJtWS99"

export const firstStep: StepContent = {
  title: "Krok 1",
  lead: "Zainwestuj 10 minut i dowiedz się, jak inwestując do 5 tysięcy miesięcznie w marketing, możesz pozyskać 1000 nowych obserwujących, dodatkowe 1000 nowych osób na liście mailowej.",
  paragraphs: [
    "Działając konsekwentnie, możesz wygenerować <b>2-, 4-, 8-, 15-krotny zwrot.</b> Bo żeby marketing działał, nie musisz mieć milionów. Wystarczy, że wiesz, gdzie mają pójść Twoje złotówki.",
  ],
}

export const videoPlaceholder = "MIEJSCE NA WIDEO"

export const secondStep: StepContent = {
  title: "Krok 2",
  lead: "Zacznij działać z profesjonalnym zespołem marketingowym. Zostaw dane - odezwiemy się i pokażemy Ci, jak to może wyglądać w Twoim biznesie.",
  paragraphs: [
    "Rozmowa jest na luzie, bez zobowiązań. Dowiesz się, jak wygląda współpraca z zewnętrznym zespołem marketingowym, jakie masz możliwości i... czy to w ogóle dla Ciebie.",
    "Jeśli prowadzisz kursy online, mentoringi, oferujesz usługi cyfrowe i regularnie tworzysz content - jest spora szansa, że nasze podejście do reklam to coś dla Ciebie.",
  ],
}
