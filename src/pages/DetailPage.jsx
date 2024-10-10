import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Button, InputNumber, Modal, message } from "antd";
import { ShoppingCartOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import RelactedCard from "../components/ui/RelactedCard";
import Container from "../components/ui/Container";
import ProductCard from "../components/ui/ProductCard";
import { getProductById } from "../lib/api/Product";

const ProductDetail = () => {
  const { id } = useParams();// Lấy id từ params
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const fetchProduct = async () => {
    try {
      if (!id) {
        message.error("No product ID found");
        return;
      }
      const productData = await getProductById(id); // Gọi API với id từ params
      setProduct(productData);
    } catch (error) {
      message.error("Cannot fetch product data");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]); // Gọi fetchProduct mỗi khi id thay đổi

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = e.target.getBoundingClientRect();
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;
    setMousePosition({ x: xPercent, y: yPercent });
  };

  const showModal = () => {
    setIsModalVisible(true);
    setZoomLevel(1);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => prev + 0.1);
  };

  const zoomOut = () => {
    setZoomLevel((prev) => (prev > 1 ? prev - 0.1 : 1));
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <div className="bg-white p-1 mt-28 rounded-md relative">
        <Row gutter={[16, 16]} justify="center" className="py-5">
          <Col xs={12} md={4}>
            <Card
              cover={
                <div
                  className="relative overflow-visible"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onMouseMove={handleMouseMove}
                >
                  <img
                    alt={product.productName}
                    src={product.url}
                    className="transition-transform duration-300 ease-in-out rounded-md cursor-pointer"
                    onClick={showModal}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  {hovered && (
                    <div
                      className="absolute w-64 h-64 bg-no-repeat"
                      style={{
                        top: `${mousePosition.y}%`,
                        left: `215%`,
                        transform: "translateX(-100%)",
                        backgroundImage: `url(${product.url})`,
                        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                        backgroundSize: "300%",
                        pointerEvents: "none",
                        zIndex: 10,
                        overflow: "visible",
                      }}
                    />
                  )}
                </div>
              }
              bordered={false}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card className="flex justify-center bg-yellow-50">
              <h2 className="font-semibold text-xl tracking-wide mb-5">
                {product.productName}
              </h2>
              <p>
                {product.description 
                  ? product.description.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))
                  : "No description available"}
              </p>
              
              <div className="flex flex-row items-center justify-start gap-2 my-3">
                <h3 className="text-sm"> Price:</h3>
                <span>{product.price} đ</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Quantity:</span>
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <Button onClick={incrementQuantity}>+</Button>
                <Button onClick={decrementQuantity}>-</Button>
              </div>
              <div className="mt-5">
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  style={{ marginRight: "10px" }}
                >
                  Add to cart
                </Button>
                <Button type="danger">Buy now</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <RelactedCard />
      </div>
      <div className="mb-0">
        <ProductCard />
      </div>

      {/* Modal for enlarged image */}
      <Modal
        title={product.productName}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <div className="flex flex-col items-center">
          <img
            alt={product.title}
            src={product.url}
            style={{ width: `${300 * zoomLevel}px`, height: 'auto' }}
          />
          <div className="mt-2">
            <Button onClick={zoomIn}><PlusOutlined /></Button>
            <Button onClick={zoomOut} className="ml-2"><MinusOutlined /></Button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
