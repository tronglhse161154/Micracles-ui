import { axiosClient } from "./config/axios-client";



export const getUserPayment = async (userId) => {
    try {
      const response = await axiosClient.get(`/api/Payment/userId`, {
        params: {
          userId: userId,
        },
      });
      if (response.status === 200) {
        return response.data; // Returns the payment data
      } else {
        throw new Error("Failed to fetch payment information");
      }
    } catch (error) {
      console.error("Error fetching payment information:", error);
      throw error; // Rethrow the error to handle it elsewhere if necessary
    }
  };