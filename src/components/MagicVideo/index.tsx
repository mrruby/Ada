import React from "react"
import Section from "../shared/Section"

const MagicVideo = ({ version }: { version?: number }) => {
  // Default video (original)
  const defaultVideoSrc = "https://player.vimeo.com/video/1117395484?badge=0&autopause=0&player_id=0&app_id=58479"
  const defaultTitle = "Twoje zaproszenie do MAGIC"
  
  // Version 2 video (for magic-nagranie page)
  const version2VideoSrc = "https://player.vimeo.com/video/1117718298?badge=0&autopause=0&player_id=0&app_id=58479"
  const version2Title = "Nagranie_ Jesienny re-start"
  
  const videoSrc = version === 2 ? version2VideoSrc : defaultVideoSrc
  const videoTitle = version === 2 ? version2Title : defaultTitle

  return (
    <Section bgColor="bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src={videoSrc}
            width="1920"
            height="1080"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title={videoTitle}
          />
        </div>
      </div>
    </Section>
  )
}

export default MagicVideo
