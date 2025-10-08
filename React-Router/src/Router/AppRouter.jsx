import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Details from "../components/Details";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Product" element={<Products />}>
        <Route path="dets" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
