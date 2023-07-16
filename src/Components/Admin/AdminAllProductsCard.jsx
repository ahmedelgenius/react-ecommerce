import React from "react";
import catImgOne from "../../assets/images/laptop.png";
import catImgTwo from "../../assets/images/Iphone.png";
import { Link } from "react-router-dom";
const priceAfterDiscount = "";
const rating = 3.5;
const AdminAllProductsCard = () => {
  return (
    <>
      <div
        className="h-[380px] w-[282px] max-h-[380px]  relative  border-2 rounded-xl "
        style={{ backgroundColor: "#F1F1F1" }}
      >
        {" "}
        <button className="absolute top-4 left-5 font-medium text-red-600 hover:text-red-500">
          Remove
        </button>
        <button className="absolute top-4 right-5 font-medium text-indigo-600 hover:text-indigo-500">
          Edit
        </button>
        <Link className="flex flex-col  ">
          <div className="w-auto  h-1/2  p-6 ">
            <img src={catImgTwo} className=" " alt="" />
          </div>
          <div className="px-4  flex items-center flex-col ">
            <h2 className="text-xl font-bold text-center truncate w-64">
              Product name
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
                <p className=" font-bold text-base">{120} $ </p>
              </div>
              <p
                className="font-bold flex justify-center items-center gap-1 text-lg"
                style={{ color: "#ffd700" }}
              >
                {rating}{" "}
                <i className="pi pi-star-fill" style={{ color: "#ffd700" }}></i>
                <span className="text-sm" style={{ color: "#A0A0A0" }}>
                  (120 reviews)
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AdminAllProductsCard;
