import React from "react";

import Home from "./pages/home";
import Login from "./components/dailylogin";
import products from "./components/dailyproductdata";
import Products from "./components/dailyproduct";
import Productdetail from "./components/dailyproductdetail";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { CartProvider } from "react-use-cart";

import Sidebar from "./components/Admin Panel/adminnav";
import Signup from "./components/dailysignup";
import Customers from "./components/Admin Panel/customers";
import Orders from "./components/Admin Panel/orders";
import Dailyproduct from "./components/Admin Panel/product";
import Collection from "./components/Admin Panel/collection";




function App() {


  return (

    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/dailysignup" element={<Signup />} />
            <Route path="/dailylogin" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Sidebar />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/adminproducts" element={<Dailyproduct />} />
            <Route path="/product/:id" element={<Productdetail />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export { App }