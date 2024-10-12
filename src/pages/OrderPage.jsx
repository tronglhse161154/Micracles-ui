import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOrderDetails } from "../lib/api/Cart";
import { paymentVNPay } from "../lib/api/Cart"; // Import function thanh toán
import { useSelector } from "react-redux";
import { Button } from "antd";
import toast from "react-hot-toast";

const OrderPage = () => {
  const { orderId } = useParams(); // Lấy OrderID từ URL
  const currentUser = useSelector((state) => state.users.currentUser); // Lấy thông tin người dùng hiện tại
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const order = await fetchOrderDetails(orderId); // Gọi API lấy chi tiết đơn hàng
        setOrderDetails(order);
      } catch (error) {
        console.error("Failed to fetch order details:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  // Hàm xử lý thanh toán
  const handlePayment = async () => {
    console.log("User ID:", currentUser.ID);
    console.log("Order ID:", orderDetails.id);
    if (currentUser && orderDetails) {
      try {
        const paymentUrl = await paymentVNPay(currentUser.ID, orderDetails.id);
        if (paymentUrl) {
          window.location.href = paymentUrl; // Điều hướng người dùng tới URL VNPay
        }
      } catch (error) {
        toast.error("Đã xảy ra lỗi khi thực hiện thanh toán");
      }
    } else {
      toast.error("Vui lòng đăng nhập để thanh toán");
    }
  };

  if (!orderDetails) {
    return <div>Đang tải chi tiết đơn hàng...</div>;
  }

  return (
    <div className="container mx-auto p-6 mt-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Thông tin đơn hàng */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl mb-5">Chi tiết đơn hàng</h1>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="text-lg font-bold py-2">
            Mã đơn hàng: {orderDetails.id}
            </div>
            <div className="text-lg font-bold py-2">
            Ngày đặt hàng: {new Date(orderDetails.orderDate).toLocaleDateString()}
            </div>
            <div className="text-lg font-bold py-2">
                Tổng tiền: {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(orderDetails.totalPrice)}
                  
                </div>
            {/* Thông tin sản phẩm */}
            {/* Render các sản phẩm trong orderProducts */}
          </div>
        </div>

        {/* Nút thanh toán */}
        <div className="bg-gray-100  rounded-lg shadow-md">
          <h2 className="flex justify-center text-2xl font-bold mb-4 ">Thanh toán ngay</h2>
          <button
              className="w-full bg-[#FFE8AC] text-lg font-bold py-2 px-4 rounded mt-20 hover:bg-blue-600"
              onClick={handlePayment}
            >
              Thanh toán ngay
            </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
