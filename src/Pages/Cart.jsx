import CartCheckout from "../Components/Cart/CartCheckout";
import CartItem from "../Components/Cart/CartItem";

const Cart = () => {
  return (
    <div className="container  mx-auto ">
      {/* <div className=" border-b-2 py-10">
        <h1 className="text-4xl font-bold ">Shopping Cart</h1>
      </div> */}
      {/* <div className="grid grid-cols-3 py-10 place-items-center border-b-2 ">
        <p className="border-r-2">Product</p>
        <p className="border-r-2">Quantity</p>
        <p className="border-r-2">Price</p>
      </div> */}
      <CartItem />
      <CartItem />
      <CartItem />

      <CartCheckout />
    </div>
  );
};

export default Cart;
