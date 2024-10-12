import { axiosClient } from "./config/axios-client";
import { setCurrentUser } from "../redux/reducers/userSlice";
import { use } from "framer-motion/client";
import { message } from "antd";
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
    console.log("Updating user data:", userData); 
    const response = await axiosClient.patch('/api/UserControllers/UpdateUserByID', userData, {
      params: { id: userId }
    });
    console.log("Update response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const getAllUser = async () => {
  try {
    const res = await axiosClient.get('/api/UserControllers/GetAllUsers');
    console.log("API response:", res); // Add this to inspect the response
    return res.data;
  } catch (error) {
    message.error("Error fetching users");
    console.error("Error fetching users:", error);
    throw error; // Throw the error if you want to handle it elsewhere
  }
}