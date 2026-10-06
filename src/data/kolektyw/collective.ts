/**
 * Copy for /magic-kolektyw (Marketing Ads Girls Inside Collective — the
 * done-for-you ads team). Sections appear in this order on the page.
 */
import heroPhoto from "@/assets/images/magic-hero1.webp"
import audiencePhoto from "@/assets/images/magic-hero2.webp"
import result1 from "@/assets/images/kolektyw1.webp"
import result2 from "@/assets/images/kolektyw2.webp"
import result3 from "@/assets/images/kolektyw3.webp"
import result4 from "@/assets/images/kolektyw4.webp"
import result5 from "@/assets/images/kolektyw5.webp"
import result6 from "@/assets/images/kolektyw6.webp"
import result7 from "@/assets/images/kolektyw7.webp"
import opinion1 from "@/assets/images/OpiniaKolektyw1.webp"
import opinion2 from "@/assets/images/OpiniaKolektyw2.webp"
import opinion3 from "@/assets/images/OpiniaKolektyw3.webp"
import opinion4 from "@/assets/images/OpiniaKolektyw4.webp"
import opinion5 from "@/assets/images/OpiniaKolektyw5.webp"
import opinion6 from "@/assets/images/OpiniaKolektyw6.webp"
import type { FaqItem, ImageItem } from "@/lib/content"
import { type IconListColumn, withIcon } from "./types"

/** Anchor of the booking section — most CTAs on the page scroll there. */
export const BOOKING_ID = "umawiam-spotkanie"

export const hero = {
  title: "Marketing Ads Girls Inside Collective",
  lead: "<b>Zyskaj stabilny przypływ klientów</b> dzięki<br /> profesjonalnemu zespołowi marketingowemu - bez zatrudniania in-house",
  cta: { label: "Chcę z Wami pracować!", href: `#${BOOKING_ID}` },
  photo: { src: heroPhoto, alt: "Ada Promis-Urbas z laptopem i kubkiem kawy" },
}

export const pitch = {
  title: "Zwiększ swoje zarobki, rozwijaj markę i pozyskuj klientów dzięki reklamom Meta Ads!",
  lead: "Dla przedsiębiorczyń prowadzących kursy online, mentoringi, usługi cyfrowe",
  points: withIcon("✅", [
    "Ekspercka wiedza reklamowa i partnerskie podejście do Twojego biznesu",
    "Nie musisz być specjalistką od reklam, by kampanie pracowały dla Ciebie!",
  ]),
  cta: { label: "Chcę poznać szczegóły!", href: `#${BOOKING_ID}` },
}

export const painGain: IconListColumn[] = [
  {
    emoji: "🧐",
    title: "Rozpoznajesz się w tym?",
    items: withIcon("❌", [
      "Masz super produkt, ale <b>nie wiesz</b> jak go sprzedać",
      "<b>Tracisz godziny</b> na social media zamiast rozwijać biznes",
      "<b>Nie wiesz,</b> czy inwestujesz w marketing <b>skutecznie</b>",
      "Chcesz skalować, ale <b>zespół in-house to za duży koszt</b>",
    ]),
  },
  {
    emoji: "👀",
    title: "Co jeśli powiemy Ci, że możesz mieć:",
    items: withIcon("✅", [
      "<b>Strategiczne wsparcie</b> na każdym etapie sprzedaży",
      '<b>Czas na rozwój produktów</b> zamiast "kręcenia się" w marketingu',
      "<b>Przewidywalne wyniki</b> i stabilny przyrost klientów",
      "<b>Ekspertki,</b> które myślą o Twoim biznesie jak o swoim",
    ]),
  },
]

export const whyMagic = {
  title: "Dlaczego MAGIC?",
  items: [
    {
      icon: "🤝",
      text: "<b>Działamy jako Twój zespół</b> - jesteśmy stałym partnerem w rozwoju Twojego biznesu",
    },
    {
      icon: "🏅",
      text: "<b>Pracujemy na poziomie premium</b>- skupiamy się na długoterminowych relacjach i mierzalnych rezultatach",
    },
    {
      icon: "👩‍💻",
      text: "<b>Łączymy strategię z wykonaniem</b> - nie tylko doradzamy, ale przede wszystkim wdrażamy i zarządzamy",
    },
    {
      icon: "🧠",
      text: "<b>Jesteśmy ADHD friendly</b> - rozumiemy dynamikę kreatywnego umysłu i wspólnie z Tobą wypracujemy najlepszy system współpracy",
    },
  ],
}

export const audience = {
  title: "Dla kogo jest MAGIC?",
  lead: "Nasze usługi są idealnym rozwiązaniem <br />dla przedsiębiorczyń, które:",
  items: [
    "Prowadzą <b>ustabilizowany biznes online</b><br /> (kursy, mentoring, usługi)",
    "<b>Regularnie publikują</b> treści <b>i budują</b><br /> swoją społeczność",
    "Chcą <b>wspólnie działać</b> nad rozwojem swojej marki",
    "<b>Są gotowe na skalowanie biznesu</b> <br />poprzez profesjonalny marketing",
  ],
  photo: { src: audiencePhoto, alt: "Ada Promis-Urbas w fioletowej marynarce" },
  next: `#${BOOKING_ID}`,
}

