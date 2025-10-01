/* eslint-disable no-unused-vars */
// ProductCard.jsx
import React from "react";

const ProductCard = ({ product}) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-400 duration-300 p-6">
      <img 
        className="h-100 w-full object-cover rounded-md mb-4 shadow-2xl"
        src={product.image}
    
      />
      <div className="flex items-center mb-2">
        <span className="text-xs font-semibold text-blue-500 bg-blue-100 rounded-full px-2 py-1 mr-2">
          {product.category}
        </span>
        <div className="flex items-center ml-auto">
          <svg
            className="w-5 h-5 text-yellow-400 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.691h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.415a1 1 0 00-.364 1.118l1.286 3.959c.3.921-.755 1.688-1.54 1.118l-3.32-2.414a1 1 0 00-1.175 0l-3.32 2.414c-.785.57-1.84-.197-1.54-1.118l1.286-3.959a1 1 0 00-.364-1.118L2.465 9.387c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.691l1.286-3.959z" />
          </svg>
          <span className="text-sm text-gray-600 font-medium">{product.rating.rate}</span>
        </div>
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-2 truncate">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-green-500">₹{product.price}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
