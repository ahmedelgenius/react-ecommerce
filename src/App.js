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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
