import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import VimeoFacade from "components/VimeoFacade"
import { CASE_STUDY_VIDEOS } from "components/MagicCaseStudies/videos"

// Full portrait frames from Vimeo; the default thumbnail service crops these videos.
const thumbnails: Record<string, string> = {
  "1155918940":
    "https://i.vimeocdn.com/video/2108799956-af00863ecf8d67d4c3e0c1f040a20ac0e73da5d2a0ba7be86e8ca5df9ca31b5d-d_540x960?region=us",
  "1155051959":
    "https://i.vimeocdn.com/video/2107595642-487cec860ab702cbed125613e0cbc2e6028f2fe8a1176a414ac92aa6f3394863-d_540x960?region=us",
  "1155053529":
    "https://i.vimeocdn.com/video/2107599290-ca0d3feecb633533daf733aa8e28b8daaff1f7f9af43a8fa75211af512027aec-d_540x960?region=us",
  "1156039661":
    "https://i.vimeocdn.com/video/2108984338-1cd73114c12c00925e2b3808ae30426ab4a52a189c63e742514555c680ac9fdb-d_540x960?region=us",
  "1158468977":
    "https://i.vimeocdn.com/video/2112511166-6a63c0a1b86e57f164f24fed1d584396d8d764d7f83901f18a684af7af29dd43-d_540x960?region=us",
}

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
                  title={`Opinia klubowiczki MAGIC, nagranie ${index + 1}`}
                  aspectRatio="9:16"
                  thumbnailSrc={thumbnails[videoId]}
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
