import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import VimeoFacade from "components/VimeoFacade"
import { CASE_STUDY_VIDEOS } from "components/MagicCaseStudies/videos"

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 3 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
}

export default function VideoOpinions() {
  return (
    <section className="sec center" id="opinie-wideo">
      <div className="wrap">
        <p className="eyebrow">Opinie wideo</p>
        <h2>
          Klubowiczki o MAGIC <em>własnymi słowami</em>
        </h2>
        <div className="video-carousel" aria-label="Pięć nagrań klubowiczek">
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            ssr
            infinite={false}
            autoPlay={false}
            keyBoardControl
            showDots
            containerClass="video-carousel-track"
            itemClass="video-carousel-item"
          >
            {CASE_STUDY_VIDEOS.map((videoId, index) => (
              <div className="testimonial-player" key={videoId}>
                <VimeoFacade
                  videoId={videoId}
                  title={`Opinia klubowiczki MAGIC — nagranie ${index + 1}`}
                  aspectRatio="9:16"
                  sizes="(max-width: 600px) 280px, 260px"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
