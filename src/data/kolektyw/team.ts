import ada from "@/assets/images/m1.webp"
import nicola from "@/assets/images/m4.webp"
import papajka from "@/assets/images/m5.webp"
import karolina from "@/assets/images/karolina-kolektyw.webp"
import paulina from "@/assets/images/paulina-kolektyw.webp"
import type { TeamMember } from "@/lib/content"

/** "Kim jesteśmy?" — the Magic collective team. */
export const team: TeamMember[] = [
  {
    name: "Adrianna Promis-Urbas",
    role: "Specjalistka od kampanii reklamowych z 10-letnim doświadczeniem",
    bio: "Pomogłam ponad <b>200 kobietom</b> zwiększyć zyski i satysfakcję z prowadzenia własnej firmy. Specjalizuję się w przekształcaniu chaotycznych działań marketingowych w precyzyjne <b>systemy generujące przewidywalne wyniki,</b> nawet w niepewnych warunkach rynkowych.",
    photo: ada,
  },
  {
    name: "Nicola Kut",
    role: "Koordynatorka projektów i specjalistka od reklam",
    bio: "Nadzoruję realizację projektów, dbając o każdy szczegół i dotrzymanie terminów. Specjalizuję się <b>w pilnowaniu harmonogramów</b> i zapewnianiu, że każdy element pracy jest wykonany zgodnie z planem, co pozwala całemu zespołowi <b>działać sprawnie i efektywnie.</b>",
    photo: nicola,
  },
  {
    name: "Paulina Oraczek",
    role: "Menedżerka projektów i kampanii reklamowych",
    bio: "Odpowiadam za to, aby kampanie reklamowe naszych klientów stabilnie <b>realizowały ich cele biznesowe</b>. Dbając o ciągłość projektów, na bieżąco analizuję wyniki, co pozwala na <b>stałe ulepszanie procesów sprzedażowych</b>. Specjalizuję się <b>we wdrażaniu ustalonego planu</b>, gwarantując klientom pełne wsparcie w rozwoju.",
    photo: paulina,
  },
  {
    name: "Karolina Mijalska",
    role: "Projektantka komunikacji z mocnym backgroundem graficznym",
    bio: "Od lat poruszam się pomiędzy <b>brandingiem, marketingiem i designem</b>, dlatego <b>na kreacje reklamowe patrzę szerzej</b> niż tylko przez pryzmat tego, czy są ładne. Bardziej interesuje mnie, czy <b>działają, komunikują to, co powinny oraz czy faktycznie pomagają marce osiągnąć cel.</b>",
    photo: karolina,
  },
]

/** The team's office cat, shown centered under the team on /magic-kolektyw. */
export const teamMascot: TeamMember = {
  name: "Papajka",
  role: "Asystentka Nicoli",
  photo: papajka,
}
