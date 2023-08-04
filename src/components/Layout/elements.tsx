import React from "react";
import {
  FlowerBlue,
  StarPink,
  FlowerWhite
} from "../../helpers/LayoutElements/index";
import { ILayoutElements } from "../../utils/types/layoutElements";

export const LayoutElements: React.FC<ILayoutElements> = ({
    flowerBlue,
    starPink,
    flowerWhite,
}) => {
  return (
    <>
      {flowerBlue && (
        <FlowerBlue
          mobileTop="top-[600px] lg:top-[300px]"
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
          mobileTop="top-[1200px] lg:top-[890px]"
          mobileRight="right-[-70px]"
          />
      )}
    </>
  );
};
