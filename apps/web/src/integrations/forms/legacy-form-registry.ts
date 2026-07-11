import type { OptionalConsentCategory } from "../consent/consent-types"

export const legacyFormIds = ["magic-kolektyw-webinar"] as const

export type LegacyFormId = (typeof legacyFormIds)[number]

type LegacyFormRegistration = Readonly<{
  formId: "141238205381870880"
  subscribeUrl: "https://assets.mailerlite.com/jsonp/549725/forms/141238205381870880/subscribe"
  businessOwner: "Adrianna Promis-Urbas"
  technicalOwner: "migration lead"
  consentCategory: OptionalConsentCategory
  allowedOrigins: Readonly<{
    form: readonly ["https://assets.mailerlite.com"]
    script: readonly ["https://groot.mailerlite.com"]
    style: readonly []
    connect: readonly ["https://assets.mailerlite.com"]
  }>
  snapshot: Readonly<{
    source: "src/values/forms/magic-form-wide.html"
    sourceSha256: "127702e7c39e69ccabb053d52ac9075ce6daaa6dfee6ba73b1233d9c840a4b0c"
    copiedOn: "2026-07-11"
    path: "/legacy-forms/magic-kolektyw-webinar.html"
    differences: readonly [
      "Provider-hosted font import removed; the snapshot inherits system fonts.",
      "Success callback sends a fixed postMessage to the parent instead of navigating the top page directly.",
      "Newsletter consent remains visible, unchecked, and uses native required validation.",
    ]
  }>
  successDestination: "/thank/"
  retirementDeadline: "2026-10-31"
  manualSubmissionTest: Readonly<{
    procedure: "Use an owner-controlled address in Gatsby and Astro, then compare audience/group, automation, consent evidence, duplicate behavior, validation, keyboard/mobile layout, errors, and /thank/ success."
    lastVerified: null
  }>
}>

/** Closed registry: PageSpec may refer only to a key from this map. */
export const legacyFormRegistry = {
  "magic-kolektyw-webinar": {
    formId: "141238205381870880",
    subscribeUrl: "https://assets.mailerlite.com/jsonp/549725/forms/141238205381870880/subscribe",
    businessOwner: "Adrianna Promis-Urbas",
    technicalOwner: "migration lead",
    consentCategory: "functional",
    allowedOrigins: {
      form: ["https://assets.mailerlite.com"],
      script: ["https://groot.mailerlite.com"],
      style: [],
      connect: ["https://assets.mailerlite.com"],
    },
    snapshot: {
      source: "src/values/forms/magic-form-wide.html",
      sourceSha256: "127702e7c39e69ccabb053d52ac9075ce6daaa6dfee6ba73b1233d9c840a4b0c",
      copiedOn: "2026-07-11",
      path: "/legacy-forms/magic-kolektyw-webinar.html",
      differences: [
        "Provider-hosted font import removed; the snapshot inherits system fonts.",
        "Success callback sends a fixed postMessage to the parent instead of navigating the top page directly.",
        "Newsletter consent remains visible, unchecked, and uses native required validation.",
      ],
    },
    successDestination: "/thank/",
    retirementDeadline: "2026-10-31",
    manualSubmissionTest: {
      procedure:
        "Use an owner-controlled address in Gatsby and Astro, then compare audience/group, automation, consent evidence, duplicate behavior, validation, keyboard/mobile layout, errors, and /thank/ success.",
      lastVerified: null,
    },
  },
} as const satisfies Record<LegacyFormId, LegacyFormRegistration>
