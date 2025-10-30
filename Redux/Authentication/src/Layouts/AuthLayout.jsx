import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthLayout = () => {
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-center w-full h-screen items-center bg-gray-200">
      {toggle ? <Login setToggle={setToggle}/> : <Register setToggle={setToggle} />}{" "}
    </div>
  );
};

export default AuthLayout;
