import type { MediaSectionInput } from "./schema"

export const mediaFixtures = [
  {
    type: "media",
    presentation: "invitation-video",
    heading: "Zaproszenie do MAGIC",
    provider: "vimeo",
    providerAssetId: "123456789",
    poster: {
      src: "/images/magic-video-poster.jpg",
      alt: "Kadr z zaproszenia wideo do MAGIC",
      width: 1600,
      height: 900,
    },
    consentCategory: "functional",
  },
] satisfies MediaSectionInput[]
