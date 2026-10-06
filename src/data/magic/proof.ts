import magda1a from "@/assets/images/magda1a.webp"
import magda1b from "@/assets/images/magda1b.webp"
import magda1c from "@/assets/images/magda1c.webp"
import magda1d from "@/assets/images/magda1d.webp"
import magda2a from "@/assets/images/magda2a.webp"
import magda2b from "@/assets/images/magda2b.webp"
import magda2c from "@/assets/images/magda2c.webp"
import magda2d from "@/assets/images/magda2d.webp"
import result1 from "@/assets/images/magic-landing-2026-result-1.webp"
import result2 from "@/assets/images/magic-landing-2026-result-2.webp"
import result3 from "@/assets/images/magic-landing-2026-result-3.webp"
import opinion1 from "@/assets/images/magic_reference_sell_1.webp"
import opinion2 from "@/assets/images/magic_reference_sell_2.webp"
import opinion3 from "@/assets/images/magic_reference_sell_3.webp"
import opinion4 from "@/assets/images/magic_reference_sell_4.webp"
import opinion5 from "@/assets/images/magic_reference_sell_5.webp"
import opinion6 from "@/assets/images/magic_reference_sell_6.webp"
import magdaOpinion from "@/assets/images/opiniaMagdy.webp"
import type { ImageItem, RichText } from "@/lib/content"

export type CaseStudy = {
  emoji: string
  title: string
  lead: RichText
  slides: ImageItem[]
  proofTitle: RichText
  /** What the member says: a screenshot or a Vimeo video. */
  proof: { image: ImageItem } | { video: { id: string; title: string } }
  /** CTA button background class. */
  ctaBg: string
}

const slides = (images: ImageItem["src"][], alt: string): ImageItem[] =>
  images.map((src) => ({ src, alt }))

export const caseStudies = {
  entrepreneur: {
    emoji: "💼",
    title: "Case study przedsiębiorczyni:",
    lead: "Jak <b>Magda</b> uporządkowała chaos reklamowy <b>w swoim biznesie</b> (i przestała bać się Managera Reklam)?",
    slides: slides([magda1a, magda1b, magda1c, magda1d], "Magda – case study 1"),
    proofTitle: "Przeczytaj, co <b>Magda</b> mówi o <b>MAGIC:</b>",
    proof: { image: { src: magdaOpinion, alt: "Opinia Magdy o MAGIC" } },
    ctaBg: "bg-blush",
  },
  marketer: {
    emoji: "👩‍💻",
    title: "Case study marketerki:",
    lead: "Jak <b>Magda</b> - <b>marketerka</b> - prowadzi kampanie klientów ze wsparciem MAGIC?",
    slides: slides([magda2a, magda2b, magda2c, magda2d], "Magda – case study 2"),
    proofTitle: "Posłuchaj, co <b>Magda</b> mówi o <b>MAGIC:</b>",
    proof: { video: { id: "1155023182", title: "Opinia Magdy o MAGIC" } },
    ctaBg: "bg-periwinkle",
  },
} satisfies Record<string, CaseStudy>

/** Ads Manager screenshots of members' campaign results. */
export const campaignResults: ImageItem[] = [
  {
    src: result1,
    alt: "Wyniki kampanii: 18 zakupów, 6832,20 zł wartości konwersji i 989,92 zł wydanej kwoty",
  },
  {
    src: result2,
    alt: "Wyniki kampanii: 128 przesłanych zgłoszeń przy koszcie wyniku 17,61 zł",
  },
  {
    src: result3,
    alt: "Wyniki kampanii: 68 zakupów w witrynie, 9461,00 zł wartości konwersji i 236,99 zł wydanej kwoty",
  },
]

/** Member testimonials, ordered for a three-column grid. */
export const memberOpinions: ImageItem[] = [
  opinion1,
  opinion3,
  opinion5,
  opinion2,
  opinion4,
  opinion6,
].map((src) => ({ src, alt: "Opinia o społeczności MAGIC" }))
