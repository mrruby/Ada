import type { StickyCtaSectionInput } from "./schema"

export const stickyCtaFixtures = [
  {
    type: "sticky-cta",
    presentation: "membership",
    label: "Dołącz do MAGIC",
    targetCta: {
      label: "Zobacz pakiety",
      href: "#pakiety",
      analyticsKey: "magic.sticky-cta",
    },
  },
] satisfies StickyCtaSectionInput[]
