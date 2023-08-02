import React from "react";

interface Props {
  startScroll?: string;
  endScroll?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  mobileTop?: string;
  mobileRight?: string;
  mobileLeft?: string;
  mobileBottom?: string;
  rotate?: string;
  width?: string;
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
      src="../assets/layout-elements/flower-blue.svg"
      alt="Blue Flower - Ada Promis"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} z-0 w-[${width}] max-w-[140px]`}
    />
  );
};

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
      src="../../../../assets/layout-elements/star-pink.svg"
      alt="Pink Star - Ada Promis"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} z-0 w-[${width}] max-w-[140px]`}
    />
  );
};
