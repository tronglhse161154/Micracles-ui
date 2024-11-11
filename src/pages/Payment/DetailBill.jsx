import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DetailBillPayOs } from '../../lib/api/Cart';
import { Row, Col, Card, Button  } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Container from '../../components/ui/Container';

import { Helmet } from "react-helmet";
function DetailBill() {
  const { method } = useParams(); // Lấy method từ URL
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DetailBillPayOs(method);
        setApiData(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [method]);

  const translateStatus = (status) => {
    switch (status) {
      case "CANCELLED":
        return<span className='text-red-700'>Đã Huỷ</span>;
      case "PENDING":
        return <span className='text-orange-500'>Đang Chờ</span>;
      case "SUCCESS":
        return <span className='text-green-400'>Thành Công</span>;
      default:
        return <span>Không xác định</span>;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
    
      {apiData && (
        <div className="bg-white p-5 mt-[120px] rounded-md">
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} md={12}>
              <Card className="flex justify-start bg-yellow-50">
                <h2 className=" flex justify-center font-semibold text-2xl tracking-wide mb-5">
                 Chi tiết đơn hàng
                </h2>
                <p className='text-xl py-3'>Phương thức: {apiData.data?.orderCode}</p>
                <p className='text-xl py-3'>Tổng số tiền : {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(apiData.data?.amount)}</p>
                <p className='text-xl py-3'>Số tiền đã trả: {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(apiData.data?.amountPaid)}</p>
                <p className='text-xl py-3'>Số tiền còn lại: {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(apiData.data?.amountRemaining)}</p>
                <p className='text-xl py-3'>Trạng thái: {translateStatus(apiData.data?.status)}</p>
                <p className='text-xl py-3'>Đơn hàng đã tạo vào ngày và giờ: {new Date(apiData.data?.createdAt).toLocaleString()}</p>
                <div className="mt-5">
                    <Link to="/History/HistoryView">
            <button className="bg-blue-500 text-white px-6 py-3 text-lg font-semibold rounded hover:bg-blue-600 transition duration-300">
                Quay lại
            </button>
            </Link>
              </div>
              </Card>
            </Col>
          </Row>
          
        </div>
      )}
    
    </Container>
  );
}

export default DetailBill;
