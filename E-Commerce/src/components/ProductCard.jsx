import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({
  id,
  image,
  price,
  rating,
  title,
  onBuyNow = () => {},
  onAddToCart = () => {},
}) => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${id}`);
      }}
      className=" w-[20%] bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-300 transition-transform hover:scale-105 hover:shadow-xl flex flex-col"
    >
      <img
        className="object-contain h-48 w-full bg-gray-100"
        src={image}
        alt={title}
      />
      <div className="px-5 py-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600"> ₹{price}</span>
          <span className="text-sm text-yellow-500 font-medium flex items-center">
            <svg
              className="w-5 h-5 mr-1 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.75l-6.53 3.63 1.25-7.29-5.29-5.18 7.32-1.06L12 2l3.25 6.85 7.32 1.06-5.29 5.18 1.25 7.29z" />
            </svg>
            {rating}
          </span>
        </div>
        <div className="flex gap-3 mt-3">
          <button
            className="flex-1 py-2 px-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition active:scale-95"
            onClick={onBuyNow}
          >
            Buy Now
          </button>
          <button
            className="flex-1 py-2 px-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition active:scale-95"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
