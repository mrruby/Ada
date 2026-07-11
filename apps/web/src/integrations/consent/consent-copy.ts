/**
 * OWNER / LEGAL APPROVAL REQUIRED BEFORE CUTOVER.
 *
 * These are the only visitor-facing consent strings in the Astro pilot. The
 * final wording, category classification, retention period, legal basis, and
 * alignment with /policy/ need written owner/legal approval.
 */
export const consentCopy = {
  bannerTitle: "Twoja prywatność",
  bannerDescription:
    "Używamy niezbędnych plików cookie do działania strony. Za Twoją zgodą możemy też uruchomić funkcje zewnętrzne, analitykę i marketing.",
  policyPrefix: "Szczegóły znajdziesz w",
  policyLink: "polityce prywatności",
  acceptAll: "Akceptuję wszystkie",
  rejectOptional: "Odrzucam opcjonalne",
  saveSelection: "Zapisuję wybór",
  settings: "Ustawienia cookies",
  settingsTitle: "Ustawienia plików cookie",
  settingsDescription:
    "Wybierz, na które opcjonalne kategorie wyrażasz zgodę. Niezbędne pliki cookie pozostają zawsze aktywne.",
  close: "Zamknij ustawienia",
  formTitle: "Zapisy na webinar",
  formDescription:
    "Formularz zapisu korzysta z funkcjonalnych plików cookie. Włącz tę kategorię, aby go wyświetlić.",
  vimeoConsentRequired:
    "Aby odtworzyć film na stronie, włącz funkcjonalne pliki cookie w ustawieniach.",
  categories: {
    necessary: {
      label: "Niezbędne",
      description: "Zapamiętują Twój wybór dotyczący prywatności i wspierają bezpieczeństwo strony.",
    },
    functional: {
      label: "Funkcjonalne",
      description: "Umożliwiają formularz zapisu oraz odtwarzanie filmu Vimeo na tej stronie.",
    },
    analytics: {
      label: "Analityczne",
      description: "Pomagają nam mierzyć odwiedziny i rozumieć, jak działa strona.",
    },
    marketing: {
      label: "Marketingowe",
      description: "Umożliwiają pomiar i dopasowanie działań reklamowych Meta.",
    },
  },
} as const
