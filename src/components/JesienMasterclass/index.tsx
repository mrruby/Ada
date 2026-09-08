import JesienCountdownBar from "components/JesienCountdownBar"
import JesienSignupForm from "components/JesienSignupForm"
import {
  btnGhost,
  btnPrimary,
  btnPrimarySmall,
  FloatStar,
  heading,
  JesienFooter,
  kicker,
  kickerBase,
  scrollToSection,
  shadowCard,
  wrap,
} from "components/JesienShared"
import Reveal from "components/JesienShared/Reveal"
import Layout from "components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  JESIEN_MASTERCLASS_DATE_SHORT,
  JESIEN_MASTERCLASS_DAY,
  JESIEN_MASTERCLASS_FINALE_FORM_ID,
  JESIEN_MASTERCLASS_HERO_FORM_ID,
  JESIEN_MASTERCLASS_START,
  JESIEN_MASTERCLASS_TIME,
  JESIEN_MASTERCLASS_WEEKDAY,
  jesienMasterclassChecks,
  jesienMasterclassGains,
  jesienMasterclassHosts,
  jesienMasterclassPains,
  jesienMasterclassWhoCards,
} from "values/jesienMasterclass"
import masterclassFormHTML from "../../values/forms/form-jesien-masterclass.html"

const closing =
  "mx-auto mt-[34px] max-w-[56ch] text-center text-[1.12rem] font-bold"

const formTitle = "Wpisz dane i zajmij miejsce 👇"

const scrollToHeroForm = scrollToSection(JESIEN_MASTERCLASS_HERO_FORM_ID)
const scrollToFinaleForm = scrollToSection(JESIEN_MASTERCLASS_FINALE_FORM_ID)

const gainBorders = [
  "border-ada-jesienPurpleSoft",
  "border-ada-jesienPinkSoft",
  "border-ada-jesienOrangeSoft",
]

const Hero = () => (
  <header className="relative overflow-hidden bg-white pt-14 pb-[78px] [background-image:radial-gradient(620px_340px_at_8%_-10%,rgba(247,161,26,0.10),transparent_65%),radial-gradient(680px_380px_at_100%_8%,rgba(255,43,157,0.10),transparent_60%)] max-[920px]:pt-[42px] max-[920px]:pb-[62px]">
    <FloatStar style={{ top: "9%", left: "4%" }} />
    <FloatStar
      className="text-[1.9rem] text-ada-jesienPurpleSoft"
      style={{ top: "16%", right: "5%", animationDelay: "0.8s" }}
    />

    <div className={wrap}>
      <div className="grid grid-cols-[1.04fr_0.96fr] items-start gap-x-14 gap-y-[26px] max-[920px]:grid-cols-1 max-[920px]:gap-[30px]">
        <div className="min-[921px]:col-start-1 min-[921px]:row-start-1">
          <span className="mb-[22px] inline-block rounded-full border-[1.5px] border-ada-jesienPinkSoft bg-ada-jesienBlush px-4 py-[7px] text-[0.8rem] font-bold tracking-[0.05em] text-ada-jesienInk">
            🔮 MASTERCLASS NA ŻYWO · {JESIEN_MASTERCLASS_WEEKDAY}{" "}
            {JESIEN_MASTERCLASS_DATE_SHORT} · {JESIEN_MASTERCLASS_TIME} · 1,5 h
          </span>
          <h1 className="mb-2.5 font-anton text-[clamp(2.6rem,5.4vw,4.2rem)] leading-[1.04] font-normal tracking-[0.012em] uppercase">
            Mały budżet,{" "}
            <span className="bg-linear-93 from-ada-jesienOrange to-ada-jesienPink bg-clip-text text-transparent">
              wysoki sezon
            </span>{" "}
            <span className="inline-block -translate-y-[0.35em] text-[0.55em] text-ada-jesienPink">
              ✦
            </span>
          </h1>
          <p className="mb-5 text-[clamp(1.15rem,2.2vw,1.45rem)] leading-[1.3] font-extrabold text-ada-jesienPurple">
            Ułóż reklamy na jesień i zimę 2026 - od 30 zł dziennie
          </p>
          <p className="mb-3.5 max-w-[52ch] text-[1.05rem] text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
            W 90 minut pokażę Ci,{" "}
            <strong>które reklamy przestały działać</strong> (chociaż pół roku
            temu jeszcze dowoziły), co włączyć zamiast nich i jak ułożyć
            kampanię na cały sezon przy małym budżecie.
          </p>
        </div>

        <div className="min-[921px]:col-start-1 min-[921px]:row-start-2">
          <JesienSignupForm
            id={JESIEN_MASTERCLASS_HERO_FORM_ID}
            className="scroll-mt-[100px]"
            title={formTitle}
            formHTML={masterclassFormHTML}
            sticker={
              <>
                na żywo{" "}
                <em>
                  {JESIEN_MASTERCLASS_DATE_SHORT}, {JESIEN_MASTERCLASS_TIME}
                </em>
              </>
            }
            microcopy="Link do spotkania wyląduje na Twojej skrzynce w kilka minut. Po masterclassie dostaniesz nagranie - dostępne przez ograniczony czas. 😉"
          />
        </div>

        <div className="self-center rotate-[1deg] max-[920px]:mx-auto max-[920px]:w-full max-[920px]:max-w-[360px] min-[921px]:col-start-2 min-[921px]:row-span-2 min-[921px]:row-start-1">
          <StaticImage
            src="../../images/jesien-masterclass-hero-ada.webp"
            alt="Adrianna Promis-Urbas przy biurku z laptopem"
            placeholder="blurred"
            loading="eager"
            className={`w-full rounded-[26px] ${shadowCard}`}
            imgClassName="rounded-[26px]"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  </header>
)

