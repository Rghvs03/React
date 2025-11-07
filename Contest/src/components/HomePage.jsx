import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Router/Navigation.jsx";
import ProductCard from "./ProductCard.jsx";
import { GetProductsFromAPI } from "../features/ProductSlice.jsx";
import { CircleAlertIcon, LoaderPinwheelIcon } from "lucide-react";
import { getApiDataFromHook } from "../hooks/getApiDataFromHook.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { data, isPending, error } = getApiDataFromHook();
  useEffect(() => {
    if (data) {
      dispatch(GetProductsFromAPI(data));
    }
  }, [data, dispatch]);
  if (isPending)
    return (
      <div className="flex h-screen justify-center items-center">
        {" "}
        <LoaderPinwheelIcon size={50} className="animate-spin" />
      </div>
    );
  if (error)
    return (
      <div className="flex h-screen justify-center items-center">
        {" "}
        <CircleAlertIcon size={50} className="animate-bounce" />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navigation />

      {/* Product Showcase */}
      <section className=" flex flex-col py-12 px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Featured Products
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Discover our latest and most popular items
          </p>
        </div>

        {/* Product Grid */}
        <div className=" justify-center flex flex-wrap gap-15">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating?.rate}
            />
          ))}
        </div>
      </section>

      {/* Optional Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
