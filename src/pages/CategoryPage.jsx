import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { useParams, Link } from "react-router-dom";
import DynamicBanner from "../components/ui/DynamicBanner";
import { useEffect } from "react";
import { FlipWords } from "../components/ui/FlipWord";
import { useDispatch, useSelector } from "react-redux";
import { GetProductWithSubCategory } from "../lib/api/Category";
import { CardContainer, CardBody, CardItem } from "../components/ui/3dCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Pagination } from "antd";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { Helmet } from "react-helmet";
import { Border } from "../components/ui/MovingBorder";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.categories.productsBySubcategory
  );
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);

  const words = ["Phong phú", "Đa dạng", "Đẹp mắt", "Hiện đại"];

  const categoryData = {
    "Digimon Card Game": {
      subcategoryId: 2,
      img1: "https://millenniumgames.com/wp-content/uploads/2021/02/digimon-card-game-banner-e1613093475652.jpg",
      img2: "https://www.dorkaholics.com/wp-content/uploads/2022/03/digimon-card-game.jpeg",
    },
    "Yu-Gi-Oh! Card Game": {
      subcategoryId: 3,
      img1: "https://mktg-assets.tcgplayer.com/web/promo/2024-09/YGO_10Cards-2024-Tins_0000_ygo_marketplace-search_desktop@2x.jpg",
      img2: "https://mktg-assets.tcgplayer.com/web/promo/2024-09/YGO_More-Banned-Cards_0000_ygo_marketplace-search_mobile@2x.jpg",
    },
    "Pokémon Card Game": {
      subcategoryId: 1,
      img1: "https://tcg.pokemon.com/assets/img/home/featured-switcher/terapagos-stellar-large-up.jpg",
      img2: "https://tcg.pokemon.com/assets/img/home/featured-switcher/cinderace-stellar-large-up.jpg",
    },
    "Shadowverse Evolve": {
      subcategoryId: 4,
      img1: "https://en.shadowverse-evolve.com/wordpress/wp-content/uploads/2023/01/17204905/img_beginner_en.png",
      img2: "https://en.shadowverse-evolve.com/wordpress/wp-content/uploads/2023/01/06203239/thumb_en-1024x577.png",
    },
  };

  const selectedCategory = categoryData[decodedCategoryName];

  useEffect(() => {
    window.scrollTo(0, 0);

    if (selectedCategory?.subcategoryId) {
      setLoading(true);
      nProgress.start();
      dispatch(GetProductWithSubCategory(selectedCategory.subcategoryId)).then(
        () => setLoading(false)
      );
      nProgress.done();
    }
  }, [dispatch, selectedCategory?.subcategoryId]);

  // Get the current products for pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handler for pagination change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <Helmet>
        <title>{`${decodedCategoryName} - Miracle Trading`}</title>
        <meta
          name="description"
          content={`Explore the best products in the ${decodedCategoryName} category. Discover more with Miracle Trading.`}
        />
      </Helmet>
      <DynamicBanner
        img1={selectedCategory?.img1}
        img2={selectedCategory?.img2}
      />
      <div className="h-[10rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-semibold text-black">
          Khám phá thế giới thẻ bài <FlipWords words={words} /> với Miracle
          Trading
        </div>
      </div>

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
          total={products.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
