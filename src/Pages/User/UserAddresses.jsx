import React from "react";
import UserAddressesCard from "../../Components/User/UserAddressesCard";
import { Link } from "react-router-dom";

const UserAddresses = () => {
  return (
    <div className="container mx-auto ">
      <div className="pl-5 mb-5">
        <h1 className="font-bold text-xl">My Addresses </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3  mx-5">
        <UserAddressesCard />
        <UserAddressesCard />
      </div>

      <div className="flex justify-center mt-16">
        <Link
          to="/user/add-address"
          className="bg-gray-900 hover:bg-gray-800 px-10 py-3 rounded-lg text-white font-semibold "
        >
          Add Address
        </Link>
      </div>
    </div>
  );
};

export default UserAddresses;
