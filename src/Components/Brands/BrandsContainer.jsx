import React from "react";
import SubTitle from "../Utilits/SubTitle";
import BrandCard from "./BrandCard";
import brandOne from "../../assets/images/brands/apple.png";
import brandTwo from "../../assets/images/brands/dell.png";
import brandThree from "../../assets/images/brands/lenovo.png";
import brandFour from "../../assets/images/brands/oppo.png";
import brandFive from "../../assets/images/brands/samsung.png";
const BrandsContainer = () => {
  return (
    <>
      <div className="container mx-auto my-20">
        <SubTitle title="All Brands" />
        <div className="grid grid-cols-1 lg:grid-cols-5 place-content-center place-items-center gap-y-8">
          <BrandCard img={brandOne} />
          <BrandCard img={brandTwo} />
          <BrandCard img={brandThree} />
          <BrandCard img={brandFour} />
          <BrandCard img={brandFive} />
          <BrandCard img={brandOne} />
          <BrandCard img={brandTwo} />
          <BrandCard img={brandThree} />
          <BrandCard img={brandFour} />
          <BrandCard img={brandFive} />
        </div>
      </div>
    </>
  );
};

export default BrandsContainer;
