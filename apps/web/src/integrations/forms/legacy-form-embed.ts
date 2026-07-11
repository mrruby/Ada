import { legacyFormRegistry, type LegacyFormId } from "./legacy-form-registry"

function activateEmbed(container: HTMLElement, formId: LegacyFormId): void {
  if (container.dataset.legacyFormReady === "true") {
    return
  }

  const template = container.querySelector<HTMLTemplateElement>("template[data-legacy-form-template]")
  const mount = container.querySelector<HTMLElement>("[data-legacy-form-mount]")

  if (!template || !mount) {
    return
  }

  const fragment = template.content.cloneNode(true) as DocumentFragment
  const iframe = fragment.querySelector<HTMLIFrameElement>("iframe")

  if (!iframe) {
    return
  }

  container.dataset.legacyFormReady = "true"
  mount.replaceChildren(fragment)

  window.addEventListener("message", (event) => {
    if (
      event.source !== iframe.contentWindow ||
      !event.data ||
      typeof event.data !== "object" ||
      event.data.type !== "ada:legacy-form-success" ||
      event.data.formId !== formId
    ) {
      return
    }

    // The static registry owns this fixed destination; a provider message cannot choose one.
    window.location.assign(legacyFormRegistry[formId].successDestination)
  })
}

export function mountLegacyFormEmbeds(): void {
  for (const container of document.querySelectorAll<HTMLElement>("[data-legacy-form-id]")) {
    const formId = container.dataset.legacyFormId as LegacyFormId | undefined

    if (!formId || !(formId in legacyFormRegistry)) {
      continue
    }

    const activate = () => activateEmbed(container, formId)
    if (document.documentElement.dataset.consentFunctional === "true") {
      activate()
    }

    document.addEventListener("ada:consent-changed", (event) => {
      const record = event instanceof CustomEvent ? event.detail : undefined
      if (record?.categories?.functional === true) {
        activate()
      }
    })
  }
}

mountLegacyFormEmbeds()
