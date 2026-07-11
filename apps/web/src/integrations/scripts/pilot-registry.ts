import type { OptionalConsentCategory } from "../consent/consent-types"

export const pilotIntegrationIds = [
  "ga4",
  "gtm",
  "metaPixel",
  "mailerliteForm",
  "vimeo",
] as const

export type PilotIntegrationId = (typeof pilotIntegrationIds)[number]

type PilotIntegration = Readonly<{
  category: OptionalConsentCategory
  businessOwner: "Adrianna Promis-Urbas"
  technicalOwner: "migration lead"
  environments: readonly ["development", "preview", "production"]
  sourceOrigins: readonly string[]
  connectOrigins: readonly string[]
  frameOrigins: readonly string[]
  retentionNote: string
  disableProcedure: string
  load: () => void
}>

const resourceMarker = "data-pilot-integration"

function hasLoadedResource(integrationId: PilotIntegrationId): boolean {
  return document.querySelector(`[${resourceMarker}="${integrationId}"]`) !== null
}

function appendScript(integrationId: PilotIntegrationId, src: string): void {
  if (hasLoadedResource(integrationId)) {
    return
  }

  const script = document.createElement("script")
  script.async = true
  script.src = src
  script.dataset.pilotIntegration = integrationId
  document.head.append(script)
}

function getGtag(): (...args: unknown[]) => void {
  const scope = window as Window & {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }

  scope.dataLayer ??= []
  scope.gtag ??= (...args: unknown[]) => {
    scope.dataLayer?.push(args)
  }

  return scope.gtag
}

function loadGa4(): void {
  appendScript("ga4", "https://www.googletagmanager.com/gtag/js?id=G-8LX78J4XMN")
  const gtag = getGtag()
  gtag("js", new Date())
  gtag("config", "G-8LX78J4XMN")
}

function loadGtm(): void {
  const scope = window as Window & { dataLayer?: unknown[] }
  scope.dataLayer ??= []
  scope.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
  appendScript("gtm", "https://www.googletagmanager.com/gtm.js?id=GTM-TC7CLB2")
}

export function initializeMetaQueue(): (...args: unknown[]) => void {
  const scope = window as Window & {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[][]; loaded?: boolean }
  }

  if (!scope.fbq) {
    const queue = ((...args: unknown[]) => {
      queue.queue?.push(args)
    }) as ((...args: unknown[]) => void) & { queue?: unknown[][]; loaded?: boolean }
    queue.queue = []
    queue.loaded = false
    scope.fbq = queue
  }

  return scope.fbq
}

function loadMetaPixel(): void {
  const fbq = initializeMetaQueue()
  appendScript("metaPixel", "https://connect.facebook.net/en_US/fbevents.js")
  fbq("consent", "grant")
  fbq("init", "187660469934129")
  fbq("track", "PageView")
}

/**
 * Closed Phase 2 pilot registry. PageSpec never supplies a script, endpoint,
 * or provider URL; the two interactive facades use this registry instead.
 */
export const pilotIntegrationRegistry = {
  ga4: {
    category: "analytics",
    businessOwner: "Adrianna Promis-Urbas",
    technicalOwner: "migration lead",
    environments: ["development", "preview", "production"],
    sourceOrigins: ["https://www.googletagmanager.com"],
    connectOrigins: ["https://www.google-analytics.com"],
    frameOrigins: [],
    retentionNote: "Google Analytics retention and legal basis require owner/legal approval before cutover.",
    disableProcedure: "Remove the analytics grant or remove this closed registry entry and its matching CSP origin.",
    load: loadGa4,
  },
  gtm: {
    category: "analytics",
    businessOwner: "Adrianna Promis-Urbas",
    technicalOwner: "migration lead",
    environments: ["development", "preview", "production"],
    sourceOrigins: ["https://www.googletagmanager.com"],
    connectOrigins: ["https://www.googletagmanager.com"],
    frameOrigins: [],
    retentionNote: "The remote GTM container must be checked for duplicate GA4 or Meta events before cutover.",
    disableProcedure: "Remove the analytics grant or remove this closed registry entry and its matching CSP origin.",
    load: loadGtm,
  },
  metaPixel: {
    category: "marketing",
    businessOwner: "Adrianna Promis-Urbas",
    technicalOwner: "migration lead",
    environments: ["development", "preview", "production"],
    sourceOrigins: ["https://connect.facebook.net"],
    connectOrigins: ["https://www.facebook.com"],
    frameOrigins: [],
    retentionNote: "Meta retention and legal basis require owner/legal approval before cutover.",
    disableProcedure: "Remove the marketing grant or remove this closed registry entry and its matching CSP origin.",
    load: loadMetaPixel,
  },
  mailerliteForm: {
    category: "functional",
    businessOwner: "Adrianna Promis-Urbas",
    technicalOwner: "migration lead",
    environments: ["development", "preview", "production"],
    sourceOrigins: ["https://groot.mailerlite.com"],
    connectOrigins: ["https://assets.mailerlite.com"],
    frameOrigins: ["https://assets.mailerlite.com"],
    retentionNote: "The snapshot is temporary integration debt; replace it with a supported adapter by 2026-10-31.",
    disableProcedure: "Remove functional consent or remove the registered form and its snapshot/CSP exception together.",
    load: () => undefined,
  },
  vimeo: {
    category: "functional",
    businessOwner: "Adrianna Promis-Urbas",
    technicalOwner: "migration lead",
    environments: ["development", "preview", "production"],
    sourceOrigins: [],
    connectOrigins: [],
    frameOrigins: ["https://player.vimeo.com"],
    retentionNote: "Vimeo player retention and legal basis require owner/legal approval before cutover.",
    disableProcedure: "Remove functional consent or remove the Vimeo facade and its matching CSP origin.",
    load: () => undefined,
  },
} as const satisfies Record<PilotIntegrationId, PilotIntegration>

export function createVimeoEmbed(assetId: string) {
  return {
    directUrl: `https://vimeo.com/${encodeURIComponent(assetId)}`,
    embedUrl: `https://player.vimeo.com/video/${encodeURIComponent(assetId)}?dnt=1`,
    permissions: "autoplay; fullscreen; picture-in-picture",
  }
}
