import React from "react";
import AdminAllProductsCard from "../../Components/Admin/AdminAllProductsCard";
import Pagination from "../../Components/Utilits/Pagination";

const AdminAllProducts = () => {
  return (
    <div className="container mx-auto ">
      <div className="pl-5 mb-5">
        <h1 className="font-bold text-xl">Products Management</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mx-5">
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </div>
      <Pagination />
    </div>
  );
};

export default AdminAllProducts;
