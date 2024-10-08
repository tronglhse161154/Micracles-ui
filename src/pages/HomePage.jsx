import BannerVd from "../components/ui/BannerVd";
import Container from "../components/ui/Container";
import ProductList from "../components/ui/ProductList";
import ProductCard from "../components/ui/ProductCard";
import News from "../components/ui/News";
import { useEffect } from "react";
import { Testimonials } from "../components/ui/Testimonial";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full">
        <BannerVd />
        <Container>
          <ProductList></ProductList>
          <ProductCard></ProductCard>
          <News></News>
          <Testimonials />
        </Container>
      </div>
    </>
  );
};

export default Home;
