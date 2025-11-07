import React from "react";
import Navigation from "../Router/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { AddtoCart, RemovefromCart } from "../features/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();


  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-gray-500 text-lg">Cart is empty.</div>
            ) : (
              cartItems.map((item) => (
                <div
                  className="flex items-center justify-between bg-white rounded-xl shadow p-4"
                  key={item.id}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-500 text-sm">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
                      onClick={() => dispatch(RemovefromCart({ id: item.id }))}
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
                      onClick={() =>
                        dispatch(
                          AddtoCart({
                            id: item.id,
                            image: item.image,
                            price: item.price,
                            rating: item.rating,
                            title: item.title,
                          })
                        )
                      }
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 font-medium"
                      onClick={() =>
                        dispatch(
                          RemovefromCart({ id: item.id, removeAll: true })
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="bg-white shadow rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span>₹99</span>
            </div>
            <div className="border-t my-3"></div>
            <div className="flex justify-between font-semibold text-gray-900 text-lg">
              <span>Total</span>
              <span>₹{subtotal + 99}</span>
            </div>
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
