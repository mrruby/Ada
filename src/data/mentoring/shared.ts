import dorota from "@/assets/images/dorota.png"
import justyna from "@/assets/images/justyna.png"
import marianna from "@/assets/images/marianna.png"
import referencja1 from "@/assets/images/referencja1.webp"
import referencja2 from "@/assets/images/referencja2.webp"
import referencja3 from "@/assets/images/referencja3.webp"
import referencja4 from "@/assets/images/referencja4.webp"
import referencja5 from "@/assets/images/referencja5.webp"
import referencja6 from "@/assets/images/referencja6.webp"
import referencja7 from "@/assets/images/referencja7.webp"
import type { ImageItem, TeamMember, VideoItem } from "@/lib/content"

/** Vertical YouTube testimonials of mentoring participants. */
export const opinionVideos: VideoItem[] = [
  { provider: "youtube", id: "zMf5FHKuy8g", title: "Opinia Dominiki" },
  { provider: "youtube", id: "J4kR8n9RFL0", title: "Opinia Izy" },
  { provider: "youtube", id: "Sn_ABVhbia0", title: "Opinia Emili" },
  { provider: "youtube", id: "nLC4Ak_uQNA", title: "Opinia Ani" },
  { provider: "youtube", id: "JCRyTa6yyj8", title: "Opinia Pauliny" },
  { provider: "youtube", id: "ZPS6rnQovOM", title: "Opinia Magdy" },
]

/** Short written testimonials (screenshots) for the scrolling ticker. */
export const referenceSnippets: ImageItem[] = [
  referencja1,
  referencja2,
  referencja3,
  referencja4,
  referencja5,
  referencja6,
  referencja7,
].map((src, index) => ({
  src,
  alt: `Opinia uczestniczki programu mentoringowego ${index + 1}`,
}))

/**
 * Team specialists, introduced as "Na spotkaniach poznasz też:" — names in the
 * accusative, `alt` keeps the plain name.
 */
export const teamGuests: TeamMember[] = [
  {
    name: "Justynę Król",
    photo: justyna,
    alt: "Justyna Król",
    bio: "Specjalistka od słów z socjologicznym zacięciem. Tworzy teksty reklamowe, które trafiają w serce grupy docelowej i budują autentyczne relacje. Dzięki nim marki naszych klientów stają się rozpoznawalne, lubiane i wybierane.",
  },
  {
    name: "Dorotę Woźniak",
    photo: dorota,
    alt: "Dorota Woźniak",
    bio: "Architektka i projektantka graficzna. W wolnych chwilach ilustratorka. Specjalizuję się w kreacjach na potrzeby social media - w tym adsowych. . Chętnie podzielę się z Wami moją wiedzą dotyczącą projektowania graficznego!",
  },
  {
    name: "Mariannę Ciniak",
    photo: marianna,
    alt: "Marianna Ciniak",
    bio: "Miłośniczka automatyzacji i psycholożka to be! Jeśli chcesz poprawić swoją stronę www, dowiedzieć się jak być bardziej efektywną i co robić, kiedy ilość drobnych tasków przytłacza, I'm your girl!",
  },
]

/** Team specialists with their longer bios (Ogarnij swoje adsy 2). */
export const teamMembers: TeamMember[] = [
  {
    name: "Justyna Król",
    photo: justyna,
    bio: "Copywriterka & socjolożka specjalizująca się w pisaniu skutecznych tekstów do kampanii reklamowych. Skutecznych, czyli takich, dzięki którym dasz się poznać i polubić, a odbiorcy zamienią się w Twoich klientów.",
  },
  {
    name: "Dorota Woźniak",
    photo: dorota,
    bio: "Architektka i projektantka graficzna. W wolnych chwilach ilustratorka. Specjalizuję się w kreacjach na potrzeby social media - w tym adsowych. Pracowałam zarówno w agencjach marketingowych, jak i bywałam częścią teamu marketingowego in-house, co pozwala mi łączyć różne kompetencje. Chętnie podzielę się z Wami moją wiedzą dotyczącą projektowania graficznego!",
  },
  {
    name: "Marianna Ciniak",
    photo: marianna,
    bio: "Miłośniczka automatyzacji i psycholożka to be! Jeśli chcesz poprawić swoją stronę www, dowiedzieć się jak być bardziej efektywną i co robić, kiedy ilość drobnych tasków przytłacza, I'm your girl!",
  },
]
