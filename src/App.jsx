
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewCard from "./pages/ViewCard";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreateProduct";
import CategoryPage from "./pages/CategoryPage";
import SearchModal from "./components/ui/modals/SearchModal";
import ToasterProvider from "./providers/ToastProvider";
import LayoutWithNavbar from "./LayoutWithNavbar";
function App() {
  return (
    <>
      <Router>
       
        <SearchModal />
        <ToasterProvider/>

        <Routes>
        <Route element={<LayoutWithNavbar />}>
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
          </Route>
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>

        
      </Router>
    </>
  );
}

export default App;
