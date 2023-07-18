import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="rounded-xl  pb-80  mb-20"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="py-4 border-b-2 flex justify-center ">
        <Link to="/admin/allorders" className="text-base font-semibold ">
          Order management
        </Link>
      </div>
      <div className="py-4 border-b-2 flex justify-center">
        <Link to="/admin/allproducts" className="text-base font-semibold">
          Products management
        </Link>
      </div>
      <div className="py-4 border-b-2 flex justify-center">
        <Link to="/admin/addbrand" className="text-base font-semibold">
          Add Brand
        </Link>
      </div>
      <div className="py-4 border-b-2 flex justify-center">
        <Link to="/admin/addcategory" className="text-base font-semibold">
          Add Category
        </Link>
      </div>
      <div className="py-4 border-b-2 flex justify-center">
        <Link to="/admin/addsubcategory" className="text-base font-semibold">
          Add Subcategory
        </Link>
      </div>
      <div className="py-4 border-b-2 flex justify-center">
        <Link to="/admin/addproducts" className="text-base font-semibold">
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
