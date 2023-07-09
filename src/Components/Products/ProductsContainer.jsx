import React from "react";
import SubTitle from "./../Utilits/SubTitle";
import ProductCard from "./ProductCard";
import catImgOne from "../../assets/images/laptop.png";
import catImgTwo from "../../assets/images/Iphone.png";

const ProductsContainer = ({ title, btnTitle }) => {
  return (
    <div className="container mx-auto my-32">
      <SubTitle title={title} btnTitle={btnTitle} />
      <div className="grid grid-cols-1 lg:grid-cols-4 place-content-center place-items-center gap-y-8">
        <ProductCard
          name="Product name"
          price={200}
          img={catImgOne}
          rating={2}
          priceAfterDiscount={300}
        />
        <ProductCard
          name="Product name"
          price={200}
          img={catImgTwo}
          rating={2}
          priceAfterDiscount={300}
        />
        <ProductCard
          name="Product name"
          price={200}
          img={catImgOne}
          rating={2}
          priceAfterDiscount={300}
        />
        <ProductCard
          name="Product name"
          price={200}
          img={catImgOne}
          rating={2}
          priceAfterDiscount={300}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
