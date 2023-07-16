import React from "react";
import AdminAllProductsCard from "../../Components/Admin/AdminAllProductsCard";
import Pagination from "../../Components/Utilits/Pagination";
import CartItem from "./../../Components/Cart/CartItem";
import AdminAllOrdersItem from "../../Components/Admin/AdminAllOrdersItem";

const AdminAllOrders = () => {
  return (
    <div className="container mx-auto ">
      <div className="pl-5 mb-5">
        <h1 className="font-bold text-xl">Order Management</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-3  mx-5">
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </div>
      <Pagination />
    </div>
  );
};

export default AdminAllOrders;
