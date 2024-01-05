import React from "react"
import {
  FlowerBlue,
  FlowerBlue2,
  FlowerBlue3,
  FlowerWhite,
  StarPink,
  TwoBlueFlowers,
  TwoBlueFlowers2,
  FlowerWhite2,
  FlowerWhite3,
  Waves1,
  Waves2,
  Waves3,
  Waves4,
  Waves5,
  Waves6,
} from "../../helpers/LayoutElements/index"
import { ILayoutElements } from "../../utils/types/layoutElements"

export const LayoutElements: React.FC<ILayoutElements> = ({
  flowerBlue,
  starPink,
  flowerWhite,
  twoBlueFlowers,
  twoBlueFlowers2,
  flowerBlue2,
  flowerBlue3,
  flowerWhite2,
  flowerWhite3,
  waves1,
  waves2,
  waves3,
  waves4,
  waves5,
  waves6,
}) => {
  return (
    <>
      {flowerBlue && (
        <FlowerBlue
          mobileTop="top-[1340px] lg:top-[500px] xl:top-[300px]"
          mobileLeft="left-0"
        />
      )}

      {starPink && (
        <StarPink mobileTop="lg:top-[170px]" mobileRight="right-0" />
      )}

      {flowerWhite && (
        <FlowerWhite
          mobileTop="top-[6000px] md:top-[3200px] lg:top-[890px]"
          mobileRight="right-0"
        />
      )}

      {twoBlueFlowers && (
        <TwoBlueFlowers
          mobileTop="top-[5430px] lg:top-[2300px]"
          mobileLeft="left-[-70px]"
        />
      )}

      {flowerBlue2 && (
        <FlowerBlue2
          mobileTop="top-[5910px] lg:top-[2270px]"
          mobileRight="right-[-70px]"
        />
      )}
      {twoBlueFlowers2 && (
        <TwoBlueFlowers2
          mobileTop="top-[1000px] lg:top-[1600px]"
          mobileRight="right-[-110px]"
        />
      )}
      {flowerBlue3 && (
        <FlowerBlue3
          mobileTop="top-[680px] lg:top-[600px]"
          mobileLeft="left-[-70px] lg:left-[100px]"
        />
      )}

      {flowerWhite2 && (
        <FlowerWhite2
          mobileTop="hidden md:flex md:top-[5400px] lg:top-[4800px]"
          mobileRight="right-0"
        />
      )}

      {flowerWhite3 && (
        <FlowerWhite3
          mobileTop="hidden md:flex md:top-[6800px] lg:top-[7700px]"
          mobileRight="right-0"
        />
      )}

      {waves1 && (
        <Waves1
          mobileTop="hidden lg:flex lg:top-[800px]"
          mobileLeft="left-[-100px]"
        />
      )}

      {waves2 && (
        <Waves2
          mobileTop="hidden lg:flex lg:top-[1500px]"
          mobileRight="right-0"
        />
      )}

      {waves3 && (
        <Waves3
          mobileTop="hidden lg:flex lg:top-[2540px]"
          mobileLeft="left-0"
        />
      )}

      {waves4 && (
        <Waves4
          mobileTop="hidden lg:flex lg:top-[3050px]"
          mobileRight="right-0"
        />
      )}

      {waves5 && (
        <Waves5
          mobileTop="hidden lg:flex lg:top-[3760px]"
          mobileLeft="left-0"
        />
      )}

      {waves6 && (
        <Waves6
          mobileTop="hidden lg:flex lg:top-[4200px]"
          mobileRight="right-0"
        />
      )}
    </>
  )
}
