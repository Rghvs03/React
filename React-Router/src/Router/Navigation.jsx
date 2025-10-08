import React from "react";
import { NavLink, Outlet } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/About" end>
        About
      </NavLink>
      <NavLink to="/Product" end>
        Products
      </NavLink>
      

      {}
    </nav>
  );
};

export default Navigation;
