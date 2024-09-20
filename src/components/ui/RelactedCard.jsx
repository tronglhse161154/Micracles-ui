import React from 'react'
import { Card, Row, Col, Button, InputNumber } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
function RelactedCard() {
    const relatedProducts = [
        {
          id: 2,
          title: "Veemon - BT11",
          imageSrc: "https://cardotaku.com/cdn/shop/files/043660_P_IYUIEX.jpg?v=1686731648&width=2048",
          price: "10,000",
        },
        {
          id: 3,
          title: "Zudomon ACE - BT14",
          imageSrc: "https://cardotaku.com/cdn/shop/products/037223_P_BUSUTA.jpg?v=1573796364&width=2048",
          price: "180,000",
        },
        // more products...
      ];
    
  return (
    <div className='py-5'>
      <h3 className='py-6 px-4 text-3xl'>Sản phẩm liên quan</h3>
      <Row gutter={[16, 16]}>
        {relatedProducts.map((relatedProduct) => (
          <Col xs={12} md={6} key={relatedProduct.id}>
            <Card
              hoverable
              cover={<img alt={relatedProduct.title} src={relatedProduct.imageSrc} className='h-65 object-cover' />}
            >
              <Card.Meta title={relatedProduct.title} />
              <p>{relatedProduct.price} đ</p>
              <Button icon={<ShoppingCartOutlined />} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default RelactedCard
