import React from "react";
import { Moon, Sun, Snowflake, Search } from "lucide-react";

const Navbar = ({setSearch}) => {
  return (
    <div className="w-full bg-blue-300 flex justify-between p-3 px-10 shadow-2xl rounded-b-2xl" >
      <h1 className="flex gap-3 items-center text-3xl font-semibold text-blue-600 border-b-2 rounded-xl px-2 py-1 border-blue-500">
        <Snowflake size={35} className="animate-bounce text-white" />
        Breezy
      </h1>
      <div className="w-[30%] flex border-2 border-white  text-lg text-white rounded-3xl px-2 gap-5 bg-blue-400 items-center">
        <Search />
        <input
          className="outline-none"
          type="text"
          placeholder="Enter City..."
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <h1 className=" flex  gap-4 text-white text-2xl border-b-2 rounded-xl px-2 py-1 border-blue-500">
        <Sun size={35} />
        /
        <Moon size={30} className="text-blue-600" />
      </h1>
    </div>
  );
};

export default Navbar;
