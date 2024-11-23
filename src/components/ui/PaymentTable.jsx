import React, { useEffect, useState } from "react";
import { Table, Card, message, Button, Modal, Form, Input } from "antd";
import { getAllPayment } from "../../lib/api/Payment";
import ActionStatus from "../../pages/History/component/Status";

const PaymentTables = () => {
  const [payments, setPayment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPayment = async () => {
      try {
        const response = await getAllPayment();
        console.log(response);

        setPayment(response);
      } catch (error) {
        message.error("Error fetching payment");
      } finally {
        setLoading(false);
      } 
    };
    fetchAllPayment();
  }, []);


  const columns = [
    {
      title: "Mã đơn",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Tổng giá trị",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => ActionStatus({ status }),
    },
  ];

  return (
    <Card title="Quản lý giao dịch" bordered={false}>
      <Table dataSource={payments} columns={columns} loading={loading} rowKey="id" />
    </Card>
  );
};

export default PaymentTables;
