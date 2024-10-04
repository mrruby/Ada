import React from "react"

const OpinionVideos: React.FC = () => {
  const videos = [
    { src: "Z1kNvVbH0Fo?si=Cy50UinrlhTXrsrt", title: "Opinia Darii" },
    { src: "J4kR8n9RFL0?si=bln8IYpvFBcSFqKE", title: "Opinia Izy" },
    { src: "Sn_ABVhbia0?si=w0U17jQsCyyrq15e", title: "Opinia Emili" },
    { src: "nLC4Ak_uQNA?si=AcsToMv-vdQsw3jd", title: "Opinia Ani" },
    { src: "JCRyTa6yyj8?si=37-xABtP7b0ufhWY", title: "Opinia Pauliny" },
    { src: "ZPS6rnQovOM?si=Rg0TT2rjhmSK6ylI", title: "Opinia Magdy" },
  ]

  return (
    <div className="flex flex-col w-full gap-4 mb-16">
      <div className="flex flex-col md:flex-row w-full gap-4">
        {videos.map((video, index) => (
          <div key={index} className="w-full md:w-1/6">
            <div className="relative pb-[177.78%] h-0 overflow-hidden max-w-full">
              <iframe
                src={`https://www.youtube.com/embed/${video.src}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full md:w-full md:h-full sm:w-3/4 sm:h-3/4"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OpinionVideos
