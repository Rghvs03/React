import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Navbar = () => {
  let {setToggle} = useContext(MyStore);

  return (
    <div className="flex justify-between p-4 bg-zinc-200 rounded-2xl font-mono">
      <h1 className="px-6 py-2 bg-blue-500 text-2xl text-white rounded-2xl shadow-xl">
        MyShop
      </h1>
      <button onClick={() => setToggle((prev) => !prev )} className="px-6 py-2 text-2xl bg-green-400 text-white rounded-2xl shadow-xl">
        Cart Section
      </button>
    </div>
  );
};

export default Navbar;
