import JesienCountdownBar from "components/JesienCountdownBar"
import {
  FloatStar,
  heading,
  JesienFooter,
  kicker,
  scrollToSection,
  shadowCard,
  wrap,
} from "components/JesienShared"
import { CountdownTiles, useCountdown } from "components/JesienShared/countdown"
import Reveal from "components/JesienShared/Reveal"
import Layout from "components/Layout"
import VimeoFacade from "components/VimeoFacade"
import React from "react"
import {
  JESIEN_DEADLINE,
  JESIEN_DEADLINE_DAY,
  JESIEN_DEADLINE_SHORT,
  JESIEN_DOORS_DATE_LABEL,
  JESIEN_DOORS_DAY,
  JESIEN_DOORS_OPEN,
  JESIEN_NAGRANIE_VIDEO_URL,
  JESIEN_PLAYER_ID,
  jesienNagranieOpinions,
  jesienNagranieSteps,
  jesienNagranieTips,
} from "values/jesienLanding"

const wrapWide = "mx-auto w-full max-w-[820px] px-[22px]"

const scrollToPlayer = scrollToSection(JESIEN_PLAYER_ID)

const tipBorders = [
  "border-ada-jesienPurpleSoft",
  "border-ada-jesienPinkSoft",
  "border-ada-jesienOrangeSoft",
]

const Hero = () => (
  <header className="relative overflow-hidden bg-white pt-[54px] pb-[70px] [background-image:radial-gradient(620px_340px_at_8%_-10%,rgba(247,161,26,0.10),transparent_65%),radial-gradient(680px_380px_at_100%_8%,rgba(255,43,157,0.10),transparent_60%)] max-[920px]:pt-10 max-[920px]:pb-[58px]">
    <FloatStar style={{ top: "10%", left: "4%" }} />
    <FloatStar
      className="text-[1.9rem] text-ada-jesienPurpleSoft"
      style={{ top: "15%", right: "5%", animationDelay: "0.8s" }}
    />
    <FloatStar
      className="text-ada-jesienOrange"
      style={{ top: "56%", left: "7%", animationDelay: "1.6s" }}
    />

    <div className={wrap}>
      <div className="mx-auto mb-[34px] max-w-[800px] text-center">
        <h1 className="mb-[18px] font-anton text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.08] font-normal tracking-[0.012em] uppercase">
          <span className="mb-2.5 block text-[0.42em] tracking-[0.2em] text-ada-jesienPink">
            Twoje szkolenie:
          </span>
          Przygotuj swój lejek{" "}
          <span className="animate-shimmer bg-gradient-to-r from-ada-jesienOrange via-ada-jesienPink to-ada-jesienOrange bg-size-[200%_100%] bg-clip-text whitespace-nowrap text-transparent motion-reduce:animate-none">
            na&nbsp;jesień
          </span>{" "}
          🎬
        </h1>
        <p className="mx-auto max-w-[56ch] text-[1.05rem] text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
          <strong>Brawo, jesteś w środku!</strong> Zanim klikniesz play, trzy
          szybkie wskazówki:
        </p>
      </div>

      <ul className="mx-auto mb-10 grid max-w-[760px] list-none gap-3">
        {jesienNagranieTips.map(({ emoji, content }, index) => (
          <li
            key={emoji}
            className={`flex items-start gap-3 rounded-2xl border-2 bg-white py-3.5 pr-[18px] pl-[15px] text-left text-[0.98rem] shadow-[0_8px_22px_rgba(111,45,189,0.07)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(111,45,189,0.13)] motion-reduce:hover:translate-y-0 ${tipBorders[index % tipBorders.length]}`}
          >
            <span className="text-[1.3rem] leading-[1.3]">{emoji}</span>
            <span className="text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
              {content}
            </span>
          </li>
        ))}
      </ul>

      <div
        id={JESIEN_PLAYER_ID}
        className={`relative mx-auto max-w-[880px] rotate-[0.3deg] scroll-mt-[110px] rounded-[22px] border-[3px] border-ada-jesienPurple bg-white p-[22px] ${shadowCard} max-[560px]:p-3.5`}
      >
        <span className="absolute -top-6 right-[-10px] z-[2] rotate-[7deg] animate-wiggle rounded-lg bg-white px-3.5 py-1.5 font-caveat text-[1.25rem] font-bold text-ada-jesienInk shadow-[0_8px_20px_rgba(36,26,58,0.18)] motion-reduce:animate-none max-[560px]:-top-5 max-[560px]:right-1.5 max-[560px]:text-[1.05rem]">
          oglądaj{" "}
          <em className="text-ada-jesienPink not-italic">
            do {JESIEN_DEADLINE_SHORT}! ⏳
          </em>
        </span>
        <iframe
          src={JESIEN_NAGRANIE_VIDEO_URL}
          title="Szkolenie: Przygotuj swój lejek na jesień"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video w-full rounded-[14px] border-0 bg-ada-jesienInk"
        />
      </div>
    </div>
  </header>
)

