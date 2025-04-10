import React from "react"

interface ResponsiveYouTubeEmbedProps {
  /** The YouTube video ID */
  videoId: string
  /** The title for the iframe, important for accessibility */
  title: string
  /** Optional height for the mobile iframe (default: 280) */
  mobileHeight?: string
  /** Optional height for the desktop iframe (default: 600) */
  desktopHeight?: string
  /** Optional additional classes for the mobile container div */
  mobileContainerClassName?: string
  /** Optional additional classes for the desktop container div */
  desktopContainerClassName?: string
}

/**
 * Renders a responsive YouTube video embed, showing different sizes for mobile and desktop.
 */
const ResponsiveYouTubeEmbed: React.FC<ResponsiveYouTubeEmbedProps> = ({
  videoId,
  title,
  mobileHeight = "280",
  desktopHeight = "600",
  mobileContainerClassName = "w-full px-2 mb-8 mt-4",
  desktopContainerClassName = "w-full max-w-4xl mb-8 mt-4",
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <>
      {/* Mobile View */}
      <div className={`block md:hidden ${mobileContainerClassName}`}>
        <iframe
          width="100%"
          height={mobileHeight}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Desktop View */}
      <div className={`hidden md:block ${desktopContainerClassName}`}>
        <iframe
          width="100%"
          height={desktopHeight}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export default ResponsiveYouTubeEmbed
