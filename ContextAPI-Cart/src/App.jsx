/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { MyStore } from "./Context/MyContext";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Leather Wallet",
      price: 1299,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 2499,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Classic Watch",
      price: 1899,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Sunglasses",
      price: 999,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1511185307590-0627cdcfc4f9?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Wireless Headset",
      price: 2199,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      name: "Backpack",
      price: 1699,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 7,
      name: "Smartphone",
      price: 28999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3c0b0dd0?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 8,
      name: "Coffee Mug",
      price: 399,
      rating: 4.1,
      image:
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 9,
      name: "Gaming Keyboard",
      price: 3499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 10,
      name: "DSLR Camera",
      price: 49999,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 11,
      name: "Casual Joggers",
      price: 2299,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 12,
      name: "Bluetooth Speaker",
      price: 1599,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 13,
      name: "Smartwatch",
      price: 10999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 14,
      name: "Laptop Sleeve",
      price: 899,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 15,
      name: "Casual Sneakers",
      price: 2799,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1465101178521-c1a158da7a4a?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 16,
      name: "Wired Earphones",
      price: 499,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 17,
      name: "Office Chair",
      price: 6999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587cc2?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 18,
      name: "Travel Bag",
      price: 3099,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 19,
      name: "Desk Lamp",
      price: 1199,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 20,
      name: "Gaming Mouse",
      price: 2499,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop&q=60",
    },
  ]);


  let {toggle} = useContext(MyStore);


  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      <div className="w-screen flex flex-wrap gap-5 p-5 m-6">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} products = {products} />;
        })}
      </div>

      {toggle ? <Modal/> : null}
      

    </div>
  );
};

export default App;
