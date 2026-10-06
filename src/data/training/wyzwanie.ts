import type { ImageMetadata } from "astro"
import adaPortrait from "@/assets/images/ada_portrait.webp"
import dorotaPortrait from "@/assets/images/dorota_portrait.webp"
import justynaPortrait from "@/assets/images/justyna_portrait.webp"
import kapibaraPhoto from "@/assets/images/kapibara-barbara-photo.png"
import reference10 from "@/assets/images/magic_reference_sell_10.webp"
import reference3 from "@/assets/images/magic_reference_sell_3.webp"
import reference4 from "@/assets/images/magic_reference_sell_4.webp"
import reference5 from "@/assets/images/magic_reference_sell_5.webp"
import reference6 from "@/assets/images/magic_reference_sell_6.webp"
import referenceMartyna from "@/assets/images/magic_reference_sell_martyna_zmuda.webp"
import nicolaPortrait from "@/assets/images/nicola_portrait.webp"
import salesResult1 from "@/assets/images/wyzwanie-sales-result-1.webp"
import salesResult2 from "@/assets/images/wyzwanie-sales-result-2.webp"
import salesResult3 from "@/assets/images/wyzwanie-sales-result-3.webp"
import type { FaqItem, ImageItem, RichText } from "@/lib/content"
import type { TrainingBenefit } from "./types"

export const WYZWANIE_PAGE_TITLE = "Kampania sprzedażowa w pigułce - Wyzwanie"

/** Id of the offer card every "Sprawdzam / Dołącz" button jumps to. */
export const OFFER_SECTION_ID = "oferta"

export type ChallengeDayItem = {
  label: string
  side: "left" | "right"
  tone: "purple" | "yellow"
  /** Bold lead line (trusted HTML). */
  title: RichText
  text: string
  portrait: { src: ImageMetadata; alt: string; zoom?: boolean }
}

export const days: ChallengeDayItem[] = [
  {
    label: "DZIEŃ 1",
    side: "left",
    tone: "purple",
    title: "Słowa, które sprzedają.",
    text: 'Justyna na co dzień pisze teksty, które sprzedają - od sekwencji mailowych, przez landing page\'e, po kreacje reklamowe. Dostaniesz od niej nagranie z gotowym schematem na tekst do reklamy sprzedażowej. Żadnego "pisz z serca" - konkretna struktura, którą wypełnisz swoimi słowami. Tego samego dnia siadasz i masz gotowy tekst.',
    portrait: { src: justynaPortrait, alt: "Justyna Król" },
  },
  {
    label: "DZIEŃ 2",
    side: "right",
    tone: "yellow",
    title: "Grafiki do reklam sprzedażowych",
    text: "Dorota zajmuje się brandingiem i identyfikacją wizualną, a w MAGIC uczy, jak tworzyć kreacje, które wyglądają profesjonalnie - nawet w Canvie, nawet bez budżetu na graficzkę. Po tym nagraniu będziesz wiedzieć, czym się różni grafika, którą ludzie przewijają, od grafiki, przy której się zatrzymują i stworzysz takie dla siebie.",
    portrait: { src: dorotaPortrait, alt: "Dorota Woźniak" },
  },
  {
    label: "DZIEŃ 3",
    side: "left",
    tone: "purple",
    title: "Piksel przestanie być straszny. Obiecujemy.",
    text: 'Nicola ogarnia reklamy i techniczne zaplecze - piksel, zdarzenia, testowanie. To ona pomaga naszym klubowiczkom w MAGIC ogarnąć tę część, której większość się boi. Dostajesz nagranie z instrukcją krok po kroku. Żadnego żargonu, żadnego "to proste, wystarczy dodać kod" - Nicola pokaże Ci każdy klik.',
    portrait: { src: nicolaPortrait, alt: "Nicola Kut" },
  },
  {
    label: "DZIEŃ 4",
    side: "right",
    tone: "yellow",
    title:
      '<span class="inline-block max-w-full text-left"><span class="block">Obejrzysz nagranie z LIVE, gdzie krok po kroku ustawiałam kampanię</span><span class="block">sprzedażową</span></span>',
    text: "To jest serce wyzwania. Nagranie LIVE, na którym pokazuję jak krok po kroku ustawić kampanię sprzedażową, w Menedżerze Reklam. Oglądasz i ustawiasz we własnym tempie.",
    portrait: { src: adaPortrait, alt: "Adrianna Promis-Urbas", zoom: true },
  },
  {
    label: "PRZEZ CAŁY CZAS WYZWANIA",
    side: "left",
    tone: "purple",
    title: "Masz pytanie? Nie googluj - napisz do Kapibary Barbary.",
    text: "Przez 14 dni masz do niej dostęp na platformie. Możesz jej wysłać screena, nagrać notatkę głosową albo po prostu zapytać jak koleżankę.",
    portrait: { src: kapibaraPhoto, alt: "Kapibara Barbara" },
  },
]

