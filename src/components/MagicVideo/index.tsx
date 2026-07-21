import React from "react"
import Section from "../shared/Section"
import VimeoFacade from "../VimeoFacade"

const MagicVideo = ({ heading }: { heading?: string }) => {
  return (
    <Section bgColor="bg-transparent" padding="py-8 md:py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {heading && (
          <h2 className="text-center font-bold text-adaSubtitle mb-6">
            {heading}
          </h2>
        )}
        <VimeoFacade videoId="1117395484" title="Twoje zaproszenie do MAGIC" />
      </div>
    </Section>
  )
}

export default MagicVideo
