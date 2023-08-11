import React from "react";
import { ProductBox } from "helpers/ProductBox";
import { StaticImage } from "gatsby-plugin-image";

const Products = (): JSX.Element => {
  const productsData = [
    {
      title: "Konsultacje reklamowe",
      description:"Prowadź kampanie reklamowe pod moim okiem i rozwijaj biznes.",
      buttonText: 'Pokaż ofertę konsultacji dla mnie',
      url: '/product',
      image: <StaticImage src={"../../images/ada_hero.png"} alt="Ada Promis" placeholder="none" width={500} height={500} />
    },
    {
      title: "Prowadzenie kampanii",
      description:"Oddeleguj pozyskiwanie klientów i ciesz się czasem dla Ciebie.",
      buttonText: 'Sprawdź, jak poprowadzę dla Ciebie kampanie reklamowe',
      url: '#',
      image: <></>
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center w-full px-4 lg:px-10">
      {productsData.map((item, index) => (
        <ProductBox
          key={index}
          title={item.title}
          description={item.description}
          buttonText={item.buttonText}
          url={item.url}
          image={item.image} 
        />
      ))}
    </div>
  );
};

export default Products;
