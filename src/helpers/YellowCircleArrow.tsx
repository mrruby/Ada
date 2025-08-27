import React from "react"

interface Props {
  mobileTop?: string
  mobileBottom?: string
  mobileLeft?: string
  mobileRight?: string
  width?: string
  zIndex?: string
}

const YellowCircleArrow: React.FC<Props> = ({
  mobileTop,
  mobileBottom,
  mobileLeft,
  mobileRight,
  width = "67px",
  zIndex = "z-10",
}) => {
  const positionClasses = [
    mobileTop,
    mobileBottom,
    mobileLeft,
    mobileRight,
    zIndex,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div
      className={`absolute ${positionClasses}`}
      style={{ width, height: width }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Yellow circle */}
        <circle cx="30" cy="30" r="30" fill="#F4E105" />

        {/* Simple thin purple down arrow - 2x bigger */}
        <path
          d="M30 45L18 33M30 45L42 33M30 45V15"
          stroke="#7B2D8E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default YellowCircleArrow
