import React from "react"

type StarBadgeVariant = "yellow" | "pink"

const BADGE_MASK_URL = "/assets/magic-special-star.svg"

interface StarBadgeProps {
  label: string
  variant: StarBadgeVariant
  className?: string
  sizeClassName?: string
  labelClassName?: string
}

const badgeFills: Record<StarBadgeVariant, string> = {
  yellow: "#FFB000",
  pink: "#F8DCEC",
}

const StarBadge = ({
  label,
  variant,
  className = "",
  sizeClassName = "h-[92px] w-[92px] md:h-[100px] md:w-[100px]",
  labelClassName = "max-w-[64px] text-[14px] md:text-[16px]",
}: StarBadgeProps) => {
  const badgeMaskStyle = {
    backgroundColor: badgeFills[variant],
    WebkitMaskImage: `url("${BADGE_MASK_URL}")`,
    maskImage: `url("${BADGE_MASK_URL}")`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    filter: "drop-shadow(0 10px 16px rgba(0,0,0,0.14))",
  }

  return (
    <div className={`pointer-events-none absolute z-10 ${className}`}>
      <div
        className={`relative flex items-center justify-center ${sizeClassName}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={badgeMaskStyle}
        />
        <span
          className={`relative z-10 whitespace-pre-line px-3 text-center font-montserrat font-extrabold leading-[0.88] tracking-[-0.04em] text-black ${labelClassName}`}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

export default StarBadge
