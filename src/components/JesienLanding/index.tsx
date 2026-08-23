import JesienCountdownBar from "components/JesienCountdownBar"
import JesienSignupForm from "components/JesienSignupForm"
import Layout from "components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  JESIEN_DEADLINE,
  JESIEN_DEADLINE_DAY,
  JESIEN_DEADLINE_SHORT,
  JESIEN_FINALE_ID,
  JESIEN_HERO_FORM_ID,
  JESIEN_PAID_FROM_DAY,
  jesienGets,
  jesienInstagramLinks,
  jesienMagicCards,
} from "values/jesienLanding"
import Reveal from "./Reveal"

type FloatStarProps = {
  className?: string
  style?: React.CSSProperties
}

const wrap = "mx-auto w-full max-w-[1080px] px-[22px]"

const wrapNarrow = "mx-auto w-full max-w-[760px] px-[22px]"

const shadowCard = "shadow-[0_18px_44px_rgba(111,45,189,0.14)]"

const kicker =
  "mb-3 font-anton text-[0.92rem] font-normal tracking-[0.22em] uppercase text-ada-jesienPink"

const heading =
  "font-anton text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] font-normal tracking-[0.015em] uppercase"

const bioParagraph =
  "mb-[15px] text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk"

// Gatsby przywraca pozycję scrolla przy zmianie hasha, dlatego przewijamy
// ręcznie — tak jak helper Button z sectionId.
const scrollToFinale = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const section = document.getElementById(JESIEN_FINALE_ID)
  if (!section) return
  e.preventDefault()
  section.scrollIntoView({ behavior: "smooth" })
}

const FloatStar: React.FC<FloatStarProps> = ({ className = "", style }) => (
  <span
    className={`pointer-events-none absolute animate-floaty text-[1.4rem] text-ada-jesienPink opacity-50 select-none motion-reduce:animate-none ${className}`}
    style={style}
    aria-hidden="true"
  >
    ✦
  </span>
)

