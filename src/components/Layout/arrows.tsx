import React from "react"

export const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[60px] bottom-0 left-0 flex justify-center items-center p-3 hover:scale-110 transition-transform cursor-pointer z-20`}
      onClick={onClick}
    >
      <svg width="30" height="50" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 23L3 12.5L13.5 2" stroke="#ffffff" strokeWidth="4"/>
      </svg>
    </div>
  )
}

export const CustomRightArrow = ({ onClick }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[60px] bottom-0 right-0 flex justify-center items-center p-3 hover:scale-110 transition-transform cursor-pointer z-20`}
      onClick={onClick}
    >
      <svg width="30" height="50" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 2L12 12.5L1.5 23" stroke="#ffffff" strokeWidth="4"/>
      </svg>
    </div>
  )
}
