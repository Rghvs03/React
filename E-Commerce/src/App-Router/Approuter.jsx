import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";

const Approuter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/:id" element={<ProductDetails/>} />
    </Routes>
  );
};

export default Approuter;
