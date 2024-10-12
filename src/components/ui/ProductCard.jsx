import { useEffect, useState, useRef } from "react";
import LazyLoad from "react-lazyload";
import { Typography, Pagination, Card, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../lib/api/Product";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { CardContainer, CardBody, CardItem } from "../ui/3dCard";
import { Border } from "./MovingBorder";

const ProductCard = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const sortedProductsList = [...productsList].sort(
    (a, b) => a.quantity - b.quantity
  );
  console.log(sortedProductsList[0]);
  const productListRef = useRef(null);

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
        className="text-[#FFE8AC] text-center my-6 py-6 "
      >
        Sản phẩm bán chạy nhất
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 gap-12 ">
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
                <div key={product.id} className="flex justify-center h-full">
                  <CardContainer
                    className="bg-white shadow-lg"
                    containerClassName="max-w-xs"
                  >
                    <CardBody className="relative p-6">
                      <CardItem className="mb-4" translateZ={50}>
                        {/* Wrap image in Link to navigate to product detail */}
                        <Link to={`/product/${product.id}`}>
                          <img
                            alt={product.productName}
                            src={product.url}
                            className="w-full cursor-pointer"
                          />
                        </Link>
                      </CardItem>
                      <CardItem className="mb-2 flex-grow" translateZ={40}>
                        {/* Wrap product title in Link to navigate to product detail */}
                        <Link to={`/product/${product.id}`}>
                          <h3 className="text-xl font-bold cursor-pointer">
                            {product.productName}
                          </h3>
                        </Link>
                      </CardItem>
                      <CardItem translateZ={30}>
                        <p className="card-item-description text-gray-600 no-scrollbar flex-grow">
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
