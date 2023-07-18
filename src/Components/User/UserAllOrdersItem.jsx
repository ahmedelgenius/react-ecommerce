import React from "react";
import UserProductsCard from "../../Pages/User/UserProductsCard";

const UserAllOrdersItem = () => {
  return (
    <div>
      <div className="border-b-2 border-t-2 py-5  mb-5">
        <div className="flex justify-between">
          <p className="text-lg lg:text-lg pb-5">
            <span className="text-lg lg:text-lg font-semibold">
              Order number :{" "}
            </span>
            #12343254
          </p>
          <p className="font-semibold text-xl mr-10">total : $600</p>
        </div>

        <UserProductsCard />
        <UserProductsCard />
        <UserProductsCard />

        <div className="flex justify-end">
          <p className="font-semibold text-lg mr-10">
            Order status : <span className="text-gray-500">Underway</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAllOrdersItem;
