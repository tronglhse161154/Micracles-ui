import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import products from "../../product";
import { Card, Row, Col, Button, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import RelactedCard from "../components/ui/RelactedCard";
import Container from "../components/ui/Container";
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <Container>
      <div className="bg-[#FFE8AC] p-1 mt-28 rounded-md">
        {/* Card Detail Section */}
        <Row gutter={[16, 16]} justify="center" className="py-5">
          <Col xs={24} md={6}>
            <Card
              cover={
                <img
                  alt={product.title}
                  src={product.imageSrc}
                  style={{ objectFit: "cover",borderRadius: "10px"}}
                />
              }
              bordered={false}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card className="flex justify-center bg-primary">
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
                <span> {product.price} đ</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>Quantity:</span>
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
                  Add to cart
                </Button>
                <Button type="danger">Buy now</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <RelactedCard></RelactedCard>
    </Container>
  );
};

export default ProductDetail;
