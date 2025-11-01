/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = ({ setToggle, usersData, setExistingUser }) => {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const handleLoginForm = (data) => {
    // let existingUser = usersData.filter(
    //   (elem) => elem.email === data.email && elem.password === data.password
    // );

    // if (existingUser.length === 0) {
    //   return alert("User not found");
    // }

    // setExistingUser((prev) => [...prev, existingUser[0]]);

    // alert("User loggedin");
    const { email, password } = JSON.parse(localStorage.getItem("users"));

    if (email === data.email && password === data.password) {
      navigate("/homeLayout");

      alert("User Logged in Successfully");
    } else {
      alert("User Not Found");
    }
    reset();
  };

  return (
    <div className="flex flex-col w-[30%] bg-white p-5 rounded-2xl">
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className="flex flex-col gap-6 justify-center items-center w-full"
      >
        <h1 className="text-xl font-semibold">Login Here</h1>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
          className="w-full p-2 outline-none border-2 border-blue-500 rounded-lg bg-blue-100"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter your password"
          className="w-full p-2 outline-none border-2 border-blue-500 rounded-lg bg-blue-100"
        />
        <input
          type="submit"
          value={"Let's Check"}
          className="w-full bg-blue-500 p-2 rounded-lg text-lg text-white m-4"
        />
      </form>

      <div className="flex justify-center m-2">
        <p>
          Don't have an account ?{" "}
          <span
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            className="text-blue-600 cursor-pointer"
          >
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
