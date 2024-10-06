import { axiosClient } from "./config/axios-client";
import { setCurrentUser } from "../redux/reducers/userSlice";
import { use } from "framer-motion/client";
export const getUserById = async (userId) => {
  try {
    const response = await axiosClient.get(`/api/UserControllers/GetUserByID`, {
      params: { id: userId } 
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error; 
  };

  

};


export const updateUser = async (userId, userData) => {
  try {
    console.log("Updating user data:", userData); // Logging payload
    const response = await axiosClient.patch('/api/UserControllers/UpdateUserByID', userData, {
      params: { id: userId } // passing the id in query params
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

