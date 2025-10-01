/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <MyStore.Provider value={{toggle, setToggle, cartItems, setCartItems}}>
      {children}
    </MyStore.Provider>
  );
};
