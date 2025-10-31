import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import Products from "../Pages/Products";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/homeLayout",
      element: <HomeLayout/>,
      children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "users",
          element: <Users/>,
        },
        {
          path: "products",
          element: <Products/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
