import React from "react"
import { ProductBox } from "helpers/ProductBox"
import { StaticImage } from "gatsby-plugin-image"

const Products = (): JSX.Element => {
  const productsData = [
    {
      title: "Konsultacje reklamowe",
      description:
        "Prowadź kampanie reklamowe pod moim okiem i rozwijaj biznes.",
      buttonText: "Pokaż ofertę konsultacji dla mnie",
      url: "https://sklep.adrianna.com.pl/search?q=konsultacja",
      image: (
        <StaticImage
          src={"../../images/ada_hero.webp"}
          alt="Ada Promis"
          placeholder="none"
          width={300}
          height={300}
        />
      ),
    },
    {
      title: "Prowadzenie kampanii",
      description:
        "Oddeleguj pozyskiwanie klientów i ciesz się czasem dla Ciebie.",
      buttonText: "Poprowadzę Twoje kampanie reklamowe",
      url: "/contact",
      image: (
        <StaticImage
          src={"../../images/ada-kampanie.webp"}
          alt="Ada Promis"
          placeholder="none"
          width={300}
          height={300}
        />
      ),
    },
  ]

  return (
    <div className="flex flex-col md:flex-row items-center w-full px-4 lg:px-10 lg:gap-[32px]">
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
  )
}

export default Products
