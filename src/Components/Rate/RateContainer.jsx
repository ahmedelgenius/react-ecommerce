import React from "react";
import RatePost from "./RatePost";
import RateItem from "./RateItem";
import Pagination from "./../Utilits/Pagination";

const RateContainer = () => {
  return (
    <div className="container mx-auto border-2 p-5 my-10">
      <div className="flex gap-2 items-center  mb-5">
        <h3 className="text-xl  font-semibold">Reviews</h3>
        <p
          className="font-bold flex justify-center items-center gap-1 text-lg"
          style={{ color: "#ffd700" }}
        >
          3.4
          <i className="pi pi-star-fill" style={{ color: "#ffd700" }}></i>
          <span className="text-sm" style={{ color: "#A0A0A0" }}>
            (120 review)
          </span>
        </p>
      </div>
      <RatePost />
      <div className="my-20 px-10">
        <RateItem />
        <RateItem />
      </div>
      <Pagination />
    </div>
  );
};

export default RateContainer;
