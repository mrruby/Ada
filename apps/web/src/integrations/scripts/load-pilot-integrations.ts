import type { ConsentChoices } from "../consent/consent-types"
import { pilotIntegrationRegistry, type PilotIntegrationId } from "./pilot-registry"

const loadedIntegrations = new Set<PilotIntegrationId>()

/** Loads only known pilot integrations whose explicit category is currently granted. */
export function loadPilotIntegrations(consent: ConsentChoices): void {
  for (const integrationId of Object.keys(pilotIntegrationRegistry) as PilotIntegrationId[]) {
    const integration = pilotIntegrationRegistry[integrationId]

    if (consent[integration.category] && !loadedIntegrations.has(integrationId)) {
      integration.load()
      loadedIntegrations.add(integrationId)
    }
  }
}
