import Home from "../components/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../components/Checkout";
import Header from "../components/Header";
import SignIn from "../components/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout" element={<Header />} />
      <Route path="/checkout" element={<SignIn />} />
    </Routes>
  );
};

export default AllRoutes;
