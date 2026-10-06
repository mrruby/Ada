/**
 * Copy for /kolektyw-rozmowa — the consultation landing of the Magic
 * collective (results → team → opinions → application form).
 */
import heroPhoto from "@/assets/images/ada-show.webp"
import opinion1 from "@/assets/images/OpiniaKolektyw1a.webp"
import opinion2 from "@/assets/images/OpiniaKolektyw2a.webp"
import opinion3 from "@/assets/images/OpiniaKolektyw3a.webp"
import opinion4 from "@/assets/images/OpiniaKolektyw4a.webp"
import opinion5 from "@/assets/images/OpiniaKolektyw5a.webp"
import opinion6 from "@/assets/images/OpiniaKolektyw6.webp"
import type { ImageItem } from "@/lib/content"
import type { CampaignResult, StatPill } from "./types"

/** Anchor of the application form at the bottom of the page. */
export const CONSULTATION_ID = "konsultacja"

export const talkHero = {
  title: "Jeśli...",
  lead: "nie wiesz, jak skutecznie sprzedawać swój produkt cyfrowy, nie jesteś sama!",
  text: "Zobacz, jak przedsiębiorczynie takie jak Ty zwiększyły przychody o 40-80% dzięki profesjonalnemu zespołowi marketingowemu",
  photo: { src: heroPhoto, alt: "Ada Promis-Urbas z telefonem w dłoni" },
}

export const consultationCta = {
  label: "Umów się na bezpłatną konsultację",
  href: `#${CONSULTATION_ID}`,
  text: "Dołącz do <b>setek przedsiębiorczyń,</b> które tak jak Ty zbudowały <b>skuteczny marketing od zera,</b> a teraz na nim <b>zarabiają.</b>",
}

export const campaignResults: CampaignResult[] = [
  {
    title: "69 972 zł",
    tone: "green",
    arrow: true,
    caption: "<b>przychodu z kampanii, </b><br />której celem nie był zakup.",
    rows: [
      [
        { kind: "emoji", value: "💰" },
        { kind: "value", label: "Budżet", value: "6 892,61 zł" },
      ],
      [
        { kind: "text", html: "przyniósł" },
        { kind: "value", value: "28" },
        { kind: "emoji", value: "🛒" },
        { kind: "text", html: "zakupów o wartości" },
        { kind: "value", value: "69 972 zł" },
      ],
      [
        { kind: "text", html: "oraz" },
        { kind: "value", value: "1949" },
        { kind: "text", html: "nowych subskrybentów" },
        { kind: "emoji", value: "☝️", rotate: true },
      ],
    ],
    summary:
      "<b>Produkty premium sprzedają się bardzo dobrze - </b><br />jeśli wiesz, jaką strategię wdrożyć.",
  },
  {
    title: "11 125",
    tone: "paper",
    arrow: true,
    subtitle: "Dzięki <b>kampanii kierującej na Instagrama</b> Monika zyskała",
    caption: "<b>nowych obserwujących</b>",
    rows: [
      [
        { kind: "emoji", value: "💰" },
        { kind: "text", html: "za mniej niż" },
        { kind: "value", value: "0,43 zł" },
        { kind: "text", html: "za jednego obserwatora" },
      ],
      [
        { kind: "value", value: "40" },
        { kind: "text", html: "osób" },
        { kind: "emoji", value: "💬" },
        {
          kind: "text",
          narrow: true,
          html: "przesłało <b>zapytanie o współpracę</b> bezpośrednio<b> po odwiedzeniu profilu na Instagramie</b>",
        },
      ],
    ],
    summary: "To się nazywają <b>wartościowe kontakty!</b>",
  },
  {
    title: "ROAS 50,56",
    tone: "paper",
    subtitle: "kampania sprzedażowa <b>produktu cyfrowego</b> przyniosła",
    rows: [
      [
        { kind: "emoji", value: "💰" },
        { kind: "value", label: "Wydana kwota:", value: "249,84 zł" },
      ],
      [
        { kind: "value", label: "Przychód:", value: "12 632 zł" },
        { kind: "emoji", value: "💸" },
      ],
    ],
    summary: "<b>Dobra strategia</b> to podstawa!",
  },
]

export const statsIntro =
  "Z naszego podejścia, w którym pokazujemy jak <b>krok po kroku zbudować skuteczny marketing,</b> skorzystały już setki przedsiębiorczyń:"

export const stats: StatPill[] = [
  { value: "200+ kobiet", text: "<b>zwiększyło zyski</b> dzięki naszym kampaniom" },
  {
    value: "2 tygodnie",
    note: "działań płatnych",
    equals: true,
    text: "efekty jak po <b>3 miesiącach działań organicznych</b>",
  },
  { value: "Maksymalne", text: "<b>wykorzystanie Twojego czasu</b> na marketing" },
]

export const opinionsTitle =
  '<span class="font-medium"> Pomogłyśmy prowadzić </span>kampanie marketingowe takim przedsiębiorczyniom jak właścicielki kursów online, mentoringów i usług cyfrowych.'

/** Two columns of client opinion screenshots (left column first). */
export const opinionColumns: ImageItem[][] = [
  [
    { src: opinion2, alt: "Opinia Data Heroes o współpracy z kolektywem MAGIC" },
    { src: opinion3, alt: "Opinia Speak Pro o współpracy z kolektywem MAGIC" },
    { src: opinion4, alt: "Opinia Marty Paplaczyk o współpracy z kolektywem MAGIC" },
  ],
  [
    { src: opinion1, alt: "Opinia Sylwii Mrzygłód o współpracy z kolektywem MAGIC" },
    { src: opinion5, alt: "Opinia Katarzyny Kawończyk o współpracy z kolektywem MAGIC" },
    { src: opinion6, alt: "Opinia Sylwii Wasak o współpracy z kolektywem MAGIC" },
  ],
]

export const formIntro =
  "<b>Dołącz do grona zadowolonych klientek, </b>które dzięki naszemu wsparciu rozwinęły swoje biznesy"
