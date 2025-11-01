import { axiosInstance } from "../config/axiosInstance";

export const fetchusersdata = async () => {
  try {
    let response = await axiosInstance.get("/users");
    if (response) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
