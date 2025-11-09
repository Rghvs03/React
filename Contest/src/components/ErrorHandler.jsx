import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../features/ErrorSlice";

const ErrorHandler = () => {
  const dispatch = useDispatch();
  let message = useSelector((state) => state.error.message);

  useEffect(() => {
    if (message) {
      toast.error(message);
      dispatch(removeError());
    }
  }, [message]);

  return null;
};

export default ErrorHandler;
