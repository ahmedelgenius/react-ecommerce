import React from "react";
import ProductGallery from "./ProductGallery";
import ProductContent from "./ProductContent";

const ProductDetails = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-5">
        <div>
          <ProductGallery />
        </div>
        <div className="">
          <ProductContent />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
