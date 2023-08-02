import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  getRelatedProducts,
} from "../../redux/actions/productAction";
import productOne from "../../assets/images/Iphone.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      await dispatch(getProductDetails(id));
    };
    getProduct();
  }, [dispatch, id]);

  const product = useSelector((state) => state.products.oneProduct);

  let item = [];
  if (product) {
    item = product.data;
  } else {
    item = [];
  }

  useEffect(() => {
    if (item) {
      dispatch(getOneCategory(item.category._id));
      if (item.brand) {
        // console.log(item.brand);
        dispatch(getOneBrand(item.brand));
      }
      if (item.category) {
        dispatch(getRelatedProducts(item.category._id));
      }
    }
  }, [dispatch, item]);

  let images = [];
  if (item) {
    images = item.images.map((img) => {
      return { original: `${img}`, thumbnail: `${img}` };
    });
  } else {
    images = [
      {
        original: `${productOne}`,
        thumbnail: `${productOne}`,
      },
    ];
  }

  const cat = useSelector((state) => state.allCategory.onCategory);
  let category = [];
  if (item) {
    category = cat.data;
  } else {
    category = [];
  }

  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  let brand = [];
  if (item) {
    brand = oneBrand.data;
  } else {
    brand = [];
  }

  const relatedProducts = useSelector(
    (state) => state.products.relatedProducts
  );
  let productsList = [];
  let products = [];
  if (relatedProducts) {
    productsList = relatedProducts.data;
    if (productsList) {
      products = productsList.slice(0, 4);
    }
  } else {
    products = [];
  }

  return [item, images, category, brand, products];
};

export default ViewProductDetailsHook;
