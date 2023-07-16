import React from "react";
import CategoryCard from "./CategoryCard";
import catImgOne from "../../assets/images/laptop.png";
import catImgTwo from "../../assets/images/Iphone.png";
import SubTitle from "../Utilits/SubTitle";
const CategoryContainer = () => {
  return (
    <div className="container mx-auto mt-20">
      <SubTitle title="All Categories" />
      <div className="grid grid-cols-1 lg:grid-cols-5 place-content-center place-items-center gap-y-8">
        <CategoryCard title="Category One" img={catImgOne} />
        <CategoryCard title="Category Two" img={catImgTwo} />
        <CategoryCard title="Category Three" img={catImgOne} />
        <CategoryCard title="Category Four" img={catImgTwo} />
        <CategoryCard title="Category Five" img={catImgOne} />
        <CategoryCard title="Category One" img={catImgOne} />
        <CategoryCard title="Category Two" img={catImgTwo} />
        <CategoryCard title="Category Three" img={catImgOne} />
        <CategoryCard title="Category Four" img={catImgTwo} />
        <CategoryCard title="Category Five" img={catImgOne} />
      </div>
    </div>
  );
};

export default CategoryContainer;
