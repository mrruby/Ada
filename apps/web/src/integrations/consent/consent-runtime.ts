import {
  CANONICAL_CONSENT_COOKIE_NAME,
  CONSENT_COOKIE_MAX_AGE_SECONDS,
  LEGACY_CONSENT_COOKIE_NAMES,
  type ConsentChoices,
  type ConsentRecord,
  type ResolvedConsent,
} from "./consent-types"
import {
  createConsentRecord,
  hasConsentWithdrawal,
  legacyCookieValues,
  resolveConsentState,
  serializeConsentRecord,
} from "./consent-state"
import { loadPilotIntegrations } from "../scripts/load-pilot-integrations"
import { initializeMetaQueue } from "../scripts/pilot-registry"

export type ConsentRuntime = Readonly<{
  getState: () => ResolvedConsent
  save: (selections: Omit<ConsentChoices, "necessary">) => void
}>

type ConsentWindow = Window & { adaConsent?: ConsentRuntime; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }

function setCookie(name: string, value: string): void {
  const attributes = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    "SameSite=Lax",
    `Max-Age=${CONSENT_COOKIE_MAX_AGE_SECONDS}`,
  ]

  if (window.location.protocol === "https:") {
    attributes.push("Secure")
  }

  document.cookie = attributes.join("; ")
}

function persistCanonical(record: ConsentRecord): void {
  setCookie(CANONICAL_CONSENT_COOKIE_NAME, serializeConsentRecord(record))
}

function mirrorLegacyCookies(record: ConsentRecord): void {
  for (const [name, value] of Object.entries(legacyCookieValues(record))) {
    setCookie(name, value)
  }
}

function updateGoogleConsent(consent: ConsentChoices): void {
  const scope = window as ConsentWindow
  scope.dataLayer ??= []
  scope.gtag ??= (...args: unknown[]) => {
    scope.dataLayer?.push(args)
  }

  scope.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  })
}

function applyConsentDataset(consent: ConsentChoices): void {
  document.documentElement.dataset.consentFunctional = String(consent.functional)
  document.documentElement.dataset.consentAnalytics = String(consent.analytics)
  document.documentElement.dataset.consentMarketing = String(consent.marketing)
}

function dispatchConsentChange(record: ConsentRecord): void {
  document.dispatchEvent(new CustomEvent("ada:consent-changed", { detail: record }))
}

export function bootstrapConsent(): ConsentRuntime {
  const scope = window as ConsentWindow

  if (scope.adaConsent) {
    return scope.adaConsent
  }

  let state = resolveConsentState(document.cookie)
  const initialConsent = state.record.categories

  // Consent Mode defaults are established before a Google script can be inserted.
  scope.dataLayer ??= []
  scope.gtag ??= (...args: unknown[]) => {
    scope.dataLayer?.push(args)
  }
  scope.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  })
  updateGoogleConsent(initialConsent)
  initializeMetaQueue()("consent", "revoke")
  applyConsentDataset(initialConsent)

  if (state.source === "legacy") {
    persistCanonical(state.record)
  }

  loadPilotIntegrations(initialConsent)

  const runtime: ConsentRuntime = {
    getState: () => state,
    save: (selections) => {
      const nextRecord = createConsentRecord(selections)
      const didWithdraw = hasConsentWithdrawal(state.record, nextRecord)

      updateGoogleConsent(nextRecord.categories)
      if (!nextRecord.categories.marketing) {
        initializeMetaQueue()("consent", "revoke")
      }
      persistCanonical(nextRecord)
      mirrorLegacyCookies(nextRecord)
      state = { record: nextRecord, source: "canonical", hasDecision: true }
      applyConsentDataset(nextRecord.categories)
      dispatchConsentChange(nextRecord)

      if (didWithdraw) {
        window.location.reload()
        return
      }

      loadPilotIntegrations(nextRecord.categories)
    },
  }

  scope.adaConsent = runtime
  document.dispatchEvent(new CustomEvent("ada:consent-ready"))
  return runtime
}

export function getConsentRuntime(): ConsentRuntime | undefined {
  return (window as ConsentWindow).adaConsent
}

export const legacyConsentCookieNames = LEGACY_CONSENT_COOKIE_NAMES
