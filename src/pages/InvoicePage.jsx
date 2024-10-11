import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import { Helmet } from "react-helmet";
import { fetchOrderById } from "../lib/api/Cart";// Make sure you create this API function

const InvoicePage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOrderData = async () => {
    try {
      const orderData = await fetchOrderById(orderId);
      setOrder(orderData);
    } catch (error) {
      console.error("Failed to fetch order data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  if (!order) {
    return <div>Order not found</div>; // Handle the case where the order does not exist
  }

  return (
    <Container>
      <Helmet>
        <title>Invoice #{orderId}</title>
        <meta name="description" content={`Details for order #${orderId}`} />
      </Helmet>
      <div className="container mx-auto p-6 mt-10">
        <h1 className="text-2xl font-bold mb-4">Invoice #{orderId}</h1>
        {/* Display order details */}
        {/* Adjust according to your order data structure */}
        <p>Customer Name: {order.customerName}</p>
        <p>Total Amount: {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(order.totalAmount)}</p>
        {/* Add more details as needed */}
      </div>
    </Container>
  );
};

export default InvoicePage;
