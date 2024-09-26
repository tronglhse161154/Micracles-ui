import React from "react";
import { useParams } from "react-router-dom";
import products from "../../product";
import { Card, Row, Col, Button, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import RelactedCard from "../components/ui/RelactedCard";
import BannerVd from "../components/ui/BannerVd";
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <>
    <BannerVd></BannerVd>
    
     <div className="bg-[#FFE8AC] p-1 mt-10">
      {/* Card Detail Section */}
      <Row gutter={[16, 16]} justify="center" className="mt-28">
        <Col xs={24} md={6}>
          <Card
            cover={
              <img
                alt={product.title}
                src={product.imageSrc}
                className="object-cover"
              />
            }
          />
        </Col>
        <Col xs={24} md={12}>
          <Card className="flex justify-center bg-[#FFE8AC]">
            <h2>{product.title}</h2>
            <p>
              {product.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br/>
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
            <h3>Giá: {product.price} đ</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>Số lượng:</span>
              <InputNumber min={1} />
              <Button>+</Button>
              <Button>-</Button>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                style={{ marginRight: "10px" }}
              >
                Thêm vào giỏ
              </Button>
              <Button type="danger">Mua Ngay</Button>
            </div>
          </Card>
        </Col>
      </Row>
      </div>
      <RelactedCard></RelactedCard>
    
    </>
  );
};

export default ProductDetail;
