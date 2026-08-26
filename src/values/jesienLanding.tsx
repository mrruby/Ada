import React from "react"

export const JESIEN_PAGE_TITLE =
  "Przygotuj swoje reklamy na jesień – szkolenie za 0 zł"

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

// ── Strona z nagraniem (/jesien-nagranie) ───────────────────────────────

export const JESIEN_NAGRANIE_TITLE =
  "Twoje szkolenie: Przygotuj swój lejek na jesień 🎬"

export const JESIEN_NAGRANIE_DESCRIPTION =
  "Nagranie szkolenia dostępne za 0 zł do 31 sierpnia. Potem trafia do płatnej sprzedaży."

// Embed nagrania szkolenia (YouTube niepubliczny) — link od Ady.
export const JESIEN_NAGRANIE_VIDEO_URL =
  "https://www.youtube.com/embed/rL5folXvisQ?si=hVS6ukYdDBuB8Zay"

// Otwarcie drzwi do MAGIC: 17.09.2026 o 10:00 czasu polskiego (CEST, UTC+2).
// Godzina 10:00 przyjęta z projektu — zmień, jeśli otwieracie o innej porze.
export const JESIEN_DOORS_OPEN = new Date("2026-09-17T10:00:00+02:00")
export const JESIEN_DOORS_DAY = "17 września"
export const JESIEN_DOORS_DATE_LABEL = "17 września 2026"

export const JESIEN_PLAYER_ID = "player"

export const jesienInstagramLinks = [
  { label: "@klub.magic", url: "https://www.instagram.com/klub.magic" },
  { label: "@adapromis", url: "https://www.instagram.com/adapromis" },
]

export const jesienNagranieTips = [
  {
    emoji: "1️⃣",
    content: (
      <>
        <strong>Zarezerwuj sobie 45 minut bez rozpraszaczy</strong> - rób
        przerwy, notuj, spisuj plan dla siebie.
      </>
    ),
  },
  {
    emoji: "2️⃣",
    content: (
      <>
        <strong>Nie odkładaj na później.</strong> Nagranie jest dostępne tylko
        do {JESIEN_DEADLINE_DAY} — a jesień nie poczeka, aż będziesz gotowa. 😉
      </>
    ),
  },
  {
    emoji: "3️⃣",
    content: (
      <>
        To szkolenie jest{" "}
        <strong>
          częścią nagrań, które są dostępne w ramach społeczności Magic
        </strong>
        .
      </>
    ),
  },
]

export const jesienNagranieSteps = [
  {
    emoji: "☑️",
    content: (
      <>
        <strong>Rozpisz swój lejek na jesień:</strong> co promujesz we wrześniu,
        w listopadzie (Black Friday!) i w grudniu.
      </>
    ),
  },
  {
    emoji: "☑️",
    content: (
      <>
        <strong>Zastanów się, czego brakuje Ci,</strong> aby wystartować z
        kampaniami, które omawiam na nagraniu?
      </>
    ),
  },
  {
    emoji: "☑️",
    content: (
      <>
        <strong>Przygotuj teksty i grafiki z wyprzedzeniem,</strong> żeby sezon
        nie zaskoczył Cię jak zima drogowców. Pamiętaj, że gdy dołączysz do
        naszego Klubu, otrzymasz pełen feedback wraz z listą poprawek! ❄️
      </>
    ),
  },
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
      <>indywidualny feedback w ramach MAGIC Planu (przy dołączeniu do MAGIC)</>
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
        <strong>MAGIC Plan na start</strong> - spotkanie 1:1 i indywidualny plan
        reklam pod Twój biznes
      </>
    ),
  },
]
