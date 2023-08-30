import React from "react";
import { Link } from "gatsby";

interface Props {
  type: "button" | "submit" | "reset";
  text: string;
  url: string;
  textSize?: string;
  sectionId?: string;
  border?: boolean;
}

export const Button: React.FC<Props> = ({ type, text, 
  textSize = "lg:text-[25px]", url,
  border, sectionId
}) => {
  const handleButtonClick = () => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const borderStyles = border ? "border border-ada-blue": "";

  return (
    <Link to={url}>
        <button
      onClick={handleButtonClick}
      type={type}
      className={`bg-ada-light-pink ${textSize} font-medium px-[20px] py-[6px] hover:bg-ada-pink ${borderStyles}`}    
      >
      {text}
    </button>
    </Link>
  );
};
