import { Instance } from "../config/axiosInstance";
import { GetProductsFromAPI } from "../features/ProductSlice";

export const fetchProducts = async () => {
  try {
    const response = await Instance.get("/productss");
    if (response) {
      localStorage.setItem("users", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
