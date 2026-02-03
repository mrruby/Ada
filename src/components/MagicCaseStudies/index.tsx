import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { CustomLeftArrow, CustomRightArrow } from "components/Layout/arrows"
import VimeoFacade from "components/VimeoFacade"

const CASE_STUDY_VIDEOS = [
  "1155918940",
  "1155051959",
  "1155053529",
  "1156039661",
  "1158468977",
]

const videoResponsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
}

const VideoItem = ({ videoId }: { videoId: string }) => (
  <div className="w-full max-w-[340px] overflow-hidden rounded-lg mx-auto bg-ada-magicGrey2">
    {videoId ? (
      <VimeoFacade
        videoId={videoId}
        title="Case study MAGIC"
        aspectRatio="9:16"
        eager
      />
    ) : (
      <div className="relative aspect-[9/16] flex items-center justify-center text-ada-magicGrey text-center p-4">
        <span className="text-sm">Wkrótce</span>
      </div>
    )}
  </div>
)

const MagicCaseStudies = () => {
  return (
    <div className="py-12 px-6">
      {/* Swipeable carousel for all screen sizes */}
      <div className="px-12 relative max-w-7xl mx-auto">
        <Carousel
          responsive={videoResponsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow dark />}
          customRightArrow={<CustomRightArrow dark />}
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
