import React from "react";
import CategoryCard from "./CategoryCard";
import SubTitle from "../Utilits/SubTitle";

const CategoryContainer = ({ categories, loading }) => {
  console.log(categories);
  console.log(loading);
  return (
    <div className="container mx-auto mt-20">
      <SubTitle title="All Categories" />
      <div className="grid grid-cols-1 lg:grid-cols-5 place-content-center place-items-center gap-y-8">
        {loading === false ? (
          categories.data ? (
            categories.data.map((category, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={category.name}
                  img={category.image}
                />
              );
            })
          ) : (
            <h2>categories is empty</h2>
          )
        ) : (
          <div
            className="   "
            // style={{ marginLeft: "600px" }}
          >
            <i
              className="pi pi-spin pi-spinner"
              style={{ fontSize: "2.5rem" }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryContainer;