const Hero = () => (
  <header className="relative overflow-hidden bg-white pt-[52px] pb-[74px] [background-image:radial-gradient(620px_340px_at_8%_-10%,rgba(247,161,26,0.10),transparent_65%),radial-gradient(680px_380px_at_100%_8%,rgba(255,43,157,0.10),transparent_60%)] max-[920px]:pt-10 max-[920px]:pb-[60px]">
    <FloatStar style={{ top: "9%", left: "4%" }} />
    <FloatStar
      className="text-[1.9rem] text-ada-jesienPurpleSoft"
      style={{ top: "16%", right: "5%", animationDelay: "0.8s" }}
    />
    <FloatStar
      className="text-ada-jesienOrange"
      style={{ top: "70%", left: "47%", animationDelay: "1.6s" }}
    />

    <div className={wrap}>
      <div className="grid grid-cols-[1.04fr_0.96fr] items-start gap-x-14 gap-y-[26px] max-[920px]:grid-cols-1 max-[920px]:gap-7">
        <div className="min-[921px]:col-start-1 min-[921px]:row-start-1">
          <span className="mb-[22px] inline-block rounded-full border-[1.5px] border-ada-jesienPinkSoft bg-ada-jesienBlush px-4 py-[7px] text-[0.8rem] font-bold tracking-[0.05em] text-ada-jesienInk">
            🔥 SZKOLENIE ZA 0 ZŁ • po {JESIEN_DEADLINE_SHORT} trafia do płatnej
            sprzedaży
          </span>
          <h1 className="mb-[18px] font-anton text-[clamp(2.5rem,5vw,3.9rem)] leading-[1.04] font-normal tracking-[0.012em] uppercase">
            Przygotuj swoje reklamy{" "}
            <span className="animate-shimmer bg-gradient-to-r from-ada-jesienOrange via-ada-jesienPink to-ada-jesienOrange bg-size-[200%_100%] bg-clip-text whitespace-nowrap text-transparent motion-reduce:animate-none">
              na&nbsp;jesień
            </span>{" "}
            <span className="inline-block -translate-y-[0.35em] text-[0.55em] text-ada-jesienPink">
              ✦
            </span>
          </h1>
          <p className="max-w-[52ch] text-[1.05rem] text-ada-jesienInkSoft [&_strong]:text-ada-jesienInk">
            Nagranie szkolenia, po którym wiesz dokładnie,{" "}
            <strong>co ustawić w reklamach już teraz</strong>, żeby wrzesień,
            Black Friday i święta pracowały na Twoją sprzedaż&nbsp;-{" "}
            <strong>nawet z budżetem 20-30 złotych dziennie</strong>.
          </p>
        </div>

        <div className="self-start rotate-[1deg] max-[920px]:mx-auto max-[920px]:w-full max-[920px]:max-w-[400px] min-[921px]:col-start-2 min-[921px]:row-span-2 min-[921px]:row-start-1">
          <StaticImage
            src="../../images/jesien-hero-ada.webp"
            alt="Adrianna Promis-Urbas z laptopem wskazuje w górę"
            placeholder="blurred"
            loading="eager"
            className={`w-full rounded-[26px] ${shadowCard}`}
            imgClassName="rounded-[26px]"
            objectFit="cover"
          />
        </div>

        <div className="min-[921px]:col-start-1 min-[921px]:row-start-2">
          <JesienSignupForm
            id={JESIEN_HERO_FORM_ID}
            className="scroll-mt-[100px]"
            sticker={
              <>
                za 0 zł <em>tylko do {JESIEN_DEADLINE_SHORT}!</em>
              </>
            }
            microcopy={`Link do nagrania od razu ląduje na Twojej skrzynce. Oglądasz do ${JESIEN_DEADLINE_SHORT} — potem szkolenie staje się płatne.`}
          />
        </div>

        <div className="mx-auto mt-[26px] w-full max-w-[760px] min-[921px]:col-span-2">
          <p className="mb-3 text-center text-[1.02rem] font-extrabold">
            Zapisując się, odbierasz:
          </p>
          <ul className="grid list-none gap-3">
            {jesienGets.map(({ emoji, content }, index) => (
              <li
                key={emoji}
                className={`flex items-start gap-[11px] rounded-2xl border-2 bg-white py-[13px] pr-4 pl-3.5 text-[0.98rem] shadow-[0_8px_22px_rgba(111,45,189,0.07)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(111,45,189,0.13)] motion-reduce:hover:translate-y-0 ${
                  index % 2 === 1
                    ? "border-ada-jesienPinkSoft"
                    : "border-ada-jesienPurpleSoft"
                }`}
              >
                <span className="text-[1.25rem] leading-[1.3]">{emoji}</span>
                <span>{content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </header>
)

const AboutAda = () => (
  <section className="bg-ada-jesienLavender py-[78px] max-[920px]:py-[62px]">
    <div className={wrap}>
      <div className="grid grid-cols-[0.82fr_1.18fr] items-center gap-[54px] max-[920px]:grid-cols-1 max-[920px]:gap-[38px]">
        <Reveal className="max-[920px]:mx-auto max-[920px]:w-full max-[920px]:max-w-[380px]">
          <div
            className={`-rotate-[1.2deg] overflow-hidden rounded-[26px] ${shadowCard}`}
          >
            <StaticImage
              src="../../images/jesien-ada-bio.webp"
              alt="Adrianna Promis-Urbas"
              placeholder="blurred"
              className="w-full"
              objectFit="cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <p className={kicker}>Kto za tym stoi?</p>
          <h2 className={`${heading} mb-3.5`}>Cześć, tu Ada! 👋</h2>
          <p className="mt-[18px] mb-0.5 text-[1.45rem] font-extrabold">
            Adrianna Promis-Urbas
          </p>
          <p className="mb-[18px] text-[1rem] font-bold text-ada-jesienPurple">
            Specjalistka od kampanii reklamowych z 10-letnim doświadczeniem
          </p>
          <p className={bioParagraph}>
            Specjalizuję się w przekształcaniu chaotycznych działań
            marketingowych w precyzyjne systemy generujące przewidywalne wyniki,
            nawet w niepewnych warunkach rynkowych.
          </p>
          <p className={bioParagraph}>
            Prowadzę <strong>MAGIC</strong> — klub, w którym przedsiębiorczynie
            tworzą skuteczne reklamy. Reklamy moich Klubowiczek potrafią{" "}
            <strong>z 236,99 zł zrobić ponad 9 461 zł sprzedaży</strong> z
            jednej kampanii lub pozyskać{" "}
            <strong>ponad tysiąc wartościowych kontaktów</strong> z budżetem
            kilka stówek miesięcznie!
          </p>
          <p className={bioParagraph}>
            To szkolenie nagrałam, bo co roku widzę to samo: zbyt często
            przypominamy sobie o reklamach w ostatnim momencie, bez planu -
            kiedy stawki są najwyższe, a miejsca w reklamach za mało.{" "}
            <strong>
              W tym roku chcę, żebyś to Ty była przygotowana, niczym jesieniary
              na Pumpkin Spice Latte! 🍂
            </strong>
          </p>
        </Reveal>
      </div>
    </div>
  </section>
)

const MagicSection = () => (
  <section className="py-[78px] max-[920px]:py-[62px]">
    <div className={wrap}>
      <Reveal>
        <p className={kicker}>Czym jest MAGIC?</p>
        <h2 className={`${heading} mb-3.5 max-w-[22ch]`}>
          <span className="text-ada-jesienPink">MAGIC</span> to Twój zespół od
          reklam ✨
        </h2>
        <p className="mb-[18px] text-[1.05rem] font-bold text-ada-jesienInkSoft">
          bez etatu i bez faktur od agencji
        </p>
        <p className="mb-[34px] max-w-[62ch] text-ada-jesienInkSoft">
          Społeczność kobiet, które skalują swoje biznesy z pomocą reklam, AI i
          automatyzacji — pod czujnym okiem specjalistek. W środku:
        </p>
      </Reveal>

      <div className="mb-[38px] grid grid-cols-2 gap-5 max-[920px]:grid-cols-1">
        {jesienMagicCards.map(({ emoji, content }, index) => (
          <Reveal key={emoji}>
            <div
              className={`flex h-full items-start gap-3.5 rounded-[18px] border-[2.5px] bg-white px-[22px] py-6 transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
                index % 2 === 1
                  ? "border-ada-jesienPinkSoft shadow-[0_12px_30px_rgba(255,43,157,0.08)]"
                  : "border-ada-jesienPurpleSoft shadow-[0_12px_30px_rgba(111,45,189,0.08)]"
              }`}
            >
              <span className="text-[1.7rem] leading-[1.2]">{emoji}</span>
              <p className="text-[0.97rem]">{content}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div
          className={`relative mx-auto mb-[34px] max-w-[860px] rounded-[20px] border-[2.5px] border-ada-jesienPink bg-ada-jesienBlush px-7 py-[26px] text-[1.02rem] ${shadowCard}`}
        >
          Zapisując się na tej stronie, trafiasz na{" "}
          <strong className="text-ada-jesienInk">
            listę oczekujących MAGIC
          </strong>
          : dowiesz się pierwsza, kiedy otwieramy drzwi do Klubu oraz
          otrzymujesz dodatkowe bonusy na start, takie jak{" "}
          <strong className="text-ada-jesienPink">MAGIC Plan</strong> -
          personalizowany plan na Twoje reklamy, wraz ze spotkaniem 1:1&nbsp;👀
        </div>
      </Reveal>

      <Reveal className="text-center">
        <a
          href={`#${JESIEN_FINALE_ID}`}
          onClick={scrollToFinale}
          className="inline-block rounded-full border-2 border-ada-jesienInk bg-white px-[34px] py-4 text-center text-[1.02rem] font-extrabold tracking-[0.02em] text-ada-jesienInk no-underline shadow-[0_10px_26px_rgba(36,26,58,0.16)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_14px_30px_rgba(36,26,58,0.22)] focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ada-jesienPurple motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
        >
          TAK, CHCĘ TO WSZYSTKO! 🚀
        </a>
      </Reveal>
    </div>
  </section>
)

const Reviews = () => (
  <section className="bg-white pt-16 pb-[78px] max-[920px]:pb-[62px]">
    <div className={wrap}>
      <Reveal className="mx-auto max-w-[640px] text-center">
        <p className={kicker}>Opinie klubowiczek</p>
        <h2 className={`${heading} mb-3.5`}>
          One już działają z <span className="text-ada-jesienPink">MAGIC</span>{" "}
          💜
        </h2>
      </Reveal>

      <div className="mt-9 grid grid-cols-3 items-start gap-x-3.5 max-[920px]:mx-auto max-[920px]:max-w-[540px] max-[920px]:grid-cols-1">
        <div className="flex flex-col">
          <StaticImage
            src="../../images/magic_reference_sell_4.webp"
            alt="Opinia klubowiczki MAGIC: Magda Sikorska"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_6.webp"
            alt="Opinia klubowiczki MAGIC: Aleksandra Ziober"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_7.webp"
            alt="Opinia klubowiczki MAGIC: Paulina"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_8.webp"
            alt="Opinia klubowiczki MAGIC: Jadzia Lenart"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
        </div>
        <div className="flex flex-col">
          <StaticImage
            src="../../images/magic_reference_sell_3.webp"
            alt="Opinia klubowiczki MAGIC: Paulina Leopold"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_10.webp"
            alt="Opinia klubowiczki MAGIC: Agnieszka"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_1.webp"
            alt="Opinia klubowiczki MAGIC: Agnieszka Sosik-Grzyb"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_12.webp"
            alt="Opinia klubowiczki MAGIC: Iza"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
        </div>
        <div className="flex flex-col">
          <StaticImage
            src="../../images/magic_reference_sell_5.webp"
            alt="Opinia klubowiczki MAGIC: Angelika Woźniak"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_martyna_zmuda.webp"
            alt="Opinia klubowiczki MAGIC: Martyna Żmuda"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_9.webp"
            alt="Opinia klubowiczki MAGIC: Daria Cichoracka"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
          <StaticImage
            src="../../images/magic_reference_sell_2.webp"
            alt="Opinia klubowiczki MAGIC: Zuza Rygielska"
            placeholder="blurred"
            quality={75}
            width={400}
            className="w-full"
          />
        </div>
      </div>
    </div>
  </section>
)

const Finale = () => (
  <section
    id={JESIEN_FINALE_ID}
    className="relative scroll-mt-[60px] overflow-hidden bg-linear-135 from-ada-jesienPurple via-[#A02BD0] via-55% to-ada-jesienPink pt-[88px] pb-24 text-white"
  >
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
      style={{ top: "68%", right: "8%", animationDelay: "1.2s" }}
    />

    <div className={`relative ${wrapNarrow}`}>
      <Reveal>
        <h2 className={`${heading} mb-2.5 text-center text-white`}>
          ⏳ Do {JESIEN_DEADLINE_DAY}: 0 zł.
          <br />
          Od {JESIEN_PAID_FROM_DAY}: płatne.
        </h2>
      </Reveal>
      <Reveal>
        <p className="mx-auto mb-10 max-w-[56ch] text-center text-[1.05rem] text-white/90 [&_strong]:text-white">
          Nagranie w wersji za 0 zł znika{" "}
          <strong>{JESIEN_DEADLINE_DAY} o 23:59</strong>. Odbierz je teraz i
          wejdź w jesień z gotowym planem.
        </p>
      </Reveal>

      <Reveal>
        <JesienSignupForm
          variant="finale"
          className="mx-auto max-w-[560px]"
          sticker={
            <>
              zostało niewiele <em>czasu ⏳</em>
            </>
          }
          microcopy="Mail z linkiem przyjdzie w ciągu kilku minut! 😉"
        />
      </Reveal>
    </div>
  </section>
)

const JesienFooter = () => (
  <footer className="bg-ada-jesienInk py-[30px] text-[0.85rem] text-ada-jesienPurpleSoft">
    <div
      className={`${wrap} flex flex-wrap items-center justify-between gap-3.5`}
    >
      <span className="font-caveat text-[1.7rem] text-white">
        <b className="text-ada-jesienPink">Magic</b> ✦
      </span>
      <span className="flex gap-[18px]">
        {jesienInstagramLinks.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white no-underline transition-colors hover:text-ada-jesienPinkSoft"
          >
            {label}
          </a>
        ))}
      </span>
    </div>
  </footer>
)

const JesienLanding = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <div className="w-full bg-white font-montserrat text-[16px] leading-[1.65] text-ada-jesienInk antialiased max-[560px]:text-[15px]">
        <JesienCountdownBar targetDate={JESIEN_DEADLINE} />
        <Hero />
        <AboutAda />
        <MagicSection />
        <Reviews />
        <Finale />
        <JesienFooter />
      </div>
    </Layout>
  )
}

export default JesienLanding
