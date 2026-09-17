import React, { useEffect, useRef, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "components/Layout"
import {
  Invitation,
  Audience,
  Features,
  Checklist,
  Progress,
  Calendar,
  Team,
  Results,
} from "./Content"
import Diagnosis from "./Diagnosis"
import Story from "./Story"
import Opinions from "./Opinions"
import Offer from "./Offer"
import FAQ from "./FAQ"
import VideoOpinions from "./VideoOpinions"
import { Countdown, HeroWord, usePromotion } from "./promotion"
import "./styles.css"

export default function MagicJesien() {
  const promotionActive = usePromotion()
  const topbarRef = useRef<HTMLDivElement>(null)
  const [topbarHeight, setTopbarHeight] = useState<number>()

  useEffect(() => {
    const topbar = topbarRef.current
    if (!topbar) return

    const updateHeight = () =>
      setTopbarHeight(topbar.getBoundingClientRect().height)
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(topbar)
    return () => observer.disconnect()
  }, [])

  return (
    <Layout showHeaderAndFooter={false}>
      <div
        className="magic-jesien"
        style={
          {
            "--topbar-height": topbarHeight ? `${topbarHeight}px` : undefined,
          } as React.CSSProperties
        }
      >
        <div className="topbar-spacer" aria-hidden="true" />
        <div
          className="topbar"
          role="region"
          aria-label="Promocja"
          ref={topbarRef}
        >
          <div className="wrap">
            <span>
              {promotionActive ? (
                <>
                  ⏳ Ceny promocyjne do <strong>28.09, do końca dnia</strong>.
                  Zostało:
                </>
              ) : (
                "Dołącz do MAGIC i rozwijaj swój biznes z naszym zespołem."
              )}
            </span>
            {promotionActive && <Countdown />}
            <a className="btn btn-primary btn-sm" href="#pakiety">
              Wchodzę
            </a>
          </div>
        </div>
        <div className="logobar">
          <div className="wrap">
            <StaticImage
              className="magic-logo"
              src="../../images/magic-jesien/logo.webp"
              alt="MAGIC"
              width={237}
              placeholder="blurred"
              formats={["auto", "webp"]}
              quality={85}
              layout="constrained"
            />
            <span>Marketing Ads/AI Girls Inside Club</span>
          </div>
        </div>
        <main>
          <header className="hero" id="top">
            <div className="wrap">
              <div className="hero-txt">
                <h1 className="brand-h1">
                  Marketing{" "}
                  <span className="swap">
                    <HeroWord />
                  </span>{" "}
                  Girls Inside Club <span className="star">★</span>
                </h1>
                <p className="sub">
                  Skaluj swój biznes dzięki reklamom, AI i automatyzacjom: z
                  konkretnym planem wdrożeniowym.
                </p>
                <a className="btn btn-primary btn-big" href="#pakiety">
                  Dołączam
                </a>
              </div>
              <div className="hero-art">
                <StaticImage
                  className="hero-image"
                  src="../../images/magic-jesien/hero.webp"
                  alt="Ada z laptopem, wokół niej wiadomości z Circle: Kapibara Barbara, konsultacje materiałów, warsztat z AI, poziomy nauki w aplikacji"
                  width={1400}
                  placeholder="blurred"
                  formats={["auto", "webp"]}
                  quality={85}
                  layout="constrained"
                  loading="eager"
                />
              </div>
            </div>
          </header>
          <Invitation />
          <Diagnosis />
          <Audience />
          <Features />
          <Checklist />
          <Offer promotionActive={promotionActive} />
          <Progress />
          <Story />
          <VideoOpinions />
          <Calendar />
          <Team />
          <Results />
          <Opinions />
          <FAQ promotionActive={promotionActive} />
          <hr className="hr" />
          <section className="final" id="dolacz">
            <div className="wrap fgrid">
              <div>
                <h2>
                  Dołącz do społeczności kobiet, które wspólnie rozwijają swoje
                  biznesy{" "}
                  <em>i wspierają się w drodze do sukcesu w reklamach Meta</em>
                </h2>
                <p className="lead">
                  Wybierz 1, 3 lub 6 miesięcy, umów spotkanie 1:1 i zacznij od
                  swojego MAGIC Planu.
                </p>
                <ul className="checks">
                  <li>Nawet jeśli teraz trochę się boisz.</li>
                  <li>
                    Nawet jeśli do tej pory uważałaś, że nie jesteś techniczna.
                  </li>
                  <li>
                    Nawet jeśli myślisz, że z małym budżetem nie dasz rady.
                  </li>
                </ul>
                <Countdown></Countdown>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#pakiety">
                    Chcę mieć swój zespół marketingowy 🤩
                  </a>
                </div>
                <div>
                  <span className="tag">
                    {promotionActive
                      ? "🔮 Promocja do 28.09, do końca dnia"
                      : "Dołącz do MAGIC"}
                  </span>
                </div>
              </div>
              <StaticImage
                className="fphoto"
                src="../../images/magic-jesien/ada_stand.webp"
                alt="Ada z laptopem w jednej ręce i kubkiem w drugiej"
                width={900}
                placeholder="blurred"
                formats={["auto", "webp"]}
                quality={85}
                layout="constrained"
              />
            </div>
          </section>
        </main>
        <footer className="foot">
          <div className="wrap">
            <div>
              <StaticImage
                className="magic-logo"
                src="../../images/magic-jesien/logo.webp"
                alt="MAGIC"
                width={237}
                placeholder="blurred"
                formats={["auto", "webp"]}
                quality={85}
                layout="constrained"
              />
              Marketing Ads Girls Inside Club.
            </div>
            <div className="links">
              <a
                href="https://www.instagram.com/klub.magic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @klub.magic
              </a>
              <a
                href="https://www.instagram.com/adapromis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @adapromis
              </a>
              <a href="#pakiety">Subskrypcje</a>
              <a href="#faq">FAQ</a>
              <a href="/policy/">Polityka prywatności</a>
              <a href="/terms/">Regulamin</a>
            </div>
            <div className="copy">
              © 2026 Slow Marketing Adrianna Promis-Urbas. Wszystkie prawa
              zastrzeżone.
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}
