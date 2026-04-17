import React from "react"

interface StarBadgeProps {
  label: string
  color: string
  className?: string
}

const StarBadge = ({ label, color, className = "" }: StarBadgeProps) => {
  return (
    <div
      className={`absolute z-10 flex items-center justify-center ${className}`}
      style={{ width: "100px", height: "100px" }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full"
        style={{ filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.15))" }}
      >
        <path
          d="M50 2
             C55 18, 70 15, 82 8
             C78 22, 92 30, 98 42
             C84 45, 85 60, 90 75
             C75 70, 62 82, 50 92
             C38 82, 25 70, 10 75
             C15 60, 16 45, 2 42
             C8 30, 22 22, 18 8
             C30 15, 45 18, 50 2Z"
          fill={color}
          stroke={color}
          strokeWidth="1"
        />
      </svg>
      <span
        className="relative z-10 font-bold text-black text-center text-sm leading-tight whitespace-pre-line px-3"
        style={{ fontSize: "13px" }}
      >
        {label}
      </span>
    </div>
  )
}

export default StarBadge