const Pains = () => (
  <section className="bg-ada-jesienLavender py-[78px] max-[920px]:py-[62px]">
    <div className={wrap}>
      <Reveal className="text-center">
        <p className={kicker}>Rozpoznajesz to?</p>
        <h2 className={`${heading} mb-3.5`}>
          Sprawdź, czy to <span className="text-ada-jesienPink">o Tobie</span>{" "}
          👇
        </h2>
      </Reveal>

      <div className="mt-[34px] grid grid-cols-2 gap-5 max-[920px]:grid-cols-1">
        {jesienMasterclassPains.map(({ emoji, content }, index) => (
          <Reveal
            key={emoji}
            className={`flex items-start gap-3.5 rounded-[18px] border-[2.5px] bg-white px-[22px] py-6 ${
              index % 2 === 1
                ? "border-ada-jesienPinkSoft shadow-[0_12px_30px_rgba(255,43,157,0.08)]"
                : "border-ada-jesienPurpleSoft shadow-[0_12px_30px_rgba(111,45,189,0.08)]"
            }`}
          >
            <span className="text-[1.8rem] leading-[1.2]">{emoji}</span>
            <p className="text-[0.97rem] text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
              {content}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className={closing}>
          Jeśli kiwasz głową przy chociaż jednym punkcie -{" "}
          <strong>{JESIEN_MASTERCLASS_DAY} widzimy się na żywo. 💜</strong>
        </p>
      </Reveal>
      <Reveal className="mt-9 text-center">
        <a
          href={`#${JESIEN_MASTERCLASS_HERO_FORM_ID}`}
          onClick={scrollToHeroForm}
          className={btnPrimary}
        >
          ZAPISUJĘ SIĘ ZA 0 ZŁ 🔮
        </a>
      </Reveal>
    </div>
  </section>
)

const Gains = () => (
  <section className="py-[78px] max-[920px]:py-[62px]">
    <div className={wrap}>
      <Reveal>
        <p className={kicker}>Z czym wyjdziesz</p>
        <h2 className={`${heading} mb-3.5`}>
          Po tych 90 minutach{" "}
          <span className="text-ada-jesienPink">wiesz:</span>
        </h2>
      </Reveal>

      <div className="mt-[30px] grid grid-cols-[1.15fr_0.85fr] items-center gap-12 max-[920px]:grid-cols-1 max-[920px]:gap-[34px]">
        <div>
          <ul className="grid max-w-[820px] list-none gap-3.5">
            {jesienMasterclassGains.map((content, index) => (
              <Reveal
                as="li"
                key={index}
                className={`flex items-start gap-[13px] rounded-2xl border-2 bg-white py-[18px] pr-5 pl-[18px] text-[1rem] shadow-[0_8px_22px_rgba(111,45,189,0.07)] ${gainBorders[index % gainBorders.length]}`}
              >
                <span className="text-[1.35rem] leading-[1.3]">✨</span>
                <span className="text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
                  {content}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div
              className={`relative mt-[22px] max-w-[820px] rounded-[20px] border-[2.5px] border-ada-jesienPink bg-ada-jesienBlush px-[26px] py-[22px] text-[1.02rem] ${shadowCard} [&_strong]:text-ada-jesienPink`}
            >
              Na spokojnie, po ludzku i z konkretem. Wychodzisz z listą rzeczy,
              które{" "}
              <strong>ustawiasz i wyłączasz jeszcze w tym tygodniu.</strong> 😎
            </div>
          </Reveal>
        </div>

        <Reveal className="w-full max-w-[420px] justify-self-end max-[920px]:max-w-[340px] max-[920px]:justify-self-center">
          <div
            className={`-rotate-[1.2deg] overflow-hidden rounded-[26px] ${shadowCard}`}
          >
            <StaticImage
              src="../../images/jesien-masterclass-ada-laptop.webp"
              alt="Adrianna Promis-Urbas z laptopem na kolanach, w pozie medytacji"
              placeholder="blurred"
              className="w-full"
              objectFit="cover"
            />
            <div className="relative mr-[18px] -mt-[30px] ml-auto w-max max-w-[90%] rotate-[2deg] rounded-[10px] bg-white px-4 py-2 font-caveat text-[1.3rem] font-bold text-ada-jesienInk shadow-[0_8px_20px_rgba(36,26,58,0.18)]">
              reklamy?{" "}
              <em className="text-ada-jesienPink not-italic">ogarnięte ✦</em>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
)

const hostPhotoClassName = "h-full w-full"

const hostPhotos: Record<string, React.ReactNode> = {
  ada: (
    <StaticImage
      src="../../images/m1.webp"
      alt="Adrianna Promis-Urbas"
      width={300}
      height={300}
      placeholder="blurred"
      className={hostPhotoClassName}
      objectFit="cover"
    />
  ),
  nicola: (
    <StaticImage
      src="../../images/m4.webp"
      alt="Nicola Kut"
      width={300}
      height={300}
      placeholder="blurred"
      className={hostPhotoClassName}
      objectFit="cover"
    />
  ),
}

const Hosts = () => (
  <section className="bg-white py-[78px] max-[920px]:py-[62px]">
    <div className={wrap}>
      <Reveal className="text-center">
        <p className={kicker}>Kto prowadzi</p>
        <h2 className={`${heading} mb-3.5`}>
          Kto siedzi po drugiej stronie{" "}
          <span className="text-ada-jesienPink">ekranu</span> 👋
        </h2>
      </Reveal>

      <div className="mt-[38px] grid grid-cols-2 items-start gap-7 max-[920px]:grid-cols-1">
        {jesienMasterclassHosts.map(({ photo, name, role, bio }, index) => (
          <Reveal
            key={name}
            className={`rounded-[26px] px-7 pt-7 pb-[30px] shadow-[0_12px_30px_rgba(111,45,189,0.08)] ${
              index % 2 === 1 ? "bg-ada-jesienBlush" : "bg-ada-jesienLavender"
            }`}
          >
            <div className="mb-[18px] h-[150px] w-[150px] overflow-hidden rounded-full border-4 border-white bg-ada-jesienPurpleSoft shadow-[0_12px_26px_rgba(36,26,58,0.18)]">
              {hostPhotos[photo]}
            </div>
            <p className="text-[1.4rem] leading-[1.2] font-extrabold">{name}</p>
            <p className="mt-1 mb-4 text-[0.95rem] font-bold text-ada-jesienPurple">
              {role}
            </p>
            <p className="text-[0.98rem] text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
              {bio}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const Who = () => (
  <section className="relative overflow-hidden bg-linear-135 from-ada-jesienPurple via-[#A02BD0] via-55% to-ada-jesienPink pt-[70px] pb-20 text-white">
    <span
      className="pointer-events-none absolute inset-0 [background-image:radial-gradient(700px_420px_at_12%_0%,rgba(247,161,26,0.22),transparent_60%)]"
      aria-hidden="true"
    />
    <FloatStar
      className="text-ada-jesienPinkSoft opacity-60"
      style={{ top: "6%", right: "6%" }}
    />

    <div className={`relative ${wrap}`}>
      <Reveal>
        <p className={`${kickerBase} text-ada-jesienPinkSoft`}>Dla kogo</p>
        <h2 className={`${heading} mb-3.5 text-white`}>
          Dla kogo jest ten masterclass? 💜
        </h2>
        <p className="mb-[26px] text-[1.08rem] text-white/90 [&_strong]:text-white">
          Dla{" "}
          <strong>
            przedsiębiorczyń, które prowadzą mały biznes i same ogarniają jego
            marketing.
          </strong>
        </p>
      </Reveal>

      <div className="mb-[26px] grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
        {jesienMasterclassWhoCards.map(({ emoji, title, content }) => (
          <Reveal
            key={emoji}
            className="rounded-[20px] border-[1.5px] border-white/35 bg-white/12 px-[22px] py-6 backdrop-blur-[6px]"
          >
            <span className="mb-3 block text-[2rem] leading-none">{emoji}</span>
            <p className="text-[0.95rem] text-white/90">
              <strong className="mb-1.5 block text-[1.02rem] text-white">
                {title}
              </strong>
              {content}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mb-3.5 text-[1.05rem] font-extrabold text-white">
          Do tego:
        </p>
      </Reveal>
      <ul className="grid max-w-[960px] list-none grid-cols-2 gap-x-6 gap-y-3.5 max-[920px]:grid-cols-1">
        {jesienMasterclassChecks.map((content, index) => (
          <Reveal
            as="li"
            key={index}
            className="flex items-start gap-2.5 rounded-2xl bg-ada-jesienInk/28 px-[18px] py-4 text-[0.95rem] text-white/90 [&_strong]:text-white"
          >
            <span className="text-[1.1rem]">✅</span>
            <span>{content}</span>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className={`${closing} mt-9 text-white`}>
          Jeśli w którymś punkcie zobaczyłaś siebie - {JESIEN_MASTERCLASS_DAY} o{" "}
          {JESIEN_MASTERCLASS_TIME} czekamy na Ciebie na żywo. 🔮
        </p>
      </Reveal>
      <Reveal className="mt-[22px] text-center">
        <a
          href={`#${JESIEN_MASTERCLASS_FINALE_FORM_ID}`}
          onClick={scrollToFinaleForm}
          className={btnGhost}
        >
          TO O MNIE - ZAPISUJĘ SIĘ ZA 0 ZŁ
        </a>
      </Reveal>

      <Reveal>
        <JesienSignupForm
          id={JESIEN_MASTERCLASS_FINALE_FORM_ID}
          variant="finale"
          className="mx-auto mt-11 max-w-[560px] scroll-mt-[100px] text-ada-jesienInk"
          title={formTitle}
          formHTML={masterclassFormHTML}
          sticker={
            <>
              {JESIEN_MASTERCLASS_WEEKDAY}{" "}
              <em>
                {JESIEN_MASTERCLASS_DATE_SHORT}, {JESIEN_MASTERCLASS_TIME}
              </em>
            </>
          }
          microcopy={`Mail z linkiem przyjdzie w ciągu kilku minut. Do zoba ${JESIEN_MASTERCLASS_DATE_SHORT}! 👋`}
        />
      </Reveal>
    </div>
  </section>
)

const JesienMasterclass = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <div className="w-full bg-white font-montserrat text-[16.5px] leading-[1.65] text-ada-jesienInk antialiased max-[560px]:text-[15.5px]">
        <JesienCountdownBar
          targetDate={JESIEN_MASTERCLASS_START}
          ariaLabel="Odliczanie do masterclassu"
          spacerClassName="h-[58px] max-[714px]:h-[107px] max-[560px]:h-[92px] max-[360px]:h-[117px]"
          label={<>⏳ Do masterclassu zostało:</>}
          expiredLabel={
            <>
              🔴 <strong className="text-ada-jesienPink">Zaczynamy!</strong>{" "}
              Link do spotkania masz w mailu
            </>
          }
          cta={
            <a
              href={`#${JESIEN_MASTERCLASS_HERO_FORM_ID}`}
              onClick={scrollToHeroForm}
              className={btnPrimarySmall}
            >
              ZAPISUJĘ SIĘ ZA 0 ZŁ 🔮
            </a>
          }
        />
        <Hero />
        <Pains />
        <Gains />
        <Hosts />
        <Who />
        <JesienFooter />
      </div>
    </Layout>
  )
}

export default JesienMasterclass
