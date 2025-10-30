import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import HomeLayout from "../Layouts/HomeLayout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/home",
      element: <HomeLayout />,
      children: [
        // {
        //     path:
        // }
      ]
    },
  ]);
  return <RouterProvider router = {router}/>;
};

export default AppRouter;
