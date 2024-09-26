import { Card, Row, Col, Button } from "antd";
import { Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import products from "../../../product";

const ProductCard = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level={2} className="text-[#FFE8AC] text-center my-6 py-6 ">
        Sản phẩm yêu thích
      </Title>
      <Row gutter={16} justify="center">
        {products.map((product, index) => (
          <Col span={4} key={index} className="mx-6 py-4">
            <Card
              hoverable
              cover={
              <Link to={`/card-detail/${product.id}`}>
              <img alt={product.title} src={product.imageSrc} className="w-full object-cover"/>
              </Link>}
            >
              <Card.Meta title={product.title} />
              <Card.Meta title={product.description}></Card.Meta>
              <div className="flex items-center justify-between mt-8">
                <p className="text-lg font-bold text-gray-900">
                  {product.price}
                </p>
                <Button
                  icon={<ShoppingCartOutlined />}
                  size="small"
                  className="ml-2"
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="flex justify-center py-6 ">
        <Link >
        <Button
          type="primary"
          size="large"
          className="px-6 py-4 text-lg bg-slate-300 text-black rounded hover:bg-slate-100"
        >
          Xem thêm sản phẩm
        </Button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
