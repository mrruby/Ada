import React from "react";
import { ProductBox } from "helpers/ProductBox";
import { StaticImage } from "gatsby-plugin-image";

const Products = (): JSX.Element => {
  const productsData = [
    {
      title: "Konsultacje reklamowe",
      buttonText: 'Produkt 1',
      url: '/product',
      image: <StaticImage src={"../../images/ada_hero.webp"} alt="Ada Promis - hero" placeholder="none"  />
    },
    {
      title: "Inny produkt",
      buttonText: 'Produkt 2',
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
          buttonText={item.buttonText}
          url={item.url}
          image={item.image} 
        />
      ))}
    </div>
  );
};

export default Products;
