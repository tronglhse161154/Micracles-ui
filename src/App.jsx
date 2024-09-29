
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Footer from "./components/layout/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewCard from "./pages/ViewCard";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreateProduct";
import CategoryPage from "./pages/CategoryPage";
import SearchModal from "./components/ui/modals/SearchModal";
import ToasterProvider from "./providers/ToastProvider";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SearchModal />
        <ToasterProvider/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={""} />
          <Route path="/elite-exclusive" element={""} />
          <Route path="/digimon" element={""} />
          <Route path="/one-piece" element={""} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/viewcard" element={<ViewCard />} />
          <Route path="/card-detail/:id" element={<DetailPage />} />
          <Route path="/create-product" element={<CreatePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
