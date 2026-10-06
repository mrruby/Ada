import type { CollectivePackage } from "./types"

/** "Jak możesz z nami współpracować?" — offer packages on /magic-kolektyw. */
export const packagesTitle = "Jak możesz z nami współpracować?"

/** Every package card ends with the same booking CTA. */
export const packageCta = {
  label: "SPRAWDŹ, CZY TO PAKIET DLA CIEBIE",
  note: "BEZPŁATNA KONSULTACJA 30 MIN",
  href: "https://calendar.app.google/svhytZTJ93aiMJ6BA",
}

export const packages: CollectivePackage[] = [
  {
    title: "🚀 KAMPANIA SINGLE",
    subtitle: "Praca przy kampanii sprzedażowej jednego produktu cyfrowego/mentoringu (2 miesiące)",
    tone: "green",
    benefits: [
      "🔥 Skuteczne kampanie, która zwiększa sprzedaż i zainteresowanie ofertą",
      "🎯 Strategię dopasowaną do Twojego produktu i grupy docelowej",
      "💡 Jasne wnioski, plany zmian i konkretne rekomendacje na przyszłość",
      "💼 Spokojną głowę podczas kampanii - wiesz, że reklamy są pod kontrolą i pracują na wynik!",
    ],
    audience: [
      "🚀 Dla osób planujących premierę produktu, kursu lub mentoringu",
      "🧪 Dla marek, które chcą sprawdzić współpracę przed wejściem w długoterminowe działania",
    ],
  },
  {
    title: "⭐ MARKETING PARTNER",
    subtitle:
      "Kompleksowe zarządzanie kampaniami na wszystkich kluczowych platformach w systemie Meta (stała współpraca)",
    tone: "pink",
    benefits: [
      "🚀 Wzrost sprzedaży i rozwój marki dzięki profesjonalnym kampaniom reklamowym",
      "📈 Strategię nastawioną na skalowanie biznesu i lepszy zwrot z budżetu reklamowego",
      "💡 Skuteczniejsze reklamy i optymalizacja kosztów, dzięki regularnym optymalizacjom",
      "👩‍💻 Dostęp do eksperckiej wiedzy i bieżących rozwiązań zgodnych z aktualnymi trendami oraz algorytmami Meta",
      "😌 Pewność, że marketing jest prowadzony profesjonalnie i pod stałą kontrolą",
    ],
    audience: [
      "💼 Dla firm, które chcą rozwijać sprzedaż w sposób przewidywalny i długoterminowy",
      "📊 Dla przedsiębiorczyń gotowych skalować biznes z pomocą strategicznego marketingu",
      "🎯 Dla właścicielek marek, które potrzebują stałego wsparcia i partnera do rozwoju biznesu",
    ],
  },
  {
    title: "💎 GROWTH INTENSIVE",
    subtitle: "Obsługa reklam Meta + konsultacje strategiczne 1:1 (premium)",
    tone: "lavender",
    benefits: [
      "🚀 Skalowanie sprzedaży i rozwój marki dzięki kampaniom reklamowym",
      "🤝 Regularne konsultacje strategiczne, dzięki którym podejmujesz lepsze decyzje biznesowe i marketingowe",
      "📈 Jasny plan działań dopasowany do Twoich celów oraz etapu rozwoju firmy",
      "🎯 Magnetyczną strategię kontentu, która przyciągnie nowych klientów",
      "💡 Szybszy i bardziej świadomy rozwój biznesu, dzięki wsparciu ekspertek",
    ],
    audience: [
      "💎 Dla ambitnych przedsiębiorczyń, które chcą wejść na wyższy poziom biznesowy",
      "🚀 Dla marek gotowych inwestować w profesjonalny marketing i realny wzrost",
      "📈 Dla biznesów nastawionych na intensywne skalowanie i mocniejsze wyniki sprzedażowe",
    ],
  },
  {
    title: "💌 NEWSLETTER MASTER",
    subtitle: "Wdrożenie newslettera + obsługa reklam Meta + prowadzenie newslettera",
    tone: "rose",
    benefits: [
      "📈 System komunikacji, który pomaga regularnie docierać do klientów i zwiększać sprzedaż",
      "💌 Silniejsze relacje z odbiorcami dzięki wartościowej i spójnej obecności marki",
      "🚀 Stały dopływ nowych potencjalnych klientów oraz rozwój własnej bazy kontaktów",
      "🤝 Większą niezależność od algorytmów i kanał komunikacji, który naprawdę należy do Ciebie",
      "📊 Działania stale optymalizowane pod lepsze wyniki, zaangażowanie i konwersję",
    ],
    audience: [
      "💌 Dla marek, które chcą budować lojalną i zaangażowaną społeczność",
      "🎯 Dla biznesów szukających bardziej przewidywalnego i zautomatyzowanego marketingu",
      "📈 Dla przedsiębiorczyń, które myślą długoterminowo i chcą zwiększać sprzedaż bez ciągłego polegania wyłącznie na social mediach",
    ],
  },
]
