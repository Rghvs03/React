/* eslint-disable no-unused-vars */
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [toggle, setToggle] = useState(true);
  const [usersData, setUsersdata] = useState(
    () => JSON.parse(localStorage.getItem("usersdata")) || []
  );

  const [existingUser, setExistingUser] = useState([]);

  console.log(usersData);
  return (
    <div className="h-screen w-screen bg-gray-300 flex flex-col justify-center items-center">
      {toggle ? (
        <Login
          setToggle={setToggle}
          usersData={usersData}
          setExistingUser={setExistingUser}
        />
      ) : (
        <Register
          setToggle={setToggle}
          usersData={usersData}
          setUsersdata={setUsersdata}
        />
      )}


      <div className="flex m-5 gap-2">

      {existingUser.length
        ? existingUser.map((elem) => {
            return (
              <div className="bg-white border-2 border-blue-500 rounded-xl p-4 shadow-md">
                <h1 className="text-blue-500 font-semibold text-lg">
                  <span className="text-gray-600">Name - </span>{elem.username}
                </h1>
                <p className="text-blue-500 text-sm mt-1">
                  <span className="text-gray-600">Email - </span> {elem.email}
                </p>
              </div>
            );
          })
        : "No Users"}
      </div>

    </div>
  );
}

export default App;
