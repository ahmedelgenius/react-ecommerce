import Home from "./Pages/Home";
import Navbar from "./Components/Utilits/Navbar";
import Footer from "./Components/Utilits/Footer";
import { Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import AllCategory from "./Pages/AllCategory";
import AllBrands from "./Pages/AllBrands";
import { useState } from "react";
import ProductPage from "./Pages/ProductPage";
import PaymentMethodPage from "./Pages/PaymentMethodPage";
import AdminPage from "./Pages/Admin/AdminPage";
import AdminAllOrders from "./Pages/Admin/AdminAllOrders";
import AdminAllProducts from "./Pages/Admin/AdminAllProducts";
import AdminOrdersDetails from "./Pages/Admin/AdminOrdersDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allcategory" element={<AllCategory />} />
        <Route path="/allbrands" element={<AllBrands />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/orders/paymentmethod" element={<PaymentMethodPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="/admin/allorders" element={<AdminAllOrders />} />
          <Route path="/admin/allproducts" element={<AdminAllProducts />} />
          <Route path="/admin/orders/:id" element={<AdminOrdersDetails />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
