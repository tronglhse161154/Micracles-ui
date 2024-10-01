import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

const LayoutWithNavbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Chỉ hiển thị Navbar khi không phải trang admin */}
      {location.pathname !== "/admin" && <Navbar />}

      {/* Hiển thị nội dung trang */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LayoutWithNavbar;
