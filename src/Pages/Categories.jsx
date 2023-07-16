import React, { useLayoutEffect } from "react";
import SearchCountResult from "../Components/Utilits/SearchCountResult";
import SideFilter from "../Components/Utilits/SideFilter";
import Pagination from "../Components/Utilits/Pagination";

const Categories = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="container mx-auto">
        {/* <SearchCountResult title="400 search result" /> */}

        <SideFilter />

        <Pagination />
      </div>
    </>
  );
};

export default Categories;
