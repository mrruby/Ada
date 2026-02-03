import React, { useState, useRef } from "react"

interface VimeoFacadeProps {
  videoId: string
  title: string
  aspectRatio?: "16:9" | "9:16"
  eager?: boolean
  sizes?: string
  maxThumbnailWidth?: 640 | 1280 | 1920
}

const VimeoFacade = ({
  videoId,
  title,
  aspectRatio = "16:9",
  eager = false,
  sizes = "(max-width: 640px) 100vw, 640px",
  maxThumbnailWidth = 640,
}: VimeoFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(eager)
  const [shouldAutoplay, setShouldAutoplay] = useState(false)
  const preconnectAddedRef = useRef(false)

  const thumbnailUrl = `https://vumbnail.com/${videoId}.jpg`
  const thumbnailUrlSmall = `https://vumbnail.com/${videoId}_small.jpg`
  const thumbnailUrlMedium = `https://vumbnail.com/${videoId}_medium.jpg`
  const thumbnailUrlLarge = `https://vumbnail.com/${videoId}_large.jpg`

  const thumbnailCandidates = [
    { url: thumbnailUrlSmall, width: 320 },
    { url: thumbnailUrlMedium, width: 640 },
    { url: thumbnailUrlLarge, width: 1280 },
    { url: thumbnailUrl, width: 1920 },
  ].filter((candidate) => candidate.width <= maxThumbnailWidth)

  const thumbnailSrcSet = thumbnailCandidates
    .map((candidate) => `${candidate.url} ${candidate.width}w`)
    .join(", ")
  const fallbackThumbnail =
    thumbnailCandidates[thumbnailCandidates.length - 1]?.url || thumbnailUrl
  // 16:9 = 56.25%, 9:16 = 177.78%
  const paddingTop = aspectRatio === "16:9" ? "56.25%" : "177.78%"

  const handleClick = () => {
    setShouldAutoplay(true)
    setIsLoaded(true)
  }

  const addPreconnect = () => {
    if (preconnectAddedRef.current || typeof document === "undefined") return
    preconnectAddedRef.current = true

    const domains = ["https://player.vimeo.com", "https://i.vimeocdn.com"]
    domains.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "preconnect"
      link.href = href
      document.head.appendChild(link)
    })
  }

  return (
    <div style={{ padding: `${paddingTop} 0 0 0`, position: "relative" }}>
      {isLoaded ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479${shouldAutoplay ? "&autoplay=1" : ""}`}
          width="1920"
          height="1080"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={title}
        />
      ) : (
        <button
          type="button"
          onClick={handleClick}
          onPointerEnter={addPreconnect}
          onFocus={addPreconnect}
          aria-label={`Odtwórz wideo: ${title}`}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            padding: 0,
            cursor: "pointer",
            background: "transparent",
          }}
        >
          <img
            src={fallbackThumbnail}
            srcSet={thumbnailSrcSet}
            sizes={sizes}
            alt={title}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
          {/* Play button overlay */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.2s ease",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              style={{ marginLeft: "4px" }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}

export default VimeoFacade
