import React from "react";
import SubTitle from "./../Utilits/SubTitle";
import ProductCard from "./ProductCard";
import catImgOne from "../../assets/images/laptop.png";
import catImgTwo from "../../assets/images/Iphone.png";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/product/view-product-details.hook";

const ProductsContainer = ({ title, btnTitle, path, girdValue, products }) => {
  return (
    <div
      className={
        girdValue === 3 ? "container mx-auto " : "container mx-auto my-32"
      }
    >
      {products ? (
        <SubTitle title={title} btnTitle={btnTitle} path={path} />
      ) : null}

      <div
        className={
          girdValue === 3
            ? "grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center gap-y-8"
            : "grid grid-cols-1 lg:grid-cols-4 place-content-center place-items-center gap-y-8"
        }
      >
        {products
          ? products.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  name={item.title}
                  price={item.price}
                  img={item.imageCover}
                  rating={item.ratingsAverage}
                  priceAfterDiscount={item.priceAfterDiscount}
                  id={item._id}
                  ratingsQuantity={item.ratingsQuantity}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ProductsContainer;
