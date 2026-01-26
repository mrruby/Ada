import React from "react"
import Carousel from "react-multi-carousel"
import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"

const CASE_STUDY_VIDEOS = [
  "1155918940",
  "1155051959",
  "1155053529",
  "1156039661",
  "1158468977",
]

const videoResponsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const VideoItem = ({ videoId }: { videoId: string }) => (
  <div className="relative w-full max-w-[280px] overflow-hidden aspect-[9/16] rounded-lg mx-auto bg-ada-magicGrey2">
    {videoId ? (
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ) : (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-ada-magicGrey text-center p-4">
        <span className="text-sm">Wkrótce</span>
      </div>
    )}
  </div>
)

const MagicCaseStudies = () => {
  return (
    <div className="py-12 px-6">
      {/* Swipeable carousel for all screen sizes */}
      <div className="px-12 relative max-w-6xl mx-auto">
        <Carousel
          responsive={videoResponsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow outside />}
          customRightArrow={<CustomRightArrow outside />}
          ssr={true}
          swipeable={true}
          draggable={true}
        >
          {CASE_STUDY_VIDEOS.map((videoId, index) => (
            <div key={videoId || `empty-${index}`} className="px-2">
              <VideoItem videoId={videoId} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default MagicCaseStudies
