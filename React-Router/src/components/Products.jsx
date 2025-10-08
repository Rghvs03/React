import React from "react";
import { Outlet } from "react-router";

const Products = () => {
  return (
    <div>
      Products
      <Outlet />
    </div>
  );
};

export default Products;
