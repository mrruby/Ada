import report1 from "@/assets/images/kolektywInfo1.webp"
import detail1 from "@/assets/images/kolektywInfo1a.webp"
import report2 from "@/assets/images/kolektywInfo2.webp"
import detail2 from "@/assets/images/kolektywInfo2a.webp"
import report3 from "@/assets/images/kolektywInfo3.webp"
import detail3 from "@/assets/images/kolektywInfo3a.webp"
import type { CaseStudy } from "./types"

/** Client case studies on /magic-kolektyw (one band each). */
export const caseStudies: CaseStudy[] = [
  {
    title: "Case study z kampanii kierującej na Instagrama",
    tone: "green",
    report: {
      src: report1,
      alt: "Wyniki kampanii kierującej na Instagrama w menedżerze reklam: 9306 nowych obserwujących",
    },
    detail: {
      src: detail1,
      alt: "Opinia Moniki, właścicielki szkoły językowej, o współpracy z kolektywem MAGIC",
    },
    main: [
      {
        label: "Cel kampanii:",
        value:
          "Monice zależało, żeby jej konto na Instagramie regularnie się rozwijało. Dzięki dobrze zaplanowanej kampanii na pozyskanie obserwujących <b>w ciągu 6 miesięcy zyskała 9306 nowych obserwujących. Dodatkowy efekt?43 osoby przesłały zapytania</b> o możliwość wykupienia zajęć językowych.",
      },
      { label: "Czas trwania kampanii:", value: "6 miesięcy (styczeń-czerwiec 2025)" },
    ],
    side: [
      { label: "Wydany budżet:", value: "5781,47 zł" },
      { label: "Liczba nowych obserwujących:", value: "9306" },
      { label: "Liczba zapytań o zajęcia (dodatkowo):", value: "43" },
    ],
  },
  {
    title: "Case study kampanii z kampanii sprzedażowej",
    tone: "pink",
    report: {
      src: report2,
      alt: "Wyniki kampanii zapisu na listę mailową w menedżerze reklam: 1949 zapisów i 28 zakupów",
    },
    detail: {
      src: detail2,
      alt: "Opinia Dagmary, właścicielki platformy edukacyjnej, o współpracy z kolektywem MAGIC",
    },
    main: [
      {
        label: "Cel kampanii:",
        value:
          "kampania z celem zapis na listę mailową; po dołączeniu subskrybenci otrzymują one time offer na dostęp do platformy kursowej",
      },
      { label: "Czas trwania kampanii:", value: "2 miesiące" },
      { label: "Liczba osób, która wypełniła formularz zapisu:", value: "1949" },
    ],
    side: [
      { label: "Wydany budżet:", value: "6892,61 zł" },
      { label: "Ilość zapisów:", value: "28 x 2499 zł" },
      { label: "Wartość zakupów:", value: "69 972 zł" },
      { label: "ROAS:", value: "10,15" },
    ],
  },
  {
    title: "Case study z kampanii sprzedażowej",
    tone: "green",
    report: { src: report3, alt: "Wyniki kampanii sprzedażowej kursu w menedżerze reklam" },
    detail: {
      src: detail3,
      alt: "Opinia Ani, właścicielki firmy, o współpracy z kolektywem MAGIC",
    },
    main: [
      { label: "Cel kampanii:", value: "sprzedaż kursu dla właścicieli lokalnych firm" },
      { label: "Czas trwania kampanii:", value: "14 miesięcy (lipiec 2024 - wrzesień 2025)" },
      {
        label: "Grupy docelowe:",
        value: "osoby zainteresowane marketingiem, właściciele lokalnych biznesów",
      },
    ],
    side: [
      { label: "Wydany budżet:", value: "55 858 zł" },
      { label: "Liczba osób, które zapisały się na webinar:", value: "10 376" },
      { label: "Liczba sprzedanych kursów:", value: "172, około 120 000 złotych" },
    ],
  },
]
