import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Typography, Pagination, Card, Skeleton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../lib/api/Product";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { CardContainer, CardBody, CardItem } from "../ui/3dCard"

const ProductCard = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const sortedProductsList = [...productsList].sort((a, b) => a.quantity - b.quantity);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllProducts()).then(() => setLoading(false));
  }, [dispatch]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Title level={2} className="text-[#FFE8AC] text-center my-6 py-6 ">
        Sản phẩm bán chạy nhất
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 gap-12">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <Skeleton.Button
                key={index}
                active
                shape="round"
                size="large"
                className="max-w-xs"
                block
              />
            ))
          : currentProducts.length > 0
          ? currentProducts.map((product) => (
              <LazyLoad key={product.id} height={350} offset={100} once>
                <div key={product.id} className="flex justify-center">
                  <CardContainer
                    className="bg-white shadow-lg"
                    containerClassName="max-w-xs"
                  >
                    <CardBody className="relative p-6">
                      <CardItem className="mb-4" translateZ={50}>
                        <img
                          alt={product.productName}
                          src={product.url}
                          className="w-full"
                        />
                      </CardItem>
                      <CardItem className="mb-2" translateZ={40}>
                        <h3 className="text-xl font-bold">
                          {product.productName}
                        </h3>
                      </CardItem>
                      <CardItem translateZ={30}>
                        <p className="card-item-description text-gray-600 no-scrollbar">
                          {product.description}
                        </p>
                      </CardItem>
                      <div className="flex flex-row items-center gap-4 mt-4">
                        <CardItem translateZ={20}>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-bold text-gray-900 flex items-center justify-start gap-1">
                              <span>Giá :</span>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(product.price)}
                            </p>
                          </div>
                        </CardItem>
                        <div className="">
                          <Button
                            label="Thêm vào giỏ"
                            containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary hover:text-black hover:border-primary active:border-primary active:text-black w-full text-black cursor-pointer"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
              </LazyLoad>
            ))
          : !loading && <p>No products found for this subcategory.</p>}
      </div>

      {/* Ant Design Pagination */}
      <div className="flex justify-center my-10">
        <Pagination
          current={currentPage}
          total={sortedProductsList.length} 
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};
export default ProductCard;
