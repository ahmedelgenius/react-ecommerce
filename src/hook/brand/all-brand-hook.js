import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrand,
  getAllBrandPage,
} from "./../../redux/actions/brandAction";
const AllBrandHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand(10));
  }, []);

  const brands = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  let pageCount = 0;
  if (brands.paginationResult) {
    pageCount = brands.paginationResult.numberOfPages;
  }

  const getPage = (page) => {
    // getAllCategoryPage();
    dispatch(getAllBrandPage(page));
  };

  // to start page from top
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return [brands, loading, pageCount, getPage];
};

export default AllBrandHook;
