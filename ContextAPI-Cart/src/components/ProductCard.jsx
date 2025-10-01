import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product, products}) => {

  let {setCartItems} =  useContext(MyStore);
  return (
    <div className="w-[18%] h-[60%] rounded-2xl flex flex-col p-4 gap-5 shadow-lg bg-zinc-200">
      <img
        className="h-45 rounded-2xl"
        src={product.image}
        alt="img not found"
      />

      <div>
        <h1 className="font-bold text-lg">Name: {product.name} </h1>
        <h1 className="font-bold text-lg">Price: {product.price} </h1>
        <h1 className="font-bold text-lg">Rating: {product.rating} </h1>
      </div>

      <div className="flex justify-between">
        <button className="bg-red-500 rounded-xl px-4 py-3 text-white">
          Delete
        </button>
        <button
          onClick={() =>
            products.filter((elem) =>
              elem.id === product.id ? setCartItems(prev => [...prev,elem]) : null
            )
          }
          className="bg-green-500 px-4 py-3 rounded-xl text-white cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
