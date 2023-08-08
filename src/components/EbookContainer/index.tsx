import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const EbookContainer = (): JSX.Element => {
  const featureClass = "text-[10px] md:text-[16px] lg:text-adaSubtitle font-semibold max-w-[325px] leading-tight";

  return (
      <div className="flex w-full flex-col items-center pt-[70px] px-2">      
        <h3 className="text-adaTitle lg:text-adaBig text-ada-white40 font-bold">Co znajdziesz w środku?</h3>
        <div className="flex pt-[100px] lg:pt-[10px]">
          <div className="flex flex-col justify-center gap-[30px] lg:pr-[60px]">
            <div className="pb-[50px] relative">
              <StaticImage src={"../../images/arrow-1.png"} alt="Ebook - arrow" placeholder="none"
                className="absolute top-[-40px] md:top-[-80px] lg:right-[-50px]"
              />
              <p className={featureClass}>Sprawdzony sposób na skuteczne kampanie reklamowe na FB & IG</p>
            </div>
            <div className="pb-[50px] relative">
              <p className={featureClass}>100 stron <br/> pełnych wiedzy</p>
              <StaticImage src={"../../images/arrow-2.png"} alt="Ebook - arrow" placeholder="none" 
              className="absolute lg:top-[40px] lg:right-[-50px]" />
            </div>
          </div>
        <StaticImage src={"../../images/ada_ebook.webp"} alt="Ebook - arrow" placeholder="none" width={380} height={480}/>
        <div className="flex flex-col justify-center gap-[30px] lg:pl-[60px]">
        <div className="pb-[50px] relative">
              <StaticImage src={"../../images/arrow-3.png"} alt="Ebook - arrow" placeholder="none"  
                className="absolute top-[-40px] md:top-[-80px] lg:left-[-50px]"
              />
              <p className={featureClass}>8 rozdziałów z ćwiczeniami</p>
            </div>
            <div className="pb-[50px] relative">              
              <p className={featureClass}>BONUS: dostęp do zamkniętej grupy</p>
              <StaticImage src={"../../images/arrow-4.png"} alt="Ebook - arrow" placeholder="none"  
              className="absolute lg:top-[40px] lg:left-[-50px]" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default EbookContainer;
