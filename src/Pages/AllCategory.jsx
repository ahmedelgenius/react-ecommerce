import React, { useLayoutEffect } from "react";
import CategoryContainer from "../Components/Category/CategoryContainer";
import Pagination from "../Components/Utilits/Pagination";

const AllCategory = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <CategoryContainer />
      <Pagination />
    </>
  );
};

export default AllCategory;
