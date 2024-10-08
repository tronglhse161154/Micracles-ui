import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RelactedCard = () => {
    const { Title } = Typography;

    const relatedProducts = [
        {
            id: 2,
            title: "Veemon - BT11",
            imageSrc: "https://cardotaku.com/cdn/shop/files/043660_P_IYUIEX.jpg?v=1686731648&width=2048",
            price: "10,000",
            description: "Mô tả sản phẩm Veemon",
        },
        {
            id: 3,
            title: "Zudomon ACE - BT14",
            imageSrc: "https://cardotaku.com/cdn/shop/products/037223_P_BUSUTA.jpg?v=1573796364&width=2048",
            price: "180,000",
            description: "Mô tả sản phẩm Zudomon ACE",
        },
        {
          id: 4,
          title: "Zudomon ACE - BT14",
          imageSrc: "https://cardotaku.com/cdn/shop/products/037223_P_BUSUTA.jpg?v=1573796364&width=2048",
          price: "180,000",
          description: "Mô tả sản phẩm Zudomon ACE",
      },
      {
        id: 5,
        title: "Zudomon ACE - BT14",
        imageSrc: "https://cardotaku.com/cdn/shop/products/037223_P_BUSUTA.jpg?v=1573796364&width=2048",
        price: "180,000",
        description: "Mô tả sản phẩm Zudomon ACE",
    },
    {
      id: 6,
      title: "Zudomon ACE - BT14",
      imageSrc: "https://cardotaku.com/cdn/shop/products/037223_P_BUSUTA.jpg?v=1573796364&width=2048",
      price: "180,000",
      description: "Mô tả sản phẩm Zudomon ACE",
  },
        // more products...
    ];

    return (
        <>
            <Title level={2} className="text-[#FFE8AC] text-center my-6 py-6">
                Sản phẩm liên quan
            </Title>
            <Row gutter={16} justify="center">
                {relatedProducts.map((relatedProduct) => (
                    <Col span={4} key={relatedProduct.id} className="mx-6 py-4">
                        <Card
                            hoverable
                            cover={
                                <Link to={`/card-detail/${relatedProduct.id}`}>
                                    <img alt={relatedProduct.title} src={relatedProduct.imageSrc} className="w-full object-cover" />
                                </Link>
                            }
                        >
                            <Card.Meta title={relatedProduct.title} />
                            <Card.Meta description={relatedProduct.description} />
                            <div className="flex items-center justify-between mt-8">
                                <p className="text-lg font-bold text-gray-900">
                                    {relatedProduct.price} đ
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
            <div className="flex justify-center py-6">
                <Link>
                    <Button
                        type="primary"
                        size="large"
                        className="px-6 py-4 text-lg bg-slate-300 text-black rounded hover:bg-slate-100"
                    >
                        Xem thêm
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default RelactedCard;