import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from "./pages/ViewCart";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreateProduct";
import CategoryPage from "./pages/CategoryPage";
import SearchModal from "./components/ui/modals/SearchModal";
import ToasterProvider from "./providers/ToastProvider";
import OTPConfirmModal from "./components/ui/modals/OTPconfirmModal";
import Profile from "./pages/Profile";
import AdminPage from "./pages/AdminPage";
import ProductDetail from "./pages/DetailPage";
import InvoicePage from "./pages/InvoicePage";
function App() {
  const currentUser = useSelector((state) => state.users.currentUser);
  const isAdmin = currentUser?.Role === "Admin";
  const location = useLocation();
  const shouldExcludeLayout = location.pathname.startsWith("/admin");

  return (
    <>
      <SearchModal />
      <OTPConfirmModal />
      <ToasterProvider />
      {!shouldExcludeLayout && <Navbar />}
      <div className={shouldExcludeLayout ? "no-layout" : "with-layout"}>
        <Routes>
          <Route path="/" element={isAdmin ? <Navigate to="/admin" /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/viewcart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/create-product" element={<CreatePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </div>
      {!shouldExcludeLayout && <Footer />}
    </>
  );
}

export default App;
