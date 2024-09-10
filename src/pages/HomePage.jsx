import BannerVd from "../components/ui/BannerVd";
import Container from "../components/ui/Container";

const Home = () => {
  return (
    <div className="w-full">
      <BannerVd />
      <Container>
        <div className="mt-9">Next</div>
      </Container>
    </div>
  );
};

export default Home;
