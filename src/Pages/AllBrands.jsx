import React, { useLayoutEffect } from "react";
import BrandsContainer from "../Components/Brands/BrandsContainer";
import Pagination from "../Components/Utilits/Pagination";

const AllBrands = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <BrandsContainer />
      <Pagination />
    </>
  );
};

export default AllBrands;
