import React from "react"
import {
  FlowerBlue,
  FlowerBlue2,
  FlowerBlue3,
  FlowerBlue4,
  FlowerBlue5,
  FlowerBlue6,
  FlowerBlue7,
  FlowerBlue8,
  FlowerBlue9,
  FlowerBlue10,
  FlowerBlue11,
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
  Sun1,
  Sun2,
  Sun3,
  Sun4,
  Sun5,
  Sun6,
  Flaming,
  Flaps,
  Flaps2,
  Sunglasses,
  Sunglasses2,
  Ball1,
  Ball2,
  Ball3,
  Drinks,
  Arrow,
  ArrowMasterclass,
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
  flowerBlue4,
  flowerBlue5,
  flowerBlue6,
  flowerBlue7,
  flowerBlue8,
  flowerBlue9,
  flowerBlue10,
  flowerBlue11,
  flowerWhite2,
  flowerWhite3,
  waves1,
  waves2,
  waves3,
  waves4,
  waves5,
  waves6,
  sun1,
  sun2,
  sun3,
  sun4,
  sun5,
  sun6,
  flaming,
  flaps,
  flaps2,
  sunglasses,
  sunglasses2,
  ball1,
  ball2,
  ball3,
  drinks,
  arrow,
  arrowMasterclass,
}) => {
  return (
    <>
      {flowerBlue && (
        <FlowerBlue
          mobileTop="hidden md:flex top-[1340px] lg:top-[500px] xl:top-[300px]"
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
          mobileTop="top-[5810px] lg:top-[2270px]"
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
      {flowerBlue4 && (
        <FlowerBlue4
          mobileTop="hidden md:flex md:top-[6300px]"
          mobileLeft="left-[-70px]"
        />
      )}
      {flowerBlue5 && (
        <FlowerBlue5
          mobileTop="hidden md:flex md:top-[6800px]"
          mobileRight="right-[-70px]"
        />
      )}{" "}
      {flowerBlue6 && (
        <FlowerBlue6
          mobileTop="hidden md:flex md:top-[8800px]"
          mobileLeft="left-[-70px]"
        />
      )}{" "}
      {flowerBlue7 && (
        <FlowerBlue7
          mobileTop="hidden md:flex md:top-[9400px]"
          mobileRight="right-[-70px]"
        />
      )}
      {flowerBlue8 && (
        <FlowerBlue8
          mobileTop="hidden md:flex md:top-[9800px]"
          mobileLeft="left-[-70px]"
        />
      )}
      {flowerBlue9 && (
        <FlowerBlue9
          mobileTop="hidden md:flex md:top-[10000px]"
          mobileRight="right-[-70px]"
        />
      )}{" "}
      {flowerBlue10 && (
        <FlowerBlue10
          mobileTop="hidden md:flex md:top-[11000px]"
          mobileLeft="left-[-70px]"
        />
      )}{" "}
      {flowerBlue11 && (
        <FlowerBlue11
          mobileTop="hidden md:flex md:top-[12000px]"
          mobileRight="right-[-70px]"
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
          mobileTop="hidden xl:flex xl:top-[2540px]"
          mobileLeft="left-0"
        />
      )}
      {waves4 && (
        <Waves4
          mobileTop="hidden xl:flex xl:top-[3050px]"
          mobileRight="right-0"
        />
      )}
      {waves5 && (
        <Waves5
          mobileTop="hidden xl:flex xl:top-[4260px]"
          mobileLeft="left-0"
        />
      )}
      {waves6 && (
        <Waves6
          mobileTop="hidden lg:flex lg:top-[4800px]"
          mobileRight="right-0"
        />
      )}
      {sun1 && (
        <Sun1
          mobileTop="hidden xl:flex lg:top-[560px]"
          mobileLeft="left-[-160px]"
        />
      )}
      {sun2 && (
        <Sun2
          mobileTop="hidden xl:flex lg:top-[1000px]"
          mobileRight="right-[-150px]"
        />
      )}
      {sun3 && (
        <Sun3
          mobileTop="hidden xl:flex lg:top-[1260px]"
          mobileLeft="left-[-160px]"
        />
      )}
      {sun4 && (
        <Sun4
          mobileTop="hidden xl:flex lg:top-[4360px]"
          mobileLeft="left-[-160px]"
        />
      )}
      {sun5 && (
        <Sun5
          mobileTop="hidden xl:flex lg:top-[3760px]"
          mobileRight="right-[-150px]"
        />
      )}
      {sun6 && (
        <Sun6
          mobileTop="hidden xl:flex lg:top-[100px]"
          mobileLeft="left-[6vw]"
        />
      )}
      {flaming && (
        <Flaming
          mobileTop="hidden xl:flex lg:top-[-30px]"
          mobileRight="right-[-150px]"
        />
      )}
      {flaps && (
        <Flaps
          mobileTop="hidden xl:flex lg:top-[1860px]"
          mobileLeft="left-[-160px]"
        />
      )}
      {flaps2 && (
        <Flaps2
          mobileTop="hidden xl:flex lg:top-[8970px]"
          mobileRight="right-[-150px]"
        />
      )}
      {sunglasses && (
        <Sunglasses
          mobileTop="hidden xl:flex lg:top-[2360px]"
          mobileRight="right-[-150px]"
        />
      )}
      {sunglasses2 && (
        <Sunglasses2
          mobileTop="hidden xl:flex lg:top-[7470px]"
          mobileRight="left-[-150px]"
        />
      )}
      {ball1 && (
        <Ball1
          mobileTop="hidden xl:flex lg:top-[2860px]"
          mobileLeft="left-[-160px]"
        />
      )}
      {ball2 && (
        <Ball2
          mobileTop="hidden xl:flex lg:top-[3060px]"
          mobileRight="right-[-150px]"
        />
      )}
      {ball3 && (
        <Ball3
          mobileTop="hidden xl:flex lg:top-[6160px]"
          mobileRight="right-[-150px]"
        />
      )}
      {drinks && (
        <Drinks
          mobileTop="hidden xl:flex lg:top-[12280px]"
          mobileLeft="left-[-40px]"
        />
      )}
      {arrow && (
        <Arrow
          mobileTop="hidden xl:flex lg:top-[650px] "
          mobileRight="right-[10vw]"
        />
      )}
      {arrowMasterclass && (
        <ArrowMasterclass
          mobileTop="hidden xl:flex lg:top-[500px] "
          mobileRight="right-[40vw]"
        />
      )}
    </>
  )
}
