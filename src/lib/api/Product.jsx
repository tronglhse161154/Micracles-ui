import { axiosClient } from "./config/axios-client";
import { useSelector } from "react-redux";


const useCreateProduct = () => {
  const userId = useSelector((state) => state.users.currentUser?.ID);

  // Step 1: Create Product
  const createProduct = async (productData) => {
    try {
      const response = await axiosClient.post(
        `/api/CardControllers?UserId=${userId}`,
        productData
      );

      console.log("Create Product Response:", response);

      if (response.data && response.data.data && response.data.data.productId) {
        return response.data.data.productId;
      } else {
        console.error("Product ID not found in response.");
        throw new Error("Product creation failed: Product ID not found.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };

  // Step 2: Upload Image
  const uploadImage = async (productID, imageFile) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      // Log formData for debugging
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      console.log("Uploading image for productID:", productID);

      const response = await axiosClient.post(
        `/api/Images/uploadImage`,
        formData,
        {
          headers: {
            productID: productID, // Ensure this is passed if the API expects this in headers
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload Image Response:", response);

      if (response.data && response.data.data && response.data.data.imageId) {
        return response.data.data.imageId;
      } else {
        console.error("Image ID not found in response.");
        throw new Error("Image upload failed: Image ID not found.");
      }
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

  // Step 3: Associate Product with Image (ProductImage)
  const associateProductWithImage = async (productID, imageID) => {
    try {
      const response = await axiosClient.post(
        `/api/ProductImagesControllers?productId=${productID}&imagesId=${imageID}`,
        {
          productId: productID,
          imagesId: imageID,
        }
      );

      console.log("Associate Product with Image Response:", response);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Sản phẩm được tạo thành công.");
      }
    } catch (error) {
      console.error("Error associating product with image:", error);
      throw error;
    }
  };

  return { createProduct, uploadImage, associateProductWithImage };
};

export default useCreateProduct;
