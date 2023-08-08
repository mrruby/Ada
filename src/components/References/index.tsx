import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Reference from '../../helpers/Reference'

type IReferencesList = {
  reference: string;
  name: string;
  company: string;
}

const referencesList: IReferencesList[] = [
  {
    reference:
      "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    name: "Lorem ipsum",
    company: "Lorem ipsum Lorem ipsum",
  },
  {
    reference:
    "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  name: "Lorem ipsum",
  company: "Lorem ipsum dolor sit amet",
  },
  {
    reference:
    "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  name: "Lorem ipsum dolor sit amet",
  company: "Lorem ipsum Lorem ipsum",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const References = (): JSX.Element => {
  return (
    <div className="pt-[100px]">
    <h3 className="text-center text-adaSubtitle lg:text-adaTitle font-bold lg:mb-2 border-b-[20px] lg:border-b-[34px]	border-ada-light-pink h-[40px] lg:h-[60px]">Lorem ipsum dolor sit amet</h3>
    <Carousel
      responsive={responsive}
      infinite={true}
      ssr={true}
    >
      {referencesList.map((reference, index) => (
        <Reference
          key={index}
          reference={reference.reference}
          name={reference.name}
          company={reference.company}
        />
      ))}
    </Carousel>
    </div>
  );
};

export default References;
