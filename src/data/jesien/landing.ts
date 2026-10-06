/**
 * Jesienny lejek: /jesien (zapis na nagranie) i /jesien-nagranie (strona z
 * nagraniem z linku w mailu). Rich text = zaufany HTML (renderowany set:html).
 */
import review1 from "@/assets/images/magic_reference_sell_1.webp"
import review10 from "@/assets/images/magic_reference_sell_10.webp"
import review12 from "@/assets/images/magic_reference_sell_12.webp"
import review2 from "@/assets/images/magic_reference_sell_2.webp"
import review3 from "@/assets/images/magic_reference_sell_3.webp"
import review4 from "@/assets/images/magic_reference_sell_4.webp"
import review5 from "@/assets/images/magic_reference_sell_5.webp"
import review6 from "@/assets/images/magic_reference_sell_6.webp"
import review7 from "@/assets/images/magic_reference_sell_7.webp"
import review8 from "@/assets/images/magic_reference_sell_8.webp"
import review9 from "@/assets/images/magic_reference_sell_9.webp"
import reviewMartyna from "@/assets/images/magic_reference_sell_martyna_zmuda.webp"
import type { ImageItem, LinkItem, RichText } from "@/lib/content"

/** Emoji + rich text row/card used across the Jesień landings. */
export type EmojiItem = { emoji: string; html: RichText }

// ── /jesien ─────────────────────────────────────────────────────────────

export const JESIEN_PAGE_TITLE = "Przygotuj swoje reklamy na jesień – szkolenie za 0 zł"

export const JESIEN_PAGE_DESCRIPTION =
  "Nagranie szkolenia, w którym zdradzam, co ustawić w reklamach już teraz, żeby wrzesień, Black Friday i święta pracowały na Twoją sprzedaż. Dostępne za 0 zł do 31 sierpnia."

// Koniec dostępu za 0 zł: 31.08.2026, 23:59:59 czasu polskiego (CEST, UTC+2).
// Przy zmianie terminu zaktualizuj też poniższe frazy używane w copy strony.
export const JESIEN_DEADLINE = new Date("2026-08-31T23:59:59+02:00")
export const JESIEN_DEADLINE_DAY = "31 sierpnia"
export const JESIEN_DEADLINE_SHORT = "31.08"
export const JESIEN_PAID_FROM_DAY = "1 września"

export const JESIEN_HERO_FORM_ID = "zapis"
export const JESIEN_FINALE_ID = "odbieram"

export const jesienInstagramLinks: LinkItem[] = [
  { label: "@klub.magic", href: "https://www.instagram.com/klub.magic" },
  { label: "@adapromis", href: "https://www.instagram.com/adapromis" },
]

export const jesienGets: EmojiItem[] = [
  {
    emoji: "🎬",
    html: "<strong>szkolenie</strong> - z którym zaplanujesz swój lejek reklamowy na jesień",
  },
  {
    emoji: "💜",
    html: "indywidualny feedback w ramach MAGIC Planu (przy dołączeniu do MAGIC)",
  },
]

export const jesienMagicCards: EmojiItem[] = [
  {
    emoji: "👥",
    html: "<strong>Plan na reklamy:</strong> od początku do zaawansowanej wiedzy, w przystępnej formie i z możliwością wdrożenia od zaraz",
  },
  {
    emoji: "✍️",
    html: "<strong>Konsultacje pisemne oraz na żywo:</strong> omawiamy Twój biznes i Twoje reklamy",
  },
  {
    emoji: "🗓",
    html: "<strong>Możliwość omówienia grafik, tekstów reklamowych, wyników reklam, strony internetowej</strong> - na Twoje pytania czeka 5 ekspertów, dostępnych cały czas w społeczności",
  },
  {
    emoji: "🎯",
    html: "<strong>MAGIC Plan na start</strong> - spotkanie 1:1 i indywidualny plan reklam pod Twój biznes",
  },
]

const review = (src: ImageItem["src"], name: string): ImageItem => ({
  src,
  alt: `Opinia klubowiczki MAGIC: ${name}`,
})

/** Testimonial screenshots in three columns (stacked on mobile). */
export const jesienReviewColumns: ImageItem[][] = [
  [
    review(review4, "Magda Sikorska"),
    review(review6, "Aleksandra Ziober"),
    review(review7, "Paulina"),
    review(review8, "Jadzia Lenart"),
  ],
  [
    review(review3, "Paulina Leopold"),
    review(review10, "Agnieszka"),
    review(review1, "Agnieszka Sosik-Grzyb"),
    review(review12, "Iza"),
  ],
  [
    review(review5, "Angelika Woźniak"),
    review(reviewMartyna, "Martyna Żmuda"),
    review(review9, "Daria Cichoracka"),
    review(review2, "Zuza Rygielska"),
  ],
]

// ── /jesien-nagranie ────────────────────────────────────────────────────

export const JESIEN_NAGRANIE_TITLE = "Twoje szkolenie: Przygotuj swój lejek na jesień 🎬"

export const JESIEN_NAGRANIE_DESCRIPTION =
  "Nagranie szkolenia dostępne za 0 zł do 31 sierpnia. Potem trafia do płatnej sprzedaży."

// Nagranie szkolenia (YouTube niepubliczny) — id z linku od Ady.
export const JESIEN_NAGRANIE_VIDEO_ID = "rL5folXvisQ"

// Otwarcie drzwi do MAGIC: 17.09.2026 o 10:00 czasu polskiego (CEST, UTC+2).
// Godzina 10:00 przyjęta z projektu — zmień, jeśli otwieracie o innej porze.
export const JESIEN_DOORS_OPEN = new Date("2026-09-17T10:00:00+02:00")
export const JESIEN_DOORS_DAY = "17 września"
export const JESIEN_DOORS_DATE_LABEL = "17 września 2026"

export const JESIEN_PLAYER_ID = "player"

export const jesienNagranieTips: EmojiItem[] = [
  {
    emoji: "1️⃣",
    html: "<strong>Zarezerwuj sobie 45 minut bez rozpraszaczy</strong> - rób przerwy, notuj, spisuj plan dla siebie.",
  },
  {
    emoji: "2️⃣",
    html: `<strong>Nie odkładaj na później.</strong> Nagranie jest dostępne tylko do ${JESIEN_DEADLINE_DAY}, a jesień nie poczeka, aż będziesz gotowa. 😉`,
  },
  {
    emoji: "3️⃣",
    html: "To szkolenie jest <strong>częścią nagrań, które są dostępne w ramach społeczności Magic</strong>.",
  },
]

export const jesienNagranieSteps: EmojiItem[] = [
  {
    emoji: "☑️",
    html: "<strong>Rozpisz swój lejek na jesień:</strong> co promujesz we wrześniu, w listopadzie (Black Friday!) i w grudniu.",
  },
  {
    emoji: "☑️",
    html: "<strong>Zastanów się, czego brakuje Ci,</strong> aby wystartować z kampaniami, które omawiam na nagraniu?",
  },
  {
    emoji: "☑️",
    html: "<strong>Przygotuj teksty i grafiki z wyprzedzeniem,</strong> żeby sezon nie zaskoczył Cię jak zima drogowców. Pamiętaj, że gdy dołączysz do naszego Klubu, otrzymasz pełen feedback wraz z listą poprawek! ❄️",
  },
]
