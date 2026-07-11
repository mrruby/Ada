import type { TeamSectionInput } from "./schema"
import type { RichText } from "../../page-spec/common.schema"

const expert = {
  name: "Ada Promis",
  role: "Strategistka marketingowa",
  bio: [
    {
      kind: "paragraph",
      content: [{ text: "Pomaga markom podejmować lepsze decyzje.", marks: [] }],
    },
  ] satisfies RichText,
  media: {
    src: "/images/ada-promis.jpg",
    alt: "Ada Promis",
    width: 800,
    height: 800,
  },
}

export const teamFixtures = [
  {
    type: "team",
    presentation: "membership-experts",
    heading: "Poznaj ekspertki MAGIC",
    people: [expert],
  },
  {
    type: "team",
    presentation: "collective-team",
    heading: "Poznaj kolektyw",
    people: [expert],
  },
] satisfies TeamSectionInput[]
