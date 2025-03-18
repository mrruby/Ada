import React from "react"

export const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[60px] bottom-0 left-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img
        src={"/assets/arrow-left.svg"}
        alt="Left Arrow"
        width={16}
        height={25}
      />
    </div>
  )
}

export const CustomRightArrow = ({ onClick }: any) => {
  return (
    <div
      className={`absolute max-h-[400px] top-0 md:top-[60px] bottom-0 right-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img
        src={"/assets/arrow-right.svg"}
        alt="Right Arrow"
        width={16}
        height={25}
      />
    </div>
  )
}
