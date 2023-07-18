import React from "react";
import Slider from "../Components/Home/Slider";
import HomeCategory from "../Components/Home/HomeCategory";
import ProductsContainer from "../Components/Products/ProductsContainer";
import HomeDiscount from "../Components/Home/HomeDiscount";
import HomeBrands from "../Components/Home/HomeBrands";

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <ProductsContainer
        title="Best Seller"
        btnTitle="See Everything →"
        path="/categories"
      />
      <HomeDiscount />
      <ProductsContainer
        title="New Arrivals"
        btnTitle="See Everything →"
        path="/categories"
      />
      <HomeBrands />
    </div>
  );
};

export default Home;
