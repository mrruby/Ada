/**
 * /magic-jesien wariant B (test A/B, 20% ruchu): mocniejszy, „nocny” hero,
 * pasek z wynikami członkiń i krótsza strona z ofertą wyżej. Reszta treści
 * pochodzi z magicJesien.ts.
 */
import { MAGIC_AGENCY_MONTHLY, MAGIC_REGULAR_PRICE, magicResults, magicTeam } from "./magicJesien"

const zl = (value: number) => `${new Intl.NumberFormat("pl-PL").format(value)} zł`

export const magicBoldHero = {
  eyebrow: "🍂 Jesień w MAGIC · Marketing Ads/AI Girls Inside Club",
  title: "Twój zespół od reklam.",
  accent: "Bez agencji. Bez etatu.",
  lead: `${magicTeam.length} ekspertów od Meta Ads, copywritingu, grafiki, kampanii i AI konsultuje Twoje reklamy, teksty i grafiki. Pisemnie, na żywo i w Twoim tempie.`,
  primary: "Pokaż pakiety",
  secondary: "▶ Zobacz, o co chodzi",
  facts: [
    {
      value: zl(MAGIC_AGENCY_MONTHLY - MAGIC_REGULAR_PRICE),
      label: "co miesiąc zostaje w budżecie zamiast u agencji",
    },
    { value: `${magicTeam.length} ekspertów`, label: "w jednym klubie, bez faktur od agencji" },
    { value: "24/7", label: "Kapibara Barbara, asystentka AI zasilana wiedzą z MAGIC" },
  ],
  sticker: "Wyniki członkiń, nie obietnice",
  imageAlt:
    "Ada z laptopem, wokół niej wiadomości z Circle: Kapibara Barbara, konsultacje materiałów, warsztat z AI, poziomy nauki w aplikacji",
} as const

/** Ticker under the hero: "68 zakupów w witrynie · wydana kwota 236,99 zł". */
export const magicResultsTicker = magicResults.map(
  (result) =>
    `${result.value} ${result.unit} · ${result.rows.map((row) => row.join(" ")).join(" · ")}`
)

export const magicStickyCta = {
  text: "Twój zespół od reklam",
  button: "Pakiety",
} as const
