import { useParams } from "react-router-dom";
import DynamicBanner from "../components/ui/DynamicBanner";
import { useEffect } from "react";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const categoryImages = {
    "Digimon Card Game": {
      img1: "https://millenniumgames.com/wp-content/uploads/2021/02/digimon-card-game-banner-e1613093475652.jpg",
      img2: "https://www.dorkaholics.com/wp-content/uploads/2022/03/digimon-card-game.jpeg",
    },
    "Yu-Gi-Oh! Card Game": {
      img1: "https://mktg-assets.tcgplayer.com/web/promo/2024-09/YGO_10Cards-2024-Tins_0000_ygo_marketplace-search_desktop@2x.jpg",
      img2: "https://mktg-assets.tcgplayer.com/web/promo/2024-09/YGO_More-Banned-Cards_0000_ygo_marketplace-search_mobile@2x.jpg",
    },
    "One Piece Card Game": {
      img1: "https://mktg-assets.tcgplayer.com/web/promo/2024-09/LOR_September-Price-Spikes_0000_ygo_marketplace-search_mobile@2x.jpg",
      img2: "https://staticg.sportskeeda.com/editor/2022/07/dd2db-16590961591908-1920.jpg",
    },
    "Shadowverse Evolve": {
      img1: "https://en.shadowverse-evolve.com/wordpress/wp-content/uploads/2023/01/17204905/img_beginner_en.png",
      img2: "https://en.shadowverse-evolve.com/wordpress/wp-content/uploads/2023/01/06203239/thumb_en-1024x577.png",
    },
  };

  const selectedImages = categoryImages[categoryName] || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-28">
      <DynamicBanner img1={selectedImages.img1} img2={selectedImages.img2} />
    </div>
  );
};

export default CategoryPage;
