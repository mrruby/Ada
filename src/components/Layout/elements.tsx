import React from "react";
import {
  FlowerBlue,
  FlowerBlue2,
  FlowerBlue3,
  FlowerWhite,
  StarPink,
  TwoBlueFlowers,
  TwoBlueFlowers2,
} from "../../helpers/LayoutElements/index";
import { ILayoutElements } from "../../utils/types/layoutElements";

export const LayoutElements: React.FC<ILayoutElements> = ({
    flowerBlue,
    starPink,
    flowerWhite,
    twoBlueFlowers,
    twoBlueFlowers2,
    flowerBlue2,
    flowerBlue3,
}) => {
  return (
    <>
      {flowerBlue && (
        <FlowerBlue
          mobileTop="top-[1380px] lg:top-[500px] xl:top-[300px]"
          mobileLeft="left-0"
        />
      )}

      {starPink && (
        <StarPink
          mobileTop="lg:top-[170px]"
          mobileRight="right-0"
        />
      )}

      {flowerWhite && (
        <FlowerWhite
          mobileTop="top-[3200px] lg:top-[890px]"
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
          mobileTop="top-[600px] lg:top-[600px]"
          mobileLeft="left-[-70px] lg:left-[100px]"
        />
      )}
    </>
  );
};
