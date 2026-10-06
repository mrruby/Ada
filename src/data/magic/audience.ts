import type { RichText } from "@/lib/content"

export type AudienceColumn = {
  title: string
  items: RichText[]
  /** Card border color class. */
  border: string
  /** CTA label and background class. */
  cta: { label: string; bg: string }
}

/** "Jeśli prowadzisz marketing…" — who the club is for. */
export const audience: AudienceColumn[] = [
  {
    title: "DLA SWOJEGO BIZNESU",
    border: "border-periwinkle",
    cta: { label: "WCHODZĘ W TO!", bg: "bg-periwinkle" },
    items: [
      "✅ dla osób, które <b>jeszcze nie prowadziły reklam</b> i potrzebują pewnego startu w świecie płatnej promocji",
      "✅ dla tych, którzy <b>boją się, że źle klikną i stracą budżet reklamowy</b> na nieefektywnych kampaniach",
      '✅ które mają <b>pierwsze reklamy za sobą (lub klikały w "promuj post")</b> ale nie są zadowolone z wyników',
      "✅ które do tej pory <b>polegały głównie na działaniach organicznych</b> i chcą bezpiecznie wejść w reklamy",
      "✅ <b>dla osób, które zlecały reklamy na zewnątrz,</b> ale chcą przejąć kontrolę nad swoim budżetem reklamowym",
    ],
  },
  {
    title: "DLA KLIENTÓW",
    border: "border-bubblegum",
    cta: { label: "Tak, Dołączam!", bg: "bg-bubblegum" },
    items: [
      "✅ które chcą <b>poznać najnowsze trendy i narzędzia reklamowe, wyprzedzając konkurencję</b>",
      "✅ <b>dla social media managerek, wirtualnych asystentek,</b> które otrzymują zapytania o reklamy i <b>chcą zarabiać na prowadzeniu kampanii</b>",
      "✅ dla tych, którzy <b>chcą nauczyć się lepiej gospodarować budżetem</b> i optymalizować koszty pozyskania klienta",
      "✅ które chcą <b>skonsultować swoje wyniki</b> i dowiedzieć się, jak je poprawić",
      "✅ dla tych, którzy <b>już prowadzą reklamy i chcą robić to lepiej,</b> osiągając wyższe ROAS",
    ],
  },
]
