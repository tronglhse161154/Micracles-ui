import { axiosClient } from "./config/axios-client";
//   import nProgress from "nprogress";
//   import "nprogress/nprogress.css";
import { createAsyncThunk } from "@reduxjs/toolkit";




///////////////////////////////////////////////////////////////////////
const useCreateProduct = () => {
    const createProduct = async (productData) => {
      try {
        const response = await axiosClient.post(
          "/api/CardControllers",
          productData
        );
        console.log(response);
        return response.data.data.productID; // Assuming the response contains productID
      } catch (error) {
        console.error("Error creating product:", error);
        throw error;
      }
    };
  
    const uploadImage = async (productID, imageFile) => {
      try {
        const formData = new FormData();
        formData.append("file", imageFile);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        console.log("Uploading image with productID:", productID);
  
        const response = await axiosClient.post(
          "/api/Images/uploadImages",
          formData,
          {
            headers: {
              productID: productID,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image upload response:", response);
      } catch (error) {
        console.error("Error uploading image:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
        throw error;
      }
    };
  
    return { createProduct, uploadImage };
  };
  
  export default useCreateProduct;
  ///////////////////////////////////////////////////////////////