import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewCard from "./pages/ViewCard";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreateProduct";
import CategoryPage from "./pages/CategoryPage";
import SearchModal from "./components/ui/modals/SearchModal";
import ToasterProvider from "./providers/ToastProvider";
import OTPConfirmModal from "./components/ui/modals/OTPconfirmModal";
import { Provider } from "react-redux";
import store from "./lib/redux/store"
import Footer from "./components/layout/footer/Footer";
import AdminPage from "./pages/AdminPage";
import LayoutWithNavbar from "./LayoutWithNavbar";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          
          <SearchModal />
          <OTPConfirmModal />
          <ToasterProvider />

          <Routes>
            <Route element={<LayoutWithNavbar/>}>
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
      </Provider>
      
    </>
  );
}

export default App;
