import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  getRelatedProducts,
} from "../../redux/actions/productAction";
import productOne from "../../assets/images/Iphone.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProductDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  // console.log(id);
  useEffect(() => {
    const getProduct = async () => {
      // setLoading(true);
      await dispatch(getProductDetails(prodID));
      // setLoading(false);
    };
    getProduct();
  }, []);

  const oneProduct = useSelector((state) => state.products.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const relatedProducts = useSelector(
    (state) => state.products.relatedProducts
  );

  // useEffect(() => {
  //   if (loading === false) {
  //     console.log(oneProduct.data.brand);
  //   }
  // }, [loading]);

  let item = [];
  if (oneProduct && oneProduct.data) {
    item = oneProduct.data;
  } else {
    item = [];
  }

  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category._id));
    }
    if (item.brand) {
      dispatch(getOneBrand(item.brand));
    }
    if (item.category) {
      dispatch(getRelatedProducts(item.category._id));
    }
  }, []);

  let imagesList = [];
  if (item) {
    if (item.images) {
      imagesList = item.images.map((img) => {
        return { original: `${img}`, thumbnail: `${img}` };
      });
    }
  } else {
    imagesList = [
      {
        original: `${productOne}`,
        thumbnail: `${productOne}`,
      },
    ];
  }
  // console.log(imagesList);
  let productCategory = [];

  if (oneCategory.data) {
    productCategory = oneCategory.data;
  } else {
    productCategory = [];
  }

  let productBrand = [];

  if (oneBrand.data) {
    productBrand = oneBrand.data;
  }

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

  return [item, imagesList, productCategory, productBrand, products];
};

export default ViewProductDetailsHook;
