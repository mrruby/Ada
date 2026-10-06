/**
 * Consent-aware third-party embeds (YouTube, Vimeo, Google Calendar).
 *
 * Markup contract (rendered by VideoEmbed / ConsentFrame):
 *   [data-consent-embed]           root, needs `relative`
 *     data-src                     iframe URL to load on click
 *     data-eager-src (optional)    load automatically once media consent exists
 *     data-title / data-allow      iframe title / allow attribute
 *     [data-embed-play]            the placeholder button
 *     [data-embed-prompt]          hidden consent notice with [data-embed-accept]
 *
 * Nothing from the provider loads until the visitor grants the `media`
 * consent category (here, or in the cookie settings).
 */
import { track } from "./analytics"
import { videoFromPlayerUrl } from "./analytics-events"
import { grantConsent, hasConsent, onConsentChange } from "./consent"

const SELECTOR = "[data-consent-embed]"

const warmed = new Set<string>()
const preconnect = (url: string) => {
  const origin = new URL(url, window.location.href).origin
  if (warmed.has(origin)) return
  warmed.add(origin)
  const link = document.createElement("link")
  link.rel = "preconnect"
  link.href = origin
  document.head.appendChild(link)
}

const mount = (root: HTMLElement, src: string) => {
  if (root.dataset.embedMounted) return
  root.dataset.embedMounted = "true"
  const iframe = document.createElement("iframe")
  iframe.src = src
  iframe.title = root.dataset.title ?? ""
  iframe.allow = root.dataset.allow ?? ""
  iframe.allowFullscreen = true
  iframe.referrerPolicy = "strict-origin-when-cross-origin"
  iframe.className = "absolute inset-0 h-full w-full border-0"
  root.querySelector("[data-embed-play]")?.remove()
  root.querySelector("[data-embed-prompt]")?.remove()
  root.appendChild(iframe)
}

/** Mount on the visitor's click, and record it when it is a video player. */
const play = (root: HTMLElement, src: string) => {
  if (root.dataset.embedMounted) return
  mount(root, src)
  const video = videoFromPlayerUrl(src)
  if (video) track("video_played", video)
}

const setup = (root: HTMLElement) => {
  if (root.dataset.embedReady) return
  root.dataset.embedReady = "true"
  const { src, eagerSrc } = root.dataset
  if (!src) return

  if (eagerSrc && hasConsent("media")) {
    mount(root, eagerSrc)
    return
  }

  const playButton = root.querySelector<HTMLElement>("[data-embed-play]")
  const prompt = root.querySelector<HTMLElement>("[data-embed-prompt]")

  playButton?.addEventListener("pointerenter", () => preconnect(src), { once: true })
  playButton?.addEventListener("click", () => {
    if (hasConsent("media")) {
      play(root, src)
    } else if (prompt) {
      prompt.hidden = false
      prompt.querySelector<HTMLElement>("[data-embed-accept]")?.focus()
    }
  })
  prompt?.querySelector("[data-embed-accept]")?.addEventListener("click", () => {
    grantConsent("media")
    play(root, src)
  })
}

const scan = (scope: ParentNode = document) =>
  scope.querySelectorAll<HTMLElement>(SELECTOR).forEach(setup)

/** Initialise every embed now and any added to the page later. */
export const initConsentEmbeds = () => {
  // Several components ship this script; start it once per page.
  const flags = window as Window & { __adaEmbeds?: boolean }
  if (flags.__adaEmbeds) return
  flags.__adaEmbeds = true
  scan()
  new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return
        if (node.matches(SELECTOR)) setup(node)
        scan(node)
      })
    }
  }).observe(document.body, { childList: true, subtree: true })

  // Granting media consent anywhere starts the embeds that autoload.
  onConsentChange((choices) => {
    if (!choices.media) return
    document.querySelectorAll<HTMLElement>(`${SELECTOR}[data-eager-src]`).forEach((root) => {
      if (root.dataset.eagerSrc) mount(root, root.dataset.eagerSrc)
    })
  })
}
