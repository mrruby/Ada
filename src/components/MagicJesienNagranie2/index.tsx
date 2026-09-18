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
} from "../MagicJesien/Content"
import Diagnosis from "../MagicJesien/Diagnosis"
import Story from "../MagicJesien/Story"
import Opinions from "../MagicJesien/Opinions"
import Offer from "../MagicJesien/Offer"
import FAQ from "../MagicJesien/FAQ"
import VideoOpinions from "../MagicJesien/VideoOpinions"
import { Countdown, usePromotion } from "../MagicJesien/promotion"
import "../MagicJesien/styles.css"
import "./styles.css"

const JESIEN_NAGRANIE2_VIDEO_URL =
  "https://www.youtube.com/embed/zD1wvQRif-Q?si=Woo3MSE1Y_RJe18q"

export default function MagicJesienNagranie2() {
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
              {promotionActive
                ? "Cena specjalna + MAGIC Plan do wyczerpania liczby miejsc lub"
                : "Dołącz do MAGIC i rozwijaj swój biznes z naszym zespołem."}
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
            <div className="mx-auto w-full max-w-[880px] px-5 pb-[clamp(2rem,5vw,4rem)] text-center">
              <p className="recording-intro">
                Nagranie masterclassu „Mały budżet, wysoki sezon” o reklamach na
                jesień i zimę tego roku – zabierz zeszyt i rób notatki:
              </p>
              <div className="relative w-full">
                <iframe
                  src={JESIEN_NAGRANIE2_VIDEO_URL}
                  title="Nagranie szkolenia MAGIC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="aspect-video w-full rounded-[14px] border-0 bg-ada-jesienInk"
                />
              </div>
              <h1 className="recording-title">
                Czas na działanie! Dołącz do Magic i odbierz swój Magic Plan
              </h1>
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
