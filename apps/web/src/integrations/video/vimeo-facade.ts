function createVimeoPlayer(facade: HTMLElement): void {
  if (facade.dataset.vimeoReady === "true") {
    return
  }

  const mount = facade.querySelector<HTMLElement>("[data-vimeo-mount]")
  const embedUrl = facade.dataset.vimeoEmbedUrl
  const title = facade.dataset.vimeoTitle
  const permissions = facade.dataset.vimeoPermissions

  if (!mount || !embedUrl || !title || !permissions) {
    return
  }

  const iframe = document.createElement("iframe")
  iframe.allow = permissions
  iframe.allowFullscreen = true
  iframe.className = "aspect-video w-full"
  iframe.dataset.pilotIntegration = "vimeo"
  iframe.loading = "lazy"
  iframe.src = embedUrl
  iframe.title = title
  mount.replaceChildren(iframe)
  facade.dataset.vimeoReady = "true"
}

export function mountVimeoFacades(): void {
  for (const facade of document.querySelectorAll<HTMLElement>("[data-vimeo-facade]")) {
    const playButton = facade.querySelector<HTMLButtonElement>("[data-vimeo-play]")
    const notice = facade.querySelector<HTMLElement>("[data-vimeo-notice]")

    if (!playButton) {
      continue
    }

    playButton.addEventListener("click", () => {
      if (document.documentElement.dataset.consentFunctional !== "true") {
        if (notice) {
          notice.hidden = false
        }
        document.dispatchEvent(
          new CustomEvent("ada:open-consent", { detail: { category: "functional" } }),
        )
        return
      }

      createVimeoPlayer(facade)
    })
  }
}

mountVimeoFacades()
