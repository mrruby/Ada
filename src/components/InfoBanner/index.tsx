import React from "react";
import { InfoBox } from "helpers/InfoBox";
import { StaticImage } from "gatsby-plugin-image"

const InfoBanner = (): JSX.Element => {
  const infoData = [
    {
      btnText: "Darmowe materiały",
      url:"/materials",
      image: (
        <StaticImage
          src={"../../images/info_materials.webp"}
          alt="Ada Promis - materials"
          placeholder="none"
          width={370}
          height={370}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      )    
    },
    {
      btnText: "Poznaj mnie",
      url:"/about",
      image: (
        <StaticImage
          src={"../../images/info_about.webp"}
          alt="Ada Promis - about"
          placeholder="none"
          width={370}
          height={370}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      )    
    },
    {
      btnText: "Sklep",
      url:"https://sklep.adrianna.com.pl/",
      image: (
        <StaticImage
          src={"../../images/info_about.webp"}
          alt="Ada Promis - shop"
          placeholder="none"
          width={370}
          height={370}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      )    
    },
  ];

  return (
    <div className=" text-ada-blue flex gap-[80px] flex-col md:flex-row items-center justify-center pb-[24px]">
    {infoData.map((info, index) => (
          <InfoBox key={index} btnText={info.btnText}  url={info.url}  image={info.image}/>
        ))}
    </div>
  );
};

export default InfoBanner;
