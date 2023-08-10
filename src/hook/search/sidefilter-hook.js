import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewSearchProductsHook from "../product/view-search-products";

const SideFilterHook = () => {
  const dispatch = useDispatch();
  const [productsList, pageCount, onPress, getProducts, results] =
    ViewSearchProductsHook();
  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategory(50));
      await dispatch(getAllBrand(50));
    };
    run();
  }, []);

  const brands = useSelector((state) => state.allBrand.brand);
  const categories = useSelector((state) => state.allCategory.category);
  let category = [];
  if (categories) {
    if (categories.data) {
      // eslint-disable-next-line array-callback-return
      categories.data.map((item) => {
        category.push({ value: item._id, label: item.name, checked: false });

        // return item;
      });
    }
  }

  let brand = [];
  if (brands) {
    if (brands.data) {
      // eslint-disable-next-line array-callback-return
      brands.data.map((item) => {
        brand.push({ value: item._id, label: item.name, checked: false });

        // return item;
      });
    }
  }

  const [catChecked, setCatChecked] = useState([]);
  var queryCat = "";

  const clickCategory = (e) => {
    let value = e.target.value;
    if (e.target.checked) {
      if (value !== 0) {
        setCatChecked([...catChecked, value]);
      }
    }
    if (e.target.checked === false) {
      let newArray = catChecked.filter((e) => e !== value);
      setCatChecked(newArray);
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => "category=" + val).join("&");
    localStorage.setItem("queryCat", queryCat);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [catChecked]);

  const [brandChecked, setBrandChecked] = useState([]);
  var queryBrand = [];
  const clickBrand = (e) => {
    let value = e.target.value;
    if (e.target.checked) {
      if (value !== 0) {
        setBrandChecked([...brandChecked, value]);
      }
    }
    if (e.target.checked === false) {
      let newArray = brandChecked.filter((e) => e !== value);
      setBrandChecked(newArray);
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand=" + val).join("&");
    localStorage.setItem("queryBrand", queryBrand);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [brandChecked]);

  //   console.log(brandChecked);
  return [category, brand, clickCategory, clickBrand];
};

export default SideFilterHook;
