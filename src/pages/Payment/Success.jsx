import { useNavigate } from "react-router-dom";
import { FaCheckCircle,FaTimesCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

// Custom hook to parse query parameters from the URL
const useQuery = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const queryObject = {};
    queryParams.forEach((value, key) => {
      queryObject[key] = value;
    });
    setQuery(queryObject);
  }, [search]);

  return query;
};

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const query = useQuery();  // Now using the custom hook to parse query parameters

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <div className="flex flex-col items-center justify-center space-y-4">
        {query.status === "CANCELLED" ? (
    <FaTimesCircle size={40} color="red" /> // Icon for failure or cancellation
  ) : (
    <FaCheckCircle size={40} color="green" /> // Icon for success
  )}
          <h1 className="text-3xl font-bold tracking-normal sm:text-5xl">
            {`Thanh toán ${query.status === "CANCELLED" ? 'thất bại' : 'thành công' } !!`}
          </h1>
          <p className="max-w-[600px] text-center text-gray-500 md:text-xl">
          {`${query.status === "CANCELLED" ? 'Bạn đã huỷ thanh toán đơn hàng,cảm ơn bạn đã sử dụng dịch vụ của chúng tôi' : 'Đơn hàng của bạn đã được thanh toán thành công. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.' } !!`}
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
