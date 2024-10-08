import { useParams } from "react-router-dom";
import DynamicBanner from "../components/ui/DynamicBanner";
import { useEffect } from "react";
import { FlipWords } from "../components/ui/FlipWord";
import { useDispatch, useSelector } from "react-redux";
import { GetProductWithSubCategory } from "../lib/api/Category";
import { Card, Row, Col, Button } from "antd";
import Link from "antd/es/typography/Link";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.categories.productsBySubcategory
  );

  const words = ["Amazing", "Beautiful", "Diversity", "Modern"];

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
      dispatch(GetProductWithSubCategory(selectedCategory.subcategoryId));
    }
  }, [dispatch, selectedCategory?.subcategoryId]);

  return (
    <div className="">
      <DynamicBanner
        img1={selectedCategory?.img1}
        img2={selectedCategory?.img2}
      />
      <div className="h-[10rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-semibold text-black">
          Buy
          <FlipWords words={words} />
          Cards with Miracle Trading
        </div>
      </div>

      <div>
        <Row gutter={[16]}>
          {products.length > 0 ? (
            products.map((product) => (
              <Col key={product.id} span={6}>
                <Card
                  hoverable
                  cover={<img alt={product.name} src={product.url} />}
                >
                  <Card.Meta title={product.productName} />
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
            ))
          ) : (
            <p>No products found for this subcategory.</p>
          )}
        </Row>
      </div>
    </div>
  );
};

export default CategoryPage;
