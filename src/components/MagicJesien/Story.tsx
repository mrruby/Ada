import React, { useRef, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Story() {
  const [active, setActive] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])
  const handleTabKey = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const keys: Record<string, number> = {
      ArrowRight: (index + 1) % 4,
      ArrowLeft: (index + 3) % 4,
      Home: 0,
      End: 3,
    }
    const next = keys[event.key]
    if (next === undefined) return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }
  return (
    <section className="sec" id="case">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">💼 Case study przedsiębiorczyni</p>
          <h2>
            Jak Magda uporządkowała chaos reklamowy w swoim biznesie{" "}
            <em>(i przestała bać się Menedżera Reklam)?</em>
          </h2>
        </div>
        <div
          className="card story"
          id="story"
          aria-label="Historia Magdy w czterech odsłonach"
        >
          <div className="sbars" aria-hidden="true">
            <i className={active >= 0 ? "done" : ""}></i>
            <i className={active >= 1 ? "done" : ""}></i>
            <i className={active >= 2 ? "done" : ""}></i>
            <i className={active >= 3 ? "done" : ""}></i>
          </div>
          <div className="stabs" role="tablist" aria-label="Historia Magdy">
            <button
              type="button"
              role="tab"
              className={active === 0 ? "selected" : ""}
              aria-selected={active === 0}
              tabIndex={active === 0 ? 0 : -1}
              id="magda-tab-0"
              aria-controls="magda-panel-0"
              onClick={() => setActive(0)}
              onKeyDown={(event) => handleTabKey(event, 0)}
              ref={(element) => {
                tabs.current[0] = element
              }}
            >
              ✅ Kim jest Magda?
            </button>
            <button
              type="button"
              role="tab"
              className={active === 1 ? "selected" : ""}
              aria-selected={active === 1}
              tabIndex={active === 1 ? 0 : -1}
              id="magda-tab-1"
              aria-controls="magda-panel-1"
              onClick={() => setActive(1)}
              onKeyDown={(event) => handleTabKey(event, 1)}
              ref={(element) => {
                tabs.current[1] = element
              }}
            >
              ✅ Z czym przyszła?
            </button>
            <button
              type="button"
              role="tab"
              className={active === 2 ? "selected" : ""}
              aria-selected={active === 2}
              tabIndex={active === 2 ? 0 : -1}
              id="magda-tab-2"
              aria-controls="magda-panel-2"
              onClick={() => setActive(2)}
              onKeyDown={(event) => handleTabKey(event, 2)}
              ref={(element) => {
                tabs.current[2] = element
              }}
            >
              ✅ Co ceni w MAGIC?
            </button>
            <button
              type="button"
              role="tab"
              className={active === 3 ? "selected" : ""}
              aria-selected={active === 3}
              tabIndex={active === 3 ? 0 : -1}
              id="magda-tab-3"
              aria-controls="magda-panel-3"
              onClick={() => setActive(3)}
              onKeyDown={(event) => handleTabKey(event, 3)}
              ref={(element) => {
                tabs.current[3] = element
              }}
            >
              ✅ Komu poleca?
            </button>
          </div>
          <div
            className={active === 0 ? "spane on" : "spane"}
            role="tabpanel"
            id="magda-panel-0"
            aria-labelledby="magda-tab-0"
            tabIndex={0}
            hidden={active !== 0}
          >
            <div className="pgrid">
              <div>
                <h3>Soloprzedsiębiorczyni i świeżo upieczona mama</h3>
                <p>
                  Magda pełni w swoim biznesie wiele ról jednocześnie: od
                  obsługi klienta przez marketing po finanse. W natłoku
                  obowiązków szukała sposobu, by ogarnąć reklamową część
                  biznesu.
                </p>
              </div>
              <div className="roles" aria-hidden="true">
                <span>👩‍💻 obsługa klienta</span>
                <span>📣 marketing</span>
                <span>💰 finanse</span>
                <span>🛒 sprzedaż</span>
                <span>🇸🇪 nauka szwedzkiego</span>
                <span>👶 mama</span>
              </div>
            </div>
          </div>
          <div
            className={active === 1 ? "spane on" : "spane"}
            role="tabpanel"
            id="magda-panel-1"
            aria-labelledby="magda-tab-1"
            tabIndex={0}
            hidden={active !== 1}
          >
            <p className="bigq">
              „<span id="tw">Jak ustawić reklamy i nie zwariować?</span>
              <i className="caret"></i>”
            </p>
            <p>
              Chociaż w sieci jest mnóstwo porad o reklamach, zebranie ich w
              spójną całość to nie lada wyzwanie. Magda miała podstawową wiedzę
              i pewność, że Menedżer Reklam „nie gryzie”, ale wiedza teoretyczna
              to jedno, a samodzielne ustawianie reklam to drugie. Szukała
              wsparcia i przestrzeni do ulepszania pomysłów.
            </p>
          </div>
          <div
            className={active === 2 ? "spane on" : "spane"}
            role="tabpanel"
            id="magda-panel-2"
            aria-labelledby="magda-tab-2"
            tabIndex={0}
            hidden={active !== 2}
          >
            <p style={{ marginBottom: "1rem" }}>
              Dla Magdy MAGIC to przede wszystkim:
            </p>
            <div className="tiles">
              <div className="tile2">
                <span>⛏️</span>
                <b>Kopalnia wiedzy i źródło inspiracji</b>
                <p>
                  Miejsce, gdzie we własnym tempie rozwija kompetencje reklamowe
                  i czerpie z doświadczeń innych przedsiębiorczyń i marketerek.
                </p>
              </div>
              <div className="tile2">
                <span>📝</span>
                <b>Warsztaty na żywo</b>
                <p>
                  Z każdego wychodzi z notesem pełnym nowych pomysłów do
                  wdrożenia.
                </p>
              </div>
              <div className="tile2">
                <span>💬</span>
                <b>Społeczność na Circle</b>
                <p>
                  Idealna grupa do testowania pomysłów: sprawdza założenia z
                  ekspertkami i członkiniami przed uruchomieniem kampanii.
                  Koniec z samotnością w biznesie.
                </p>
              </div>
              <div className="tile2">
                <span>🧘‍♀️</span>
                <b>Uporządkowanie reklamowej części biznesu</b>
                <p>
                  Reklamy przestały być źródłem stresu, a stały się naturalną
                  częścią prowadzenia biznesu.
                </p>
              </div>
            </div>
          </div>
          <div
            className={active === 3 ? "spane on" : "spane"}
            role="tabpanel"
            id="magda-panel-3"
            aria-labelledby="magda-tab-3"
            tabIndex={0}
            hidden={active !== 3}
          >
            <div className="pgrid">
              <div>
                <h3>
                  Soloprzedsiębiorczyniom, które pełnią w swoim biznesie pięć
                  różnych ról na raz.
                </h3>
                <p>
                  Jeśli też jesteś obsługą klienta, marketingiem, finansami i
                  sprzedażą w jednej osobie, MAGIC jest miejscem, gdzie
                  reklamową część zdejmujesz z „listy wstydu”.
                </p>
                <a className="btn btn-primary" href="#pakiety">
                  Ja też tak chcę!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="center" style={{ marginTop: "2.5rem" }}>
          <h3 style={{ fontSize: "1.4rem" }}>Zobacz, co mówi Magda 👇</h3>
          <StaticImage
            className="magda"
            src="../../images/magic-jesien/op01.webp"
            alt="Opinia Magdy Sikorskiej o MAGIC: na MAGIC nikt nie zostaje bez odpowiedzi"
            width={640}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={90}
            layout="constrained"
          />
        </div>
      </div>
    </section>
  )
}
