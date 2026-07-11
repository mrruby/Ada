import { z } from "zod"

export const ConsentCategorySchema = z.enum([
  "necessary",
  "functional",
  "analytics",
  "marketing",
])

export const OptionalConsentCategorySchema = z.enum([
  "functional",
  "analytics",
  "marketing",
])

export const consentCategories = ConsentCategorySchema.options
export const optionalConsentCategories = OptionalConsentCategorySchema.options

export type ConsentCategory = z.output<typeof ConsentCategorySchema>
export type OptionalConsentCategory = z.output<typeof OptionalConsentCategorySchema>

export type ConsentChoices = Readonly<{
  necessary: true
  functional: boolean
  analytics: boolean
  marketing: boolean
}>

export type ConsentRecord = Readonly<{
  version: 1
  timestamp: string
  categories: ConsentChoices
}>

export type ConsentSource = "absent" | "canonical" | "legacy" | "malformed"

export type ResolvedConsent = Readonly<{
  record: ConsentRecord
  source: ConsentSource
  hasDecision: boolean
}>

export const defaultConsentChoices: ConsentChoices = Object.freeze({
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
})

export const LEGACY_CONSENT_COOKIE_NAMES = Object.freeze({
  analytics: "gatsby-gdpr-google-analytics",
  tagManager: "gatsby-gdpr-google-tagmanager",
  marketing: "gatsby-gdpr-facebook-pixel",
})

export const CANONICAL_CONSENT_COOKIE_NAME = "ada-consent-v1"
export const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365
