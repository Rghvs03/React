import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Modal = () => {
  let { setToggle, cartItems } = useContext(MyStore);
  // console.log(cartItems);
  return (
    <div className="flex justify-between backdrop:blur-lg bg-white/80 absolute w-full h-[80%] p-5">
      <h1 className="text-3xl bg-green-500 px-4 py-2 rounded-xl text-white h-[10%]">
        My Cart
      </h1>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="absolute right-5 text-3xl px-4 py-2 rounded-xl text-white bg-red-500 cursor-pointer"
      >
        X
      </button>

      <div>
        {cartItems.map((elem) => {
          return (
            <div
              key={elem.id}
              className="w-[18%] h-[60%] rounded-2xl flex flex-col p-4 gap-5 shadow-lg bg-zinc-200"
            >
              <img
                className="h-45 rounded-2xl"
                src={elem.image}
                alt="img not found"
              />

              <div>
                <h1 className="font-bold text-lg">Name: {elem.name} </h1>
                <h1 className="font-bold text-lg">Price: {elem.price} </h1>
                <h1 className="font-bold text-lg">Rating: {elem.rating} </h1>
              </div>

              <div className="flex justify-between">
                <button className="bg-red-500 rounded-xl px-4 py-3 text-white">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
