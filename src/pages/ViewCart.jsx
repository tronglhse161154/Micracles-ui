import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/ui/Container";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { SorryIcon } from "../components/common/icons";
import Button from "../components/ui/Button";
import { Helmet } from "react-helmet";
import { setCartItems } from "../lib/redux/reducers/cartSlice";
import {
  fetchUserCart,
  removeFromCart,
  fetchCartProductDetail,
  createOrder,
} from "../lib/api/Cart";
import toast from "react-hot-toast";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const currentUser = useSelector((state) => state.users.currentUser);
  const cartItems = useSelector((state) => state.carts.cartItems);
  const [loading, setLoading] = useState(true);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const fetchCartData = async (userId) => {
    try {
      nProgress.start();
      const cartData = await fetchUserCart(userId);
      const updatedCartData = await Promise.all(
        cartData.map(async (item) => {
          const productDetails = await fetchCartProductDetail(item.productId);
          return { ...item, ...productDetails };
        })
      );
      dispatch(setCartItems(updatedCartData));
      nProgress.done();
    } catch (error) {
      console.error("Failed to fetch cart data", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentUser) {
      fetchCartData(currentUser.ID);
    }
  }, [currentUser]);

  const handleRemoveItem = async (productId) => {
    if (currentUser) {
      try {
        await removeFromCart(currentUser.ID, productId);
        toast.success("Sản phẩm được xóa thành công !");
        await fetchCartData(currentUser.ID);
      } catch (error) {
        console.error("Failed to remove item from cart", error);
      }
    }
  };

  const handleCreateOrder = async () => {
    if (currentUser) {
      try {
        const orderID = await createOrder(currentUser.ID);
        toast.success("Đơn hàng được tạo thành công");
        console.log("OrderId", orderID)
        navigate(`/order/${orderID}`); 
      
      } catch (error) {
        console.error("Failed to create order", error);
        toast.error("Đã xảy ra lỗi khi tạo đơn hàng");
      }
    } else {
      toast.error("Vui lòng đăng nhập để tạo đơn hàng");
    }
  };

  if (!currentUser) {
    return (
      <Container>
        <Helmet>
          <title>{`Giỏ hàng`}</title>
          <meta name="description" content={`Discover more with Miracle Trading.`} />
        </Helmet>
        <div className="flex flex-col h-screen justify-center bg-transparent">
          <center className="">
            <SorryIcon />
            <div className="mt-4 tracking-widest">
              <span className="block text-6xl text-gray-500 my-5">Opps !!</span>
              <span className="text-xl text-gray-500">Hãy đăng nhập để xem giỏ hàng của bạn !</span>
            </div>
          </center>
          <center className="mt-10">
            <div className="flex flex-row items-center justify-center space-x-4">
              <Link to="/login">
                <Button
                  label="Đăng nhập"
                  containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary hover:text-black hover:border-primary active:border-primary active:text-black w-full text-black cursor-pointer"
                />
              </Link>
              <span>hoặc</span>
              <Link to="/register">
                <Button
                  label="Đăng ký"
                  containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary hover:text-black hover:border-primary active:border-primary active:text-black w-full text-black cursor-pointer"
                />
              </Link>
            </div>
          </center>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="container mx-auto p-6 mt-[100px]">
        <h1 className="text-2xl mb-5">Giỏ hàng của bạn</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative">
            {cartItems.map((item) => (
              <div key={item.productId} className="flex items-center justify-between bg-white p-4 mb-4 shadow-md rounded-lg">
                <img src={item[0]?.url} alt={item.productName} className="w-24 h-full object-cover rounded" />
                <div className="flex-1 mx-4">
                  <h2 className="text-xl font-bold">{item[0]?.productName}</h2>
                  <p className="text-black mt-3">Số lượng : {item.quantity}</p>
                </div>
                <div className="text-lg font-bold">
                  {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.price)}
                </div>
                <button
                  className="text-red-500 hover:text-red-700 text-lg font-bold ml-4 border-[1px] rounded-full p-3"
                  onClick={() => handleRemoveItem(item.productId)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Đơn hàng</h2>
            <div className="flex justify-between mb-2">
              <p className="text-black">Thành tiền :</p>
              <p className="text-black">
                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(getTotalPrice())}
              </p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-black">Phí phụ thu</p>
              <p className="text-black">{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format("5000")}</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Tổng</p>
              <p>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(getTotalPrice() + 5000)}</p>
            </div>
            <button
              className="w-full bg-[#FFE8AC] text-lg font-bold py-2 px-4 rounded mt-6 hover:bg-blue-600"
              onClick={handleCreateOrder}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
