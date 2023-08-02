import React from "react";
import {
  FlowerBlue,
  StarPink,
} from "../../helpers/LayoutElements/index";
import { ILayoutElements } from "../../utils/types/layoutElements";

export const LayoutElements: React.FC<ILayoutElements> = ({
    flowerBlue,
    starPink,
}) => {
  return (
    <>
      {flowerBlue && (
        <FlowerBlue
          mobileTop="top-[500px]"
          mobileLeft="left-0"
        />
      )}

      {starPink && (
        <StarPink
        mobileTop="top-[500px]"
        mobileRight="right-0"
        />
      )}
    </>
  );
};
