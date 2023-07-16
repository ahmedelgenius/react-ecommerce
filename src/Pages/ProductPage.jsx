import React, { useLayoutEffect } from "react";
import ProductDetails from "../Components/Products/ProductDetails";
import RateContainer from "../Components/Rate/RateContainer";
import ProductsContainer from "./../Components/Products/ProductsContainer";

const ProductPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="container mx-auto">
      <ProductDetails />

      <RateContainer />

      <ProductsContainer title="Related Products" />
    </div>
  );
};

export default ProductPage;
