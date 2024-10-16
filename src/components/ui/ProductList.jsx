import { Card, Row, Col } from "antd";
import { Typography } from 'antd';
import { Link } from 'react-router-dom';


const products = [
  {
    title: "Digimon Card Game",
    imageSrc: "https://i.ytimg.com/vi/ghZYuIi5mu4/maxresdefault.jpg",
    description: "Exciting Digimon battles."
  },
  {
    title: "Yu-Gi-Oh! Card Game",
    imageSrc: "https://i.ebayimg.com/images/g/HhUAAOSwAqhgUtaJ/s-l1200.jpg",
    description: "Classic duel battles."
  },
  {
    title: "Pokémon Card Game",
    imageSrc: "https://cdn.shopify.com/s/files/1/1601/1757/articles/How_Many_Pokemon_Cards_Are_There_So_Far_Late_2022.jpg?v=1664713281",
    description: "Join the World of Pokémon."
  },
  {
    title: "Shadowverse Evolve",
    imageSrc: "https://img.youtube.com/vi/_OeH5ihbaOY/maxresdefault.jpg",
    description: "Evolve your strategy."
  }
];

const ProductList = () => {
    const {Title} = Typography;
  return (
    <>
    <Title level={2} className="text-[#FFE8AC] text-center my-6 py-6">Danh mục sản phẩm </Title>
    <Row gutter={16}>
      {products.map((product, index) => (
        <Col span={6} key={index}>  {/* 4 products per row */}
        <Link to={`/category/${product.title}`}> {/* Add Link to route */}
              <Card
                hoverable
                cover={<img alt={product.title} src={product.imageSrc} className="w-full h-48 object-cover" />}
              >
                <Card.Meta title={product.title} />
              </Card>
            </Link>
        </Col>
      ))}
    </Row>
    </>
  );
  
};


export default ProductList;
