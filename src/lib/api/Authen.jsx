import { axiosClient } from "./config/axios-client";
import {jwtDecode }from "jwt-decode";
import { setCurrentUser } from "../redux/reducers/userSlice";


export const registerUser = async (email, userName, password, fullName) => {
    try {
      const response = await axiosClient.post("/api/UserControllers/User register", {
        email,
        userName,
        password,
        fullName,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const confirmUser = async (email, code) => {
    try {
      const response = await axiosClient.post("/api/UserControllers/confirm", null, {
        params: { email, code },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };



  export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axiosClient.post("api/UserControllers/login", {
            email: email,
            password: password,
        });
        console.log("Full Response:", response);
        const responseData = response.data;
        console.log("Response Data:", responseData); // Log chi tiết phản hồi từ server

        if(responseData.token) {
           // const user = responseData.data.loginResModel;
            const token = responseData.token;
            const user = jwtDecode(token);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify(user));

            console.log("Dispatching setCurrentUser action");

            dispatch(setCurrentUser(user)); // Lưu thông tin người dùng vào Redux store

            return {token, user};
        } else {
            throw new Error(responseData.message || "Login failed !");
        }
    } catch (error){
        throw error;
    }
}