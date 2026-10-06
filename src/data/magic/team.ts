import ada from "@/assets/images/ada_portrait.webp"
import dawid from "@/assets/images/dawid_portrait.webp"
import dorota from "@/assets/images/dorota_portrait.webp"
import justyna from "@/assets/images/justyna_portrait.webp"
import nicola from "@/assets/images/nicola_portrait.webp"
import type { TeamMember } from "@/lib/content"

/** "Kogo spotkasz w MAGIC?" — the five specialists. */
export const team: TeamMember[] = [
  {
    name: "Adrianna Promis-Urbas",
    bio: "Kreatywna dusza i mózg MAGIC. Specjalizuje się w kampaniach Meta Ads i marketingu zbudowanym na relacjach. Z Adą skonsultujesz strukturę i wyniki swoich kampanii.",
    photo: ada,
  },
  {
    name: "Justyna Król",
    bio: "Socjolożka i zaklinaczka słów. Tworzy teksty reklamowe budujące autentyczne relacje między marką a klientami. Justynie wyślesz tekst reklamy do sprawdzenia, zanim odpalisz reklamę.",
    photo: justyna,
  },
  {
    name: "Dorota Woźniak",
    bio: "Architektka z pasją do projektowania. Zamienia nudne reklamy w przyciągające wzrok kreacje graficzne. Dorota powie, co poprawić w grafikach i pokaże, jakie materiały ustawić w reklamie.",
    photo: dorota,
  },
  {
    name: "Nicola Kut",
    bio: "Analityczka biznesu-to-be, dla której żadne liczby i raporty nie są straszne. Przeprowadza researche, tworzy kampanie i ogarnia kulisy pracy. Z Nicolą zaczniesz i skonsultujesz reklamy. To ona poprowadzi Twoje spotkanie startowe i przygotuje Twój MAGIC Plan.",
    photo: nicola,
  },
  {
    name: "Dawid Urbas",
    bio: "Pasjonat AI i automatyzacji. Pokazuje, jak nowe technologie mogą być Twoją tajną bronią, oszczędzając czas i otwierając nowe możliwości dla Twojego biznesu. Z Dawidem ustawisz automatyzacje i stworzysz swojego asystenta AI, który pracuje dla Ciebie",
    photo: dawid,
  },
]

/** "MAGIC to Twój zespół od reklam" — what the team does for you. */
export const teamBenefits: { text: string; tone: string }[] = [
  {
    text: "Zaczniesz od spotkania 1:1 i planu reklam pod swój biznes - zamiast zgadywać, od czego zacząć",
    tone: "bg-periwinkle",
  },
  {
    text: "Rozrysujemy z Tobą ścieżkę od reklamy do zakupu, zanim wydasz budżet",
    tone: "bg-marigold",
  },
  {
    text: "Skonsultujesz teksty i stronę PRZED startem kampanii, nie po fakcie",
    tone: "bg-bubblegum",
  },
  {
    text: "A gdy Meta zablokuje Ci konto o 23:00 - dostaniesz plan działania krok po kroku",
    tone: "bg-periwinkle",
  },
]