export type AudienceColumn = {
  icon: string
  /** Two-line heading ("\n" breaks the line). */
  title: string
  items: { icon: string; text: string }[]
}

export const audience: AudienceColumn[] = [
  {
    icon: "✅",
    title: "DLA KOGO JEST\nTO WYZWANIE?",
    items: [
      {
        icon: "👩‍💻",
        text: "Prowadzisz swój biznes i chcesz samodzielnie ustawiać reklamy, nie masz budżetu lub nie chcesz zlecać reklam innym",
      },
      {
        icon: "💼",
        text: "Obsługujesz klientów jako freelancerka i chcesz pewniej stawiać kampanie sprzedażowe",
      },
      {
        icon: "🖱️",
        text: "Próbowałaś już klikać w Menedżerze Reklam, ale nie masz pewności, czy robisz to dobrze (masz konto reklamowe)",
      },
      {
        icon: "💰",
        text: "Masz mały budżet reklamowy (do 2000 zł miesięcznie)",
      },
      {
        icon: "🚀",
        text: 'Chcesz w końcu przestać "promować posty" i zacząć prowadzić kampanie sprzedażowe',
      },
    ],
  },
  {
    icon: "❌",
    title: "DLA KOGO NIE JEST\nTO WYZWANIE?",
    items: [
      {
        icon: "📈",
        text: "Masz już doświadczenie w kampaniach sprzedażowych i szukasz zaawansowanych strategii skalowania",
      },
      {
        icon: "🚫",
        text: "Nie planujesz w ogóle korzystać z płatnych reklam w swoim biznesie",
      },
      {
        icon: "🙅‍♀️",
        text: 'Szukasz gotowej usługi "zrób to za mnie" - tutaj uczysz się robić to sama',
      },
      {
        icon: "🛒",
        text: "Nie masz produktu ani usługi do sprzedania (jeszcze!) - wróć do nas, kiedy będziesz gotowa: do wyzwania potrzebujesz koszyka/sklepu internetowego",
      },
    ],
  },
]

export type SalesResult = ImageItem & { title: string; body: string }

export const salesResults: SalesResult[] = [
  {
    src: salesResult1,
    alt: "Wyniki sprzedażowe - 10 zakupów",
    title: "10 zakupów produktu za",
    body: "kilkaset złotych w 8-dniowym okienku sprzedażowym!",
  },
  {
    src: salesResult2,
    alt: "Wyniki sprzedażowe - wartość konwersji 12 632,20 zł",
    title: "329 zł przeznaczonych na reklamy",
    body: "wygenerowało zakupy produktu cyfrowego na ponad 12 tysięcy złotych.",
  },
  {
    src: salesResult3,
    alt: "Wyniki sprzedażowe - koszt zakupu 31,94 zł",
    title: "351 złotych przeznaczonych na reklamy",
    body: "wygenerowało zakupy na ponad 2000 złotych.",
  },
]

export const benefitsTitle: RichText =
  'Co dostajesz w <span class="text-periwinkle">pakiecie</span><span class="text-black">?</span>'

export const benefits: TrainingBenefit[] = [
  {
    tone: "pink",
    title: "✍️ NAGRANIE Z PISANIA TEKSTÓW SPRZEDAŻOWYCH",
    description:
      "Justyna pokazuje 3 kroki, które powtarza przy pisaniu tekstów reklamowych do każdej kampanii sprzedażowej. Na nagraniu poznasz gotowe schematy i prompty, które możesz zastosować od razu.",
  },
  {
    tone: "purple",
    title: "🎨 NAGRANIE Z TWORZENIA GRAFIK SPRZEDAŻOWYCH",
    description:
      "Po nagraniu Doroty będziesz wiedziała czym różni się grafika, którą ludzie przewijają, od grafiki, przy której się zatrzymują i stworzysz takie dla siebie.",
  },
  {
    tone: "pink",
    title: "🔧 NAGRANIA Z INSTRUKCJĄ TWORZENIA PIKSELA I TESTOWANIA ZDARZEŃ",
    description:
      "Nicola nagrała dwie instrukcje jak krok po kroku ogarnąć piksel i testowanie zdarzeń - dzięki nim te techniczne sprawy przestaną być takie straszne.",
  },
  {
    tone: "purple",
    title: "🎬 NAGRANIE LIVE PROWADZONEGO PRZEZ ADĘ",
    description:
      "To jest serce całego wyzwania. W tym nagraniu Ada pokazuje jak krok po kroku ustawić kampanię sprzedażową, w Menedżerze Reklam.",
  },
  {
    tone: "pink",
    title: "🤖 ASYSTENTKA AI - KAPIBARA BARBARA",
    description:
      "Jest 23:00, a Ty masz pytanie o kampanię? Barbara nie śpi. Nasza asystentka AI jest napędzana wiedzą z materiałów MAGIC - możesz jej wysłać screena, nagrać notatkę głosową albo po prostu zapytać jak koleżankę.",
  },
]

