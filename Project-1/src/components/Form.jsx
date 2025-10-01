/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useForm } from "react-hook-form";

const Form = ({ setUsersdata }) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    contact: "",
    image: "",
  });

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });

    console.log(e);
  };
  console.log(formdata);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsersdata((prev) => [...prev, formdata]);

    // setFormdata({
    //   name: "",
    //   email: "",
    //   contact: "",
    //   image: "",
    // });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto mt-30 bg-white shadow-lg rounded-2xl p-6 space-y-5 border-2 border-blue-500"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        User Details
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={changeHandler}
          placeholder="Enter your name"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formdata.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-gray-600"
        >
          Contact
        </label>
        <input
          type="text"
          name="contact"
          value={formdata.contact}
          onChange={changeHandler}
          placeholder="Enter your contact number"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="img"
          className="block text-sm font-medium text-gray-600"
        >
          Profile Image
        </label>
        <input
          type="text"
          name="image"
          value={formdata.image}
          onChange={changeHandler}
          placeholder="Enter image url"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

// const Form = ({ setUsersdata, usersData }) => {
//   let { register, handleSubmit, reset } = useForm();

//   const handleForm = (data) => {
//     console.log(data);
//     let updatedData = [...usersData, data];

//     setUsersdata(updatedData);

//     localStorage.setItem("userdata", JSON.stringify(updatedData));

//     reset();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(handleForm)}
//       className="max-w-md mx-auto mt-40 bg-white rounded-2xl shadow-lg p-6 space-y-4 border-2 border-indigo-200"
//     >
//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Name</label>
//         <input
//           type="text"
//           {...register("name")}
//           placeholder="Enter your name"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Email</label>
//         <input
//           type="text"
//           {...register("email")}
//           placeholder="Enter your email"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Contact</label>
//         <input
//           type="text"
//           {...register("contact")}
//           placeholder="Enter your contact number"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Image</label>
//         <input
//           type="text"
//           {...register("image")}
//           placeholder="Enter image url"
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-600 hover:scale-103 transition-transform duration-200"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;
