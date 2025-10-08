import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="w-full bg-blue-500 flex justify-between items-center px-10 py-3 font-medium font-serif text-white shadow-gray-400 shadow-xl rounded-b-2xl">

      <h1 className="flex text-2xl">MyShop</h1>

      <div className="flex gap-10 text-xl font-bold">
        <NavLink  className={({isActive})=> isActive ? 'text-amber-300':null } to={"/"} end>
          Home
        </NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-amber-300':null } to={"/About"} end>
          About
        </NavLink>
      </div>

      <div className="flex gap-10 text-xl">
        <h1>Profile</h1>
        <h1>My Cart</h1>
      </div>
    </nav>
  );
};

export default Navigation;
