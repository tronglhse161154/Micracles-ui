import { axiosClient } from "./config/axios-client";
import { addToCartSuccess } from "../redux/reducers/cartSlice";


const addToCart = (userId, productId, quantity) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/api/CartProduct/user/${userId}`, {
      productId,
      quantity,
    });

    if (response.status === 200) {
      console.log(response.data);

      // Dispatch the Redux action to add product to the cart in the store
      dispatch(addToCartSuccess({ productId, quantity }));

      return response.data;
    } else {
      throw error;
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export default addToCart;


// Function to fetch user's cart
export const fetchUserCart = async (userId) => {
  try {
    const response = await axiosClient.get(`/api/Cart/user/${userId}/cart`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch cart");
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};


export const removeFromCart = async (userId, productId) => {
  try {
    console.log("Calling API to remove product:", productId); 
    const response = await axiosClient.delete(`/api/Cart/user/${userId}/cart/product/${productId}`,
      {
        userId,
        productId
      }
    );

    if (response) {
      console.log('Product removed successfully:', response.data);

      return response.data;
    } else {
      throw new Error('Failed to remove product');
    }
  } catch (error) {
    console.error('Error removing product from cart:', error);
    throw error;
  }
};


export const fetchCartProductDetail = async (productId) => {
  try{
    const response = await axiosClient.post(`/api/CardControllers/id?productId=${productId}`);
    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error('Failed to fetch product in cart details');
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

export const createOrder = async (userId) => {
  try {
    
    const response = await axiosClient.post(`/api/OrderProduct/AddOrder/OrderProduct`, null, {
      params: { userId }
      // Thêm userId vào tham số truy vấn
    });
    
    if (response.status === 200) {
      console.log(response.data.data.orderId)
      return response.data.data.orderId; 
    } else {
      throw new Error("Failed to create order");
    }
  } catch (error) {
    console.error("Error creating order:", error.response ? error.response.data : error);
    throw error;
  }
};


export const fetchOrderDetails = async (orderId) => {
  try {
    const response = await axiosClient.get(`/api/OrderControllers/id`, {
      params: { orderId },
    });

    if (response.status === 200) {
      return response.data; // Giả sử response.data chứa thông tin đơn hàng
    } else {
      throw new Error("Failed to fetch order details");
    }
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};




export const paymentVNPay = async (userId, orderId) => {
  try {
    // Gửi userId và orderId dưới dạng query parameters
    const response = await axiosClient.post(`/api/Payment/payment/vnpay`, null, {
      params: { 
        userId: userId,  // Truyền userId vào params
        orderId: orderId // Truyền orderId vào params
      },
    });
    
    console.log("UserID:", userId);
    console.log("OrderID:", orderId);
    
    return response.data.url; // Trả về URL thanh toán
  } catch (error) {
    console.error('Payment API error:', error);
    throw error;
  }
};











