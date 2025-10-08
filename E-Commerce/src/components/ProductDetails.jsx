import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  let singleProduct = async () => {
    try {
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);

      if (response) {
        setProduct(response.data);
      }
    } catch (error) {
      console.error("Error fetching the product:", error);
    }
  };

  console.log(product);

  useEffect(() => {
    singleProduct();

    return () => {};
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-[60%] mx-auto bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="w-80 h-80 object-contain bg-gray-200 rounded-xl shadow-lg"
              />
            )}
          </div>
          {/* Details Section */}
          <div className="md:w-1/2 flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Product Details
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-lg text-gray-700 mb-2">{product.description}</p>
            <p className="text-xl text-blue-700 font-bold mb-4">
              Price: ₹{Math.round(product.price * 85)}
            </p>
            <div className="flex gap-4 mt-3">
              <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition active:scale-95 text-lg">
                Buy Now
              </button>
              <button className="flex-1 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition active:scale-95 text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
