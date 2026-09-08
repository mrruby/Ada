import React from "react"
import { jesienInstagramLinks } from "values/jesienLanding"

// Wspólne klamry stylistyczne stron jesiennego lejka (/jesien, /jesien-nagranie).

export const wrap = "mx-auto w-full max-w-[1080px] px-[22px]"

export const wrapNarrow = "mx-auto w-full max-w-[760px] px-[22px]"

export const shadowCard = "shadow-[0_18px_44px_rgba(111,45,189,0.14)]"

export const kickerBase =
  "mb-3 font-anton text-[0.92rem] font-normal tracking-[0.22em] uppercase"

export const kicker = `${kickerBase} text-ada-jesienPink`

export const heading =
  "font-anton text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] font-normal tracking-[0.015em] uppercase"

// Przyciski CTA (gradient pink→orange oraz wersja "ghost" na jasnym tle).
const btnBase =
  "inline-block rounded-full text-center font-extrabold tracking-[0.02em] no-underline transition-[translate,scale,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.015] focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ada-jesienPurple motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"

const btnGradient = `${btnBase} bg-linear-93 from-ada-jesienPink from-10% to-ada-jesienOrange to-[110%] text-white hover:shadow-[0_16px_34px_rgba(255,43,157,0.42)]`

export const btnPrimary = `${btnGradient} px-[34px] py-4 text-[1.02rem] shadow-[0_12px_28px_rgba(255,43,157,0.35)]`

// Mniejszy wariant do paska z licznikiem.
export const btnPrimarySmall = `${btnGradient} px-[18px] py-[9px] text-[0.8rem] shadow-[0_8px_18px_rgba(255,43,157,0.28)] max-[560px]:px-3.5 max-[560px]:py-2 max-[560px]:text-[0.72rem]`

export const btnGhost = `${btnBase} border-2 border-ada-jesienInk bg-white px-[34px] py-4 text-[1.02rem] text-ada-jesienInk shadow-[0_10px_26px_rgba(36,26,58,0.16)] hover:shadow-[0_14px_30px_rgba(36,26,58,0.22)]`

// Gatsby przywraca pozycję scrolla przy zmianie hasha, dlatego przewijamy
// ręcznie — tak jak helper Button z sectionId.
export const scrollToSection =
  (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const section = document.getElementById(id)
    if (!section) return
    e.preventDefault()
    section.scrollIntoView({ behavior: "smooth" })
  }

type FloatStarProps = {
  className?: string
  style?: React.CSSProperties
}

export const FloatStar: React.FC<FloatStarProps> = ({
  className = "",
  style,
}) => (
  <span
    className={`pointer-events-none absolute animate-floaty text-[1.4rem] text-ada-jesienPink opacity-50 select-none motion-reduce:animate-none ${className}`}
    style={style}
    aria-hidden="true"
  >
    ✦
  </span>
)

export const JesienFooter = () => (
  <footer className="bg-ada-jesienInk py-[30px] text-[0.85rem] text-ada-jesienPurpleSoft">
    <div
      className={`${wrap} flex flex-wrap items-center justify-end gap-3.5`}
    >
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
