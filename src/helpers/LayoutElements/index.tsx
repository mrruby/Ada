import React from "react"

interface Props {
  startScroll?: string
  endScroll?: string
  top?: string
  right?: string
  left?: string
  bottom?: string
  mobileTop?: string
  mobileRight?: string
  mobileLeft?: string
  mobileBottom?: string
  rotate?: string
  width?: string
}

export const FlowerBlue: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
  rotate = "0deg",
  width = "40px",
}) => {
  return (
    <img
      src="../assets/flower-left-blue.svg"
      alt="Blue Flower - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-0 w-[${width}] max-w-[140px]`}
    />
  )
}

export const StarPink: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
  rotate = "0deg",
  width = "40px",
}) => {
  return (
    <img
      src="../../../../assets/star-right-pink.svg"
      alt="Pink Star - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-0 w-[${width}] max-w-[140px]`}
    />
  )
}

export const FlowerWhite: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
  rotate = "0deg",
  width = "40px",
}) => {
  return (
    <img
      src="../assets/flower-right-white.svg"
      alt="White Flower - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-40 w-[${width}] `}
    />
  )
}

export const TwoBlueFlowers: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <img
      src="../assets/two-flowers.svg"
      alt="Two Flowers - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-20 opacity-0 lg:opacity-100`}
      width={230}
      height={300}
    />
  )
}

export const FlowerBlue2: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <img
      src="../assets/flower-bottom.svg"
      alt="Blue Flower - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-20`}
      width={150}
      height={150}
    />
  )
}

export const FlowerBlue3: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <img
      src="../assets/flower-blue.svg"
      alt="Blue Flower - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-20`}
      width={150}
      height={150}
    />
  )
}

export const TwoBlueFlowers2: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <img
      src="../assets/two-flowers.svg"
      alt="Two Flowers - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-20 opacity-0 lg:opacity-100`}
      width={230}
      height={300}
    />
  )
}

export const FlowerWhite2: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
  rotate = "0deg",
  width = "40px",
}) => {
  return (
    <img
      src="../assets/flower-right-white.svg"
      alt="White Flower - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-40 w-[${width}] `}
    />
  )
}

export const FlowerWhite3: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
  rotate = "0deg",
  width = "40px",
}) => {
  return (
    <img
      src="../assets/flower-right-white.svg"
      alt="White Flower - Ada Promis"
      aria-hidden
      className={`absolute ${top && top} ${right && right} ${left && left} ${
        bottom && bottom
      } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${
        mobileLeft && mobileLeft
      } ${mobileBottom && mobileBottom} z-40 w-[${width}] `}
    />
  )
}
