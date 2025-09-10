import React from "react"
import Section from "../shared/Section"

const MagicVideo = () => {
  return (
    <Section bgColor="bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1117395484?badge=0&autopause=0&player_id=0&app_id=58479"
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
            title="Twoje zaproszenie do MAGIC"
          />
        </div>
      </div>
    </Section>
  )
}

export default MagicVideo
