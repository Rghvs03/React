import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../components/HomePage";
import Cart from "../components/Cart";
import Navigation from "./Navigation.jsx";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Cart",
      element: <Cart />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
};

export default AppRouter;
