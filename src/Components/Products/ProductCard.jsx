import React from "react";

const ProductCard = ({ img, name, price, rating, priceAfterDiscount }) => {
  return (
    <div
      className="flex flex-col gap-5 h-[380px] w-[282px]  relative  border-1 rounded-xl "
      style={{ backgroundColor: "#F4F4F4" }}
    >
      <button className="absolute top-4 right-5">
        <i className="pi pi-heart " style={{ fontSize: "1.5rem" }}></i>
      </button>
      <div className="w-auto  h-1/2 p-6">
        <img src={img} className=" " alt="" />
      </div>
      <div className="px-4  flex items-center flex-col pt-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="  ">
          <div className="flex gap-2 py-3 ">
            {priceAfterDiscount ? (
              <p
                className=" font-bold text-lg line-through  "
                style={{ color: "#A0A0A0" }}
              >
                {priceAfterDiscount} EGP{" "}
              </p>
            ) : (
              ""
            )}
            <p className=" font-bold text-lg">{price} EGP </p>
          </div>
          <p
            className="font-bold text-center text-lg"
            style={{ color: "#ffd700" }}
          >
            {rating}{" "}
            <i className="pi pi-star-fill" style={{ color: "#ffd700" }}></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
