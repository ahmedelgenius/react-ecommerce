import React from "react";
import AdminAllProductsCard from "../../Components/Admin/AdminAllProductsCard";
import Pagination from "../../Components/Utilits/Pagination";
import CartItem from "./../../Components/Cart/CartItem";
import AdminAllOrdersItem from "../../Components/Admin/AdminAllOrdersItem";
import UserAllOrdersItem from "../../Components/User/UserAllOrdersItem";

const UserAllOrders = () => {
  return (
    <div className="container mx-auto ">
      <div className="pl-5 mb-5">
        <h1 className="font-bold text-xl">Hi ' Ahmed Hany </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-3  mx-5">
        <UserAllOrdersItem />
        <UserAllOrdersItem />
      </div>
      <Pagination />
    </div>
  );
};

export default UserAllOrders;
