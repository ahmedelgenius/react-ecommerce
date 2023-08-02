import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
const AllCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(10));
  }, []);

  const categories = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  let pageCount = 0;
  if (categories.paginationResult) {
    pageCount = categories.paginationResult.numberOfPages;
  }

  const getPage = (page) => {
    // getAllCategoryPage();
    dispatch(getAllCategoryPage(page));
  };

  // to start page from top
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return [categories, loading, pageCount, getPage];
};

export default AllCategoryHook;
