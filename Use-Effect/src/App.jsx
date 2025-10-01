// import React, { useState } from "react";
// import Counter1 from "./components/Counter1";

// const App = () => {
//   const [count, setCount] = useState(0);
//   console.log("count", count)
//   return (
//     <div>
//       <h1 className="text-2xl">Inside the App</h1>
//       <h1 className="text-xl">Count: {count}</h1>
//       <button
//         className="bg-amber-600 p-1 px-3"
//         onClick={() => setCount(count + 1)}
//       >
//         Incree
//       </button>

//     <Counter1/>

//     </div>
//   );
// };

// export default App;

import axios from "axios";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {

  console.log("raghav");

  const fetchProducts = async () => {
    try {
      let result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    } catch (err) {
      console.log("error hai", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  // axios

  //   .get("https://fakestoreapi.com/products")
  //   .then((response) => {
  //     setProducts(response.data);
  //   })

  //   .catch((err) => console.log(err,"error in fetching data"));
  // }, []);

  return (
    <div className="flex flex-wrap p-10 gap-10 justify-center bg-cyan-50">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default App;