export const resultsTitle = "Nasze wyniki w liczbach"

/** Ads-manager screenshots with annotated results ("Nasze wyniki w liczbach"). */
export const results: ImageItem[] = [
  {
    src: result1,
    alt: "Wyniki kampanii na subskrypcje: 542 zapisy i 3960,40 zł wartości konwersji",
  },
  {
    src: result2,
    alt: "2 tygodnie kampanii na lead magnet: 1569 nowych obserwatorów na Instagramie",
  },
  { src: result3, alt: "Kampania na kontakty: 128 nowych zgłoszeń na zajęcia w szkole językowej" },
  { src: result4, alt: "1628 nowych obserwatorów na Instagramie z budżetem 1400 zł" },
  { src: result5, alt: "ROAS 6,90 na produktach fizycznych" },
  { src: result6, alt: "Prawie 1600 zapisów pod lead magnet w miesiąc" },
  { src: result7, alt: "Prawie 30 zakupów produktu w 8-dniowym okienku sprzedażowym" },
]

export const benefits = {
  title: "Dlaczego warto wybrać MAGIC?",
  items: withIcon("✅", [
    "<b>Oszczędzasz czas</b> - nie musisz zarządzać marketingiem samodzielnie",
    "<b>Redukujesz koszty </b>- zewnętrzny zespół to niższy wydatek niż budowa działu in-house",
    "<b>Zyskujesz ekspertyzę</b> - pracujesz z zespołem specjalistów z różnych dziedzin",
    "<b>Skupiasz się na tym, co kochasz</b> - my zajmujemy się marketingiem, Ty rozwijasz swój core business",
  ]),
}

export const booking = {
  id: BOOKING_ID,
  title: "Rozpocznij współpracę z MAGIC",
  lead: "Umów się na niezobowiązującą rozmowę, podczas której:",
  points: withIcon("✅", [
    "porozmawiamy o Twoich planach, celach i wyzwaniach w związku z prowadzeniem kampanii",
    "odpowiemy na pytanie: czy i jak jesteśmy w stanie Ci z tym pomóc! 😉",
  ]),
  cta: "Umawiam spotkanie",
  calendar: {
    id: "inline-widget-porozmawiajmy-o-wspolpracy",
    src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2R36p86iZGPSsdhYrFdXIzDLsNY1t1QDgYSXS4aHyeqhQTgNOzE_gqZTnzjq0eaNVYtOMgNwpS?gv=true",
    title: "Bezpłatna konsultacja",
  },
}

export const testimonialsTitle = "Co o współpracy z nami mówią <br /> zadowolone klientki?"

export const testimonials: ImageItem[] = [
  { src: opinion1, alt: "Opinia Sylwii Mrzygłód o współpracy z kolektywem MAGIC" },
  { src: opinion2, alt: "Opinia Data Heroes o współpracy z kolektywem MAGIC" },
  { src: opinion3, alt: "Opinia Speak Pro o współpracy z kolektywem MAGIC" },
  { src: opinion4, alt: "Opinia Marty Paplaczyk o współpracy z kolektywem MAGIC" },
  { src: opinion5, alt: "Opinia Katarzyny Kawończyk o współpracy z kolektywem MAGIC" },
  { src: opinion6, alt: "Opinia Sylwii Wasak o współpracy z kolektywem MAGIC" },
]

export const closing = {
  title: "MAGIC to nie tylko nazwa",
  text: "- to <b>filozofia działania</b> oparta na współpracy, kreatywności i mierzalnych efektach. <b>Skontaktuj się z nami</b> i przekonaj na własne oczy.",
  cta: { label: "Chcę dowiedzieć się, jak możecie mi pomóc", href: `#${BOOKING_ID}` },
}

export const faq: FaqItem[] = [
  {
    question: "Czy będę mieć kontrolę nad kampaniami?",
    answer:
      '<p>Tak! Masz dostęp do swojego konta reklamowego, dodatkowo jesteśmy z bieżącym kontakcie na Trello. Wspólnie ustalamy plan działania. Możesz liczyć na naszą elastyczność i zaangażowanie. Gdy trzeba, powiemy: "przemyślmy to jeszcze raz".</p>',
  },
  {
    question: "Czy dajecie gwarancję wyników?",
    answer:
      "<p>Nie dajemy gwarancji wyników, bo wolimy realne spojrzenie na sytuację niż puste obietnice. Dlatego przed rozpoczęciem współpracy spotykamy się na wirtualnej kawce, na której rozmawiamy o perspektywach, możliwościach, oczekiwaniach. Tak, zdarza nam się odradzać współprac.</p>",
  },
  {
    question: "Czy muszę znać się na reklamach, żeby umówić się na rozmowę?",
    answer:
      '<p>Nie! Zupełnie rozumiemy, że chcesz rozwijać swój biznes dzięki adsom, nawet jeśli do tej pory nie miałaś doświadczenia z reklamami lub klikałaś tylko "Promuj post". Jesteśmy tu po to, by pomóc Ci w tym temacie - bez oceniania, za to z głową pełną pomysłów!</p>',
  },
]
