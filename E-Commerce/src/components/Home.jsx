import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

  let fetchProductsData = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");

      if (response) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log("Error in fetching...", error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center p-10 w-full ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id = {product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating?.rate}
        />
      ))}
    </div>
  );
};

export default Home;
