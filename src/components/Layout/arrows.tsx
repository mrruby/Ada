import React from "react"

export const CustomLeftArrow = ({ onClick, outside, dark }: any) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${outside ? "-left-12" : "left-2"} flex justify-center items-center p-2 hover:scale-110 transition-transform cursor-pointer z-50 ${dark ? "bg-white/70 rounded-full text-gray-800" : "text-white"}`}
      onClick={onClick}
    >
      <svg
        width="24"
        height="40"
        viewBox="0 0 15 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 23L3 12.5L13.5 2"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    </div>
  )
}

export const CustomRightArrow = ({ onClick, outside, dark }: any) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${outside ? "-right-12" : "right-2"} flex justify-center items-center p-2 hover:scale-110 transition-transform cursor-pointer z-50 ${dark ? "bg-white/70 rounded-full text-gray-800" : "text-white"}`}
      onClick={onClick}
    >
      <svg
        width="24"
        height="40"
        viewBox="0 0 15 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.5 2L12 12.5L1.5 23" stroke="currentColor" strokeWidth="4" />
      </svg>
    </div>
  )
}
