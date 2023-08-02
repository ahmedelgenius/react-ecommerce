import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(5));
  }, []);

  const categories = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  let items = [];
  if (categories) {
    items = categories.data;
  } else {
    items = [];
  }
  return [items, loading];
};

export default HomeCategoryHook;
