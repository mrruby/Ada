import React from "react";
import {
  FlowerBlue,
  FlowerBlue2,
  FlowerWhite,
  StarPink,
  TwoBlueFlowers
} from "../../helpers/LayoutElements/index";
import { ILayoutElements } from "../../utils/types/layoutElements";

export const LayoutElements: React.FC<ILayoutElements> = ({
    flowerBlue,
    starPink,
    flowerWhite,
    twoBlueFlowers,
    flowerBlue2
}) => {
  return (
    <>
      {flowerBlue && (
        <FlowerBlue
          mobileTop="top-[1600px] lg:top-[300px]"
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
          mobileTop="top-[3200px] lg:top-[1700px]"
          mobileRight="right-0"
        />
      )}

      {twoBlueFlowers && (
        <TwoBlueFlowers
          mobileTop="top-[5430px] lg:top-[2570px]"
          mobileLeft="left-[-70px]"
        />
      )}

      {flowerBlue2 && (
        <FlowerBlue2
          mobileTop="top-[5910px] lg:top-[2905px]"
          mobileRight="right-0"
        />
      )}
    </>
  );
};
