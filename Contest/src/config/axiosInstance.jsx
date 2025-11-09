import axios from "axios";
import store from "../store/store";
import { setError } from "../features/ErrorSlice";

export const Instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

Instance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = error.status;

    if (message === 404) {
      store.dispatch(setError("Some thing went wrong"));
    } else {
      store.dispatch(setError("Invalid API"));
    }
  }
);
