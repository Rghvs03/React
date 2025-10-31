/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";

const Register = ({ setToggle, usersData, setUsersdata }) => {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const handleRegisterForm = (data) => {
    // let updatedData = [...usersData, data];

    // setUsersdata(updatedData);
    // localStorage.setItem( "usersdata" , JSON.stringify(updatedData));
    dispatch(addUser(data));
    alert("User Registerd Successfully");
    reset();
  };

  return (
    <div className="flex flex-col w-[30%] bg-white p-5 rounded-2xl">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="flex flex-col gap-6 justify-center items-center w-full"
        action =""
      >
        <h1 className="text-xl font-semibold">Register</h1>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
          className="w-full p-2 outline-none border-2 border-blue-500 rounded-lg bg-blue-100"
        />
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Enter your username"
          className="w-full p-2 outline-none border-2 border-blue-500 rounded-lg bg-blue-100"
        />

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Set your password"
          className="w-full p-2 outline-none border-2 border-blue-500 rounded-lg bg-blue-100"
        />
        <input
          type="submit"
          value={"Register"}
          className="w-full bg-blue-500 p-2 rounded-lg text-lg text-white"
        />
      </form>

      <div className="flex justify-center m-2">
        <p>
          Already have an account ?{" "}
          <span
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            className="text-blue-600 cursor-pointer"
          >
            Login Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
