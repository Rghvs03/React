import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router";
import { removeUser } from "../features/AuthSlice";

const HomeLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
    alert("User Logged Out");
  };
  return (
    <div className="flex w-full h-screen bg-linear-to-br from-slate-100 via-indigo-100 to-violet-100">
      <nav className="flex flex-col items-center w-64 py-8 px-4 border-r border-slate-300 bg-slate-50 shadow-md">
        <h1 className="mb-12 text-3xl font-bold text-indigo-700 tracking-tight">
          Logo
        </h1>
        <NavLink
          to={""}
          end
          className={({ isActive }) =>
            `w-full text-lg py-3 px-3 mb-4 rounded-lg transition-colors duration-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 font-semibold ${
              isActive ? "bg-indigo-100 text-violet-800 shadow" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"users"}
          end
          className={({ isActive }) =>
            `w-full text-lg py-3 px-3 mb-4 rounded-lg transition-colors duration-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 font-semibold ${
              isActive ? "bg-indigo-100 text-violet-800 shadow" : ""
            }`
          }
        >
          Users
        </NavLink>
        <NavLink
          to={"products"}
          end
          className={({ isActive }) =>
            `w-full text-lg py-3 px-3 rounded-lg transition-colors duration-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 font-semibold ${
              isActive ? "bg-indigo-100 text-violet-800 shadow" : ""
            }`
          }
        >
          Products
        </NavLink>
        <button
          onClick={handleLogout}
          className="bg-red-500 w-[50%] text-white text-xl mt-80 px-5 py-2 rounded-lg cursor-pointer"
        >
          Log Out
        </button>
      </nav>
      <div className="flex-1 flex flex-col p-8 bg-linear-to-bl from-slate-100 via-indigo-50 to-violet-50">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
