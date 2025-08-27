import React from "react"

type Props = {
  open: boolean
  setOpen: (_: boolean) => void
}

const Burger = ({ open, setOpen }: Props) => {
  const burgerClass =
    "flex flex-col justify-between md:hidden fixed top-8 right-8 md:relative md:flex md:flex-col md:justify-around w-[32px] h-[32px] bg-transparent border-none cursor-pointer p-0 z-10"

  const lineClass =
    "md:hidden w-[32px] h-[4px] transition-all duration-300 ease-linear transform"

  return (
    <button
      className={burgerClass}
      onClick={() => setOpen(!open)}
      aria-label="Toggle Menu"
    >
      <div
        className={`${lineClass} ${open ? "rotate-45 translate-y-3 bg-ada-pink" : "rotate-0 bg-ada-blue"}`}
      />
      <div
        className={`${lineClass} ${open ? "opacity-0 translate-x-2 bg-ada-pink" : "opacity-100 translate-x-0 bg-ada-blue"}`}
      />
      <div
        className={`${lineClass} ${open ? "-rotate-45 -translate-y-[16px]  bg-ada-pink" : "rotate-0 bg-ada-blue"}`}
      />
    </button>
  )
}

export default Burger
