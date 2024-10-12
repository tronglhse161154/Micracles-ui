import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Button, InputNumber, Modal, message } from "antd";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import RelactedCard from "../components/ui/RelactedCard";
import Container from "../components/ui/Container";
import { getProductById } from "../lib/api/Product";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { SparklesCore } from "../components/ui/Sparkles";
import { Helmet } from "react-helmet";
import addToCart from "../lib/api/Cart";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ params
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.currentUser);

  const maxQuantity = product?.quantity || 1; 

  const handleAddToCart = () => {
    try {
      nProgress.start();
      if (!currentUser) {
        toast.error("Vui lòng đăng nhập để mua sản phẩm!");
      } else {
        const userId = currentUser.ID;
        dispatch(addToCart(userId, product.productId, quantity))
          .then(() => {
            toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
          })
          .catch((error) => {
            toast.error("Không thể thêm sản phẩm vào giỏ hàng!");
          });
      }
    } finally {
      nProgress.done();
    }
  };

  const fetchProduct = async () => {
    try {
      nProgress.start();
      if (!id) {
        message.error("No product ID found");
        return;
      }
      const productData = await dispatch(getProductById(id)); // Gọi API với id từ params
      setProduct(productData);
      console.log(productData);
      nProgress.done();
    } catch (error) {
      message.error("Cannot fetch product data");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    fetchProduct();
  }, [id]); // Gọi fetchProduct mỗi khi id thay đổi

  const handleQuantityChange = (value) => {
    if (value <= maxQuantity) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity((prev) => prev + 1);
    }
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
      <Helmet>
        <title>{`${product.productName} - Miracle Trading`}</title>
        <meta
          name="description"
          content={`Explore the best products in the ${product.brand} brand. Discover more with Miracle Trading.`}
        />
      </Helmet>
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
                <h3 className="text-sm"> Giá :</h3>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </div>
              <div className="flex items-center gap-2">
                <span>Số lượng:</span>
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
                  onClick={handleAddToCart}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <div className="h-[15rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-black relative z-20">
            Khám phá những sản phẩm đến từ {product.brand}
          </h1>
          <div className="w-[40rem] h-20 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#C5C6C7"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <RelactedCard brand={product.brand} />
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
            style={{ width: `${300 * zoomLevel}px`, height: "auto" }}
          />
          <div className="mt-2">
            <Button onClick={zoomIn}>
              <PlusOutlined />
            </Button>
            <Button onClick={zoomOut} className="ml-2">
              <MinusOutlined />
            </Button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
