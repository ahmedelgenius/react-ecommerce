import React from "react";

const CategoryCard = ({ title, img }) => {
  return (
    <div className="bg-gray-400 hover:bg-gray-300 p-10  w-52 h-52 relative flex justify-center items-start rounded-full">
      <img src={img} alt="" />
      <h3 className="absolute bottom-8 left-10 text-lg   text-white font-bold">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
