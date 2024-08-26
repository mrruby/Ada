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

const ImageComponent: React.FC<
  Props & {
    src: string
    alt: string
    zIndex?: string
    maxWidth?: string
    widthValue?: number
    heightValue?: number
  }
> = ({
  src,
  alt,
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
  zIndex = "z-40",
  maxWidth = "",
  widthValue,
  heightValue,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden
      className={`absolute ${top || ""} ${right || ""} ${left || ""} ${
        bottom || ""
      } ${mobileTop || ""} ${mobileRight || ""} ${mobileLeft || ""} ${
        mobileBottom || ""
      } ${zIndex} w-[${width}] ${maxWidth}`}
      width={widthValue}
      height={heightValue}
    />
  )
}

export const FlowerBlue: React.FC<Props> = (props) => (
  <ImageComponent
    src="../assets/flower-left-blue.svg"
    alt="Blue Flower - Ada Promis"
    {...props}
    maxWidth="max-w-[140px]"
    zIndex="z-0"
  />
)

export const StarPink: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/star-right-pink.svg"
    alt="Pink Star - Ada Promis"
    {...props}
    maxWidth="max-w-[140px]"
    zIndex="z-0"
  />
)

export const FlowerWhite: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/flower-right-white.svg"
    alt="White Flower - Ada Promis"
    {...props}
  />
)

export const PuzzleBlue: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/puzzle-blue.svg" alt="Puzzle blue" {...props} />
)

export const SmallPuzzlePink: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/small-puzzle.svg" alt="Puzzle pink" {...props} />
)

export const PuzzlePink: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/puzzle-pink.svg" alt="Puzzle pink" {...props} />
)

export const TwoBlueFlowers: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/two-flowers.svg"
    alt="Two Flowers - Ada Promis"
    {...props}
    zIndex="z-20 opacity-0 lg:opacity-100"
    widthValue={230}
    heightValue={300}
  />
)

export const FlowerBlue2: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/flower-bottom.svg"
    alt="Blue Flower - Ada Promis"
    {...props}
    zIndex="z-20"
    widthValue={150}
    heightValue={150}
  />
)

export const FlowerBlue3: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/flower-blue.svg"
    alt="Blue Flower - Ada Promis"
    {...props}
    zIndex="z-20"
    widthValue={150}
    heightValue={150}
  />
)

const FlowerBlueTemplate: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/flower-blue.svg"
    alt=""
    {...props}
    zIndex="z-20"
    widthValue={150}
    heightValue={150}
  />
)

export const FlowerBlue4 = FlowerBlueTemplate
export const FlowerBlue5 = FlowerBlueTemplate
export const FlowerBlue6 = FlowerBlueTemplate
export const FlowerBlue7 = FlowerBlueTemplate
export const FlowerBlue8 = FlowerBlueTemplate
export const FlowerBlue9 = FlowerBlueTemplate
export const FlowerBlue10 = FlowerBlueTemplate
export const FlowerBlue11 = FlowerBlueTemplate

export const TwoBlueFlowers2: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/two-flowers.svg"
    alt="Two Flowers - Ada Promis"
    {...props}
    zIndex="z-20 opacity-0 lg:opacity-100"
    widthValue={230}
    heightValue={300}
  />
)

export const FlowerWhite2: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/flower-right-white.svg"
    alt="White Flower - Ada Promis"
    {...props}
  />
)

export const FlowerWhite3: React.FC<Props> = (props) => (
  <ImageComponent
    src="/assets/flower-right-white.svg"
    alt="White Flower - Ada Promis"
    {...props}
  />
)

const WavesTemplate: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/waves1.svg" alt="" {...props} />
)

export const Waves1 = WavesTemplate
export const Waves2 = WavesTemplate
export const Waves3 = WavesTemplate
export const Waves4 = WavesTemplate
export const Waves5 = WavesTemplate

const SunTemplate: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/sun.svg" alt="" {...props} />
)

export const Sun1 = SunTemplate
export const Sun2 = SunTemplate
export const Sun3 = SunTemplate
export const Sun4 = SunTemplate
export const Sun5 = SunTemplate

export const Sun6: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/sun2.svg" alt="" {...props} zIndex="-z-20" />
)

export const Sun7: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/sun2.svg" alt="" {...props} />
)

export const Flaming: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/flaming.svg" alt="" {...props} />
)

export const Flaps: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/flaps.svg" alt="" {...props} />
)

export const Flaps2: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/flaps.svg" alt="" {...props} />
)

export const Sunglasses: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/sunglasses.svg" alt="" {...props} />
)

export const Sunglasses2: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/sunglasses.svg" alt="" {...props} />
)

export const Ball1: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/ball1.svg" alt="" {...props} />
)

export const Ball2: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/ball2.svg" alt="" {...props} />
)

export const Ball3: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/ball2.svg" alt="" {...props} />
)

export const Drinks: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/drinks.svg" alt="" {...props} />
)

export const Arrow: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/arrowWebinar.svg" alt="" {...props} />
)

export const ArrowMasterclass: React.FC<Props> = (props) => (
  <ImageComponent src="/assets/arrowMasterclass.svg" alt="" {...props} />
)
