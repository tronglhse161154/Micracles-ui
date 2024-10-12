import React, { useEffect, useState, useRef } from "react";
import LazyLoad from "react-lazyload";
import { Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Pagination } from "antd";
import nProgress, { start } from "nprogress";
import "nprogress/nprogress.css";
import { CardContainer, CardBody, CardItem } from "../ui/3dCard";
import { fetchAllProducts } from "../../lib/api/Product";
import { useDispatch, useSelector } from "react-redux";
import { Border } from "./MovingBorder";

const RelactedCard = ({ brand }) => {
  const { Title } = Typography;
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productsList);

  const productListRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    dispatch(fetchAllProducts()).then(() => setLoading(false));
  }, [dispatch]);

  // Filter products by brand
  const filteredProducts = products.filter(
    (product) => product.brand === brand
  );

  // Get the current products for pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handler for pagination change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    productListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Title
        ref={productListRef}
        level={2}
        className="text-[#FFE8AC] text-center"
      ></Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 gap-12">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} height={350} className="max-w-xs" />
            ))
          : currentProducts.length > 0
          ? currentProducts.map((product) => (
              <LazyLoad key={product.id} height={350} offset={100} once>
                <div key={product.id} className="flex justify-center h-full">
                  <CardContainer
                    className="bg-white shadow-lg"
                    containerClassName="max-w-xs"
                  >
                    <CardBody className="relative p-6">
                      <CardItem className="mb-4" translateZ={50}>
                        <Link to={`/product/${product.id}`}>
                          <img
                            alt={product.name}
                            src={product.url}
                            className="w-full"
                          />
                        </Link>
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
                          <Border
                            borderRadius="1.75rem"
                            className="bg-white text-black border-neutral-200"
                          >
                            Còn lại : {product.quantity}
                          </Border>
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
      <div className="flex justify-center mt-8">
        <Pagination
          current={currentPage}
          total={filteredProducts.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default RelactedCard;
