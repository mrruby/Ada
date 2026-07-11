import { optionalConsentCategories, type ConsentRecord, type OptionalConsentCategory } from "./consent-types"
import { getConsentRuntime } from "./consent-runtime"

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ")

function focusables(element: HTMLElement): HTMLElement[] {
  return [...element.querySelectorAll<HTMLElement>(focusableSelector)].filter(
    (candidate) => !candidate.hidden,
  )
}

export function startConsentManager(): void {
  const banner = document.querySelector<HTMLElement>("[data-consent-banner]")
  const settings = document.querySelector<HTMLElement>("[data-consent-settings]")
  const floatingTrigger = document.querySelector<HTMLButtonElement>("[data-consent-floating-trigger]")
  const runtime = getConsentRuntime()

  if (!banner || !settings || !floatingTrigger || document.documentElement.dataset.consentManagerStarted) {
    return
  }

  if (!runtime) {
    document.addEventListener("ada:consent-ready", () => startConsentManager(), { once: true })
    return
  }

  const activeBanner = banner
  const activeSettings = settings
  const activeFloatingTrigger = floatingTrigger
  const activeRuntime = runtime

  document.documentElement.dataset.consentManagerStarted = "true"

  const controls = Object.fromEntries(
    optionalConsentCategories.map((category) => [
      category,
      document.querySelector<HTMLInputElement>(`[data-consent-control="${category}"]`),
    ]),
  ) as Record<OptionalConsentCategory, HTMLInputElement | null>
  let restoreFocus: HTMLElement | null = null

  function setControlValues(record: ConsentRecord): void {
    for (const category of optionalConsentCategories) {
      const control = controls[category]
      if (control) {
        control.checked = record.categories[category]
      }
    }
  }

  function showBannerIfNeeded(): void {
    const showBanner = !activeRuntime.getState().hasDecision
    activeBanner.hidden = !showBanner
    activeFloatingTrigger.hidden = showBanner
  }

  function closeSettings(): void {
    activeSettings.hidden = true
    showBannerIfNeeded()
    restoreFocus?.focus()
  }

  function openSettings(category?: OptionalConsentCategory): void {
    restoreFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setControlValues(activeRuntime.getState().record)
    activeBanner.hidden = true
    activeFloatingTrigger.hidden = true
    activeSettings.hidden = false

    const control = category ? controls[category] : null
    ;(control ?? activeSettings.querySelector<HTMLElement>("[data-consent-settings-title]"))?.focus()
  }

  function saveSelection(selections: Omit<ConsentRecord["categories"], "necessary">): void {
    activeRuntime.save(selections)
    activeSettings.hidden = true
    activeBanner.hidden = true
    activeFloatingTrigger.hidden = false
  }

  function selectionFromControls(): Omit<ConsentRecord["categories"], "necessary"> {
    return {
      functional: controls.functional?.checked ?? false,
      analytics: controls.analytics?.checked ?? false,
      marketing: controls.marketing?.checked ?? false,
    }
  }

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLElement>("button") : null

    if (!target) {
      return
    }

    if (target.matches("[data-open-consent]")) {
      event.preventDefault()
      openSettings()
      return
    }

    const action = target.dataset.consentAction
    if (action === "accept-all") {
      saveSelection({ functional: true, analytics: true, marketing: true })
    } else if (action === "reject-optional") {
      saveSelection({ functional: false, analytics: false, marketing: false })
    } else if (action === "save-selection") {
      saveSelection(selectionFromControls())
    } else if (action === "close-settings") {
      closeSettings()
    }
  })

  activeSettings.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault()
      closeSettings()
      return
    }

    if (event.key !== "Tab") {
      return
    }

    const items = focusables(activeSettings)
    const first = items[0]
    const last = items.at(-1)

    if (!first || !last) {
      return
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })

  document.addEventListener("ada:open-consent", (event) => {
    const category =
      event instanceof CustomEvent && optionalConsentCategories.includes(event.detail?.category)
        ? (event.detail.category as OptionalConsentCategory)
        : undefined
    openSettings(category)
  })

  setControlValues(activeRuntime.getState().record)
  showBannerIfNeeded()
}
