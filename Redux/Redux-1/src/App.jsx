import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, addnumber } from "./store/features/CounterSlice";
import { addname } from "./store/features/userSlice"; // import from userSlice

const App = () => {
  const count = useSelector((state) => state.count.value);
  const user = useSelector((state) => state.user.value);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {count}</h1>
      <h1>Name : {user}</h1>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        placeholder="Enter Number"
      />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <button onClick={() => dispatch(addnumber(Number(number)))}>Add</button>
      <button onClick={() => dispatch(addname(name))}>Add</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
