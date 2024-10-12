"use client";

import { useState, useEffect } from "react";
import Container from "../../components/ui/Container";
import Content from "./component/Content";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { getUserPayment } from "../../lib/api/Order";
import Button from "../../components/ui/Button";

const HistoryView = () => {
  const dispatch = useDispatch();
  //const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [userHistory, setUserHistory] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const currentUser = useSelector((state) => state.users.currentUser);

  const getUserHistoryData = async (userId) => {
    try {
      nProgress.start();
      const paymentHistory = await getUserPayment(userId);
      setUserHistory(paymentHistory);
      setIsLoading(false);
      nProgress.done();
      if (paymentHistory.length > itemsToShow) {
        setShowMoreButton(true);
      }
    } catch (error) {
      console.error("Failed to fetch user payment history", error);
      nProgress.done();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const userId = currentUser?.ID;
    if (userId) {
      getUserHistoryData(userId);
    }
  }, [currentUser]);

  const combinedData = [...userHistory].sort((a, b) => {
    return new Date(b.createdDate) - new Date(a.createdDate);
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleShowMore = () => {
    const newItemsToShow = itemsToShow + 5;
    setItemsToShow(newItemsToShow);
    if (newItemsToShow >= combinedData.length) {
      setShowMoreButton(false);
    }
  };

  return (
    <Container>
      <div className="min-h-screen pt-40 font-semibold">
        <div className="container mx-auto bg-white rounded-lg">
          <Link to="/">
            <button className="font-semibold text-white bg-gray-500 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 px-4 mb-20 rounded-full inline-flex items-center">
              <FaArrowLeft />
              Trở về
            </button>
          </Link>
          <h1 className="text-3xl mb-20">Lịch sử đơn hàng của bạn</h1>
          {isLoading ? (
            <p>Vui lòng đăng nhập để xem các đơn hàng của bạn</p>
          ) : (
            <>
              <ol className="relative border-s">
                {combinedData.slice(0, itemsToShow).map((item, index) => (
                  <li key={index} className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:bg-blue-900">
                      <FaRegCalendarAlt />
                    </span>
                    <Content
                      orderId={item.orderId}
                      status={item.status}
                      description={`Phương thức thanh toán : ${item.method}`}
                      price={formatPrice(item.amount)}
                      action="Trị giá :"
                    />
                  </li>
                ))}
              </ol>
              {showMoreButton && (
                <div className="text-center mt-6">
                  <Button
                    label="Xem thêm"
                    onClick={handleShowMore}
                    containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary
    hover:text-black hover:border-primary
    active:border-primary active:text-black
    w-full max-w-[200px] text-black cursor-pointer"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default HistoryView;
