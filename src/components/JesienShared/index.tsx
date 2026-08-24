import React from "react"
import { jesienInstagramLinks } from "values/jesienLanding"

// Wspólne klamry stylistyczne stron jesiennego lejka (/jesien, /jesien-nagranie).

export const wrap = "mx-auto w-full max-w-[1080px] px-[22px]"

export const wrapNarrow = "mx-auto w-full max-w-[760px] px-[22px]"

export const shadowCard = "shadow-[0_18px_44px_rgba(111,45,189,0.14)]"

export const kicker =
  "mb-3 font-anton text-[0.92rem] font-normal tracking-[0.22em] uppercase text-ada-jesienPink"

export const heading =
  "font-anton text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12] font-normal tracking-[0.015em] uppercase"

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
