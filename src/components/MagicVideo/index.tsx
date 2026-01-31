import React from "react"
import Section from "../shared/Section"
import VimeoFacade from "../VimeoFacade"

const MagicVideo = ({ version }: { version?: number }) => {
  // Default video (original)
  const defaultVideoId = "1117395484"
  const defaultTitle = "Twoje zaproszenie do MAGIC"

  // Version 2 video (for magic-nagranie page)
  const version2VideoId = "1117718298"
  const version2Title = "Nagranie_ Jesienny re-start"

  // Version 3 video (for adseliksir page)
  const version3VideoId = "1156046181"
  const version3Title = "ADS Eliksir"

  const videoId =
    version === 2
      ? version2VideoId
      : version === 3
        ? version3VideoId
        : defaultVideoId
  const videoTitle =
    version === 2 ? version2Title : version === 3 ? version3Title : defaultTitle

  return (
    <Section bgColor="bg-transparent" padding="py-8 md:py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <VimeoFacade videoId={videoId} title={videoTitle} />
      </div>
    </Section>
  )
}

export default MagicVideo
