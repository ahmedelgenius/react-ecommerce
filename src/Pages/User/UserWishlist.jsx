import React from "react";
import UserWishlistProductCard from "../../Components/User/UserWishlistProductCard";
import Pagination from "../../Components/Utilits/Pagination";

const UserWishlist = () => {
  return (
    <div className="container mx-auto">
      <div className="pl-5 flex justify-center border-b-2 pb-4 mx-10 mb-5">
        <h1 className="font-bold  text-xl">Wishlist</h1>
      </div>
      <UserWishlistProductCard />
      <UserWishlistProductCard />
      <UserWishlistProductCard />

      <Pagination />
    </div>
  );
};

export default UserWishlist;
