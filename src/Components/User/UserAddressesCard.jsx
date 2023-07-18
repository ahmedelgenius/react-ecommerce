import React from "react";
import { Link } from "react-router-dom";

const UserAddressesCard = () => {
  return (
    <div className="bg-slate-200 pb-8 pt-3 relative px-5 rounded-lg">
      <div className="flex flex-col ">
        <p className="text-lg font-semibold pb-5">address name</p>
        <p className="pb-3">
          address details address details address details address details{" "}
        </p>
        <p className="">Phone Number : 0123456890</p>
      </div>
      <div className="absolute right-4 top-3 flex gap-10">
        <Link
          to="/user/edit-address"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Edit
        </Link>
        <button
          type="button"
          class="font-medium text-red-600 hover:text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserAddressesCard;
