import { Card, Row, Col, Button } from "antd";
import { Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const products = [
  {
    title: "BANDAI NAMCO",
    imageSrc:
      "https://cardotaku.com/cdn/shop/products/OP01-070.png?v=1658123058&width=2048",
    price: "3,000,000",
    description: "Digimon BT8-112 - Imperialdramon Paladin Mode",
  },
  {
    title: "BANDAI NAMCO",
    imageSrc:
      "https://cardotaku.com/cdn/shop/products/OP01-070.png?v=1658123058&width=2048",
    price: "3,000,000",
    description: "Digimon BT-2-032 - UlforceVeedramon",
  },
  {
    title: "BANDAI NAMCO",
    imageSrc: "https://static.dotgg.gg/onepiece/card/ST01-001.webp",
    price: "3,000,000",
    description: "Shadowverse Evolve BP03-U07EN",
  },
  {
    title: "BUSHIROAD",
    imageSrc:
      "https://cardotaku.com/cdn/shop/products/OP01-070.png?v=1658123058&width=2048",
    price: "3,000,000",
    description: "Shadowverse Evolve BP01-U06EN",
  },
  {
    title: "BUSHIROAD",
    imageSrc:
      "https://cardotaku.com/cdn/shop/products/OP01-070.png?v=1658123058&width=2048",
    price: "3,000,000",
    description: "Shadowverse Evolve BP01-U06EN",
  },
];

const ProductCard = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level={2} className="text-[#FFE8AC] text-center my-6 ">
        Sản phẩm yêu thích
      </Title>
      <Row gutter={16} justify="center">
        {products.map((product, index) => (
          <Col span={4} key={index} className="mx-6 py-4">
            <Card
              hoverable
              cover={<img alt={product.title} src={product.imageSrc} className="w-full object-cover"/>}
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
        <Button
          type="primary"
          size="large"
          className="px-6 py-4 text-lg bg-slate-300 text-black rounded hover:bg-slate-100"
        >
          Xem thêm sản phẩm
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