export const offer = {
  eyebrow: "dostęp do szkolenia",
  title: "KAMPANIA\nSPRZEDAŻOWA\nW PIGUŁCE",
  priceLabel: "cena",
  limitedNote: "Oferta ograniczona czasowo - tylko przez 30 minut!",
  benefits: [
    {
      icon: "🔒",
      title: "Konsultacje pisemne z ekspertkami",
      description: "nie tylko w temacie reklam, ale także piksela, grafik, tekstów reklamowych",
    },
    {
      icon: "🎬",
      title:
        "Materiały szkoleniowe video z tworzenia tekstów, grafik i ustawiania kampanii sprzedażowej",
    },
    {
      icon: "🔓",
      title: "Dostęp do platformy z nagraniami i Kapibarą Barbarą przez całe 14 dni.",
    },
    {
      icon: "💡",
      title: "Tyle co jeden obiad z deserem. Tyle co 15 minut pracy agencji.",
      description:
        "A dostajesz gotowy system na kampanię i dostęp do asystentki AI napędzanej wiedzą z MAGIC.",
    },
  ] satisfies { icon: string; title: string; description?: string }[],
}

export const testimonials: ImageItem[] = [
  { src: reference4, alt: "Opinia - Magda Sikorska" },
  { src: reference3, alt: "Opinia - Paulina Leopold" },
  { src: reference5, alt: "Opinia - Angelika Woźniak" },
  { src: reference6, alt: "Opinia - Aleksandra Ziober" },
  { src: reference10, alt: "Opinia - Agnieszka" },
  { src: referenceMartyna, alt: "Opinia - Martyna Żmuda" },
]

export const faq: FaqItem[] = [
  {
    question: "🎯 Czy muszę mieć doświadczenie z reklamami?",
    answer:
      "<p>Nie. Wyzwanie jest zaprojektowane tak, żebyś mogła postawić swoją pierwszą kampanię sprzedażową od zera. A jeśli już próbowałaś i czujesz, że przepalasz budżet - uporządkujesz cały proces i zrobisz to z głową.</p>",
  },
  {
    question: "💻 Nie jestem techniczna. Dam radę?",
    answer:
      "<p>Tak. Piksel, zdarzenia, Menedżer Reklam - brzmi strasznie, ale dostajesz nagrania krok po kroku. Nie musisz być techniczna, wystarczy odpalić nagranie i robić razem z nami.</p>",
  },
  {
    question: "⏰ Ile czasu dziennie muszę poświęcić?",
    answer:
      "<p>Nagrania trwają około 30-40 minut, z wyjątkiem czwartkowego spotkania, na które najlepiej zarezerwować około 1,5 godziny. Około 4-5 godzin wystarczy Ci, aby przygotować całą kampanię od zera.</p>",
  },
  {
    question: "📅 Jak długo mam dostęp do materiałów?",
    answer: "<p>Przez 14 dni od dołączenia.</p>",
  },
  {
    question: "👩‍💼 Dla kogo jest to wyzwanie?",
    answer:
      "<p>Jeśli jesteś soloprzedsięborczynią, budujesz markę osobistą, prowadzisz sklep online, jesteś marketerką lub wirtualną asystentką - i chcesz ogarnąć reklamy sprzedażowe, które generują kasę, a nie tylko kliknięcia - to wyzwanie jest dla Ciebie.</p>",
  },
  {
    question: "🐨 Kim jest Kapibara Barbara?",
    answer:
      "<p>Kapibara Barbara jest naszą Asystentką AI napędzaną całą wiedzą z MAGIC. Możesz z nią skonsultować swoje zagwostki związane z reklamami, pokazać wyniki, nagrać głosówkę i traktować jak swoją adsową koleżankę.</p>",
  },
]
