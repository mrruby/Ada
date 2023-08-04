import React from "react";

interface Props {
  type: "button" | "submit" | "reset";
  text: string;
  textSize?: string;
  sectionId?: string;
}

export const Button: React.FC<Props> = ({ type, text, 
  textSize = "lg:text-[25px]",
  sectionId
}) => {
  const handleButtonClick = () => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      type={type}
      className={`bg-ada-light-pink ${textSize} px-[48px] py-[6px] mt-[50px] hover:bg-ada-pink`}    
      >
      {text}
    </button>
  );
};
