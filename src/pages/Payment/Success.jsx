

import Container from "../../components/ui/Container";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

function useQuery() {
  const [query, setQuery] = useState({});
  const search = useLocation().search.slice(1);

  useEffect(() => {
    setQuery(() => {
      const query = new URLSearchParams(search);
      const result = {};
      for (let [key, value] of query.entries()) {
        result[key] = value;
      }
      setQuery(result);
    }, [search]);
  }, [search, setQuery]);

  return { ...query };
}

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const query = useQuery()
  
  // const [queryParams, setQueryParams] = useState({});
  // const { id } = useParams();
  // useEffect(() => {
  //   if (navigate.isReady) {
  //     const { vnp_Amount, vnp_PayDate, vnp_TxnRef } = navigate.query;

  //     setQueryParams({
  //       vnp_Amount,
  //       vnp_PayDate,
  //       vnp_TxnRef,
  //     });
  //   }
  // }, [navigate.isReady, navigate.query]);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4 ">
        <div className="flex flex-col items-center justify-center space-y-4">
          <FaCheckCircle size={40} color="green" />
          <h1 className="text-3xl font-bold -tracking-normal sm:text-5xl">
            {`Thanh toán ${query.status === "CANCELLED" ? 'thất bại' : 'thành công' } !!`}
          </h1>
          <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed">
            Đơn hàng của bạn đã được thanh toán thành công. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi
          </p>
        </div>
        <Link to={`/`}>
          <Button
            label="Về trang chủ"
            containerStyles="font-semibold text-black p-3 bg-primary rounded-full hover:opacity-80 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          />
        </Link>
      </div>
    </Container>
  );
};
export default PaymentSuccess;
