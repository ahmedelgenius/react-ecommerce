import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";
const HomeBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand(5));
  }, []);

  const brands = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  let items = [];
  if (brands) {
    items = brands.data;
  } else {
    items = [];
  }
  return [items, loading];
};

export default HomeBrandHook;
