import React from "react"

export const JESIEN_PAGE_TITLE =
  "Przygotuj swoje reklamy na jesień – szkolenie za 0 zł"

export const JESIEN_PAGE_DESCRIPTION =
  "Nagranie szkolenia, po którym wiesz dokładnie, co ustawić w reklamach już teraz, żeby wrzesień, Black Friday i święta pracowały na Twoją sprzedaż. Dostępne za 0 zł do 31 sierpnia."

// Koniec dostępu za 0 zł: 31.08.2026, 23:59:59 czasu polskiego (CEST, UTC+2).
// Przy zmianie terminu zaktualizuj też poniższe frazy używane w copy strony.
export const JESIEN_DEADLINE = new Date("2026-08-31T23:59:59+02:00")
export const JESIEN_DEADLINE_DAY = "31 sierpnia"
export const JESIEN_DEADLINE_SHORT = "31.08"
export const JESIEN_PAID_FROM_DAY = "1 września"

export const JESIEN_HERO_FORM_ID = "zapis"
export const JESIEN_FINALE_ID = "odbieram"

export const jesienInstagramLinks = [
  { label: "@klub.magic", url: "https://www.instagram.com/klub.magic" },
  { label: "@adapromis", url: "https://www.instagram.com/adapromis" },
]

export const jesienGets = [
  {
    emoji: "🎬",
    content: (
      <>
        <strong>szkolenie</strong> - z którym zaplanujesz swój lejek reklamowy
        na jesień
      </>
    ),
  },
  {
    emoji: "💜",
    content: (
      <>
        <strong>miejsce na liście oczekujących MAGIC</strong> - wraz z
        indywidualnym feedbackiem w ramach MAGIC Planu
      </>
    ),
  },
]

export const jesienMagicCards = [
  {
    emoji: "👥",
    content: (
      <>
        <strong>Plan na reklamy:</strong> od początku do zaawansowanej wiedzy, w
        przystępnej formie i z możliwością wdrożenia od zaraz
      </>
    ),
  },
  {
    emoji: "✍️",
    content: (
      <>
        <strong>Konsultacje pisemne oraz na żywo:</strong> omawiamy Twój biznes
        i Twoje reklamy
      </>
    ),
  },
  {
    emoji: "🗓",
    content: (
      <>
        <strong>
          Możliwość omówienia grafik, tekstów reklamowych, wyników reklam,
          strony internetowej
        </strong>{" "}
        - na Twoje pytania czeka 5 ekspertów, dostępnych cały czas w
        społeczności
      </>
    ),
  },
  {
    emoji: "🎯",
    content: (
      <>
        <strong>MAGIC Plan na start</strong> — spotkanie 1:1 i indywidualny plan
        reklam pod Twój biznes
      </>
    ),
  },
]
