import React from "react"

// ── Masterclass na żywo (/masterclass-jesien) ────────────────────────────

export const JESIEN_MASTERCLASS_TITLE =
  "Mały budżet, wysoki sezon - masterclass o reklamach na jesień i zimę 2026"

export const JESIEN_MASTERCLASS_DESCRIPTION =
  "17 września, 18:00, na żywo. Reklamy od 30 zł dziennie, które dowiozą sprzedaż jesienią i zimą. Zapisz się za 0 zł."

// Start masterclassu: 17.09.2026, 18:00 czasu polskiego (CEST, UTC+2).
// Przy zmianie terminu zaktualizuj też poniższe frazy używane w copy strony.
export const JESIEN_MASTERCLASS_START = new Date("2026-09-17T18:00:00+02:00")
export const JESIEN_MASTERCLASS_DAY = "17 września"
export const JESIEN_MASTERCLASS_DATE_SHORT = "17.09"
export const JESIEN_MASTERCLASS_WEEKDAY = "czwartek"
export const JESIEN_MASTERCLASS_TIME = "18:00"

export const JESIEN_MASTERCLASS_HERO_FORM_ID = "zapis"
export const JESIEN_MASTERCLASS_FINALE_FORM_ID = "zapis2"

export const jesienMasterclassPains = [
  {
    emoji: "🫠",
    content: (
      <>
        <strong>Wchodzisz do Menedżera Reklam i dostajesz zawału.</strong> Znowu
        coś się zmieniło, znowu piętnasty wygląd Advantage+, o który nie
        prosiłaś.
      </>
    ),
  },
  {
    emoji: "📋",
    content: (
      <>
        <strong>Reklamy są na Twojej liście wstydu.</strong> „Ogarnę to kiedyś”
        trwa od stycznia, a wciąż widzisz reklamy swojej konkurencji.
      </>
    ),
  },
  {
    emoji: "🥶",
    content: (
      <>
        <strong>Odpaliłaś reklamę, wydałaś pieniądze i… cisza.</strong> Zraziłaś
        się i stwierdziłaś, że poszukasz innych rozwiązań. A może nadal
        ustawiasz reklamy, ale masz wrażenie, że gdybyś je wyłączyła, nic by się
        nie zmieniło?
      </>
    ),
  },
  {
    emoji: "🤔",
    content: (
      <>
        <strong>
          Zastanawiasz się, jak by to było, gdybyś ogarnęła to sama.
        </strong>{" "}
        Bez agencji, bez faktur i bez czekania na odpowiedź, czy można podmienić
        grafikę.
      </>
    ),
  },
]

export const jesienMasterclassGains = [
  <>
    <strong>jakie reklamy już nie działają</strong> i na co warto je zamienić,
  </>,
  <>
    <strong>co ustawić (od 30 zł dziennie),</strong> żeby wrzesień, Black
    Friday, grudzień i Q5 pracowały na Twoją sprzedaż,
  </>,
  <>
    <strong>co zadziałało, a co nie i to w praktyce</strong> - opowiem o
    najlepszych przypadkach z usług, sklepu i produktu cyfrowego: jakie
    komunikaty, jakie grupy odbiorców i jakie wyniki z tego wyszły.
  </>,
]

// Zdjęcia prowadzących (m1.webp, m4.webp) są wpięte w komponencie
// JesienMasterclass pod kluczem `photo` — StaticImage wymaga statycznej ścieżki.
export const jesienMasterclassHosts = [
  {
    photo: "ada",
    name: "Ada - Adrianna Promis-Urbas",
    role: "ekspertka Meta Ads, sprawczyni zamieszania w MAGIC",
    bio: (
      <>
        Od ponad 10 lat robię kampanie reklamowe. Prowadzę{" "}
        <strong>MAGIC</strong>: klub, w którym przedsiębiorczynie tworzą
        skuteczne reklamy samodzielnie, ale pod czujnym okiem całego teamu
        marketingowego. Dziewczyny z Klubu wykręcają wyniki typu{" "}
        <strong>236,99 zł budżetu → 9 461 zł sprzedaży</strong> z jednej
        kampanii.
      </>
    ),
  },
  {
    photo: "nicola",
    name: "Nicola - Nicola Kut",
    role: "ekspertka Meta Ads w MAGIC",
    bio: (
      <>
        Spędza w Menedżerze Reklam <strong>minimum 5 godzin dziennie</strong> i
        ma z bliska podgląd na dziesiątki kont reklamowych. Piksel, zdarzenia,
        testy, ustawienia kampanii: codziennie, na dziesiątkach kont z różnych
        branż. Dzięki temu{" "}
        <strong>
          widzi zmiany w reklamach szybciej niż ktokolwiek, kto ogląda tylko
          swoje jedno konto.
        </strong>
      </>
    ),
  },
]

export const jesienMasterclassWhoCards = [
  {
    emoji: "🛍️",
    title: "Masz sklep online albo produkty fizyczne:",
    content:
      "kosmetyki, biżuterię, ubrania, rękodzieło, jedzenie - i chcesz, żeby jesień, Black Friday i święta przełożyły się na zamówienia.",
  },
  {
    emoji: "🧑‍💻",
    title: "Sprzedajesz usługi lub pracujesz na marce osobistej:",
    content:
      "konsultacje, współprace 1:1, dietetyka, coaching, fotografia, księgowość - i chcesz, żeby zapytania przychodziły regularnie.",
  },
  {
    emoji: "🎓",
    title: "Masz produkt cyfrowy:",
    content:
      "kurs, e-book, program, warsztat online - i chcesz sprzedawać go w sezonie, w którym ludzie najchętniej inwestują w siebie.",
  },
]

export const jesienMasterclassChecks = [
  <>
    <strong>Twój budżet reklamowy to Twoje pieniądze</strong> - 30, 50, 100 zł
    dziennie. Chcesz wiedzieć, że każda złotówka wraca.
  </>,
  <>
    <strong>Reklamy robisz sama albo chcesz zacząć robić sama</strong> - i mieć
    kontrolę nad tym, gdzie idą Twoje pieniądze.
  </>,
  <>
    <strong>Odkładasz reklamy od miesięcy,</strong> klikałaś „promuj post” albo
    zrobiłaś kilka kampanii i się zraziłaś.
  </>,
  <>
    <strong>Masz co sprzedawać:</strong> ofertę, produkt, stronę albo profil, na
    który możesz kierować ludzi.
  </>,
]
