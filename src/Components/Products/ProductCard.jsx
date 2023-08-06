import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../redux/actions/wishlistAction";
import notify from "./../../hook/useNotifiction";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../hook/product/product-card-hook";

const ProductCard = ({
  img,
  name,
  price,
  rating,
  priceAfterDiscount,
  id,
  ratingsQuantity,
  favList,
}) => {
  const [isFavIcon, handelFav] = ProductCardHook(favList, id);
  return (
    <div
      className="h-[380px] w-[282px] max-h-[380px]  relative  border-2 rounded-xl "
      style={{ backgroundColor: "#F1F1F1" }}
    >
      {" "}
      {/* <img
        src={isFavIcon}
        onClick={handelFav}
        className="absolute top-2 right-1"
        alt=""
      /> */}
      <button onClick={handelFav} className="absolute top-2 right-1">
        {isFavIcon === true ? (
          <i
            className="pi pi-heart-fill"
            style={{ color: "red", fontSize: "1.5rem" }}
          ></i>
        ) : (
          <i className="pi pi-heart " style={{ fontSize: "1.5rem" }}></i>
        )}
      </button>
      <Link to={`/products/${id}`} className="flex flex-col  ">
        <div className="w-auto  h-1/2  p-6 ">
          <img src={img} className=" " alt="" />
        </div>
        <div className="px-4  flex items-center flex-col ">
          <h2 className="text-xl font-bold text-center truncate w-64">
            {name}
          </h2>
          <div className="  ">
            <div className="flex items-center justify-center  gap-2 py-2 ">
              {priceAfterDiscount ? (
                <p
                  className=" font-bold text-base  line-through  "
                  style={{ color: "#A0A0A0" }}
                >
                  {priceAfterDiscount} ${" "}
                </p>
              ) : (
                ""
              )}
              <p className=" font-bold text-base">Price: {price} $ </p>
            </div>
            <p
              className="font-bold flex justify-center items-center gap-1 text-lg"
              style={{ color: "#ffd700" }}
            >
              {rating}{" "}
              <i className="pi pi-star-fill" style={{ color: "#ffd700" }}></i>
              <span className="text-sm" style={{ color: "#A0A0A0" }}>
                ({ratingsQuantity} reviews)
              </span>
            </p>
          </div>
        </div>
      </Link>
      <div className=" flex justify-center my-2 items-center">
        <button className="text-white font-bold h-10 flex justify-center items-center w-32 bg-gray-700 hover:bg-gray-600 rounded-lg">
          Add To Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
