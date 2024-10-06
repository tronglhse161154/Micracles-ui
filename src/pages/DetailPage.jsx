import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../product";
import { Card, Row, Col, Button, InputNumber, Modal } from "antd";
import { ShoppingCartOutlined ,PlusOutlined ,MinusOutlined } from "@ant-design/icons";
import RelactedCard from "../components/ui/RelactedCard";
import Container from "../components/ui/Container";
import ProductCard from "../components/ui/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom level state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setZoomLevel(1); // Reset zoom level when opening modal
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => prev + 0.1); // Increase zoom level
  };

  const zoomOut = () => {
    setZoomLevel((prev) => (prev > 1 ? prev - 0.1 : 1)); // Decrease zoom level, but not below 1
  };

  if (!product) {
    return <h2>Product not found!</h2>;
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
                    alt={product.title}
                    src={product.imageSrc}
                    className="transition-transform duration-300 ease-in-out rounded-md cursor-pointer" // Added cursor-pointer
                    onClick={showModal} // Show modal on click
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
                        left: `215%`, // Adjust to position it to the left side
                        transform: "translateX(-100%)", // Ensure the popup stays on the left
                        backgroundImage: `url(${product.imageSrc})`,
                        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                        backgroundSize: "300%",
                        pointerEvents: "none",
                        zIndex: 10,
                        overflow: "visible", // Ensure the popup is not clipped
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
              <h2 className="font-semibold text-5xl tracking-wide mb-5">
                {product.title}
              </h2>
              <p>
                {product.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <strong>
                {product.ProductsDetail.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </strong>
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
        title={product.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600} 
      >
        <div className="flex flex-col items-center">
          <img
            alt={product.title}
            src={product.imageSrc}
            style={{ width: `${300 * zoomLevel}px`, height: 'auto' }} 
          />
          <div className="mt-2">
            <Button onClick={zoomIn}><PlusOutlined/></Button>
            <Button onClick={zoomOut} className="ml-2"><MinusOutlined/></Button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
