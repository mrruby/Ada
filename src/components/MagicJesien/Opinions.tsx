import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Opinions() {
  const [expanded, setExpanded] = useState(false)
  return (
    <section className="sec" id="opinie">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">Opinie</p>
          <h2>
            Sprawdź, co nasze Klubowiczki mówią o Magic{" "}
            <em>po kilku miesiącach w klubie</em>
          </h2>
        </div>
        <div className={expanded ? "masonry open" : "masonry"} id="opinie-grid">
          <StaticImage
            className="opinion-photo"
            src="../../images/magic-jesien/op09.webp"
            alt="Opinia Angeliki Woźniak: nie czuję się zostawiona sama sobie z masą informacji, tylko zaopiekowana i pokierowana"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo"
            src="../../images/magic-jesien/op05.webp"
            alt="Opinia Pauliny Leopold: zarówno szkolenia na platformie, jak i konsultacje są świetne"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo"
            src="../../images/magic-jesien/op02.webp"
            alt="Opinia Aleksandry Ziober: otrzymałam wsparcie w tych najtrudniejszych chwilach"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo"
            src="../../images/magic-jesien/op06.webp"
            alt="Opinia Agnieszki: uporządkowane treści, spotkania online i możliwość stałego kontaktu"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo"
            src="../../images/magic-jesien/op10.webp"
            alt="Opinia Martyny Żmudy: dostajemy potężną dawkę wiedzy i możemy zadać pytania"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo more"
            src="../../images/magic-jesien/op03.webp"
            alt="Opinia Pauliny: przekazywana wiedza jest na czasie"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo more"
            src="../../images/magic-jesien/op07.webp"
            alt="Opinia Agnieszki Sosik-Grzyb: dziewczyny, przybywajcie na Magic"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo more"
            src="../../images/magic-jesien/op11.webp"
            alt="Opinia Darii Cichorackiej: gorąco polecam tę przestrzeń każdej osobie, która chce działać z reklamami"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo more"
            src="../../images/magic-jesien/op04.webp"
            alt="Opinia Jadzi Lenart: uporządkowałam dawną wiedzę i nadrobiłam zaległości"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo more"
            src="../../images/magic-jesien/op08.webp"
            alt="Opinia Izy: bezcenne, kiedy pracujesz samotnie i nie masz z kim przegadać tematów reklamowych"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
          <StaticImage
            className="opinion-photo more"
            src="../../images/magic-jesien/op12.webp"
            alt="Opinia Zuzy Rygielskiej: tutaj dbamy o kampanie kompleksowo"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
        </div>
        <div className="more-btn">
          <button
            className="btn btn-outline"
            id="more-op"
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="opinie-grid"
          >
            {expanded ? "Pokaż mniej" : "Pokaż więcej opinii"}
          </button>
        </div>
      </div>
    </section>
  )
}
