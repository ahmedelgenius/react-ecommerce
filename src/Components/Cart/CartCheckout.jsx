import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

const CartCheckout = () => {
  const navigate = useNavigate();

  const getCheckout = () => {
    navigate("/orders/paymentmethod");
  };
  return (
    <div className="my-10">
      <div
        className=" w-full lg:w-1/2 mx-auto px-10 pt-10"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="flex justify-between gap-2 lg:gap-0 border-b-2 py-4">
          <p>Subtotal</p>
          <span className="font-semibold">$99.00</span>
        </div>
        <div className="flex justify-between gap-2 lg:gap-0 border-b-2 py-4">
          <p>Shipping</p>
          <span className="font-semibold">$5.00</span>
        </div>
        <div className="flex justify-between gap-2 lg:gap-0 border-b-2 py-4">
          <p>Tax</p>
          <span className="font-semibold">$8.32</span>
        </div>
        <div className="p-inputgroup my-5">
          <Button label="Apply" />
          <InputText placeholder="Discount Code" />
        </div>
        <div className="flex text-base gap-2 lg:gap-0 lg:text-xl font-semibold justify-between  border-t-2 py-4">
          <p>Order total</p>
          <span className="font-semibold">$112.32</span>
        </div>
      </div>
      <div
        className="mx-auto flex flex-col items-center gap-2 justify-center my-5
      "
      >
        <button
          label="Submit"
          onClick={() => getCheckout()}
          className="hover:opacity-90 w-3/4 lg:w-1/2  py-3 lg:py-4 rounded-xl font-semibold text-lg   text-white"
          style={{ backgroundColor: "#6366F1" }}
          type="submit"
        >
          Checkout
        </button>
        <div>
          <span>or </span>
          <Link
            to="/categories"
            className="font-lg text-indigo-600 font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
