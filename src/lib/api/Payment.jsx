import { axiosClient } from "./config/axios-client";

export const getAllPayment = async () => {
  try {
    const response = await axiosClient.get("/api/Payment");
    return response.data;
  } catch (error) {
    throw error;
  }
};