const Steps = () => (
  <section className="bg-ada-jesienBlush py-[76px] max-[920px]:py-[60px]">
    <div className={wrap}>
      <Reveal className="mx-auto mb-[34px] max-w-[680px] text-center">
        <p className={kicker}>Po szkoleniu</p>
        <h2 className={heading}>Twoje najważniejsze kroki ✍️</h2>
      </Reveal>

      <ul className="mx-auto mb-[30px] grid max-w-[800px] list-none gap-3.5">
        {jesienNagranieSteps.map(({ emoji, content }, index) => (
          <Reveal
            as="li"
            key={index}
            className={`flex items-start gap-3 rounded-2xl border-2 bg-white py-4 pr-5 pl-4 text-[0.99rem] hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
              index % 3 === 1
                ? "border-ada-jesienPurpleSoft shadow-[0_8px_22px_rgba(111,45,189,0.07)]"
                : "border-ada-jesienPinkSoft shadow-[0_8px_22px_rgba(255,43,157,0.07)]"
            }`}
          >
            <span className="text-[1.25rem] leading-[1.35]">{emoji}</span>
            <span className="text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
              {content}
            </span>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="text-center text-[1.05rem] font-bold">
          A jeśli przy którymkolwiek kroku pojawi się „ale jak to właściwie
          kliknąć?&rdquo; — czytaj dalej. 👇
        </p>
      </Reveal>
    </div>
  </section>
)

const bridgeParagraph =
  "mb-4 text-left text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk"

const Bridge = () => {
  const doorsTimeLeft = useCountdown(JESIEN_DOORS_OPEN)
  const doorsOpen = doorsTimeLeft === false

  return (
    <section className="bg-ada-jesienLavender py-[76px] max-[920px]:py-[60px]">
      <div className={wrap}>
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <p className={kicker}>Co dalej?</p>
            <h2 className={`${heading} mb-4`}>
              Nie musisz wdrażać tego sama 💜
            </h2>
          </Reveal>

          <Reveal>
            <p className={bridgeParagraph}>
              Wiedza ze szkolenia to plan. Ale między planem a wynikami jest
              jeszcze <strong>wdrożenie</strong>: ustawienia, teksty, grafiki,
              budżety, analityka… i te momenty, kiedy kampania robi coś dziwnego
              o 23:00, a Ty już dawno chcesz mieć aktywne reklamy i efekty.
            </p>
            <p className={bridgeParagraph}>
              Dokładnie od tego jest <strong>MAGIC</strong> — społeczność, w
              której przedsiębiorczynie wdrażają reklamy pod okiem{" "}
              <strong>5 specjalistek</strong> (Meta Ads, copywriting, grafika,
              koordynacja kampanii, AI i automatyzacje). Konsultujesz{" "}
              <strong>SWOJE kampanie, teksty i grafiki</strong>, zanim wydasz
              budżet.
            </p>
            <p className={bridgeParagraph}>
              Jesteś na liście oczekujących, więc o otwarciu drzwi do Klubu{" "}
              <strong>dowiesz się pierwsza</strong>.
            </p>
          </Reveal>

          <Reveal>
            <div
              className={`mt-[26px] flex flex-col items-center gap-2.5 rounded-[20px] border-[2.5px] border-ada-jesienPurple bg-white px-[26px] py-[22px] ${shadowCard} max-[560px]:px-4 max-[560px]:py-[18px]`}
            >
              <p className="text-[1.02rem] font-extrabold">
                {doorsOpen ? (
                  <>
                    🚪 Drzwi do{" "}
                    <span className="text-ada-jesienPurple">MAGIC</span> są
                    otwarte! 🎉
                  </>
                ) : (
                  <>
                    🚪 Drzwi do{" "}
                    <span className="text-ada-jesienPurple">MAGIC</span>{" "}
                    otwieramy za:
                  </>
                )}
              </p>
              {!doorsOpen && (
                <CountdownTiles
                  timeLeft={doorsTimeLeft}
                  tileBgClassName="bg-ada-jesienPurple"
                />
              )}
              <p className="text-[0.82rem] text-ada-jesienInkSoft">
                {doorsOpen
                  ? "Sprawdź skrzynkę — czeka tam na Ciebie wiadomość 💌"
                  : JESIEN_DOORS_DATE_LABEL}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const Reviews = () => (
  <section className="bg-white py-[76px] max-[920px]:py-[60px]">
    <div className={wrap}>
      <Reveal className="mx-auto max-w-[680px] text-center">
        <p className={kicker}>Opinie klubowiczek</p>
        <h2 className={heading}>
          Posłuchaj dziewczyn z{" "}
          <span className="text-ada-jesienPink">MAGIC</span> 💜
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-[repeat(2,minmax(0,300px))] justify-center gap-[26px] max-[920px]:grid-cols-[minmax(0,320px)]">
        {jesienNagranieOpinions.map(({ videoId, title }, index) => (
          <Reveal key={videoId}>
            <div
              className={`relative rounded-[22px] border-[3px] bg-white p-3.5 shadow-[0_14px_34px_rgba(255,43,157,0.13)] ${
                index % 2 === 1
                  ? "rotate-[0.7deg] border-ada-jesienPurple"
                  : "-rotate-[0.6deg] border-ada-jesienPink"
              }`}
            >
              <div className="overflow-hidden rounded-[14px] bg-ada-jesienInk">
                <VimeoFacade
                  videoId={videoId}
                  title={title}
                  aspectRatio="9:16"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const Finale = () => (
  <section className="relative overflow-hidden bg-linear-135 from-ada-jesienPurple via-[#A02BD0] via-55% to-ada-jesienPink pt-[84px] pb-[92px] text-center text-white">
    <span
      className="pointer-events-none absolute inset-0 [background-image:radial-gradient(700px_420px_at_12%_0%,rgba(247,161,26,0.22),transparent_60%)]"
      aria-hidden="true"
    />
    <FloatStar
      className="text-ada-jesienPinkSoft opacity-60"
      style={{ top: "12%", left: "7%" }}
    />
    <FloatStar
      className="text-[#ffe3b3] opacity-55"
      style={{ top: "66%", right: "8%", animationDelay: "1.2s" }}
    />

    <div className={`relative ${wrapWide}`}>
      <Reveal>
        <h2 className={`${heading} mb-3 text-white`}>
          ⏳ Obejrzyj, zanim zniknie
        </h2>
      </Reveal>
      <Reveal>
        <p className="mx-auto mb-[34px] max-w-[56ch] text-[1.05rem] text-white/90 [&_strong]:text-white">
          Nagranie w wersji za 0 zł jest dostępne tylko do{" "}
          <strong>{JESIEN_DEADLINE_DAY}, 23:59</strong> — potem trafia do
          płatnej sprzedaży. Zrób sobie kawę, weź notes i kliknij play. ☕
        </p>
      </Reveal>
      <Reveal>
        <a
          href={`#${JESIEN_PLAYER_ID}`}
          onClick={scrollToPlayer}
          className="inline-block rounded-full bg-linear-93 from-ada-jesienPink from-10% to-ada-jesienOrange to-[110%] px-[34px] py-4 text-[1.02rem] font-extrabold tracking-[0.02em] text-white no-underline shadow-[0_12px_28px_rgba(255,43,157,0.35)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_16px_34px_rgba(255,43,157,0.42)] focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
        >
          OGLĄDAM NAGRANIE 🎬
        </a>
      </Reveal>
      <Reveal>
        <p className="mt-[26px] text-[0.92rem] text-white/85 [&_strong]:text-white">
          PS Drzwi do <strong>MAGIC</strong> otwieramy{" "}
          <strong>{JESIEN_DOORS_DAY}</strong> — jesteś na liście oczekujących,
          więc dowiesz się pierwsza. 👀
        </p>
      </Reveal>
    </div>
  </section>
)

const JesienNagranie = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <div className="w-full bg-white font-montserrat text-[16.5px] leading-[1.65] text-ada-jesienInk antialiased max-[560px]:text-[15.5px]">
        <JesienCountdownBar
          targetDate={JESIEN_DEADLINE}
          label={
            <>
              ⏳ Nagranie{" "}
              <strong className="text-ada-jesienPink">zniknie za:</strong>
            </>
          }
          subline={
            <>
              <strong>{JESIEN_DEADLINE_DAY} o 23:59</strong> szkolenie trafia do
              płatnej sprzedaży. Teraz oglądasz je za 0 zł.
            </>
          }
        />
        <Hero />
        <Steps />
        <Bridge />
        <Reviews />
        <Finale />
        <JesienFooter />
      </div>
    </Layout>
  )
}

export default JesienNagranie
