import { axiosClient } from "./config/axios-client";
import { setDetailUser } from "../redux/reducers/userSlice";
export const getUserById = async (userId) => {
  try {
    const response = await axiosClient.get(`/api/UserControllers/GetUserByID`, {
      params: { id: userId } 
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error; 
  }
};
