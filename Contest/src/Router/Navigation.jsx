import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">MyStore</h1>
      <div className="space-x-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-xl font-medium ${
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `text-xl font-medium ${
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }`
          }
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
