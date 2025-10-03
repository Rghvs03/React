/* eslint-disable no-unused-vars */
import React from "react";


const Card = ({title,value,icon:Icon}) => {
  return (
    <div className="flex w-[18%] items-center h-25 rounded-full border-2 shadow-2xl bg-blue-300 mt-20 p-5 text-white hover:bg-blue-600 duration-400 border-t-2 border-blue-700 ">
      <Icon  size={40} />

      <div className="flex flex-col p-8">
        <h1 className="text-xl">{title}</h1>
        <h1 className="text-xl">{value}</h1>
      </div>
    </div>
  );
};

export default Card;
